class Book {
    constructor (title, author, year) {
        this._title=title;
        this._author=author;
        this._year=year;
    }

get title() {
    return this._title
}
get author() {
    return this._author
}
get year() {
    return this._year
}


set title (newTitle) {
    if(typeof newTitle ==="string"){
    this._title = newTitle;
    } else {
        throw new Error("Title must be a string");
    }
}
set author(newAuthor) {
    if(typeof newAuthor ==="string"){
    this._author = newAuthor;
} else {
    throw new Error("Title must be a string");
}
}

set year(newYear) {
if(typeof newYear ==="number"){
    this._year = newYear;
} else {
    throw new Error("Year must be a positiv number");
}
}



static findOldestBook(books) {
return
books.reduce((oldest,current) => current.year < oldest.year ?
    current : oldest);
}
}


class EBook extends Book {
    constructor (title, author, year, fileFormat) {
        super (title, author, year);
        this.fileFormat=fileFormat;
    }
    get format() {
        return this._format = format;
    }
    set format(newFormat){
        if(typeof newFormat ==="string") throw new Error("Format must be a string");
        this._format = newFormat;
    } 
    
    static convertToEBook(book, format) {
        if (book instanceof Book && typeof format === "string") {
        return 
    new EBook(book.title, book.author, book.year,format);
} else {
    throw new Errow ("Invalid book or format");
}
}
}
const book1= new Book("Володар кілець", "Д.Р.Р. Толкієн", 1978);
const book2= new Book("Повернути себе", "Сергій Фурса", 2022); 
const eBook= new EBook("Порятунок", "Сергій Фурса", 2012, "PDF");

const booksArray = [book1, book2, eBook];

const oldestBook = Book.findOldestBook(booksArray); 
console.log(`The book is: ${oldestBook.title}, published in $ {oldestBook.year}` );

const newEBook = EBook.convertToEBook(book1, "TXT");
console.log(newEBook);


