// Import the useUserAuth hook

// user is the user object returned from Firebase Authentication. If the user is not logged in, the value will be null.
// gitHubSignIn is a function that will open a popup window to allow the user to sign in with GitHub.
// logOut is a function that will log the user out.

// Feedback: The cause is straightforward — the landing page destructures logOut from useUserAuth() but the context exports firebaseSignOut. 
// logOut is undefined so clicking the button throws a silent error. 
// The fix is one word: const { user, gitHubSignIn, firebaseSignOut } = useUserAuth() and update handleLogout to call firebaseSignOut().

"use client";

import { useUserAuth } from "../contexts/AuthContext";
import Link from "next/link";

export default function LandingPage() {
  // const { user, gitHubSignIn, logOut } = useUserAuth();

  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleLogin = async () => {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const handleLogout = async () => {
    try {
      // await logOut();
      await firebaseSignOut();
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

          <Link href="/week-10/shopping-list">
            Go to Shopping List
          </Link>
        </>
      )}
    </main>
  );
}
 
