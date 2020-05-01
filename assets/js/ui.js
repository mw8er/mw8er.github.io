// Select DOM elements to work with
// const welcomeDiv = document.getElementById("WelcomeMessage");
// const signInButton = document.getElementById("SignIn");
// const cardDiv = document.getElementById("card-div");
// const mailButton = document.getElementById("readMail");
// const profileButton = document.getElementById("seeProfile");
// const profileDiv = document.getElementById("profile-div");

function showWelcomeMessage(account) {
  var welcomeDiv = document.getElementById("WelcomeMessage");
  var signInPopup = document.getElementById("SignInPopup");
  var signInRedirect = document.getElementById("SignInRedirect");
  var signOut = document.getElementById("SignOut");
  var idToken = document.getElementById("IdToken");
  var roles = document.getElementById("listRoles");
  var issuer = document.getElementById("issuerValue");

  var display = 'none';
  if (account == null) {
    display = 'initial';
  }
  console.log(account);


  // Reconfiguring DOM elements

  if (welcomeDiv != null) {
    if (account != null) {
      welcomeDiv.innerHTML = `Welcome ${account.name}`;
    } else {
      welcomeDiv.innerHTML = 'Please sign in';
    }
  } else {
    console.log("welcomeDiv == null");
  }

  if (roles != null) {
    roles.innerHTML = "";
    if (account != null) {
      roles.innerHTML =  JSON.stringify(account.idToken.roles, undefined, 2);
    }
  } else {
    console.log("roles == null");
  }

  if (issuer != null) {
    issuer.innerHTML = "";
    if (account != null) {
      issuer.innerHTML =  account.idToken.iss;
    }
  } else {
    console.log("issuer == null");
  }

  if (idToken != null) {
    idToken.innerHTML = "";
    if (account != null) {
      idToken.innerHTML = JSON.stringify(account.idToken, undefined, 2);
    }
  } else {
    console.log("idToken == null");
  }

  // if (signInPopup != null) {
  //   signInPopup.style.display = display;
  // } else {
  //   console.log("signInPopup == null");
  // }

  // if (signInRedirect != null) {
  //   signInRedirect.style.display = display;
  // } else {
  //   console.log("signInRedirect == null");
  // }

  if (signOut != null) {
    if (account == null) {
      signOut.style.display = 'none';
    } else {
      signOut.style.display = 'initial';
    }
  } else {
    console.log("signOut == null");
  }
}

function updateUI(data, endpoint) {
  console.log('Graph API responded at: ' + new Date().toString());

  if (endpoint === graphConfig.graphMeEndpoint) {
    const title = document.createElement('p');
    title.innerHTML = "<strong>Title: </strong>" + data.jobTitle;
    const email = document.createElement('p');
    email.innerHTML = "<strong>Mail: </strong>" + data.mail;
    const phone = document.createElement('p');
    phone.innerHTML = "<strong>Phone: </strong>" + data.businessPhones[0];
    const address = document.createElement('p');
    address.innerHTML = "<strong>Location: </strong>" + data.officeLocation;
    profileDiv.appendChild(title);
    profileDiv.appendChild(email);
    profileDiv.appendChild(phone);
    profileDiv.appendChild(address);

  } else if (endpoint === graphConfig.graphMailEndpoint) {

    if (data.value.length < 1) {
      alert("Your mailbox is empty!")
    } else {
      const tabList = document.getElementById("list-tab");
      const tabContent = document.getElementById("nav-tabContent");

      data.value.map((d, i) => {
        // Keeping it simple
        if (i < 10) {
          const listItem = document.createElement("a");
          listItem.setAttribute("class", "list-group-item list-group-item-action")
          listItem.setAttribute("id", "list" + i + "list")
          listItem.setAttribute("data-toggle", "list")
          listItem.setAttribute("href", "#list" + i)
          listItem.setAttribute("role", "tab")
          listItem.setAttribute("aria-controls", i)
          listItem.innerHTML = d.subject;
          tabList.appendChild(listItem)

          const contentItem = document.createElement("div");
          contentItem.setAttribute("class", "tab-pane fade")
          contentItem.setAttribute("id", "list" + i)
          contentItem.setAttribute("role", "tabpanel")
          contentItem.setAttribute("aria-labelledby", "list" + i + "list")
          contentItem.innerHTML = "<strong> from: " + d.from.emailAddress.address + "</strong><br><br>" + d.bodyPreview + "...";
          tabContent.appendChild(contentItem);
        }
      });
    }
  }
}