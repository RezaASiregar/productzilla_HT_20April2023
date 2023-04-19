const promptSync = require('prompt-sync');

const {luasPersegi, kelilingPersegi, luasSegitiga, kelilingSegitiga, luasLingkaran, kelilingLingkaran} = require('./src/shape');
const Person = require('./src/student')

const prompt = promptSync();

const student = new Person;


function operasi() {
    
    console.log('Pilih Aplikasi');
    console.log('1. Aplikasi Geometri');
    console.log('2. Aplikasi Mahasiswa');
    ap = parseInt(prompt('Pilih Aplikasi: '))
    switch (ap) {
        case 1:
            console.log('Aplikasi Geometri');
            console.log('1. Hitung Luas Persegi');
            console.log('2. Hitung Keliling Persegi')
            console.log('3. Hitung Luas Segitiga');
            console.log('4. Hitung Keliling Segitiga');
            console.log('5. Hitung Luas Lingkaran')
            console.log('6. Hitung Keliling Lingkaran');
            op = parseInt(prompt('Pilih Operasi: '))
            switch (op) {
                case 1:
                    a = parseInt(prompt('Nilai Panjang = '))
                    b = parseInt(prompt('Nilai Lebar = '))
                    console.log('Luas = ', luasPersegi(a, b));
                    process.exit(0)
                case 2:
                    a = parseInt(prompt('Nilai Panjang = '))
                    b = parseInt(prompt('Nilai Lebar = '))
                    console.log('Keliling = ', kelilingPersegi(a, b));
                    process.exit(0)
                case 3:
                    a = parseInt(prompt('Nilai Panjang = '))
                    b = parseInt(prompt('Nilai Tinggi = '))
                    console.log('Luas = ', luasSegitiga(a, b));
                    process.exit(0)
                case 4:
                    a = parseInt(prompt('Nilai Panjang Sisi A = '))
                    b = parseInt(prompt('Nilai Panjang Sisi B = '))
                    c = parseInt(prompt('Nilai Panjang Sisi C = '))
                    console.log('Keliling = ', kelilingSegitiga(a, b, c,));
                    process.exit(0)
                case 5:
                    a = parseInt(prompt('Nilai Jari-Jari = '))
                    console.log('Luas = ', luasLingkaran(a));
                    process.exit(0)
                case 6:
                    a = parseInt(prompt('Nilai Jari-Jari = '))
                    console.log('Keliling = ', kelilingLingkaran(a));
                    process.exit(0)
                default:
                    operasi()
            }
        case 2:
            console.log('Aplikasi Mahasiswa');
            nama = prompt('Masukkan Nama : ')
            nim = parseInt(prompt('Masukkan NIM : '))
            kelas = prompt('Masukkan Kelas : ')
            
            student.setName(nama)
            student.setNim(nim)
            student.setKelas(kelas)
            
            console.log('===== Menyimpan =====')
            console.log(`Nama : ${student.getName()} \nNIM : ${student.getNim()} \nKelas : ${student.getKelas()}`)
            process.exit(0)
        default:
            operasi()
    }
    
}
operasi()



