let getHotel = JSON.parse(localStorage.getItem("hotel"))

const divHotel = document.getElementById("hotel");

for (let key of getHotel){
    console.log(key);
    divHotel.innerHTML += 
    `
    <a href="../hotel/jade.html">
            <figure class="box">
                <img src="${"../assets/trending/" + key.image}" alt="">
                <figcaption>
                    <h3>${key.title}</h3>
                    <span><i class="fa-solid fa-location-dot"></i>${key.location}</span>
                    <ul class="rate">
                        <li class="number">4.5</li>
                        <li>
                            <i class="fa-solid fa-star"></i>
                        </li>
                        <li>
                            <i class="fa-solid fa-star"></i>
                        </li>
                        <li>
                            <i class="fa-solid fa-star"></i>
                        </li>
                        <li>
                            <i class="fa-solid fa-star"></i>
                        </li>
                        <li>
                            <i class="fas fa-star-half-alt"></i>
                        </li>
                    </ul>
                    
                </figcaption>
            </figure>
        </a>

    `
}