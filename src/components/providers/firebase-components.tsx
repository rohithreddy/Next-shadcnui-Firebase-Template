"use client";

import { PropsWithChildren } from "react";

import { getAuth } from "firebase/auth";
// Firebase v9+
import { getFirestore } from "firebase/firestore";
// Firebase v9+
import { FirestoreProvider, AuthProvider, useFirebaseApp } from "reactfire";

export default function FirebaseComponents({ children }: PropsWithChildren) {
  const app = useFirebaseApp();
  const auth = getAuth(app);
  auth.useDeviceLanguage();
  const database = getFirestore(app);

  return (
    <AuthProvider sdk={auth}>
      <FirestoreProvider sdk={database}>{children}</FirestoreProvider>
    </AuthProvider>
  );
}
