//Dinamik Olarak Element Oluşturmak

const cardBody = document.querySelectorAll(".card-body")[1];
const todoList = document.querySelector(".list-group");
const todos1 = document.querySelectorAll(".list-group-item");
const todos2 = document.querySelector(".list-group-item");

console.log(cardBody);

const link = document.createElement("a");
link.id="goBlogWebSite";
link.className="btn btn-dark btn-md mt-3";
link.href="http://youtube.com";
link.target="_blank";
link.innerHTML = "YouTube";

/*

<li class="list-group-item d-flex justify-content-between">Todo 3
<a href="#" class="delete-item">
    <i class="fa fa-remove"></i>
</a>
</li>
*/
cardBody.appendChild(link);


const todo = document.createElement("li");
const todoLink = document.createElement("a");
const i  = document.createElement("i");

todo.className="list-group-item d-flex justify-content-between";
todo.innerHTML = "Todo 3";

todoLink.href="#";
todoLink.className="delete-item";


i.className="fa fa-remove";


todoLink.appendChild(i);
todo.appendChild(todoLink);

todoList.appendChild(todo);


console.log(link);

// ! Element silme yöntemleri.

// todos2.remove();
// console.log(todos1)
// todos1[1].remove();
// console.log(todoList)

// todoList.removeChild(todos1[1])



