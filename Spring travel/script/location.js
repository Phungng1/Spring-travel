let getHotel = JSON.parse(localStorage.getItem("hotel"));

const divHotel = document.getElementById("hotel");

for (let key of getHotel) {
  divHotel.innerHTML += `
    <a href="${"../hotel/" + key.address}">
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
  `;
}

function search() {
  var searchInput = document.getElementById("searchInput").value.toLowerCase();
  var searchResults = document.getElementById("result");
  searchResults.innerHTML = ""; // Xóa các phần tử con bên trong phần tử "result"

  var hotelData = JSON.parse(localStorage.getItem("hotel")); // Lấy dữ liệu từ localStorage

  var results = hotelData.filter(function(item) {
    return ( item.title.toLowerCase().includes(searchInput) ||
            item.location.toLowerCase().includes(searchInput))
  });

  if (results.length > 0) {
    for (var i = 0; i < results.length; i++) {
      var result = results[i];

      var a = document.createElement("a");
      a.href = "../hotel/" + result.address;
      searchResults.appendChild(a);

      var figure = document.createElement("figure");
      figure.className = "box";
      a.appendChild(figure);

      var img = document.createElement("img");
      img.src = "../assets/trending/" + result.image;
      img.alt = "";
      figure.appendChild(img);

      var figcaption = document.createElement("figcaption");
      figure.appendChild(figcaption);

      var h3 = document.createElement("h3");
      h3.textContent = result.title;
      figcaption.appendChild(h3);

      var span = document.createElement("span");
      span.innerHTML = '<i class="fa-solid fa-location-dot"></i>' + result.location;
      figcaption.appendChild(span);

      var ul = document.createElement("ul");
      ul.className = "rate";
      figcaption.appendChild(ul);

      var liNumber = document.createElement("li");
      liNumber.className = "number";
      liNumber.textContent = "4.5";
      ul.appendChild(liNumber);

      for (var j = 0; j < 4; j++) {
        var liStar = document.createElement("li");
        var iStar = document.createElement("i");
        iStar.className = "fa-solid fa-star";
        liStar.appendChild(iStar);
        ul.appendChild(liStar);
      }

      var liHalfStar = document.createElement("li");
      var iHalfStar = document.createElement("i");
      iHalfStar.className = "fas fa-star-half-alt";
      liHalfStar.appendChild(iHalfStar);
      ul.appendChild(liHalfStar);
    }
  } else {
    var p = document.createElement("p");
    p.textContent = "Không tìm thấy kết quả.";
    searchResults.appendChild(p);
  }

  // Ẩn các sản phẩm không liên quan
  var allHotels = divHotel.getElementsByTagName("a");
  for (var j = 0; j < allHotels.length; j++) {
    var hotel = allHotels[j];
    if (!results.find(function(item) {
      return "../hotel/" + item.address === hotel.href;
    })) {
      hotel.style.display = "none";
    } else {
      hotel.style.display = "block";
    }
  }
}