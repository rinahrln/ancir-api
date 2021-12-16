class Brt {
    constructor(id, kodeBRT, ruteMap, biayaPelajar,
        biayaUmum, jamOperasi, infoRute, infoHalte, halte, namaHalte, infoJamDatang) {
            this.id = id;
            this.kodeBRT = kodeBRT;
            this.ruteMap = ruteMap;
            this.biayaPelajar = biayaPelajar;
            this.biayaUmum = biayaUmum;
            this.jamOperasi = jamOperasi;
            this.infoRute = infoRute;
            this.infoHalte = infoHalte;
            this.halte = halte;
            this.namaHalte = namaHalte;
            this.infoJamDatang = infoJamDatang
        }
}

module.exports = Brt;