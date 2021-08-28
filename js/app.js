

document.getElementById('food-input')
.addEventListener("keyup", function(event) {
event.preventDefault();
if (event.keyCode === 13) {
    document.getElementById('search-btn').click();
}
});

const sendInput=()=>{
    const inputElement= document.getElementById("food-input")
    const inputValue= inputElement.value;
    inputElement.value='';
    // const inputValue=`fish`;
    const url =`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`
    fetch(url)
    .then(res=> res.json())
    .then(data=> foodDisplay(data.meals))
}

//foodDisplay(data.meals))
const foodDisplay=(datas)=>{
    const foodShow = document.getElementById('food-show')
    foodShow.textContent=''
    console.log(datas)
 datas.forEach(data => { 
     console.log(data.strMeal);
     const div = document.createElement('div')
     div.classList.add('col');
     div.innerHTML=`  <div class="card">
     <img src=${data.strMealThumb} class="card-img-top img-fluid"  alt="...">
     <div class="card-body">
       <h5 class="card-title">${data.strMeal}</h5>
       <p class="card-text">${data.strInstructions.slice(0,200)}</p>
     </div>
   </div>
 </div> `
     foodShow.appendChild(div);
     
 });
}