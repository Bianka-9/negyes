var cardArray = [];
var idArray = [
    "#card01", "#card02", "#card03", "#card04",
    "#card05", "#card06", "#card07", "#card08",
    "#card09", "#card10", "#card11", "#card12",
    "#card13", "#card14", "#card15", "#card16"
]

//contentArray
var content = [ 
    "A", "C", "B", "A",
    "G", "E", "C", "G",
    "B", "D", "D", "F",
    "F", "H", "E", "M",
]

for(let i=0; i<16; i++){
    const card = document.querySelector(idArray[i])
    card.setAttribute("data-content" , content[i]);
    card.addEventListener("click", (event)=>{
        console.log(event.target.getAttribute("data-content"))
    })
    cardArray.push(card);
}
