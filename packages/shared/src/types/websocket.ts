import type { ClientMessage } from './messages-c2s.js'
import type { ServerMessage } from './messages-s2c.js'

/**
 * Envelope for Client→Server messages
 * Adds metadata to each message
 */
export interface ClientMessageEnvelope {
  id: string
  timestamp: string
  message: ClientMessage
}

/**
 * Envelope for Server→Client messages
 */
export interface ServerMessageEnvelope {
  id: string
  timestamp: string
  message: ServerMessage
  /**
   * Optional: ID of the original client message
   * For linking request-response pairs
   */
  inReplyTo?: string
}

