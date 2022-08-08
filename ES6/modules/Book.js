export default class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  saveRecord() {
    const decodedbooks = JSON.parse(localStorage.getItem('books'));
    let books = [];
    if (decodedbooks) books = [...decodedbooks];

    const book = {
      title: this.title,
      author: this.author,
    };
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }
}
