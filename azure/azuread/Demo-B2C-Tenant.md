---
layout: post
title:  "Demo: Ticket Portal"
categories: azure azuread
---

<script src="{{ site.url }}/assets/js/msal.js"></script>

<!-- importing app scripts | load order is important -->
<script>

// Config object to be passed to Msal on creation
var msalConfig = {
  auth: {
    clientId: "89275216-2567-46ad-aa89-f528c4f4b688",
    authorityBase: "https://ciamw8er.b2clogin.com/ciamw8er.onmicrosoft.com/",
    redirectUri: "{{ site.url }}/azure/azuread/Demo-B2C-Tenant.html",
    validateAuthority: false
  },
  cache: {
    cacheLocation: "sessionStorage", // This configures where your cache will be stored
    storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    forceRefresh: false // Set this to "true" to skip a cached token and go to the server to get a new
  }
};

// Add here scopes for id token to be used at MS Identity Platform endpoints.
const loginRequest = {
  scopes: ["openid", "profile", "email"],
  prompt: 'login'
};

</script>
<script type="text/javascript" src="{{ site.url }}/assets/js/ui.js"></script>  
<script type="text/javascript" src="{{ site.url }}/assets/js/auth.js"></script>
<script type="text/javascript" src="{{ site.url }}/assets/js/graphConfig.js"></script>
<script type="text/javascript" src="{{ site.url }}/assets/js/graph.js"></script>

<h2 id="WelcomeMessage"></h2>
<div>
  <button onclick="signIn2('SignInRedirect', 'B2C_1A_mw8er_demo_signup_signin_consumer')">Sign in to buy tickets</button>
  <button onclick="signIn2('SignInRedirect', 'B2C_1A_mw8er_demo_signup_signin_partner')">Sign in to provide tickets for events</button>
  <button onclick="signIn2('SignInRedirect', 'B2C_1A_mw8er_demo_signup_signin_admin')">Sign in to add partners</button>
  <button id="SignOut" onclick="signOut(this.id)" style="display:none">Sign out</button>
</div>

<!-- ### Issuer
<pre><code id="issuerValue"></code></pre>

### Roles
<pre><code id="listRoles"></code></pre> -->

### ID Token
<pre><code id="IdToken"></code></pre>

<!-- ### Access Token
<pre><code id="AccessToken"></code></pre> -->
