let mealsdatalist = document.querySelector(".meals-data-list");
let serach = document.getElementById("serach");
let serbtn = document.getElementById("ser-btn");
let btn = document.getElementById("btn")
let li = document.getElementById("li");
let url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";


hello();
function hello(){
    mealsdatalist.innerHTML=`
   <h1 class="lodding">Lodding...</h1>
  `
    fetch(url+"")
    .then((res) =>  res.json())
    .then((data) => {
        console.log(data)
        let html = ""
        if(data.meals){
        data.meals.forEach(e => {
            console.log(e.strMealThumb)
            html+=`
            <div class="malis-data" data-id="${e.idMeal}">
             <img class="data-img" src="${e.strMealThumb}" alt="">
             <p class="males-name">${e.strMeal}</p>
            </div>

            `
        });
        mealsdatalist.innerHTML=html;
    }else{
        alert("data is not found")
    }
    });
}

// btn redirect to racipe page
btn.addEventListener("click",()=>{
    location.href="racipe.html"
});
li.addEventListener("click",()=>{
    alert(64)
    location.href="racipe.html"
})