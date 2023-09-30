let filtermals = document.querySelector(".filter-mals");
let aitem = document.querySelector(".aitem");
let mealsdatalist = document.querySelector(".meals-data-list");
let serach = document.getElementById("serach");
let serbtn = document.getElementById("ser-btn");
let racipedata = document.querySelector(".racipedata");
let cross = document.querySelector(".cross");
let racipedatashownew = document.querySelector(".racipedatashownew")
let dataurl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";






// males data
malesdata();
function malesdata(){
  mealsdatalist.innerHTML=`
   <h1 class="lodding">Lodding...</h1>
  `
    let search = serach.value;
    fetch(dataurl+search)
    .then((res) =>  res.json())
    .then((data) => {
        console.log(data)
        let html = ""
        if(data.meals){
        data.meals.forEach(e => {
            html+=`
            <div class="malis-data" data-id="${e.idMeal}">
             <img class="data-img" src="${e.strMealThumb}" alt="">
             <p class="males-name">${e.strMeal}</p>
             <button class="males-btn">View More</button>
            </div>
            `
        });
        mealsdatalist.innerHTML=html;
    }else{
        alert("data is not found")
    }
    });
}
// search mail btn 
serbtn.addEventListener("click",()=>{
    malesdata();
    
})

// full detail show mails
mealsdatalist.addEventListener("click",(e)=>{
  e.preventDefault();
  if (e.target.classList.contains('males-btn')) {
    let mealitem = e.target.parentElement;
    console.log(mealitem)
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealitem.dataset.id}`)
    .then(respons => respons.json())
    .then(fulldata => mealrecipemodal(fulldata.meals))
  } 

})

// craet a modale show racipe make 
 function mealrecipemodal(meal){
    console.log(meal)
    meal = meal[0];
    html=`
    <div class="img-racipe-data">
    <img class="dataimg" src="${meal.strMealThumb}" alt="">
    <h1 class="mail-name">${meal.strMeal}</h1>
   <div class="p-data">
    <p class="para-racipe">${meal.strInstructions}</p>
   </div>
 <div class="mmeals-data">
  <div class="item1">
    <li class="mals">${meal.strIngredient1}</li>
    <li class="mals">${meal.strIngredient2}</li>
    <li class="mals">${meal.strIngredient3}</li>
    <li class="mals">${meal.strIngredient4}</li>
    <li class="mals">${meal.strIngredient5}</li>
    <li class="mals">${meal.strIngredient6}</li>
    <li class="mals">${meal.strIngredient7}</li>
    <li class="mals">${meal.strIngredient8}</li>
    <li class="mals">${meal.strIngredient9}</li>
    <li class="mals">${meal.strIngredient10}</li>
    <li class="mals">${meal.strIngredient11}</li>
    <li class="mals">${meal.strIngredient12}</li>
    <li class="mals">${meal.strIngredient13}</li>
  </div>
  <div class="item2">
    <li class="mals">${meal.strMeasure1}</li>
    <li class="mals">${meal.strMeasure2}</li>
    <li class="mals">${meal.strMeasure3}</li>
    <li class="mals">${meal.strMeasure4}</li>
    <li class="mals">${meal.strMeasure5}</li>
    <li class="mals">${meal.strMeasure6}</li>
    <li class="mals">${meal.strMeasure7}</li>
    <li class="mals">${meal.strMeasure8}</li>
    <li class="mals">${meal.strMeasure9}</li>
    <li class="mals">${meal.strMeasure10}</li>
    <li class="mals">${meal.strMeasure11}</li>
    <li class="mals">${meal.strMeasure12}</li>
    <li class="mals">${meal.strMeasure13}</li>
  </div>
 </div>  
</div>
    `
    racipedata.innerHTML=html;
    racipedata.style.display="block"; 
    cross.style.display= "block";  
    racipedatashownew.style.display="none";

 }

 // cut racipe data show
 cross.addEventListener("click",()=>{
  racipedata.style.display="none"; 
  cross.style.display= "none";  
  racipedatashownew.style.display="block";
 })
 
 