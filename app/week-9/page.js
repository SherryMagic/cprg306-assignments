// Import the useUserAuth hook

// user is the user object returned from Firebase Authentication. If the user is not logged in, the value will be null.
// gitHubSignIn is a function that will open a popup window to allow the user to sign in with GitHub.
// logOut is a function that will log the user out.

"use client";

import { useUserAuth } from "../contexts/AuthContext";
import Link from "next/link";

export default function LandingPage() {
  const { user, gitHubSignIn, logOut } = useUserAuth();

  const handleLogin = async () => {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const handleLogout = async () => {
    try {
      await logOut();
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <main style={{ padding: "20px" }}>
      <h1>Landing Page</h1>

      {!user ? (
        <>
          <p>You are not logged in.</p>
          <button onClick={handleLogin}>
            Login with GitHub
          </button>
        </>
      ) : (
        <>
          <p>
            Welcome, {user.displayName} ({user.email})
          </p>

          <button onClick={handleLogout}>
            Logout
          </button>

          <br /><br />

          <Link href="/week-9/shopping-list">
            Go to Shopping List
          </Link>
        </>
      )}
    </main>
  );
}
 
/*// Use the useUserAuth hook to get the user object and the login and logout functions
const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
 
// Sign in to Firebase with GitHub authentication
await gitHubSignIn();
 
// Sign out of Firebase
await firebaseSignOut();
 
// Display some of the user's information
<p>
  Welcome, {user.displayName} ({user.email})
</p>;*/