import React from "react";
import { SignedOut, SignInButton, SignedIn, UserButton } from "@clerk/clerk-react";
import { Button } from "react-bootstrap";

const Login = () => {
  return (
    <div className="d-flex align-items-center gap-3">
      {/* Show Login Button for Signed-Out Users */}
      <SignedOut>
        <SignInButton mode="modal">
          <Button variant="success" className="rounded-pill px-4 py-2 fw-bold">Login</Button>
        </SignInButton>
      </SignedOut>

      {/* Show User Avatar for Signed-In Users */}
      <SignedIn>
        <UserButton afterSignOutUrl="/" className="user-button" />
      </SignedIn>
    </div>
  );
};

export default Login;
