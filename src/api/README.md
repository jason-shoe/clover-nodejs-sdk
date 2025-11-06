# clover-nodejs-sdk

> **⚠️ Disclaimer: This is an unofficial, community-maintained SDK for the Clover API. It is not officially affiliated with or endorsed by Clover Delivery.**

Node.js SDK for Clover API

## Installation

```bash
pnpm add clover-nodejs-sdk
```

## Usage

```typescript
import { createCloverClient } from "clover-nodejs-sdk";

// Create a client instance
const client = createCloverClient({
  apiKey: "your-api-key",
  environment: "production", // or 'development'
});

// Use the client to make API calls
// The client provides type-safe methods for all Clover API endpoints
```

## Features

- **Type-safe**: Full TypeScript support with generated types
- **Modern**: ES modules and CommonJS support
- **Lightweight**: Minimal dependencies
- **Comprehensive**: Covers all Clover API endpoints

## API Reference

### `createCloverClient(options)`

Creates a new Clover API client instance.

#### Options

- `apiKey` (string, required): Your Clover API key
- `environment` (string, optional): API environment ('production' or 'development', defaults to 'production')

### `CloverEnvironment`

Enum for available API environments.

## Development

```bash
# Install dependencies
pnpm install

# Build the package
pnpm run build

# Development mode with watch
pnpm run dev

# Clean build artifacts
pnpm run clean
```

## License

MIT
