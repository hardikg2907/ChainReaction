const grid = document.querySelector('.grid');
// const columns = document.querySelectorAll('.column');
let boxes = document.querySelectorAll('.box');
let count=[...Array(54).fill(0)];

const addBall = async (i) =>{
    boxes[i].innerHTML += `<div class="ball"></div>`;
    boxStack = stackArr[i];
    // console.log("stack= ",stackArr);
    boxStack.push('green');
    
    // boxes.classList = ['box',`box${count[i]}`];
    // boxes[i].classList.add(`box${count[i]}`)
    // setTimeout(()=>{
        if(boxStack.size===boxStack.stackTop){
            // console.log('Executed');
            boxes[i].innerHTML = ``;
            // count[i]=0;
            // boxes.classList=['box'];
            makeQueue(i,boxStack.pop());
        }
    // },100);
    
    // console.log(boxStack.stackTop);
    
    // obj[`${i}`]++;
    // console.log(obj);
}

const removeBall = (i) =>{

}

boxes.forEach((box,i)=>{
    box.addEventListener('click',()=>{
        // console.log(i)
        addBall(i);
    })
})



//generating the grid