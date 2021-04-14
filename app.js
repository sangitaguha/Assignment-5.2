// function loadData(){
//   fetch ("https://jsonplaceholder.typicode.com/users")
//   .then (res => res.json ())

//   .then (data => {
//     displayData(data);
//   })
    
// }
// loadData;




function displayData(data){
  const ul = document.getElementById('item');
  for (let i = 0; i < meals.length; i++){
      const item = items [i];
      const itemForm = document.createElement('form');
      const object= document.createElement('object'); 
      item.innerText = meal.object;
      const form = document.createElement('form');
      form.innerText = meal.form;

      mealForm.appendChild(object);
      mealForm.appendChild(form);
 
  }  
}
function displayUl( ul){
  console.log(ul);
}

