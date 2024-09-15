class Book {
    constructor (title, author, year) {
        this.title=title;
        this.author=author;
        this.year=year;
    }
    printInfo() {
        console.log(`Книга: "${this.title}", 
        Автор: ${this.author}, Рік видання: ${this.year}`);
    }
}
class EBook extends Book {
    constructor (title, author, year, fileFormat) {
        super (title, author, year);
        this.fileFormat=fileFormat;
    }

printInfo() {
    console.log(`Книга: "${this.title}", 
    Автор: ${this.author}, Рік видання: ${this.year}, Формат файлу: ${this.fileFormat}`);
}
}

const eBook= new EBook("Відмак","Єгоров", 2014, "TXT");
eBook.printInfo()