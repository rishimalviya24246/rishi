// const scroll = new LocomotiveScroll({
//     el: document.querySelector('.main'),
//     smooth: true
// });

var clutter = 0
const interval = setInterval(function () {
    if (clutter <= 100) {
        clutter++
    }

    if (clutter == 100) {
        clearInterval(interval)
    }

    document.querySelector(".loader h3").innerHTML = `<h3 class="font-bold text-3xl">${clutter}</h3>`
}, 50)

var tl = gsap.timeline()

tl.from(".loader .bar", {
    width: 0,
    duration: 6
})


tl.to(".loader", {
    height: 0,
    duration: 0.3,
    opacity : 0
})

tl.to(".page0", {
    height: 0,
    duration: 0.3
})

// const data = [
//     {
//         img: "https://thewebguys.co.nz/wp-content/uploads/2021/03/image-60.webp",
//         sno: "01",
//         h1: "Mudbrick Vineyard",
//     },
//     {
//         img: "https://thewebguys.co.nz/wp-content/uploads/2022/10/image-62.webp",
//         sno: "02",
//         h1: "Autex Acountics",
//     },
//     {
//         img: "https://thewebguys.co.nz/wp-content/uploads/2022/10/image-61.webp",
//         sno: "03",
//         h1: "KPMG",
//     },
//     {
//         img: "https://thewebguys.co.nz/wp-content/uploads/2022/08/image-63.webp",
//         sno: "04",
//         h1: "Carfe",
//     },
//     {
//         img: "https://thewebguys.co.nz/wp-content/uploads/2022/10/image-59.webp",
//         sno: "05",
//         h1: "Naumi Hotels",
//     },
//     {
//         img: "https://thewebguys.co.nz/wp-content/uploads/2021/03/image-58.webp",
//         sno: "06",
//         h1: "Stoneridge Esate",
//     }
// ]

// function print() {
//     var container = ""
//     data.forEach(function (value) {
//         container += `<div class="strip w-full h-[200px] relative group">
//         <div class="written z-[1000] h-[100%] flex items-end justify-between ">
//         <h4>${value.sno}</h4>
//         <h1 class="text-8xl">${value.h1}</h1>
//         <button class="uppercase flex items-center gap-2 text-xs font-medium scale-0 group-hover:scale-[1]"><i class="ri-checkbox-blank-circle-fill text-[10px]"></i>Visit site</button>
//         </div>
//         <div class = "image  w-[300px] h-[400px] absolute opacity-0 group-hover:opacity-1"><img class="h-[100%] w-[100%] object-cover -rotate-[10deg]" src="${value.img}" alt=""></div>
//             <div class="line w-full h-[1px] bg-gray-500 mt-3"></div>
//     </div>`
//     })

//     page5.innerHTML += container
// }

// print()
var page5 = document.querySelector(".page5 .body")
var strip = document.querySelector(".page5 .strip")
var strips = document.querySelectorAll(".page5 .strip")


strips.forEach(strip => {
    strip.addEventListener("mouseenter", () => {
        strip.style.color = " #39a6d8"
        strip.style.fontFamily = "cursive"
        strip.style.cursor = "pointer"
    })
    strip.addEventListener("mouseleave", () => {
        strip.style.color = "white"
        strip.style.fontFamily = "gilroy"
    })
});

function page1Animation(){
    tl.from(".page1 nav .left, .page1 nav .right",{
        y : -20,
        opacity : 0,
        duration : 1,
        stagger : 0.3
    })
    
    tl.from(".page1 .nav2",{
        opacity : 0,
        center : 0,
        scale : 0
    })
    
    tl.from(".page1 .nav3",{
        y : 10,
        opacity : 0,
        duration : 1,
    })
    
    tl.from(".page1 .btns .b1",{
        x: -20,
        opacity : 0
    },"x")
    
    tl.from(".page1 .btns .b2",{
        x: 20,
        opacity: 0
    },"x")
    
    tl.from(".page1 .down",{
        y : -10,
        opacity : 0
    })
}

// page1Animation()

var tl1 = gsap.timeline({
    scrollTrigger : {
        scroller : "body",
        trigger : ".page2",
        // markers : true,
        start : "top 50%",
        end : "top -50%",
        scrub : 2
    }
})

gsap.to(".page3 .left",{
    scrollTrigger : {
        scroller: "body",
        trigger : ".page3 left",
        pin : true
    }
})

function breakText() {
    var h1 = document.querySelector("h1")
    var h1Text = h1.textContent

    var clutter = ""
    splittedText.forEach(function (elem) {
      clutter += `<span>${elem}</span>`
    })
    h1.innerhtml = clutter
    breakText()
}

 gsap.from("h1 span",{
    y:50,
    duration: 1.2,
    delay: 0.5,
    stagger: 0.15,
    opacity: 0

 })