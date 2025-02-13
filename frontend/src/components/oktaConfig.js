export const oktaConfig = {
    clientId: "0oand4y798qTR7H2N5d7",
    issuer: "https://dev-41070319.okta.com/oauth2/default",
    redirectUri: `${window.location.origin}/login/callback`,
    scopes: ["openid", "profile", "email"],
    pkce: true,
  };
  