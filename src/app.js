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

var first = "";
var firstIndex = -1;
var counter = 0;
const result = document.querySelector("#result")
const msg = document.querySelector("#msg")

msg.addEventListener("click",()=>{
    msg.style.display ="none"
    for(let i=0; i<16; i++){
        cardArray[i].innerHTML = ""
        result.innetHTML = "";
        first = ""
        firstIndex =-1
    }
})

for(let i=0; i<16; i++){
    const card = document.querySelector(idArray[i])
    card.setAttribute("data-content" , content[i]);
    card.setAttribute("data-index", i)
    card.addEventListener("click", (event)=>{
        const content = event.target.getAttribute("data-content")
        const index = event.target.getAttribute("data-index")
        console.log(content)
        const span ='<span class="place"></span>';
        event.target.innerHTML = span + content
        if (first.length==0) {
            console.log("üres")
            first = content
            result.innerHTML =counter;
        } else{
            if (first != content){
                counter++
                result.innerHTML = counter;
                
            } else{
                if(firstIndex == index){
                    alert("NE CSALJ HALLO")

                }else{
                console.log(counter)
                console.log("MEGTALÁLTAD")
                msg.style.display ="block"
                }
            }
            
        }
    })
    cardArray.push(card);
}
