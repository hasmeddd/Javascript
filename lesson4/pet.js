
// Bài tập: Pet

class Pet {
    constructor(name, sound) {
        this.name = name;
        this.sound = sound;
    }
    
    Introduce() {
        console.log(`Toi ten la: ${this.name}.`);
        return this.name;
    }
    
    Talk() {
        console.log(`Keu rang: ${this.sound}.`);
        return this.sound;
    }
}

class Dog extends Pet {
    constructor(name, sound, type) {
        super(name, sound);
        this.type = type;
    }

    Loaivat() {
        console.log(`Toi la loai vat: ${this.type}.`);
        return this.type;
    }
}

var dogg = new Dog('Bobby', 'gau gau', 'Cho');
dogg.Introduce(); 
dogg.Talk(); 
dogg.Loaivat(); 