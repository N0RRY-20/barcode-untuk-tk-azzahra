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
const qrresult = 12345;
function cariDataById(data, qrresult) {
  const hasil = data.find((item) => item.id === qrresult);

  if (hasil) {
    console.log(`Data ${hasil.id} ditemukan dengan nama ${hasil.nama}`);
  } else {
    console.log(`Data dengan ID ${qrresult} tidak ditemukan`);
  }
}
cariDataById(data, qrresult);
