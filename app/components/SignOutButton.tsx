"use client";

import { signOut } from "next-auth/react";
import React from "react";

const SignOutButton = () => {
  return (
    <div>
      <button onClick={() => signOut()}>Sign out</button>
    </div>
  );
};

export default SignOutButton;
