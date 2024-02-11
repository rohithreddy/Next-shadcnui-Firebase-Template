"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";
import {
  useFirebaseApp,
  useFirestore,
  useFirestoreDocData,
  useUser,
} from "reactfire";

export const ProfileContext = createContext<any>({});

export const ProfileProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [profile, setProfile] = useState({});
  const app = useFirebaseApp();
  const db = getFirestore(app);

  // const firestore = useFirestore();
  const { status, data: user } = useUser();
  const uid = user?.uid?.toString();
  console.log("UID", uid);

  const profileInfo = async () => {
    if (uid && status === "success") {
      console.log("ProfileInfo");
      const profileRef = doc(db, "users", uid);
      const profileSnap = await getDoc(profileRef);
      if (profileSnap.exists()) {
        const data = profileSnap.data();
        setProfile(data);
        console.log("New Profile found");
      }
      console.log("Document data:", profileSnap.data());

      console.log("PROFILE EXITS", profileSnap.data());
    }
  };
  useEffect(() => {
    profileInfo();
  }, [uid, status, user]);

  return (
    <ProfileContext.Provider value={{ profile }}>
      {children}
    </ProfileContext.Provider>
  );
};
