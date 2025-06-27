import { Html5Qrcode } from "html5-qrcode";

export const QrScanner = new Html5Qrcode("qr-reader");
let isScanning;
export let QRvalue;
export const setValue = (value) => {
  QRvalue = value;
};
export const setIsScanning = (value) => {
  isScanning = value;
};
