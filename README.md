# Yucca

Minimalist P2P video conferencing platform focused on privacy and simplicity.

## Project Goals

-   Learn WebRTC technology in depth
-   Create a simple, privacy-focused video conferencing application
-   Explore P2P conference capabilities and limitations
-   Build a minimalist, anonymous communication tool

## Project Structure

This is a pnpm monorepo with the following packages:

```
yucca/
├── packages/
│   ├── client/          # Vue 3 frontend application
│   ├── server/          # Node.js WebSocket signaling server
│   └── shared/          # Shared TypeScript types
└── package.json         # Root workspace configuration
```

## Getting Started

### Prerequisites

-   **Node.js**: 20.11.0 (LTS)
-   **pnpm**: 9.0.0

### Quick Start

```bash
# Install dependencies
pnpm install

# Run client development server
pnpm client:dev

# Build client
pnpm client:build

# Preview client (serve built client with Vite server)
pnpm client:preview

# Run server dev mode
pnpm server:dev

# Build signaling server
pnpm server:build

# Start signaling server
pnpm server:start

# Run tests
pnpm test

# Lint code
pnpm lint

# Type checking
pnpm typecheck
```

## Core Principles

-   **Privacy First**: All video streams go directly between peers (P2P)
-   **Simplicity**: Minimal backend, no registration, no data storage
-   **Anonymity**: No user data collection or processing
-   **Transparency**: Users can be confident that streams are truly peer-to-peer

## Research Goals

After MVP completion, focus on exploring P2P conference capabilities:

1. **Increase Participant Capacity** - Investigate mesh topology limitations
2. **Network Optimization** - Reduce bandwidth consumption per connection
3. **Connection Quality** - Implement quality metrics and monitoring
4. **Advanced Features** - Screen sharing, data channels, file sharing

## License

MIT
