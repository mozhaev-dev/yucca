/**
 * WebRTC Session Description (SDP)
 */
export interface SessionDescription {
  type: 'offer' | 'answer'
  sdp: string
}

/**
 * ICE Candidate for NAT traversal
 */
export interface IceCandidate {
  candidate: string
  sdpMLineIndex: number | null
  sdpMid: string | null
  usernameFragment?: string
}

/**
 * ICE server configuration (STUN/TURN)
 */
export interface IceServerConfig {
  urls: string | string[]
  username?: string
  credential?: string
}

/**
 * WebRTC connection configuration
 */
export interface RtcConfiguration {
  iceServers: IceServerConfig[]
  iceTransportPolicy?: 'all' | 'relay'
  bundlePolicy?: 'balanced' | 'max-compat' | 'max-bundle'
  rtcpMuxPolicy?: 'negotiate' | 'require'
}

