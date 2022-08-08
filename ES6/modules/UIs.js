import Book from './Book.js';

const main = document.querySelector('.main-body');
export const addContent = () => {
  const content = ` <!--form section-->
    <div class="form-container">
    <h1 class="add-header">Add a new book</h1>
    <div class="form">
      <div class="imput-cont">
      <input type="text" value="" placeholder="Title" class="title"> <br><br>
      <input type="text" value="" placeholder="Author" class="author"><br><br>
      </div>
      <button class="add" type="button">Add</button>
    
    </div>
   </div>`;
  main.innerHTML = content;
  const add = document.querySelector('.add');
  add.addEventListener('click', (e) => {
    e.preventDefault();
    const title = document.querySelector('.title').value;
    const author = document.querySelector('.author').value;
    const book = new Book(title, author);
    book.saveRecord();
    document.querySelector('.title').value = '';
    document.querySelector('.author').value = '';
  });
};

export const showContact = () => {
  const contHtml = `<!-- contact section -->
    <div class="contact">
        <h1 class="add-header">Contact information</h1>
        <p class="contact-parag">
        Do you have any question or you just want to say "Hello"?<br>
        You can reach out to Us.
        </p>
        <ul>
        <li>Our email: mail@mail.com</li>
        <li>Our Phone number:76538738</li>
        <li>Our Address: Streetname 22, 762376,City Country</li>
        </ul>
    </div>`;
  main.innerHTML = contHtml;
};

export const displayContent = () => {
  const tb = document.querySelector('.table');
  const storedBooks = JSON.parse(localStorage.getItem('books'));
  if (!tb) {
    window.location.reload();
  }
  if (!storedBooks || storedBooks.length === 0) {
    document.querySelector('.norecord').innerHTML = 'No Books Currently in The store!';
  } else {
    let tableHtml = '';
    storedBooks.forEach((book, index) => {
      tableHtml += `<tr>
         <td>${book.title} by ${book.author}</td>
         <td><button class="rv-button" type="button" id="${index}">Remove <i class="fa fa-trash" aria-hidden="true"></i></button></td>
         </tr>`;
      tb.innerHTML = tableHtml;
    });
  }
};