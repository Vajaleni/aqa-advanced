class Book {
  constructor(title, author, year) {
    this._title = title;
    this._author = author;
    this._year = year;
  }

  get title() {
    return this._title;
  }
  set title(newTitle) {
    if (typeof newTitle !== "string") throw new Error("Title must be a string");
    this._title = newTitle;
  }
  get author() {
    return this._author;
  }
  set author(newAuthor) {
    if (typeof newAuthor !== "string")
      throw new Error("Title must be a string");
    this._author = newAuthor;
  }
  get year() {
    return this._year;
  }
  set year(newYear) {
    if (typeof newYear !== "number")
      throw new Error("Year must be a positiv number");
    this._year = newYear;
  }

  static findOldestBook(books) {
    return books.reduce((oldest, current) => {
      if (!current.year) throw new Error("Book without year found");
      return current.year < oldest.year ? current : oldest;
    });

    return books.reduce((oldest, current) =>
      current.year < oldest.year ? current : oldest,
    );
  }
}

class EBook extends Book {
  constructor(title, author, year, format) {
    super(title, author, year);
    this.format = format;
  }
  get format() {
    return this._format;
  }
  set format(newFormat) {
    if (typeof newFormat !== "string")
      throw new Error("Format must be a string");
    this._format = newFormat;
  }

  static convertToEBook(book, format) {
    if (book instanceof Book && typeof format !== "string")
      throw new Error("Invalid book or format");
    return new EBook(book.title, book.author, book.year, format);
  }
}

const book1 = new Book("Володар кілець", "Д.Р.Р. Толкієн", 1978);
const book2 = new Book("Повернути себе", "Сергій Фурса", 2022);
const eBook = new EBook("Порятунок", "Сергій Фурса", 2012, "PDF");

const booksArray = [book1, book2, eBook];

const oldestBook = Book.findOldestBook(booksArray);
console.log(`The oldest book was published in ${oldestBook.year} year}`);

const newEBook = EBook.convertToEBook(book1, "TXT");
console.log(newEBook);
