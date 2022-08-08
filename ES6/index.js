import { addContent, displayContent, showContact } from './modules/UIs.js';
import dateFunc from './modules/date.js';
import DeleteBook from './modules/deleteBook.js';

const list = document.querySelector('.list');
const addNew = document.querySelector('.add-new');
const contact = document.querySelector('.contact');

addNew.addEventListener('click', addContent);
list.addEventListener('click', displayContent);
contact.addEventListener('click', showContact);
displayContent();
DeleteBook();
dateFunc();
