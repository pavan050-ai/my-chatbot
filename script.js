function handleKey(event) {
  if (event.key === "Enter") {
    sendMessage();
  }
}

function sendMessage() {
  let input = document.getElementById("user-input");
  let chat = document.getElementById("chat-box");

  if (input.value.trim() === "") return;

  chat.innerHTML += `<div class="user">${input.value}</div>`;

  setTimeout(() => {
    chat.innerHTML += `<div class="bot">I am still learning 🤖</div>`;
    chat.scrollTop = chat.scrollHeight;
  }, 700);

  input.value = "";
}

function toggleTheme() {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");
}
