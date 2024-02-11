"use client";

import { PropsWithChildren } from "react";

import { FirebaseAppProvider } from "reactfire";

import { env } from "@/lib/config/environment";

import FirebaseComponents from "./firebase-components";
import { ThemeProvider } from "./theme-provider";

const firebaseConfig = {
  apiKey: env.fireApiKey,
  authDomain: env.fireAuthDomain,
  projectId: env.fireProjectId,
  storageBucket: env.fireStorageBucket,
  messagingSenderId: env.fireMessagingSenderId,
  appId: env.fireAppId,
  measurementId: env.fireMeasurementId,
};

export default function CommonProviders({ children }: PropsWithChildren) {
  return (
    <>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <FirebaseAppProvider firebaseConfig={firebaseConfig}>
          <FirebaseComponents>{children}</FirebaseComponents>
        </FirebaseAppProvider>
      </ThemeProvider>
    </>
  );
}
