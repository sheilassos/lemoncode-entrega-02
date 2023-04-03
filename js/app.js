// H O T E L E S
var hotels = {
    Mencey: {
        name: "Mencey",
        location: "Tenerife",
        image: "https://www.canarias.com/images/upload/mencey/mencey_(10).jpg",
    },

    Lani: {
        name: "Lani's Suites Deluxe",
        location: "Lanzarote",
        image: "https://img.archiexpo.es/images_ae/projects/images-g/hotel-lanis-suites-43333-11335790.jpg",
    },
};

// C O N S U L T A   H O T E L 
var selectHotel = prompt ("Introduce el nombre del hotel que quieras realizar la reseña (Mencey o Lani)");
document.getElementById("hotel-name").innerHTML = hotels[selectHotel].name;
document.getElementById("hotel-location").innerHTML = hotels[selectHotel].location;
document.getElementById("hotel-photo").src = hotels[selectHotel].image;

// P U N T U A C I Ó N
var stars = {
    uno: "&#9733;&#9734;&#9734;&#9734;&#9734;",
    dos: "&#9733;&#9733;&#9734;&#9734;&#9734;",
    tres: "&#9733;&#9733;&#9733;&#9734;&#9734;",
    cuatro: "&#9733;&#9733;&#9733;&#9733;&#9734;",
    cinco: "&#9733;&#9733;&#9733;&#9733;&#9733;",
};

// C O N S U L T A   P U N T U A C I Ó N
var selectStars = prompt ("Introduce la puntación: uno / dos / tres / cuatro / cinco");
document.getElementById("rating-stars").innerHTML = stars[selectStars];

// C O N S U L T A   A N Ó N I M O
var anonymous = confirm ("¿Desea que su valoración sea anónima?")
document.getElementById("checkbox").checked = anonymous;