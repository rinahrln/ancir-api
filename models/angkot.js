class Angkot {
    constructor(id, kodeAngkot, deskripsi, ruteMap, biayaPelajar,
        biayaUmum, jamOperasi, infoRute) {
            this.id = id;
            this.kodeAngkot = kodeAngkot;
            this.deskripsi = deskripsi;
            this.ruteMap = ruteMap;
            this.biayaPelajar = biayaPelajar;
            this.biayaUmum = biayaUmum;
            this.jamOperasi = jamOperasi;
            this.infoRute = infoRute;
        }
}

module.exports = Angkot;