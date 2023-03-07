(function (){
const randID = Math.floor(Math.random()*16);
const boxes = document.querySelectorAll(".box");
const itClick = document.getElementById("it");

boxes.forEach((box,i) => {
    if (i===randID){
        box.id="it"
    }
    box.addEventListener("click", () =>{
        if (box.id=== "it"){
            box.classList.add("it");
            yellow()

        } else {
        box.classList.add("highlighted");
        }
    
    })
})

function yellow (){
    boxes.forEach(box => {
        if (box.classList.contains("highlighted")){
            box.classList.add("yellow");
        }
    })

}

}());