import { nanoid } from 'nanoid'
import type { RoomId, PeerId, Timestamp } from '../types/primitives.js'

export const brandRoomId = (id: string): RoomId => id as RoomId

export const generateRoomId = () => brandRoomId(nanoid(8))

export const brandPeerId = (id: string): PeerId => id as PeerId

export const generatePeerId = (): PeerId => brandPeerId(nanoid(6))

export const brandTimestamp = (ts: string): Timestamp => ts as Timestamp

export const generateTimestamp = (): Timestamp => brandTimestamp(new Date().toISOString())


