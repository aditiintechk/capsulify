"use client";
import { useRouter } from "next/navigation";

function Navbar() {
  const router = useRouter();

  return (
    <nav className="inventory-navigation-bar">
      <div className="inventory-navigation-content">
        <div
          className="inventory-logo-container"
          onClick={() => router.push("/")}
        >
          <img
            src="/assets/images/logo/logo.svg"
            alt="Capsulify Logo"
            className="app-logo"
          />

          <h1 className="app-logo-text">CAPSULIFY</h1>
        </div>

        <div className="inventory-profile-button">
          <button onClick={() => router.push("/profile")}>Profile</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
