const grid = document.querySelector('.grid');
// const columns = document.querySelectorAll('.column');
let boxes = document.querySelectorAll('.box');

const addBall = (i) =>{
    boxes[i].innerHTML += `<div class="ball"></div>`;
    boxStack = stackArr[i];
    boxStack.push('green');
    // setTimeout(()=>{
        if(boxStack.size===boxStack.stackTop){
            console.log('Executed');
            boxes[i].innerHTML = ``;
            makeQueue(i,boxStack.pop());
        }
    // },100);
    
    console.log(boxStack.stackTop);
    
    // obj[`${i}`]++;
    // console.log(obj);
}

const removeBall = (i) =>{

}

boxes.forEach((box,i)=>{
    box.addEventListener('click',()=>{
        console.log(i)
        addBall(i);
    })
})



//generating the grid