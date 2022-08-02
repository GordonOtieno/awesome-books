const decodedbooks = JSON.parse(localStorage.getItem('books'));
const add = document.querySelector('.add');
function showbook(books) {
  if (books.length === 0) {
    let inner = '';
    inner += `<p>You have no record in the store
    </p>`;
    document.querySelector('.input-display').innerHTML = inner;
  }
  let html = '';
  books.forEach((book, index) => {
    html += `
      
      <tr>
        <td>${book.title} by ${book.author}</td>
        <td><span class="btn-span"><button class="rv-button" type="button" onclick="removeBook(${index})">Remove</button></span></td>
      </tr>
 
      
      `;
    document.querySelector('.display-table').innerHTML = html;
  });
}
function removeBook(index) {
  if (index >= 0) {
    const decodedbooks = JSON.parse(localStorage.getItem('books'));
    decodedbooks.splice(index, 1);
    localStorage.setItem('books', JSON.stringify(decodedbooks));
    const update = JSON.parse(localStorage.getItem('books'));
    showbook(update);
  }
}

function clear() {
  document.querySelector('.title').value = '';
  document.querySelector('.author').value = '';
}

let books = [];
if (decodedbooks)books = [...decodedbooks];
add.addEventListener('click', (e) => {
  e.preventDefault();
  const book = {
    title: document.querySelector('.title').value,
    author: document.querySelector('.author').value,
  };
  books.push(book);
  localStorage.setItem('books', JSON.stringify(books));
  const decodedbooks = JSON.parse(localStorage.getItem('books'));
  showbook(decodedbooks);
  clear();
});

showbook(decodedbooks);
removeBook(-1);

