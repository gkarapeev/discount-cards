var record_cont = document.querySelector('.container-records');

var Record = function (name, city, category, accu, discount, expiry, num) {
  this.name = name;
  this.city = city;
  this.category = category;
  this.accu = accu;
  this.discount = discount;
  this.expiry = expiry.toLocaleDateString('en-GB', myDateFormat);
  this.num = num;
}

var myDateFormat = {
  day: '2-digit',
  month: 'long',
  year: 'numeric'
}

var john = new Record('Georgi Karapeev', 'Mezek', 'Services', 'No', 50, new Date(2019, 3, 5), 2120030419);

var row = [];

// Fill "row" with the values of "record"
for (cell in john) {
  row.push(john[cell]);
}

// Get the "record-field" from the HTML
var doc_row_1_cell = document.getElementsByClassName('record-row').item(1).getElementsByClassName('record-field');

// Make an array containing the first 7 "record-field" elements of the row
var doc_row_1 = [doc_row_1_cell[0], doc_row_1_cell[1], doc_row_1_cell[2], doc_row_1_cell[3], doc_row_1_cell[4], doc_row_1_cell[5], doc_row_1_cell[6]];


// Iterate through the first 6 cells in the row and fill them in with info from the corresponding array index
for (let i = 0; i < 7; i++) {
  doc_row_1[i].innerHTML = row[i];
}

function insertRow() {

  // Remove the active state from any other active elements
  removeActive();

  // Define the content of the new row
  var newRow = `<div class="record-row record-row-active" onclick="setActive(this);">
                  <div class="record-field name"></div>
                  <div class="record-field city"></div>
                    <div class="record-field category"></div>
                    <div class="record-field accumulation"></div>
                    <div class="record-field d-percent"></div>
                    <div class="record-field exp-date"></div>
                    <div class="record-field card-num"></div>
                    <div class="record-field modify">
                      <div class="button button-edit">Edit</div>
                      <div class="button button-del" onclick="deleteRow(this);">
                          <svg version="1.1" class="bin-icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                            viewBox="0 0 32 32" xml:space="preserve">
                            <style type="text/css">
                            .st0{fill:#F5F5F5;}
                            </style>
                            <g id="trash">
                              <path class="st0" d="M30,6.8C29.9,5.2,28.6,4,27,4h-3V3l0,0c0-1.7-1.3-3-3-3H11C9.3,0,8,1.3,8,3l0,0v1H5C3.4,4,2.1,5.2,2,6.8l0,0V8
                                v1c0,1.1,0.9,2,2,2l0,0v17c0,2.2,1.8,4,4,4h16c2.2,0,4-1.8,4-4V11l0,0c1.1,0,2-0.9,2-2V8V6.8L30,6.8z M10,3c0-0.6,0.4-1,1-1h10
                                c0.6,0,1,0.4,1,1v1H10V3z M26,28c0,1.1-0.9,2-2,2H8c-1.1,0-2-0.9-2-2V11h20V28z M28,8v1H4V8V7c0-0.6,0.4-1,1-1h22c0.6,0,1,0.4,1,1
                                V8z"/>
                            </g>
                          </svg>
                      </div>
                    </div>
                </div>`

  // Insert the content
  record_cont.insertAdjacentHTML('afterbegin', newRow);
}

function deleteRow(row) {
  row.parentNode.parentNode.parentNode.removeChild(row.parentNode.parentNode);
}

function removeActive() {
  let active_element = document.querySelector('.record-row-active');
  if (active_element) {
    active_element.classList.remove('record-row-active');
  }
}

// Remove active state by clicking outside a row
document.addEventListener('click', function() {
  if (event.target.closest('.record-row')) return;
  else removeActive();
}, false);

function setActive(row) {
  removeActive();
  row.classList.add('record-row-active');
}