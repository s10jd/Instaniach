const chatBox = document.getElementById("chatBox");
const input = document.getElementById("messageInput");
const sendBtn = document.getElementById("sendBtn");

function loadMessages() {
  chatBox.innerHTML = "";
  const messages = JSON.parse(localStorage.getItem("chatMessages") || "[]");
  messages.forEach(msg => {
    const div = document.createElement("div");
    div.className = "message";
    div.textContent = msg;
    chatBox.appendChild(div);
  });
  chatBox.scrollTop = chatBox.scrollHeight;
}

sendBtn.onclick = () => {
  const text = input.value.trim();
  if (text) {
    const messages = JSON.parse(localStorage.getItem("chatMessages") || "[]");
    messages.push(text);
    localStorage.setItem("chatMessages", JSON.stringify(messages));
    input.value = "";
    loadMessages();
  }
};

window.onload = loadMessages;