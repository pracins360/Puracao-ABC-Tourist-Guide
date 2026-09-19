document.querySelectorAll(".lang-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const selected = btn.getAttribute("data-lang");
    localStorage.setItem("language", selected);

    // Load main app
    window.location.href = "main.html";
  });
});
