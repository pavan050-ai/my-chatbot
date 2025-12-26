function sendMessage() {
  let input = document.getElementById("user-input");
  let chatBox = document.getElementById("chat-box");

  let userMessage = input.value;
  if (userMessage === "") return;

  // Add user bubble
  let userBubble = document.createElement("div");
  userBubble.className = "user-bubble";
  userBubble.innerText = userMessage;
  chatBox.appendChild(userBubble);

  input.value = "";

  // Add bot bubble (thinking)
  let botBubble = document.createElement("div");
  botBubble.className = "bot-bubble";
  botBubble.innerText = "thinking...";
  chatBox.appendChild(botBubble);

  chatBox.scrollTop = chatBox.scrollHeight;

  // Fake AI reply after 1.5 seconds
  setTimeout(() => {
    let replies = [
      "That’s interesting 🤔",
      "Tell me more!",
      "I am learning every day 🧠",
      "That sounds cool 😎",
      "I will answer better in the future!"
    ];

    botBubble.innerText = replies[Math.floor(Math.random() * replies.length)];
    chatBox.scrollTop = chatBox.scrollHeight;
  }, 1500);
}
