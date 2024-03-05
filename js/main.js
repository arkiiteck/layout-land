// Create variables to save image containers
let figure1=document.querySelector(".figure-1")
let figure2=document.querySelector(".figure-2")
let figure3=document.querySelector(".figure-3")
let figure4=document.querySelector(".figure-4")
// Create a list to save the figures
let figureList=[
    figure1,
    figure2,
    figure3,
    figure4
]
// Create variables to save container positions
let figurePositions=[]
// Save position for each figure
for(figure in figureList){
    let figurePosition=figureList[figure].getBoundingClientRect()
    figurePositions.push([figurePosition.left, figurePosition.top])
}
for(positions in figurePositions){
    console.log(figurePositions[positions])
}

documentWidth=document.documentElement.scrollWidth
documentHeight=document.documentElement.scrollHeight
function logMousePosition(event) {
    var mouseX = event.clientX;
    var mouseY = event.clientY;
        figure1.style.left=`${figurePositions[0][0]+(mouseX/30)}px`
        figure2.style.left=`${figurePositions[1][0]+(mouseX/20)}px`
        figure3.style.left=`${figurePositions[2][0]-(mouseX/50)}px`
        figure4.style.left=`${figurePositions[3][0]-(mouseX/60)}px`

        figure1.style.top=`${figurePositions[0][1]+(mouseY/50)}px`
        figure2.style.top=`${figurePositions[1][1]-(mouseY/60)}px`
        figure3.style.top=`${figurePositions[2][1]-(mouseY/30)}px`
        figure4.style.top=`${figurePositions[3][1]+(mouseY/20)}px`
}
document.addEventListener('mousemove', logMousePosition);