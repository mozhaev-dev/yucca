/**
 * Unique room identifier
 * Format: 8-character nanoid (A-Za-z0-9_-)
 * Example: "V1StGXR8"
 */
export type RoomId = string & { readonly __brand: 'RoomId' }

/**
 * Unique peer identifier within a room
 * Format: 6-character nanoid (A-Za-z0-9_-)
 * Example: "V1StGX"
 */
export type PeerId = string & { readonly __brand: 'PeerId' }

/**
 * Timestamp in ISO 8601 format
 * Example: "2024-11-19T12:34:56.789Z"
 */
export type Timestamp = string & { readonly __brand: 'Timestamp' }
