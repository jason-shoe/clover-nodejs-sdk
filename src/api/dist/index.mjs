// src/createRelayClient.ts
import createOpenApiClient from "openapi-fetch";
var BASE_URLS = {
  DEV: "https://dev-api.relay.delivery/v2",
  PROD: "https://api.relay.delivery/v2"
};
function createRelayClient({
  environment,
  authKey
}) {
  return createOpenApiClient({
    baseUrl: BASE_URLS[environment],
    headers: { "x-relay-auth": authKey }
  });
}

// src/RelayEnvironment.ts
var RelayEnvironment = {
  DEV: "DEV",
  PROD: "PROD"
};
export {
  RelayEnvironment,
  createRelayClient
};
