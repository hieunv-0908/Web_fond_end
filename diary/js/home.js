function updateUserStatus() {
  let userStatusElement = document.getElementById("user_status");
  let user = JSON.parse(localStorage.getItem("user")) || 0;

  if (user) {
    userStatusElement.innerHTML = `
        <img src="../assets/images/avata_thu.jfif" alt="" id="img_avata_home_user">
      `;

  } else {
    userStatusElement.innerHTML = `
        <a href="../html/login.html" id="a_sign_in">
          <button id="button_sign_in">Sign In</button>
        </a>
        <a href="../html/regist.html" id="a_sign_up">
          <button id="button_sign_up">Sign Up</button>
        </a>`;
  }
}

updateUserStatus();
