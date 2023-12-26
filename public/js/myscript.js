function toomanyoptions() {
    console.log("This is a message")
    alert("wee do wee do")
}
function randomnum()   {
    let x = Math.floor((Math.random()*100))
    if(x>50){
        newCount = parseInt(document.querySelector("#counter").textContent) + x
        document.querySelector("#counter").textContent = newCount   
    }

    else{
        newCount = parseInt(document.querySelector("#counter").textContent) - x
        document.querySelector("#counter").textContent = newCount
    }
}
function changevalue(delta) {
    if(delta === 0){
        document.querySelector("#counter").textContent = 0
    }
    else{
        newCount = parseInt(document.querySelector("#counter").textContent) + delta
        document.querySelector("#counter").textContent = newCount
    }
}