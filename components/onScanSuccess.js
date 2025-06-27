import { QRvalue, setValue } from "./QrScanner.js";
import { showStatus } from "./showStatus.js";
import { stopScanner } from "./stopScan.js";
import { startBtn, stopBtn, QRresult, resultContainer } from "./dom.js";
import { speak } from "./speak.js";

export const onScanSuccess = (decodedText, decodedResult) => {
  showStatus("QR Code berhasil di-scan!", "success");
  setValue(decodedText);
  // qrresult tadinya decoded text
  QRresult.textContent = QRvalue;
  // qrresult tadinya decoded text
  resultContainer.style.display = "block";
  stopScanner(startBtn, stopBtn);
  speak(QRvalue);
  console.log("scaner nonkatifkan");
};
