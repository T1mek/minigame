const board = document.querySelector("#board")
const color = ["#19de20","#102edab5","#f610a9f2","#ee6204f2"," #a610f6f2"]

const SQUARES_NUMBER = 300


for (let i =0; i<SQUARES_NUMBER;i++){
    const square = document.createElement('div')
    square.classList.add("square")
    square.addEventListener("mouseover",()=>{
        setColor(square)
    })
    square.addEventListener("mouseleave",()=>{
        setLeave(square)
    },)
    board.append(square)
}

function setColor(e){
    const color = getColor()
    e.style.backgroundColor = color
    e.style.boxShadow = ` 0 0 2px ${color} , 0 0 10px ${color}`

}
function setLeave(e){
    e.style.backgroundColor = "#1d1d1d"
    e.style.boxShadow = ` 0 0 2px #1d1d1d `
}
function getColor(){
    const index = Math.floor( Math.random() * color.length)
    return color[index]
    
}