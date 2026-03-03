async function send() {
  const input = document.getElementById("input");
  const chat = document.getElementById("chat");

  chat.innerHTML += `<p><b>You:</b> ${input.value}</p>`;

  const res = await fetch("/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: input.value })
  });

  const data = await res.json();
  chat.innerHTML += `<p><b>Aiva:</b> ${data.reply}</p>`;
  input.value = "";
}
