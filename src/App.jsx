import React from "react";
import { GoogleOAuthProvider } from '@react-oauth/google';
import Router from "./routes";

const App = () => {
  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
      <Router />
    </GoogleOAuthProvider>
  );
};

export default App;