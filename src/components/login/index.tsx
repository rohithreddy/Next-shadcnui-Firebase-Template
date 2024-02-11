"use client";

import { FC } from "react";

import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { useAuth, useSigninCheck, useUser } from "reactfire";

import { Button } from "@/components/ui/button";

const provider = new GoogleAuthProvider();
provider.addScope("https://www.googleapis.com/auth/contacts.readonly");

const FireLoginButton: FC = () => {
  const auth = useAuth();
  const { data: user } = useUser();
  const { status, data: signInCheckResult } = useSigninCheck();
  const login = () => {
    // signInAnonymously(auth);
    signInWithPopup(auth, provider);
  };
  const logout = () => {
    signOut(auth);
  };
  if (status === "loading") {
    return (
      <>
        <Button>Loading...</Button>
      </>
    );
  }
  if (signInCheckResult.signedIn === true) {
    console.log("Fire auth");
    console.log(user);
    return (
      <>
        <Button onClick={logout}>{user?.displayName}</Button>
      </>
    );
  }
  return (
    <>
      <Button
        onClick={login}
        className="h-12 min-w-[9rem] gap-2 rounded-2xl border border-white/10  bg-primary px-4 py-3 font-bold text-foreground"
      >
        Login with Google
      </Button>
    </>
  );
};

export default FireLoginButton;
