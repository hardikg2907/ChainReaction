const grid = document.querySelector('.grid');
// const columns = document.querySelectorAll('.column');
let boxes = document.querySelectorAll('.box');
const list = document.querySelectorAll('li');
const btn = document.querySelector('#okay');
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

const check = (id)=>{
    console.log(id);
    for(let i=2;i<=4;i++)
    {   
        let li = document.getElementById(i);
        if(i!=id) li.style="background-color: none";
        else li.style="background-color: #ededed";
    }
}

list.forEach((li,i)=>{
    li.addEventListener('click',()=>{
        if(li.id>=2){
            numOfPlayers = li.id;
            check(li.id);
            document.getElementById('okay').style = "background-color:green";
        }   
    })
})

btn.addEventListener('click',()=>{
    if(numOfPlayers!==0){
        document.querySelector('.player-options').style="display:none";
        grid.style="display:flex";

        for(let i=0;i<numOfPlayers;i++){
            cll.push(players.shift());
        }
    }
})
