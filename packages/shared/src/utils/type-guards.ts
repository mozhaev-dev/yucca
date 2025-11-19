import type { ClientMessage, ClientMessageType } from '../types/messages-c2s.js'
import { clientMessageTypes } from '../types/messages-c2s.js'
import type { ServerMessage, ServerMessageType } from '../types/messages-s2c.js'
import { serverMessageTypes } from '../types/messages-s2c.js'

/**
 * Check if data is a valid client message
 */
export function isClientMessage(data: unknown): data is ClientMessage {
  if (typeof data !== 'object' || data === null) return false
  if (!('type' in data)) return false

  return clientMessageTypes.includes((data as { type: ClientMessageType }).type)
}

/**
 * Check if data is a valid server message
 */
export function isServerMessage(data: unknown): data is ServerMessage {
  if (typeof data !== 'object' || data === null) return false
  if (!('type' in data)) return false

  return serverMessageTypes.includes((data as { type: ServerMessageType }).type)
}

/**
 * Type guard for specific message types
 */
export function isMessageOfType<T extends ClientMessage['type']>(
  message: ClientMessage,
  type: T
): message is Extract<ClientMessage, { type: T }> {
  return message.type === type
}

/**
 * Type guard for specific server message types
 */
export function isServerMessageOfType<T extends ServerMessage['type']>(
  message: ServerMessage,
  type: T
): message is Extract<ServerMessage, { type: T }> {
  return message.type === type
}

