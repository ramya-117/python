// script.js
document.addEventListener("DOMContentLoaded", () => {
    const formTitle = document.getElementById("form-title");
    const authForm = document.getElementById("auth-form");
    const confirmPasswordGroup = document.getElementById("confirm-password-group");
    const submitBtn = document.getElementById("submit-btn");
    const toggleLink = document.getElementById("toggle-link");
  
    toggleLink.addEventListener("click", (e) => {
      e.preventDefault();
  
      if (formTitle.textContent === "Sign Up") {
        formTitle.textContent = "Login";
        confirmPasswordGroup.style.display = "none";
        submitBtn.textContent = "Login";
        toggleLink.textContent = "Sign Up";
      } else {
        formTitle.textContent = "Sign Up";
        confirmPasswordGroup.style.display = "block";
        submitBtn.textContent = "Sign Up";
        toggleLink.textContent = "Login";
      }
    });
  });