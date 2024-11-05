const sections = document.querySelectorAll('section');
const nav = document.querySelector("nav");
const btnBurger = document.querySelector("#burger-menu");
const menu = document.querySelector(".navigation");
const links = document.querySelector(".navigation a");
const ae = document.querySelector("");

btnBurger.addEventListener('click',()=>{
  menu.classList.toggle("active");
  btnBurger.classList.toggle("bx-x")
})
links.forEach(link=>{
  link.addEventListener("click",()=>{
    menu.classList.remove("active");
    btnBurger.classList.remove("bx-x");
  })
})
window.addEventListener("scroll",()=>{
  menu.classList.remove("active");
  btnBurger.classList.remove("bx-x")
})
window.addEventListener("scroll",()=>{
  nav.classList.toggle('active',window.scrollY>0)
})

const scrollActive= ()=>{
  sections.forEach(section=>{
    let top=window.scrollY;
    let offset=section.offsetTop -100;
    let height=section.offsetHeight;
    let id=section.getAttribute("id");
    
    if(top >= offset && top < offset + height){
      links.forEach(link => {
        link.classList.remove('active');
        document.querySelector(`.navigation a[href*=${id}]`).classList.add('active');
      })
    }
  })
}

window.addEventListener('scroll', scrollActive);