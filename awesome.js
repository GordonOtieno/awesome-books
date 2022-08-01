const container = document.querySelector('.container');
container.addEventListener('click', (e) => {
  if (e.target.className === 'remove') {
    const removeParent = document.querySelector('.remove').parentElement;
    container.removeChild(removeParent);
  }
});

let submit = document.forms['form'];
let books = [];

submit.addEventListener('submit', (e) => {
  e.preventDefault();

  let title = submit.querySelector('.title').value;
  let author = submit.querySelector('.author').value;
  let book = {
    title: title,
    author: author,
  };
  books.push(book);

  localStorage.setItem('books', JSON.stringify(books));
});
