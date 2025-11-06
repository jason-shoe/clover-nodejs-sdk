import createOpenApiClient from "openapi-fetch";
import type { paths } from "./openapi/types";
import { CloverEnvironment } from "./CloverEnvironment";

const BASE_URLS: { [key in CloverEnvironment]: string } = {
  DEV: "https://apisandbox.dev.clover.com",
  PROD_NA: "https://api.clover.com",
  PROD_EU: "https://api.eu.clover.com",
  PROD_LA: "https://api.la.clover.com",
};

export type CloverClient = ReturnType<typeof createOpenApiClient<paths>>;

export function createCloverClient({
  environment,
  authKey,
}: {
  environment: CloverEnvironment;
  authKey: string;
}): CloverClient {
  return createOpenApiClient<paths>({
    baseUrl: BASE_URLS[environment],
    headers: { "x-relay-auth": authKey },
  });
}
