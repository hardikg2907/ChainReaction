const grid = document.querySelector('.grid');
// const columns = document.querySelectorAll('.column');
let boxes = document.querySelectorAll('.box');
const list = document.querySelectorAll('li');
let numOfPlayers=0;
let count=[...Array(54).fill(0)];
document.addEventListener('DOMContentLoaded',()=>{for(let i=0;i<54;i++) boxes[i].style=`border-color: ${nextColor}`;})

const addBall = async (i,color) =>{

    boxStack = stackArr[i];
    // console.log("stack= ",stackArr);
    boxStack.push(color,i);

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
    box.addEventListener('click',async ()=>{

        let color = getColor();
        if(box.innerHTML==='') 
        {
            await addBall(i,color);
            playerTurn();
        }
        else
        {
            if(stackArr[i].color==color) 
            {
                await addBall(i,color);
                playerTurn();
            }
        } 
    })
})

list.forEach((li,i)=>{
    li.addEventListener('click',()=>{
        if(li.id=='okay' && numOfPlayers!==0){
            document.querySelector('.player-options').style="display:none";
            grid.style="display:flex";
        }
        else if(li.id!='okay'){
            numOfPlayers = li.id;
            li.style="background-color: #ededed";
            document.getElementById('okay').style = "background-color:green";
        }   
    })
})
