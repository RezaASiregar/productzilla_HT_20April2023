class Person{
    constructor(name = '', kelas = '', nim = 0 ){
        this.name = name;
        this.kelas = kelas;
    }

    setName(name){
        this.name = name;
    }

    setNim(nim){
        this.nim = nim;
    }

    setKelas(kelas){
        this.kelas = kelas;
    }
    
    getName(){
        return this.name;
    }

    getNim(){
        return this.nim;
    }

    getKelas(){
        return this.kelas;
    }
}

module.exports = Person;