const postForm = document.getElementById("postForm");
const submitBtn = document.getElementById("submitBtn");
const statusEl = document.getElementById("status");

postForm.addEventListener("submit", async function (event) {
  event.preventDefault();

  const formData = new FormData(postForm);
  const payload = {
    name: String(formData.get("name") || "").trim(),
    email: String(formData.get("email") || "").trim()
  };

  submitBtn.disabled = true;
  statusEl.textContent = "Sending...";

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      throw new Error("POST failed with status " + response.status);
    }

    const data = await response.json();
    console.log("POST body sent:", payload);
    console.log("Server response:", data);

    statusEl.textContent = "Sent successfully.";
    postForm.reset();
  } catch (error) {
    statusEl.textContent = "Could not send right now. Try again.";
    console.error(error);
  } finally {
    submitBtn.disabled = false;
  }
});