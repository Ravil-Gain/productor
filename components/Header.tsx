import { useAuth } from "@/context/authContext";
import * as React from "react";
import { LogoutButton } from "@/components/ui/LogoutButton";
import { LoginButton } from "@/components/ui/LoginButton";
import { useRouter } from "next/router";

export function Header() {
  const user = useAuth();
  return (
    <div className="fixed bg-slate-900 top-0 w-full h-16 left-0 flex items-center justify-between px-6 text-white md:mx-auto md:text-2xl z-10">
      <h1 className="cursor-default">Productor</h1>
      {/* <h1 onClick={() => router.push("/")}>Productor</h1> */}
      {user && user.authUser ? (
        <div className="flex ml-4 my-auto">
          <h1>{user.authUser.displayName}</h1>
          <LogoutButton />
        </div>
      ) : (
        <LoginButton />
      )}
    </div>
  );
}
