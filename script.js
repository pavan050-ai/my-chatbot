function sendMessage() {
  let input = document.getElementById("user-input");
  let chatBox = document.getElementById("chat-box");

  let userMessage = input.value;
  if (userMessage === "") return;

  chatBox.innerHTML += "<p><b>You:</b> " + userMessage + "</p>";
  input.value = "";

  chatBox.innerHTML += "<p><b>Bot:</b> thinking...</p>";

  setTimeout(() => {
    let replies = [
      "That’s interesting 🤔",
      "Tell me more!",
      "I am learning every day 🧠",
      "That sounds cool 😎",
      "I will answer better in the future!"
    ];

    let botReply = replies[Math.floor(Math.random() * replies.length)];

    chatBox.innerHTML = chatBox.innerHTML.replace(
      "<p><b>Bot:</b> thinking...</p>",
      ""
    );

    chatBox.innerHTML += "<p><b>Bot:</b> " + botReply + "</p>";
  }, 1500);
}
