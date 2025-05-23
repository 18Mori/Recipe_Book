function showPage(pageId) {
  document.querySelectorAll(".page").forEach((page) => {
    page.classList.remove("active-page");
    page.classList.add("hidden");
  });

  document.getElementById(`${pageId}-page`).classList.remove("hidden");
  document.getElementById(`${pageId}-page`).classList.add("active-page");
}

document.getElementById("login-tab").addEventListener("click", () => {
  document.getElementById("login-form").classList.remove("hidden");
  document.getElementById("register-form").classList.add("hidden");
  document.getElementById("login-tab").classList.add("border-red-500", "text-black");
  document.getElementById("register-tab").classList.remove("border-red-500", "text-black");
});

document.getElementById("register-tab").addEventListener("click", () => {
  document.getElementById("register-form").classList.remove("hidden");
  document.getElementById("login-form").classList.add("hidden");
  document.getElementById("register-tab").classList.add("border-red-500", "text-black");
  document.getElementById("login-tab").classList.remove("border-red-500", "text-black");
});

// Dummy login (you should replace this with actual auth logic)
document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("login-email").value;
  document.getElementById("username").textContent = username;
  document.getElementById("login-btn").classList.add("hidden");
  document.getElementById("user-greeting").classList.remove("hidden");
  showPage("home");
});

function logout() {
  document.getElementById("username").textContent = "";
  document.getElementById("login-btn").classList.remove("hidden");
  document.getElementById("user-greeting").classList.add("hidden");
  showPage("auth");
}

// Default visibility
document.addEventListener("DOMContentLoaded", () => {
  showPage("home");
});
document.getElementById("logout-btn").addEventListener("click", logout);
document.getElementById("home-btn").addEventListener("click", () => {
  showPage("home");
});