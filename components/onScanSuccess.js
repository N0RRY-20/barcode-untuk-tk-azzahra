import { QRvalue, setValue } from "./QrScanner.js";
import { showStatus } from "./showStatus.js";
import { stopScanner } from "./stopScan.js";
import { startBtn, stopBtn, QRresult, resultContainer } from "./dom.js";
import { speak } from "./speak.js";
import { data } from "./dataAnak.js";

export const onScanSuccess = (decodedText, decodedResult) => {
  const hasil = data.find((item) => item.id === decodedText);
  if (hasil) {
    showStatus("QR Code berhasil di-scan!", "success");
    setValue(decodedText);
    // qrresult tadinya decoded text
    QRresult.textContent = QRvalue;
    // sementara isi qrvaluenya dulu dengan scan id saat ini dan amu di ganti dengan kalimat dan nama dari id
    // qrresult tadinya decoded text
    resultContainer.style.display = "block";
    stopScanner(startBtn, stopBtn);
    speak(QRvalue);
    console.log("scaner nonkatifkan");
    console.log(
      "peringatan : harus di tekan btn speak dulu biar warm up, ini kadang error dari chromenya sendiri"
    );
  }
};
