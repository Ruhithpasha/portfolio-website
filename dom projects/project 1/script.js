var istatus= document.querySelector("h5")

var addFriend=document.querySelector("#add")
var flag=0;

// var removeFriend=document.querySelector("#remove")

addFriend.addEventListener("click",function (params) {
    if(flag==0){

        istatus.innerHTML="Friends"
        istatus.style.color="green"
        flag=1;
    }else{
        istatus.innerHTML="Single"
        istatus.style.color="red"
        flag=0;
    }
})

// removeFriend.addEventListener("click",function(){
//     istatus.innerHTML="Single"
//     istatus.style.color="red"
// })

var btn=document.querySelector("#add")
check=0;
btn.addEventListener("click",function (params) {
    if (check==0) {
        btn.innerHTML="Remove Friend"
        console.log("click horai")
        check=1;
    }
    else{
        btn.innerHTML="Add Friend"
        check=0
    }
})
