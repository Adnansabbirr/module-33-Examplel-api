
const searchMeal=()=>{
    const searchtext=document.getElementById('search-button');
    const searcvalue=searchtext.value;
    searchtext.value='';
    const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${searcvalue}
    `;
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayMeal(data.meals))


}

const displayMeal=(meals)=>{
    meals.forEach(meal => {
        const searchResult=document.getElementById('search-result');
        const div=document.createElement('div');
        div.classList.add('col');

        div.innerHTML=`<div onclick="displayMealDeatail(${meal.idMeal})" class="card h-100">
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
        </div>
    </div>
        `; 
    searchResult.appendChild(div);

    });
    
}
const displayMealDeatail=(mealId)=>{
    const url=`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    fetch (url)
    .then(res=>res.json())
    .then(data=>mealLoad(data.meals[0]))


}
const mealLoad=(eachMeal)=>{
    console.log(eachMeal);
    const mealLoadArea=document.getElementById('meal-load-area');
    const div=document.createElement('div');
    div.classList.add="card"
    div.innerHTML=` <div class="card">
    <img class="card-img-top" src="${eachMeal.strMealThumb}" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${eachMeal.strMeal}</h5>
      <p class="card-text">${eachMeal.strInstructions}</p>
      <a href="${eachMeal.strYoutube}" class="btn btn-primary">See video</a>
    </div>
  </div>   `
  mealLoadArea.appendChild(div);

}