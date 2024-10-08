const span = document.querySelector("#password");
span.innerText = "P4S$w0rD";

function generateRandomNumber() {
  const numbers = "0123456789";
  const letters = "abcdefghijklmnopqrstuvwxyz";
  const specialCharacters = "!@#$%^&*()_+";

  const allCharacters = numbers + letters + specialCharacters;
  const length = 12;
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allCharacters.length);
    password += allCharacters[randomIndex];
  }
  span.innerText = password;
}
