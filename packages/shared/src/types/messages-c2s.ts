import type { RoomId, PeerId } from './primitives.js'
import type { SessionDescription, IceCandidate } from './webrtc.js'
import type { BaseMessage } from './messages.js'

export const clientMessageTypes = [
  'CREATE_ROOM',
  'JOIN_ROOM',
  'LEAVE_ROOM',
  'OFFER',
  'ANSWER',
  'ICE_CANDIDATE',
] as const

export type ClientMessageType = (typeof clientMessageTypes)[number]

type BaseClientMessage<T extends ClientMessageType, P extends object = object> = BaseMessage<T, P>

export type CreateRoomMessage = BaseClientMessage<'CREATE_ROOM', {
  maxPeers: number
}>

export type JoinRoomMessage = BaseClientMessage<'JOIN_ROOM', {
  roomId: RoomId
}>

export type LeaveRoomMessage = BaseClientMessage<'LEAVE_ROOM'>

export type OfferMessage = BaseClientMessage<'OFFER', {
  targetPeerId: PeerId
  offer: SessionDescription
}>

export type AnswerMessage = BaseClientMessage<'ANSWER', {
  targetPeerId: PeerId
  answer: SessionDescription
}>

export type IceCandidateMessage = BaseClientMessage<'ICE_CANDIDATE', {
  targetPeerId: PeerId
  candidate: IceCandidate
}>

/**
 * Discriminated union for all Client→Server messages
 */
export type ClientMessage =
  | CreateRoomMessage
  | JoinRoomMessage
  | LeaveRoomMessage
  | OfferMessage
  | AnswerMessage
  | IceCandidateMessage

