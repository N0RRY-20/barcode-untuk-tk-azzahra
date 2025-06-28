import { QrScanner } from "./QrScanner.js";
import { onScanSuccess } from "./onScanSuccess.js";
import { showStatus, showStatusPersistent } from "./showStatus.js";

export let hasScanned = false;
export let timeoutId = null;
export const setHasScanned = (value) => {
  hasScanned = value;
};

export const startScanner = (startBtn, stopBtn) => {
  showStatus("Meminta izin kamera...", "info");
  hasScanned = false;

  // Mulai timer 5 detik
  timeoutId = setInterval(() => {
    if (!hasScanned) {
      showStatusPersistent("QR belum terdeteksi...", "info");
    }
  }, 10000);
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
