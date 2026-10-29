# APLIKASI PEMESANAN KAFE KUCING
- Nama : Ni Nyoman Putri Kirana
- NIM   : 240040140
- Kelas : UG244
- Mata Kuliah : Aplikasi Berbasis Platform
- Dosen Pengampu : Made Agus Putra Subali, S.Kom., M.Kom.

## Deskripsi Project
Aplikasi Pemesanan Kafe Kucing merupakan aplikasi mobile yang dibuat secara sederhana dalam satu halaman dengan menggunakan **React Native**. Dalam Aplikasi ini pengguna dapat melihat katalog camilan berupa makanan dan minuman, serta dapat melihat ringkasan jumlah item yang sudah dimasukkan atau dipesan. 

## Struktur Proyek
```text
rn-cat-cafe/                  
├── .expo/                    # cache dan pengaturan lokal Expo
├── assets/                   # menyimpan assets aplikasi seperti gambar
├── node_modules/             # pustaka hasil instalasi npm
├── .gitignore                # daftar file yang tidak diunggah ke Git
├── AGENTS.md                 # panduan penggunaan alat bantu AI
├── App.js                    # komponen utama atau parent
├── app.json                  # konfigurasi aplikasi Expo
├── index.js                  # titik masuk aplikasi
├── LICENSE                   # lisensi proyek
├── MenuItem.js               # komponen untuk menyimpan menu 
├── OrderSummary.js           # komponen untuk ringkasan pesanan dan label promo
├── package-lock.json         # pengunci versi dependensi
├── package.json              # daftar dependensi dan skrip proyek
└── README.md                 # dokumentasi proyek 
```

## Fitur Aplikasi
- Menampilkan daftar makanan dan minuman, seperti gambar produk, nama produk dan harga.
- Menambah dan Mengurangi pesanan dalam setiap menu.
- Menampilkan total seluruh item yang sudah ditambahkan dalam ringkasan pesanan.
- Menampilkan informasi jika pengguna memperoleh diskon 10% jika membeli produk berjumlah 5 atau lebih.

## Gambaran Aplikasi
Aplikasi ini dibuat bernama Cat Cafe dan dibangun dengan menggunakan framework React Native dengan bantuan Expo dan bahasa pemrograman Javascript. Alur sederhana penggunaan aplikasi ini, diantaranya.
1.	Pengguna membuka aplikasi dan disambut dengan teks “Selamat Datang di Cat Cafe!” serta banner promosi untuk menampilkan informasi terkait promo yang tersedia pada cafe.
2.	Pengguna dapat melihat tiga menu camilan makanan dan minuman, yang berisi informasi berupa gambar, nama produk, dan harga.
3.	Pengguna dapat menekan tombol + atau – pada katalog menu untuk menambahkan atau mengurangi jumlah pesanan yang diinginkan.
4.	Pengguna dapat melihat “Ringkasan Pesanan” dibagian bawah layar untuk melihat total item pesanan yangd dipesan. Selain itu, jika total item mencapai minimal 5, akan menampilkan label promo “Selamat! Anda Mendapatkan Diskon 10%”.

## Batasan Aplikasi 
Adapun batasan dalam pengembangan aplikasi ini, yakni:
1.	Aplikasi ini dirancang dalam satu layar dan belum memiliki navigasi antarhalaman.
2.	Data menu disimpan dalam array objek secara statis pada komponen App, dan belum menggunakan database. 
3.	Aplikasi hanya menampilkan label diskon sebagai informasi dan belum mencakup perhitungan harga setelah diskon.
4.	Pada tombol “Pesan Sekarang” belum memiliki fungsi checkout atau pembayaran. 

## Langkah - Langkah Menjalankan Project
1. Pastikan perangkat memiliki Vs Code, Node.js, dan git.
2. Buka terminal dan jalankan:
 ``` text
 git clone https://github.com/Kirana0219/rn-cat-cafe.git
 ```
3. Masuk kedalam folder project melalui Vs Code. 
4. Pengguna juga dapat menjalankan project ini melalui terminal dengan menggunakan ``cd rn-cat-cafe`` dan ``code .`` agar project dapat dijalankan pada Vs Code.
5. Install Depedensi melalui ``npm install``
6. Jalankan aplikasi dengan menggunakan ``npx expo start``
7. Jika ingin menjalankan melalui emulator, pengguna dapat membuka android studio dan menjalankan device yang dimiliki, kemudian menekan tombol ``a`` pada terminal Vs Code.
8. Pengguna juga dapat menjalankannya melalui perangkat fisik dengan menginstall aplikasi ``expo go`` kemudian scan qr yang ada pada saat menjalankan aplikasi, atau pengguna dapat menjalankannya melalui web berdasarkan tautan ada.
