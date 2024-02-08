// Creating Elements

const ul = document.querySelector('ul');
const li = document.createElement('li');


// Adding Elements --> ul nte ull new li add aakan, ith aakan vendi aan mukalile code ne shesham ul.append(li) ittath

ul.append(li)


//Modifying the text

const firstListItem = document.querySelector('.list-items');

// console.log(firstListItem.innerText);
// console.log(firstListItem.textContent);
// console.log(firstListItem.innerHTML);

li.innerText = 'X-men'; // li nte ullil "X-men" enn add aakkan

// Modifying Attributes & Classes

li.setAttribute('id', 'main-heading'); // "main-heading" enna id il ulla ella styles um 'X-men' lum varan, --> line no:20 il ullath
li.removeAttribute('id'); // "setAttribute" ulla ee effect remove cheyyan

