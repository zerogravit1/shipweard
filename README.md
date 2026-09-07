# Shipweard

Shipweard is an experimental observability tool for visualizing how requests move through distributed systems. The current foundation provides a React frontend, Express API, and shared TypeScript contracts as the basis for trace-driven topology and request visualization.

## Current architecture
```
apps/web
  React + Vite frontend
      │
      │ /api/*
      ▼
apps/server
  Express API
      │
      │ shared contracts
      ▼
packages/model
```

`@shipweard/model`
Shared TypeScript contracts used across Shipweard applications.

`apps/server`
Shipweard API and backend runtime.

`apps/web`
Shipweard browser application. During development, Vite proxies
/api requests to the server.

## Getting Started

```bash
npm install

npm run dev -w @shipweard/server
npm run dev -w @shipweard/web
```

Web:    http://localhost:5173
Server: http://localhost:3000
API:    GET /api/status

## Validation

```bash
npm run lint
npm run typecheck
npm run test
npm run build
```

The `.history` directory preserves the original Shipweard prototype for historical reference. It is not part of the active application architecture.