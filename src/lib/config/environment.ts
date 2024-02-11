/**
 * Environment Variables defined in `.env.local`.
 * See `env.local.example` for documentation.
 */
export const env = {
  isProduction: process.env.NEXT_PUBLIC_PRODUCTION_MODE === "true",
  url: process.env.NEXT_PUBLIC_URL ?? "http://localhost:3000",
  fireApiKey: process.env.NEXT_PUBLIC_FIRE_APIKEY,
  fireAuthDomain: process.env.NEXT_PUBLIC_FIRE_AUTHDOMAIN,
  fireProjectId: process.env.NEXT_PUBLIC_FIRE_PROJECTID,
  fireStorageBucket: process.env.NEXT_PUBLIC_FIRE_STORAGEBUCKET,
  fireMessagingSenderId: process.env.NEXT_PUBLIC_FIRE_MESSAGINGSENDERID,
  fireAppId: process.env.NEXT_PUBLIC_FIRE_APPID,
  fireMeasurementId: process.env.NEXT_PUBLIC_FIRE_MEASUREMENTID,
};
