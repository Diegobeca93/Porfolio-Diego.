// const hamburger = document.querySelector(".hamburger");
// const navLinks = document.querySelector(".nav-links");
// const links = document.querySelector(".nav-links li");

// hamburger.addEventListener('click', ()=>{
//     //Animate links
//     navLinks.classList.toggle("open");
//     links.forEach(link => {
//         link.classList.toggle("fade");
//     });

//     // Hamburger Animate
//     hamburger.classList.toggle("toggle");
// });

let animales = [ "gato", "perro", "caballo"]

for (animal in animales){
    document.write(animal + "<br>")
}

    document.write("<br>")

for (animal of animales){
    document.write(animal + "<br>")
}