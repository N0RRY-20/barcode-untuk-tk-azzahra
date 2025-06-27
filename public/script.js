import "./style.css";
import {
  fileInput,
  newScanBtn,
  QRresult,
  speakBtn,
  startBtn,
  stopBtn,
} from "../components/dom.js";
import { newScan } from "../components/newScan.js";
import { QrScanner, QRvalue, setValue } from "../components/QrScanner.js";
import { showStatus } from "../components/showStatus.js";
import { speak } from "../components/speak.js";
import { startScanner } from "../components/startScan.js";
import { stopScanner } from "../components/stopScan.js";

startBtn.addEventListener("click", () => {
  startScanner(startBtn, stopBtn);
});
stopBtn.addEventListener("click", () => {
  stopScanner(startBtn, stopBtn);
});
newScanBtn.addEventListener("click", () => {
  newScan();
});
window.addEventListener("load", () => {
  showStatus('Klik "Mulai Scan QR" untuk memulai', "info");
  // warm up speaknya kalo ga nanti pertama klik tombol speak malah ga jalan
  speechSynthesis.getVoices();
  const warmUp = new SpeechSynthesisUtterance(" ");
  speechSynthesis.speak(warmUp);
  speechSynthesis.cancel();
});
speakBtn.addEventListener("click", () => {
  console.log("tombol aktif");
  speak();
});
const data = [
  {
    id: "12345",
    nama: "rani nabilah",
    kelas: "3A",
  },
  {
    id: "67890",
    nama: "Nadia Salsabila",
    kelas: "4B",
  },
];
const datamentah = 12345;
const qrresult = datamentah.toString();

function cariDataById(data, qrresult) {
  const hasil = data.find((item) => item.id === qrresult);

  if (hasil) {
    console.log(`Data ${hasil.id} ditemukan dengan nama ${hasil.nama}`);
  } else {
    console.log(`Data dengan ID ${qrresult} tidak ditemukan`);
  }
}
cariDataById(data, qrresult);

// testing
