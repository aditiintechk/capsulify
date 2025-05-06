"use client";
import { SignedIn, useUser } from "@clerk/nextjs";
import Image from "next/image";
import { useRouter } from "next/navigation";

function Navbar() {
  const router = useRouter();
  const { user } = useUser();

  return (
    <nav className="inventory-navigation-bar">
      <div className="inventory-navigation-content">
        <div
          className="inventory-logo-container cursor-pointer"
          onClick={() => router.push("/")}
        >
          <img
            src="/assets/images/logo/logo.svg"
            alt="Capsulify Logo"
            className="app-logo"
          />
        </div>

        <button
          onClick={() => router.push("/profile")}
          className="cursor-pointer"
        >
          <SignedIn>
            <div className="rounded-full">
              {user?.imageUrl ? (
                <Image
                  src={user?.imageUrl}
                  alt="Profile Image"
                  width={32}
                  height={32}
                  className="rounded-full"
                />
              ) : (
                <p className="w-full h-full font-bold cursor-pointer">
                  {`${user?.firstName?.charAt(0).toUpperCase()}${user?.lastName
                    ?.charAt(0)
                    .toUpperCase()}`}
                </p>
              )}
            </div>
          </SignedIn>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
