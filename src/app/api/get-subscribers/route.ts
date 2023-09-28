import { sql } from '@vercel/postgres';
import { IncomingMessage } from 'http';
import { NextResponse } from 'next/server';
import { ServerOptions, WebSocket, WebSocketServer } from 'ws';

const activeConnections = new Set<WebSocket>()
let wss: WebSocketServer | undefined

export async function GET() {
  const client = await sql.connect()

  const fetchSubscribers =async () => {
    try {
      const subscribers = await client.sql`SELECT * FROM Subscribers;`
      const subscribersJson = JSON.stringify(subscribers)

      activeConnections.forEach((connection) => {
        connection.send(subscribersJson)
      })

      return NextResponse.json({subscribers}, {status: 200})
    } catch (error) {
      return NextResponse.json({error}, {status: 400})
    }
  }

  if (typeof window === 'undefined') {
    const options: ServerOptions = {noServer: true}
    wss = new WebSocketServer(options)
    wss.on('connection', (ws: WebSocket, req: IncomingMessage) => {
      activeConnections.add(ws)
    })
    wss.on('close', (ws: WebSocket) => {
      activeConnections.delete(ws)
    })
  }

  return (req: IncomingMessage, socket: any, head: any) => {
    wss?.handleUpgrade(req, socket, head, (ws: WebSocket) => {
      wss?.emit('connection', ws, req);
    });
  };

}