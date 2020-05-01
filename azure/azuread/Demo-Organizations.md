---
layout: post
title:  "Demo: Business Partner Area"
categories: azure azuread
---

<script src="{{ site.url }}/assets/js/msal.js"></script>

<!-- importing app scripts | load order is important -->
<script>

// Config object to be passed to Msal on creation
const msalConfig = {
  auth: {
    clientId: "d694c9d0-587b-4b1a-b60e-485b97b14d59",
    authority: "https://login.microsoftonline.com/organizations",
    redirectUri: "{{ site.url }}/azure/azuread/Demo-Organizations.html",
  },
  cache: {
    cacheLocation: "sessionStorage", // This configures where your cache will be stored
    storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    forceRefresh: false // Set this to "true" to skip a cached token and go to the server to get a new
  }
};

// Add here scopes for id token to be used at MS Identity Platform endpoints.
const loginRequest = {
  scopes: ["openid", "profile", "email", "User.Read"],
  prompt: 'select_account'
};

</script>
<script type="text/javascript" src="{{ site.url }}/assets/js/ui.js"></script>  
<script type="text/javascript" src="{{ site.url }}/assets/js/auth.js"></script>
<script type="text/javascript" src="{{ site.url }}/assets/js/graphConfig.js"></script>
<script type="text/javascript" src="{{ site.url }}/assets/js/graph.js"></script>

<h2 id="WelcomeMessage"></h2>
<div>
  <button id="SignInRedirect" onclick="signIn(this.id)">Sign in</button>
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
