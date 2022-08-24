let title = document.getElementById('title');
let price = document.getElementById('price');
let taxes = document.getElementById('taxes');
let ads = document.getElementById('ads');
let discount = document.getElementById('discount');
let total = document.getElementById('total');
let count = document.getElementById('count');
let category = document.getElementById('category');
let submit = document.getElementById('submit');
let mood = 'craete';
let tim;

// get total
function getTotal() {
  if (price.value != ' ') {
    let result = +price.value + +taxes.value + +ads.value - +discount.value;
    total.innerHTML = `Total : ${result}`;
    total.style.background = ' blueviolet';


  } else {
    total.innerHTML = '';
    total.style.background = '#a00d02';
  }
}
// careat brodact                 /////////

if (localStorage.product != null) {
  careatpro = JSON.parse(localStorage.product);
} else {
  careatpro = [];
}

submit.onclick = function () {
  let newport = {
    title: title.value.toLowerCase(),
    price: price.value,
    taxes: taxes.value,
    ads: ads.value,
    discount: discount.value,
    total: total.innerHTML,
    count: count.value,
    category: category.value.toLowerCase(),
  };

  if (title.value == '') {
    let none = document.getElementById('none');

    none.style.display = 'block';
  } else if (title.value !== '') {
    let none = document.getElementById('none');

    none.style.display = 'none';
  }

  if (price.value == '') {
    let none1 = document.getElementById('none1');

    none1.style.display = 'block';
  } else if (price.value !== '') {
    let none = document.getElementById('none1');

    none1.style.display = 'none';
  }
  if (category.value == '') {
    let none2 = document.getElementById('none2');

    none2.style.display = 'block';
  } else if (category.value !== '') {
    let none2 = document.getElementById('none2');

    none2.style.display = 'none';
  }

  if (
    title.value != '' &&
    price.value != '' &&
    category.value != '' &&
    newport.count < 101
  ) {
    if (mood === 'craete') {
      if (newport.count > 1) {
        for (let i = 0; i < newport.count; i++) {
          careatpro.push(newport);
        }
      } else {
        careatpro.push(newport);
      }
    } else {
      careatpro[tim] = newport;
      mood = 'craete';
      submit.innerHTMl = 'crate';
      count.style.display = 'block';
    }
    clarinets();
  }

  localStorage.setItem('product', JSON.stringify(careatpro));
  console.log(careatpro);
  showboat();
};
// CLER PRODACT.V ./////////////
function clarinets() {
  title.value = '';
  price.value = '';
  taxes.value = '';
  ads.value = '';
  discount.value = '';
  total.value = '';
  count.value = '';
  category.value = '';
}
// RED'/////\
function showboat() {
  getTotal();
  let table = '';
  for (let i = 0; i < careatpro.length; i++) {
    table += `  <tr>
                    <td>${i + 1}</td>
                    <td>${careatpro[i].title}</td>
                    <td>${careatpro[i].price}</td>
                    <td>${careatpro[i].taxes}</td>
                    <td>${careatpro[i].ads}</td>
                    <td>${careatpro[i].discount}</td>
                    <td>${careatpro[i].total}</td>
                    <td>${careatpro[i].category}</td>
                    <td>
                        <button  onclick="updateData(${i})" id="update">update</button>
                    </td>
                    <td><button  onclick="deleteData(${i})">delete</button></td>
                </tr>`;
  }

  document.getElementById('tbody').innerHTML = table;
  let delateAll = document.getElementById('DeleteAll');
  if (careatpro.length > 0) {
    delateAll.innerHTML = `<button class="Delete" onclick="DelateAll()">DelateAll(${careatpro.length})</button>`;
  } else {
    delateAll.innerHTML = '';
  }
}
showboat();
// Delate///////////////
function deleteData(i) {
  careatpro.splice(i, 1);
  localStorage.product = JSON.stringify(careatpro);
  showboat();
}
// delateAll/////////////
function DelateAll() {
  localStorage.clear();
  careatpro.splice(0);
  showboat();
}
// cunt عدد المنتجات الي انتا عاوزها تتعمل

// updateData\\\\\\\\\\\\\
function updateData(i) {
  getTotal();
  title.value = careatpro[i].title;
  price.value = careatpro[i].price;
  taxes.value = careatpro[i].taxes;
  ads.value = careatpro[i].ads;

  discount.value = careatpro[i].discount;

  count.style.display = 'none';
  category.value = careatpro[i].category;
  submit.innerHTML = 'Update';
  mood = 'upbdate';
  tim = [i];
  scroll({
    top: 0,
    behavior: 'smooth',
  });
}

// سثشقؤا؟ serch
let searchMood = 'title';
function getSearchMood(id) {
  let search2 = document.getElementById('search1');
  if (id == 'searchTitle') {
    searchMood = 'title';
  } else {
    searchMood = 'category';
  }
  search2.placeholder = 'search By ' + searchMood;

  search2.focus();
  search2.value = '';
  showboat();
}
// function sardsh        v.....v
function searchData(value) {
  let table = '';
  for (let i = 0; i < careatpro.length; i++) {
    if (searchMood == 'title') {
      if (careatpro[i].title.includes(value.toLowerCase())) {
        table += `  <tr>
                    <td>${i}</td>
                    <td>${careatpro[i].title}</td>
                    <td>${careatpro[i].price}</td>
                    <td>${careatpro[i].taxes}</td>
                    <td>${careatpro[i].ads}</td>
                    <td>${careatpro[i].discount}</td>
                    <td>${careatpro[i].total}</td>
                    <td>${careatpro[i].category}</td>
                    <td>
                        <button  onclick="updateData(${i})" id="update">update</button>
                    </td>
                    <td><button  onclick="deleteData(${i})">delete</button></td>
                </tr>`;
      } else {
        if (careatpro[i].category.includes(value)) {
          table += `  <tr>
                    <td>${i}</td>
                    <td>${careatpro[i].title}</td>
                    <td>${careatpro[i].price}</td>
                    <td>${careatpro[i].taxes}</td>
                    <td>${careatpro[i].ads}</td>
                    <td>${careatpro[i].discount}</td>
                    <td>${careatpro[i].total}</td>
                    <td>${careatpro[i].category}</td>
                    <td>
                        <button  onclick="updateData(${i})" id="update">update</button>
                    </td>
                    <td><button  onclick="deleteData(${i})">delete</button></td>
                </tr>`;
        }
        document.getElementById('tbody').innerHTML = table;
      }
    }
  }
  document.getElementById('tbody').innerHTML = table;
}
