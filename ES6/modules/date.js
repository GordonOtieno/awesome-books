import { DateTime } from './luxon.js';

const dateFunc = () => {
  const dateTime = document.querySelector('.date');
  dateTime.innerHTML = DateTime.now().toLocaleString(DateTime.DATETIME_MED);
};
export default dateFunc;