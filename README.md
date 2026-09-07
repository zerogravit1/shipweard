# Shipweard

Shipweard is an experimental traffic-observation service for containerized applications. The current prototype generates HTTP traffic, captures requests at a consumer, and provides a foundation for observing service-to-service behavior.

## Current architecture
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

@shipweard/model
Shared TypeScript contracts used across Shipweard applications.

apps/server
Shipweard API and backend runtime.

apps/web
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

The `.history` directory preserves the original Shipweard prototype for historical reference. It is not part of the active application architecture.