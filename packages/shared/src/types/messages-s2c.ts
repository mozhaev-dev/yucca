import type { RoomId, PeerId } from './primitives.js'
import type { RoomState, ErrorPayload } from './room.js'
import type { SessionDescription, IceCandidate, RtcConfiguration } from './webrtc.js'
import type { BaseMessage } from './messages.js'

export const serverMessageTypes = [
  'ROOM_CREATED',
  'ROOM_JOINED',
  'PEER_JOINED',
  'PEER_LEFT',
  'OFFER_RECEIVED',
  'ANSWER_RECEIVED',
  'ICE_CANDIDATE_RECEIVED',
  'ERROR',
] as const

export type ServerMessageType = (typeof serverMessageTypes)[number]

type BaseServerMessage<T extends ServerMessageType, P extends object = object> = BaseMessage<T, P>

export type RoomCreatedMessage = BaseServerMessage<'ROOM_CREATED', {
  roomId: RoomId
  peerId: PeerId
  rtcConfiguration: RtcConfiguration
}>

export type RoomJoinedMessage = BaseServerMessage<'ROOM_JOINED', {
  roomId: RoomId
  peerId: PeerId
  roomState: RoomState
  rtcConfiguration: RtcConfiguration
}>

export type PeerJoinedMessage = BaseServerMessage<'PEER_JOINED', {
  peerId: PeerId
  shouldInitiateConnection: boolean
}>

export type PeerLeftMessage = BaseServerMessage<'PEER_LEFT', {
  peerId: PeerId
}>

export type OfferReceivedMessage = BaseServerMessage<'OFFER_RECEIVED', {
  type: 'OFFER_RECEIVED'
  fromPeerId: PeerId
  offer: SessionDescription
}>

export type AnswerReceivedMessage = BaseServerMessage<'ANSWER_RECEIVED', {
  fromPeerId: PeerId
  answer: SessionDescription
}>

export type IceCandidateReceivedMessage = BaseServerMessage<'ICE_CANDIDATE_RECEIVED', {
  type: 'ICE_CANDIDATE_RECEIVED'
  fromPeerId: PeerId
  candidate: IceCandidate
}>

export type ErrorMessage = BaseServerMessage<'ERROR', {
  error: ErrorPayload
}>

/**
 * Discriminated union for all Server→Client messages
 */
export type ServerMessage =
  | RoomCreatedMessage
  | RoomJoinedMessage
  | PeerJoinedMessage
  | PeerLeftMessage
  | OfferReceivedMessage
  | AnswerReceivedMessage
  | IceCandidateReceivedMessage
  | ErrorMessage

