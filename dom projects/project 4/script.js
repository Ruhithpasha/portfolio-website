// var elem=document.querySelectorAll(".element")

// elem.forEach(function (val) {

// console.log(val.childNodes)

//     val.addEventListener("mouseenter",function(){
//         val.childNodes[3].style.opacity=1;
//     })
//     val.addEventListener("mouseleave",function(){
//         val.childNodes[3].style.opacity=0;
//     })
//     val.addEventListener("mousemove",function(dets){
//         val.style.left=dets.x+"px"
//         val.style.top=dets.y+"px"
//     })
    
// })

var elem=document.querySelectorAll(".elem")

elem.forEach(function(val){
console.log(val.childNodes)
val.addEventListener("mouseenter",function (params) {
    // val.style.backgroundColor="red"
    val.childNodes[3].style.opacity=1
})


val.addEventListener("mousemove",function (dets) {
    val.childNodes[3].style.left=dets.x+"px"
    // val.childNodes[3].style.top=dets.y+"px"
})



val.addEventListener("mouseleave",function (params) {
    val.childNodes[3].style.opacity=0
})
})