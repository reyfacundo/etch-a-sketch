const container = document.querySelector('#container');

function generateColor() {
    const hexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    let code = "#";
    for (let i = 0; i < 6; i++) {
        code += hexArray[Math.floor(Math.random() * 16)];
    }
    return code;
} 
function tileCreator(tiles){
    if (+tiles > 100 || +tiles < 1) return alert("Can't enter numbers higher than 100 or lower than 1 !");
    if(typeof tiles  === "number") return alert("That's not a number !")
    container.innerHTML = ''
    for (let i = 0; i < (+tiles * +tiles); i++) {
        const div = document.createElement("div");
        const flexBasisValue = `calc(100%/ ${+tiles})`;
        div.style.flexBasis = flexBasisValue;
        div.classList.add('grid-item');
        container.appendChild(div);
        div.addEventListener("mouseover", e => {
            e.target.style.backgroundColor = generateColor();
        }, {once : true});
    }
}

tileCreator('16');

document.querySelector('.change').addEventListener("click", e => {
    let promptResponse = prompt("Enter a number of squares per side you want on the grid. Max 100.");
    tileCreator(promptResponse);
});
document.querySelector('.clear').addEventListener("click", e => {
    const items = document.querySelectorAll('.grid-item');
    items.forEach(element => {
        element.style.backgroundColor = "#7da876"
        element.addEventListener("mouseover", e => {
            e.target.style.backgroundColor = generateColor();
        }, {once : true});
    });
});







// Old code v

// const container = document.querySelector('#container');

// function generateColor() {
//     const hexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
//     let code = "#";
//     for (let i = 0; i < 6; i++) {
//         code += hexArray[Math.floor(Math.random() * 16)];
//     }
//     return code;
// }

// for (let i = 0; i < 256; i++) {
//     const div = document.createElement("div");
//     div.classList.add('grid-item');
//     container.appendChild(div);
//     div.addEventListener("mouseover", e => {
//         e.target.style.backgroundColor = generateColor();
//         e.target.style.backgroundColor = generateColor();
//     }, {once : true});
// }

// const btn = document.querySelector('#btn');
// btn.addEventListener("click", e => {
//     let promptResponse = prompt("Enter a number of squares per side you want on the grid. Max 100.");
//     if (+promptResponse > 100) return alert("Can't enter numbers higher than 100.");
//     console.log(promptResponse);
//     container.innerHTML = ''
//     for (let i = 0; i < (+promptResponse * +promptResponse); i++) {
//         const div = document.createElement("div");
//         const flexBasisValue = `calc(100%/ ${+promptResponse})`;
//         const paddingBottomValue = `calc(100%/ ${+promptResponse})`;
//         div.style.flexBasis = flexBasisValue;
//         div.style.paddingBottom = paddingBottomValue;
//         div.classList.add('grid-item');
//         container.appendChild(div);
//         div.addEventListener("mouseover", e => {
//             e.target.style.backgroundColor = generateColor();
//             e.target.style.backgroundColor = generateColor();
//         }, {once : true});
//     }
// })
