"use client";

import { useRouter } from "next/navigation";
import { FC, useContext, useEffect } from "react";

import { Label } from "@radix-ui/react-dropdown-menu";
import { useUser } from "reactfire";

import { ProfileContext } from "@/components/contexts/profile-context";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const ProfilePage: FC = () => {
  const { profile } = useContext(ProfileContext);
  console.log("Profile Data Fetched", profile);
  const { data: user } = useUser();

  const editProfile = () => {
    console.log("Editing Profile Information");
  };
  return (
    <>
      <div className="container relative flex grow flex-col items-center justify-start py-10">
        <Card className="w-[666px]">
          <CardHeader>
            <CardTitle>Profile Information</CardTitle>
            <CardDescription>
              Click edit to change profile information
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label>Display Name</Label>
                  <Input
                    id="name"
                    value={profile?.displayName || user?.displayName}
                    placeholder="What should we call you?"
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label>Email ID</Label>
                  <Input
                    id="name"
                    value={profile?.email || user?.email}
                    placeholder="Where should we ping you"
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label>Picture URL</Label>
                  <Input
                    id="name"
                    value={profile?.photoURL}
                    placeholder="paste a URL pointing to your pretty profile picture"
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label>Phone Number</Label>
                  <Input
                    id="name"
                    value={profile?.photoURL}
                    placeholder="Tring tring tring"
                  />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Cancel</Button>
            <Button>Save Changes</Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};

export default ProfilePage;
