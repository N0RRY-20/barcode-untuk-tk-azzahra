import { QRvalue } from "./QrScanner.js";
import { showStatus } from "./showStatus.js";

export const speak = (userValue) => {
  speechSynthesis.cancel();
  showStatus("🔊 Sedang membacakan hasil...", "info");
  // ini tadinya ada text
  console.log(QRvalue);
  const utterance = new SpeechSynthesisUtterance(userValue || QRvalue);
  //  ini tadinya ad atext
  utterance.lang = "id-ID";
  utterance.rate = 1;
  utterance.pitch = 1;

  utterance.onstart = () => {
    // showStatus("🔊 Sedang membacakan hasil...", "info");
    console.log("show status di jalankan");
  };

  utterance.onerror = (e) => {
    if (e.error !== "interrupted") {
      console.error("Error lain:", e);
    }
  };

  speechSynthesis.speak(utterance);
};
