var arr=[
    {dp:"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW9kZWxzfGVufDB8fDB8fHww",story:"https://images.unsplash.com/photo-1604514628550-37477afdf4e3?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZWxzfGVufDB8fDB8fHww"},
    {dp:"https://images.unsplash.com/photo-1556347961-f9521a88cb8a?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9kZWxzfGVufDB8fDB8fHww",story:"https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9kZWxzfGVufDB8fDB8fHww"},
    {dp:"https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW9kZWxzfGVufDB8fDB8fHww",story:"https://images.unsplash.com/photo-1622396636133-ba43f812bc35?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D"},
    {dp:"https://images.unsplash.com/photo-1616091093714-c64882e9ab55?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D",story:"https://media.istockphoto.com/id/840985666/photo/young-girl-showing-symbol-heart.webp?s=170667a&w=0&k=20&c=B_zFRrq73y4XKgzGUV9uuUpxmE75m5upLnRJc8AWWHg="},
]


var storiyan=document.querySelector("#storiyan")
var clutter=""
arr.forEach(function (elem,idx) {
    console.log(elem,idx)
    clutter +=` <div class="story">
    <img id="${idx}" src="${elem.dp}" alt="">
</div>`
})

storiyan.innerHTML=clutter
console.log(clutter)

storiyan.addEventListener("click",function (dets) {
    document.querySelector("#fill-screen").style.display="block"
    document.querySelector("#fill-screen").style.backgroundImage=`url(${arr[dets.target.id].story})`

    setTimeout(function (params) {
        document.querySelector("#fill-screen").style.display="none"
    },2000)
})