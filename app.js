function loadData(){
  fetch ("https://jsonplaceholder.typicode.com/users")
  .then (res => res.json ())

  .then (data => {
    displayData(data);
  })
    
}
loadData;

function displayData(data){
  console.log(data);
}



