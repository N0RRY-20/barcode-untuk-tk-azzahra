import { QrScanner, QRvalue, setValue } from "./QrScanner.js";
import { showStatus } from "./showStatus.js";

export const stopScanner = (startBtn, stopBtn) => {
  QrScanner.stop()
    .then(() => {
      QrScanner.clear();
      // QR Code scanning is stopped.
      startBtn.classList.remove("hidden");
      stopBtn.classList.add("hidden");
      if (QRvalue === undefined) {
        showStatus("Scanner dinonaktifkan", "success");
      }
    })
    .catch((err) => {
      // Stop failed, handle it.
      showStatus("gagal menonaktifkan scanner", "error");
    });
};
