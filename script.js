const container = document.querySelector('#container');

function generateColor() {
    const hexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    let code = "#";
    for (let i = 0; i < 6; i++) {
        code += hexArray[Math.floor(Math.random() * 16)];
    }
    return code;
}

for (let i = 0; i < 256; i++) {
    const div = document.createElement("div");
    div.classList.add('grid-item');
    container.appendChild(div);
    div.addEventListener("mouseover", e => {
        e.target.style.backgroundColor = generateColor();
        e.target.style.backgroundColor = generateColor();
    }, {once : true});
}

const btn = document.querySelector('#btn');
btn.addEventListener("click", e => {
    let promptResponse = prompt("Enter a number of squares per side you want on the grid. Max 100.");
    if (+promptResponse > 100) return alert("Can't enter numbers higher than 100.");
    console.log(promptResponse);
    container.innerHTML = ''
    for (let i = 0; i < (+promptResponse * +promptResponse); i++) {
        const div = document.createElement("div");
        const flexBasisValue = `calc(100%/ ${+promptResponse})`;
        const paddingBottomValue = `calc(100%/ ${+promptResponse})`;
        div.style.flexBasis = flexBasisValue;
        div.style.paddingBottom = paddingBottomValue;
        div.classList.add('grid-item');
        container.appendChild(div);
        div.addEventListener("mouseover", e => {
            e.target.style.backgroundColor = generateColor();
            e.target.style.backgroundColor = generateColor();
        }, {once : true});
    }
})
