const password = document.querySelector("#password");
const copyBtn = document.querySelector("#copy");
const passwordContainer = document.querySelector(".passwordContainer");

function generatePassword() {
  let newPassword = "";
  const len = 12;
  const capitals = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const smalls = "abcdefghijklmnopqrstuvwxyz";
  const specials = "~!@#$%^&*()_+=-{}[];:,.?/";
  const numbers = "0123456789";
  const allChars = capitals + smalls + specials + numbers;

  newPassword += capitals[Math.floor(Math.random() * capitals.length)];
  newPassword += smalls[Math.floor(Math.random() * smalls.length)];
  newPassword += specials[Math.floor(Math.random() * specials.length)];
  newPassword += numbers[Math.floor(Math.random() * numbers.length)];

  while (newPassword.length < len) {
    newPassword += allChars[Math.floor(Math.random() * allChars.length)];
  }

  password.innerHTML = newPassword;
}

function copyPassword() {
  console.log("inside password", password.innerHTML);
  navigator.clipboard.writeText(password.innerHTML).then(() => {
    copyBtn.innerHTML = "Copied";
    passwordContainer.style.background = "#b6f4b6";
    setTimeout(() => {
      copyBtn.innerHTML = "Copy";
      passwordContainer.style.background = "#fff";
    }, 2000);
  });
}
