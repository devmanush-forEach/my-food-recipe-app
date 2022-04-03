// console.log('aded')

import { navbar } from "/nav.js"
let data = navbar();
let header = document.getElementById("header");
header.innerHTML = data;

let timeout;

document.getElementById("query").addEventListener("input", function () {
    deBounce(getDishes, 2000);
});
function deBounce(func, time) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
        func();
    }, time);

}
async function getDishes() {


    try {
        let query = document.getElementById("query").value;
        let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;

        let response = await fetch(url);
        let data = await response.json();
        console.log(data.meals);
        showNames(data.meals);


    } catch (err) {
        // console.log(err.message);
    }

}
function showNames(meals) {

    let list = document.getElementById("search_list");
    list.innerHTML = "";
    document.getElementById("display").style.display = "block";
    meals.forEach(meal => {
        let li = document.createElement("li")
        li.innerText = meal.strMeal;
        li.addEventListener("click", function () {
            localStorage.setItem('result_dish', JSON.stringify(meal));
            window.location.href = './searchResult.html'
        })
        list.appendChild(li);

    });
}