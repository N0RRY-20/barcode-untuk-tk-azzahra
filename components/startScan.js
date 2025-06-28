import { QrScanner } from "./QrScanner.js";
import { onScanSuccess } from "./onScanSuccess.js";
import { showStatus } from "./showStatus.js";

export const startScanner = (startBtn, stopBtn) => {
  showStatus("Meminta izin kamera...", "info");
  QrScanner.start(
    { facingMode: "environment" },
    {
      fps: 10,
      qrbox: { width: 250, height: 250 },
      aspectRatio: 1.0,
      disableFlip: false,
    },
    onScanSuccess
  )
    .then(() => {
      startBtn.classList.add("hidden");
      stopBtn.classList.remove("hidden");
      showStatus("Scanner aktif! Arahkan kamera ke QR code", "success");
    })
    .catch((error) => {
      console.log(error);
      showStatus(
        "Gagal mengakses kamera. Pastikan izin kamera diberikan.",
        "error"
      );
    });
};
