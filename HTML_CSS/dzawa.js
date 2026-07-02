document.addEventListener("DOMContentLoaded", () => {

    
    const elements = document.querySelectorAll(".tekst, .oferta, .Booksy");

    const observer = new IntersectionObserver((entries)=>{
        entries.forEach(entry=>{
            if(entry.isIntersecting){
                entry.target.classList.add("show");
            }
        });
    },{
        threshold:0.2
    });

    elements.forEach(element=>{
        element.classList.add("hidden");
        observer.observe(element);
    });


    const links = document.querySelectorAll("nav a");

    links.forEach(link=>{
        link.addEventListener("mouseenter",()=>{
            link.style.transform="translateY(-3px)";
        });

        link.addEventListener("mouseleave",()=>{
            link.style.transform="translateY(0)";
        });
    });


    const logo=document.querySelector(".logo-link");

    logo.addEventListener("mousemove",(e)=>{

        const rect=logo.getBoundingClientRect();

        const x=e.clientX-rect.left;
        const y=e.clientY-rect.top;

        logo.style.transform=
        `perspective(700px)
        rotateY(${(x-rect.width/2)/18}deg)
        rotateX(${-(y-rect.height/2)/18}deg)`;

    });

    logo.addEventListener("mouseleave",()=>{
        logo.style.transform="perspective(700px) rotateX(0) rotateY(0)";
    });


    const button=document.querySelector(".booksy-button");

    setInterval(()=>{
        button.animate([
            {transform:"scale(1)"},
            {transform:"scale(1.04)"},
            {transform:"scale(1)"}
        ],{
            duration:1200,
            easing:"ease-in-out"
        });
    },5000);

});