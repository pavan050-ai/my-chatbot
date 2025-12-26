function handleKey(event) {
  if (event.key === "Enter") {
    sendMessage();
  }
}

function sendMessage() {
  const input = document.getElementById("user-input");
  const chat = document.getElementById("chat-box");

  if (input.value.trim() === "") return;

  const userMsg = document.createElement("div");
  userMsg.className = "user";
  userMsg.innerText = input.value;

  chat.appendChild(userMsg);

  setTimeout(() => {
    const botMsg = document.createElement("div");
    botMsg.className = "bot";
    botMsg.innerText = "I’m still learning 🤖";
    chat.appendChild(botMsg);
    chat.scrollTop = chat.scrollHeight;
  }, 700);

  input.value = "";
}

function toggleTheme() {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");
}
