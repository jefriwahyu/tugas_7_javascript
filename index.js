var tinggiBadan = [158, 155, 160, 162, 165, 168, 170, 175, 174, 182];

for (i = 0; i < tinggiBadan.length; i++) {
  console.log(tinggiBadan[i])
}

console.log("")

for (let siswa of tinggiBadan) {
  console.log(siswa)
}

// Hasil dari perulangan biasa dan perulangan for of sama tidak ada perbedaan,
// yang membedakan hanyalah, cara mendeklarasikan nilainya. Jika di perulangan
// biasa kita harus menuliskan indexnya, jika di perulangan for of kita tidak
// perlu menuliskan indexnya, jadi kita tinggal menuliskan variabelnya.
