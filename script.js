function showTrailer() {
  alert("Trailer coming soon! Stay tuned 👾");
}
function copyScript(id) {
  const code = document.getElementById(id).innerText;
  navigator.clipboard.writeText(code).then(() => {
    alert("Script copied to clipboard!");
  }).catch((err) => {
    alert("Failed to copy script: " + err);
  });
}
<a href="https://discord.gg/kvMwcxRm" target="_blank" class="discord-button">Join My Discord 💬</a>
