
// Config object to be passed to Msal on creation
const msalConfig = {
  auth: {
    clientId: "060d181a-86b1-47f8-9fc5-2be256ecd1ca",
    authority: "https://login.microsoftonline.com/aefcb506-bdad-43a9-bc13-b45dd2839172",
    redirectUri: "{{ site.url }}/azure/azuread/Demo-Single-Tenant.html",
  },
  cache: {
    cacheLocation: "sessionStorage", // This configures where your cache will be stored
    storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    forceRefresh: false // Set this to "true" to skip a cached token and go to the server to get a new
  }
};

// Add here scopes for id token to be used at MS Identity Platform endpoints.
const loginRequest = {
  scopes: ["openid", "profile", "User.Read"],
};

