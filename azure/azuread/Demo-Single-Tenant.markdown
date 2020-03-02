---
layout: post
title:  "Demo: Single Tenant"
categories: azure azuread
---

<script src="{{ base.url }}/assets/js/msal.js"></script>

<!-- importing app scripts | load order is important -->
<script>

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

</script>
<script type="text/javascript" src="{{ base.url }}/assets/js/singleTenant/ui.js"></script>  
<script type="text/javascript" src="{{ base.url }}/assets/js/singleTenant/auth.js"></script>
<script type="text/javascript" src="{{ base.url }}/assets/js/singleTenant/graph.js"></script>

<h2 id="WelcomeMessage"></h2>
<div>
  <button id="SignInPopup" onclick="signIn(this.id)">Sign in using Popup</button>
  <button id="SignInRedirect" onclick="signIn(this.id)">Sign in using Redirect</button>
  <button id="SignOut" onclick="signOut(this.id)" style="display:none">Sign out</button>
</div>


### ID Token
<pre><code id="IdToken"></code></pre>

### Access Token
<pre><code id="AccessToken"></code></pre>
