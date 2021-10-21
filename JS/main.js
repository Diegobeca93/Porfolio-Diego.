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

    // Función Stop Scrolling
function bodyScrollingToggle() {
    document.body.classList.toggle("stop-scrolling");
}

/*----------------- porfolio -------------*/
    const porfolioItemsContainer = document.querySelector("#porfolio-items")
    const porfolioItems = document.querySelectorAll(".porfolio-item")
    const infoProject = document.querySelector(".info-project")
    const prevBtn = document.querySelector(".project-prev")
    const nextBtn = document.querySelector(".project-next")
    const closeBtn = document.querySelector(".project-main-close")
    const mainBtn = document.querySelector(".project-main-btn")
    const projectDetails = document.querySelector(".project-details")
    const projectDetailsbtn = document.querySelector(".project-main-btn")

    //Porfolio
    porfolioItemsContainer.addEventListener("click",(Event)=>{
        if(Event.target.closest(".porfolio-item-inner")){
            const porfolioItem = Event.target.closest(".porfolio-item-inner").parentElement;

            itemIndex = Array.from(porfolioItem.parentElement.children).indexOf(porfolioItem);
            screenshots = porfolioItems[itemIndex].querySelector(".porfolio-img img").getAttribute("data-screenshots");
            // convert screenshots into Array 
            screenshots = screenshots.split(",");
            
            if(screenshots.length === 1){
                nextBtn.style.display="none";
                prevBtn.style.display="none";
            }else{
                nextBtn.style.display="block";
                prevBtn.style.display="block";
            }

            slideIndex = 0;
            projectToggle();    
            porjectSlideShow()
        }
    })

    closeBtn.addEventListener("click",()=> {
        projectToggle();
        if (projectDetails.classList.contains("active")){
            projectDetail();
        }
    })

    function projectToggle() {
        infoProject.classList.toggle("open");
        bodyScrollingToggle();
    }
    function porjectSlideShow() {
        const imgSrc = screenshots[slideIndex];
        const projectImg = infoProject.querySelector(".p-img");
        projectImg.src = imgSrc;

        infoProject.querySelector(".project-counter").innerHTML = (slideIndex+1) + " of " + screenshots.length;
    }
     // next slide
    nextBtn.addEventListener("click",()=>{
        if (slideIndex === screenshots.length-1) {
            slideIndex = 0;
        }
        else{
            slideIndex++;
        }
        porjectSlideShow();
    })
    // prev slide
    prevBtn.addEventListener("click",()=>{
        if (slideIndex === 0) {
            slideIndex === screenshots.length-1;
        }
        else{
            slideIndex--;
        }
        porjectSlideShow();
    })

    projectDetailsbtn.addEventListener("click",()=>{
        projectDetail()
    })

    function projectDetail() {
        if (projectDetails.classList.contains("active")) {
            projectDetailsbtn.querySelector("i").classList.remove("fa-minus");
            projectDetailsbtn.querySelector("i").classList.add("fa-plus");
            projectDetails.classList.remove("active");
            projectDetails.style.maxHeight = 0 + "px";
        } 
        else {
            projectDetailsbtn.querySelector("i").classList.remove("fa-plus");
            projectDetailsbtn.querySelector("i").classList.add("fa-minus");
            projectDetails.classList.add("active");
            projectDetails.style.maxHeight = projectDetails.scrollHeight + "px";
        }
    } 