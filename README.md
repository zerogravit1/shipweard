# Shipweard

Shipweard is an experimental traffic-observation service for containerized applications. The current prototype generates HTTP traffic, captures requests at a consumer, and provides a foundation for observing service-to-service behavior.

## Current prototype

### Consumer

An HTTP server that receives and persists producer traffic.

#### Endpoints

- `GET /` redirects to `/status`.
- `GET /status` returns `200` when the consumer is available.
- `POST /producer` accepts a JSON body and writes the received content to a file.
  - Returns `201` on success.
  - Returns `400` on failure.

### Producer

Generates sample JSON traffic and sends HTTP POST requests to the consumer on a randomized interval.

## Direction

Shipweard can evolve from this traffic-generation and capture prototype into a tool for observing request timing, failures, retries, routing, and performance across containerized services.
