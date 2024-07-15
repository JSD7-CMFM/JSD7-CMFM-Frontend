import React from "react";
import { GoogleOAuthProvider } from '@react-oauth/google';
import Router from "./routes";

const App = () => {
  const clientId = "397291702556-jphis9erjjo0j868v0tf0v7e9ned1vd3.apps.googleusercontent.com";
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <Router />
    </GoogleOAuthProvider>
  );
};

export default App;