// Tüm Elementleri Seçme
const form = document.querySelector("#todo-form");
const input = document.querySelector("#todo");
const list = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const filter = document.querySelector("#filter");
const clearButton = document.querySelector("#clear-todos");
// Tüm EventListenirları Seçme
eventListeners();
function eventListeners(){
    form.addEventListener("submit" , addTodo);
}
function addTodo(e){
    const newTodo = input.value.trim();
    if(newTodo === ""){
        showAlert("danger" , "Lütfen Bir Todo Giriniz.");
    }
    else{
        addTodoToUI(newTodo);
    }
    e.preventDefault();
}
function showAlert(type , message){
    const alert = document.createElement("div");
    alert.className = `alert alert-${type}`;
    alert.textContent = message;
    firstCardBody.appendChild(alert);

}
// List İtem Oluşturma
function addTodoToUI(newTodo){
    // Link Oluşturma
    const listItem = document.createElement("li");
    const link = document.createElement("a");
    link.href = "#";
    link.className = "delete-Item";
    link.innerHTML = "<i class = 'fa fa-remove'></i>";
    listItem.className = "list-group-item d-flex justify-content-between";
    // Text Node Ekleme
    listItem.appendChild(document.createTextNode(newTodo));
    listItem.appendChild(link);
    // Todo list'e listItem'ı Ekleme
    list.appendChild(listItem);
    input.value = "";
}

