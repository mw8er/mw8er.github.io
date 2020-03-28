// Browser check variables
// If you support IE, our recommendation is that you sign-in using Redirect APIs
// If you as a developer are testing using Edge InPrivate mode, please add "isEdge" to the if check
const ua = window.navigator.userAgent;
const msie = ua.indexOf("MSIE ");
const msie11 = ua.indexOf("Trident/");
const msedge = ua.indexOf("Edge/");
const isIE = msie > 0 || msie11 > 0;
const isEdge = msedge > 0;

let signInType;

// Create the main myMSALObj instance
// configuration parameters are located at authConfig.js
var myMSALObj = new Msal.UserAgentApplication(msalConfig);

// Register Callbacks for Redirect flow
myMSALObj.handleRedirectCallback(authRedirectCallBack);

function authRedirectCallBack(error, response) {
  if (error) {
    console.log(error);
  } else {
    if (response.tokenType === "id_token" && myMSALObj.getAccount() && !myMSALObj.isCallback(window.location.hash)) {
      console.log('id_token acquired at: ' + new Date().toString());
      showWelcomeMessage(myMSALObj.getAccount());
      getTokenRedirect(loginRequest);
    } else if (response.tokenType === "access_token") {
      console.log('access_token acquired at: ' + new Date().toString());
    } else {
      console.log("token type is:" + response.tokenType);
    }
  }
}

window.onload = function () {
  showWelcomeMessage(myMSALObj.getAccount())
}

// // Redirect: once login is successful and redirects with tokens, call Graph API
// if (myMSALObj.getAccount() && !myMSALObj.isCallback(window.location.hash)) {
//   // avoid duplicate code execution on page load in case of iframe and Popup window.
//   showWelcomeMessage(myMSALObj.getAccount());
// }
function signIn2(method, policy) {
  msalConfig.auth.authority = msalConfig.auth.authorityBase + policy;
  console.log(msalConfig.auth.authority);
  myMSALObj = new Msal.UserAgentApplication(msalConfig);
  myMSALObj.handleRedirectCallback(authRedirectCallBack);
  signIn(method);
}

function signIn(method) {
  signInType = isIE ? "SignInRedirect" : method;

  if (signInType === "SignInPopup") {
    myMSALObj.loginPopup(loginRequest)
      .then(loginResponse => {
        console.log('id_token acquired at: ' + new Date().toString());
        if (myMSALObj.getAccount()) {
          showWelcomeMessage(myMSALObj.getAccount());
        }
      }).catch(function (error) {
        console.log(error);
      });

  } else if (signInType === "SignInRedirect") {
    myMSALObj.loginRedirect(loginRequest)
  }
}

function signOut() {
  myMSALObj.logout();
}

function getTokenPopup(request) {
  return myMSALObj.acquireTokenSilent(request)
    .catch(error => {
      console.log("silent token acquisition fails. acquiring token using popup");
      // fallback to interaction when silent call fails
      return myMSALObj.acquireTokenPopup(request)
        .then(tokenResponse => {
        }).catch(error => {
          console.log(error);
        });
    });
}

// This function can be removed if you do not need to support IE
function getTokenRedirect(request) {
  return myMSALObj.acquireTokenSilent(request)
    .then((response) => {
    }).catch(error => {
      console.log("silent token acquisition fails. acquiring token using redirect");
      // fallback to interaction when silent call fails
      return myMSALObj.acquireTokenRedirect(request)
    });
}
