document.getElementById("get-data-btn").addEventListener('click', function() {
  fetch("https://apis.scrimba.com/bored/api/activity")
    .then(response => response.json())
    .then(data => {
      document.getElementById("generated-idea").textContent = data.activity
      document.getElementById("title").textContent = "🦾HappyBot 🦿"
      document.body.classList.add("fun")
    })
})
