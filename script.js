// 1. pilih tombol berdasarkan ID-nya
const tombolSapa = document.getElementById('sapaButton');
//2. tambahkan 'event listener' untuk aksi 'click'
tombolSapa.addEventListener('click', function() {
  // 3. jalankan koode ini ketika tombol di-klik
  alert('Hallo! Terima kasih sudah berkunjung!');
}
