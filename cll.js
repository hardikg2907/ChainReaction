let turns=0;
let colors=[];
let nobc=[...Array(colors.length).fill(0)];

class Node{
    constructor(color){
        this.color = color;
        this.next = null;
    }
}

class CLL{
    constructor(){
        this.count = 0;
        this.head = undefined;
    }

    push(color){
        let node = new Node(color);
        colors.push(color);
        let current = this.head;
        if (current == undefined) {
            this.head = node;
            node.next = this.head;
        } else {
            while(current.next != this.head){
                current = current.next;
            }
            current.next = node;
            node.next = this.head;
        }
        this.count++;
        // return this;
    }

    removeAt(index){
        if (index >= 0 && index < this.count) {
        //    if (this.isEmpty()) {
        //        return undefined;
        //    }
           let current = this.head
            if (index == 0) {
                this.head = current.next;
            } else if(index == this.count-1) {
                const previous = this.getcolorAt(index-1);
                current = previous.next;
                previous.next = this.head;
            }else{
               const previous = this.getcolorAt(index -1);
               current = previous.next;
               previous.next = current.next;
            }

            this.count--;
            colors.splice(index,1);
            updateNobc();
            // return current.color;
        }
        // return undefined;
    }

    getcolorAt(index) {
        let node = this.head;
        if (index >= 0 && index < this.count) {
            for (let i = 0; i < index; i++) {
                node = node.next;
            }
            return node;
        }
        return undefined;
    }
}
const cll = new CLL();

const updateNobc = ()=> {
    nobc=[...Array(colors.length).fill(0)];
    for(let i=0;i<54;i++){
        boxStack = stackArr[i];
        let ind = colors.indexOf(`${boxStack.color}`);
        nobc[ind]++;
    }
}


// node = cll.head;
const playerTurn = async ()=>{
    let node = cll.head;
    let t = turns%cll.count;
    while(t--) {
        node=node.next;
    }
    if(cll.count!=1){
        let currentColor=getColor();
        turns++;
        // Player selects the box
        // Box operations (Can't select box of other color)
        // Selected box operations (Changing color of neighboring boxes)
        // Reevaluate the nobc of every player
        updateNobc();
        if(turns>colors.length){
            for(let i=0;i<cll.count;i++){
                console.log(nobc.indexOf(0));
                cll.removeAt(nobc.indexOf(0));
                turns = cll.count+1+colors.indexOf(currentColor);
            }
        }
        // If (turns<number of players) kn
        // Else remove players with nobc=0
        // Remove that particular color from colors array
        // Call next if lenght not 1
        // cll.removeAt(0);
        // playerTurn(node.next);
    }
    else{
        console.log('Winner',node.color)
    }

    // console.log(node.color);
}

const getColor = ()=>{
    console.log("getcolor=",colors[turns%cll.count]);
    return colors[turns%cll.count];
}

cll.push('yellow')
cll.push('red')
cll.push('blue')
console.log('Working')
// playerTurn();