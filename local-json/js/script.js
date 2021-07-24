var jsonDir = "./js/data.json";

fetch(jsonDir)
.then(response => {
  return response.json();
})
.then(data => {
  console.log(data);
})
.catch(error =>{
  console.log("error happened");
});
