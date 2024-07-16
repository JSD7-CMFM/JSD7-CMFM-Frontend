import React from "react";
import { GoogleOAuthProvider } from '@react-oauth/google';
import Router from "./routes";

const App = () => {
  const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <Router />
    </GoogleOAuthProvider>
  );
};

export default App;