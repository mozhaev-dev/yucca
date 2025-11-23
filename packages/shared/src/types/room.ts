import type { PeerId, RoomId, Timestamp } from './primitives.js'

export interface Peer {
  id: PeerId
  username: string
  joinedAt: Timestamp
}

export interface RoomState {
  roomId: RoomId
  peers: Peer[]
  createdAt: Timestamp
  maxPeers?: number
}

export type RoomErrorCode =
  | 'ROOM_NOT_FOUND'
  | 'ROOM_FULL'
  | 'INVALID_ROOM_ID'
  | 'PEER_NOT_FOUND'
  | 'INVALID_MESSAGE'
  | 'SIGNALING_ERROR'
  | 'INTERNAL_ERROR'

export interface ErrorPayload {
  code: RoomErrorCode
  message: string
  details?: unknown
}

