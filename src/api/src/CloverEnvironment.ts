import { ValuesUnion } from "./util/ValuesUnion";

export const CloverEnvironment = {
  DEV: "DEV",
  PROD_NA: "PROD_NA",
  PROD_EU: "PROD_EU",
  PROD_LA: "PROD_LA",
} as const;

export type CloverEnvironment = ValuesUnion<typeof CloverEnvironment>;
