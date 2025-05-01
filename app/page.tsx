"use client";
import {
  SignedIn,
  UserButton,
  SignedOut,
  SignInButton,
  SignUpButton,
  useAuth,
} from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const { isSignedIn } = useAuth();
  if (isSignedIn) {
    router.push("/inventory");
  }
  return (
    <div className="home-container">
      <div className="home-content">
        <div className="logo-content">
          <img
            src={"/assets/images/logo/logo.svg"}
            alt="Capsulify Logo"
            className="logo"
          />
          <h1 className="logo-text">CAPSULIFY</h1>
        </div>
        <h1 className="home-title">
          Style that attracts what <span>you</span> desire.
        </h1>
        <p className="home-subtitle">
          We'll help you curate a capsule wardrobe designed for your shape - and
          the next era of your life!
        </p>
        <div className="flex justify-center gap-4">
          <SignedOut>
            <SignInButton />
            <SignUpButton />
          </SignedOut>
        </div>
      </div>
    </div>
  );
}
