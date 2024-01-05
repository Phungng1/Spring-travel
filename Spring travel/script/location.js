let getTrending = JSON.parse(localStorage.getItem("trending"));

const divTrending = document.getElementById(trending);

for (key of getTrending){
    divTrending.innerHTML +=
    `
    <div>
            <img src="${"../assets/" + key.image}" alt="Not found">
            <h5>${key.title}</h5>
            <p></p>
            <div class="stars">
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
            </div>
        </div>
    `
}