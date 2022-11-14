let turns=0;
let colors=[];

class Node{
    constructor(color){
        this.color = color;
        this.next = null;
        this.nobc=0;
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
            colors.pop(current.color);
            // return current.color;
        }
        // return undefined;
    }
}

const cll = new CLL();


// node = cll.head;
const playerTurn = async ()=>{
    let node = cll.head;
    let t = turns;
    while(t--) {
        node=node.next;
    }
    if(cll.count!=1){
        turns++;
        // Player selects the box
        // Box operations (Can't select box of other color)
        
        // Selected box operations (Changing color of neighboring boxes)
        // Reevaluate the nobc of every player
        // If (counter<number of players) kn
        // Else remove players with nobc=0
        // Remove that particular color from colors array
        // Call next if lenght not 1
        // cll.removeAt(0);
        // playerTurn(node.next);
    }
    else{
        console.log('Winner',node.color)
    }

    console.log(node.color);
}

const getColor = ()=>{
    console.log("getcolor=",colors[turns%cll.count]);
    return colors[turns%cll.count];
}

cll.push('yellow')
cll.push('red')
// cll.push('blue')
console.log('Working')
// playerTurn();