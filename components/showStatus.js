import { status } from "./dom.js";

export const showStatus = (message, type = "info") => {
  status.textContent = message;
  status.className = `status ${type}`;
  status.classList.remove("hidden");
  if (type === "info" || type === "success") {
    setTimeout(() => {
      status.classList.add("hidden");
    }, 5000);
  }
};
