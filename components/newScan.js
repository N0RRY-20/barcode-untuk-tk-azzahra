import { resultContainer, startBtn, status, stopBtn } from "./dom.js";
import { startScanner } from "./startScan.js";
import { stopScanner } from "./stopScan.js";

export const newScan = () => {
  resultContainer.style.display = "none";

  status.classList.add("hidden");
  startScanner(startBtn, stopBtn);
};
