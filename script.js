var a ="";
tinggi = 5;

for (baris = 0; baris <= tinggi; baris++) {
  // memBuat sejumlah spasi
  for (i = 1; i <= tinggi - baris; i++) {
    a += " "; // Karakter spasi
  }

  // menampilkan bintang
  for (i = 1; i < 2 * baris; i++) {
    a += "*";
  }

  // Pindah baris
  a += "\n";
}





for (baris = tinggi-1; baris >= 0; baris--) {
  // memBuat sejumlah spasi
  for (i = 1; i <= tinggi - baris; i++) {
    a += " "; // Karakter spasi
  }

  // menampilkan bintang
  for (i = 1; i < 2 * baris; i++) {
    a += "*";
  }

  // Pindah baris
  a += "\n";
}
console.log(a);