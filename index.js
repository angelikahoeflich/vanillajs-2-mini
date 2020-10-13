 function addTodo(event){
   event.preventDefault();
   const item = document.createElement('li');
   const itemValue = document.querySelector('#item').value;
   item.innerText = itemValue;

   const button = document.createElement('button');
   button.innerText = 'x';
   button.addEventListener('click', removeToDo);

   item.append(button);

   const list = document.querySelector('ul')
   list.appendChild(item)

 }



 document.querySelector('form').addEventListener('submit', addTodo);

 function removeToDo(event){
   event.target.parentNode.remove();
 }