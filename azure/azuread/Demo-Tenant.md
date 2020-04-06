---
layout: post
title:  "Demo: Tenant"
categories: azure azuread
---

<script src="{{ site.url }}/assets/js/msal.js"></script>

<!-- importing app scripts | load order is important -->
<script>

// Config object to be passed to Msal on creation
const msalConfig = {
  auth: {
    clientId: "30c60551-9997-44c6-a692-4f84eebaa10c",
    authority: "https://login.microsoftonline.com/c45ef334-8840-4076-94f3-3925932daaa3",
    redirectUri: "{{ site.url }}/azure/azuread/Demo-Tenant.html",
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
  <button id="SignInPopup" onclick="signIn(this.id)">Sign in using Popup</button>
  <button id="SignInRedirect" onclick="signIn(this.id)">Sign in using Redirect</button>
  <button id="SignOut" onclick="signOut(this.id)" style="display:none">Sign out</button>
</div>


### ID Token
<pre><code id="IdToken"></code></pre>

<!-- ### Access Token
<pre><code id="AccessToken"></code></pre> -->
