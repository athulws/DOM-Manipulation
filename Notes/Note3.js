// Creating Elements

const ul = document.querySelector('ul');
const li = document.createElement('li');


// Adding Elements --> ul nte ullil new li add aakan, ith aakan vendi aan mukalile code ne shesham ul.append(li) ittath

ul.append(li)


//Modifying the text --> mukalil create cheytha li tag nte ullil content add aakkan

const firstListItem = document.querySelector('.list-items');

// console.log(firstListItem.innerText);
// console.log(firstListItem.textContent);
// console.log(firstListItem.innerHTML);

li.innerText = 'X-men'; // li nte ullil "X-men" enn add aakkan

// Modifying Attributes 
 //   1) id vach

// li.setAttribute('id', 'main-heading'); // "main-heading" enna id il ulla ella styles um 'X-men' lum varan, --> line no:20 il ullath
// li.removeAttribute('id'); // "setAttribute" ulla ee effect remove cheyyan
// ---------------------------------------------------------------------------------------
 //   2) class vach

 li.classList.add('list-items') // backi ulla "list-items" enn class names ullathinte same styles "X-men" ne kittum
                                //ith kalayan "add" ne pakaram "remove" koduthal mathi


// console.log(li.classList.contains('list-items')); ==> ith koduthal 'X-men' nte className kittum

// li.remove(); ==> "li" tag ne remove cheyyan