class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
  printInfo() {
    console.log(`Книга: "${this.title}", 
        Автор: ${this.author}, Рік видання: ${this.year}`);
  }
}
const book1 = new Book("Володар кілець", "Д.Р.Р. Толкієн", 1978);
const book2 = new Book("Повернути себе", "Сергій Фурса", 2022);
const book3 = new Book("Порятунок", "Сергій Фурса", 2012);

book1.printInfo();
book2.printInfo();
book3.printInfo();
