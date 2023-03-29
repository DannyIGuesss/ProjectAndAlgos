// Building a Linked List


class Node { //Singly-linked list node class
    constructor(data){
        this.data = data // golds value for this node
        this.next = null // pointer to next node
    }
}

class SLL {
    constructor() {
        this.head = null
    }
    
    addFront(val) {
        let newNode = new Node(val);
        newNode.next = this.head;
        this.head = newNode;
        return this.head
    }

    removeFront() {
        if(this.head===null) {
            return this.head
        }
        let removedNode = this.head
        this.head = removedNode.next
        removedNode.next = null
        return this.head
    }

    front() {
        if(this.head === null) {
            return null
        }else{
            let nodeData = this.head.data
            return nodeData
        }
    }
}

//ASSIGNMENT STARTS HERE

let SLL1 = new SLL()
// // SLL1.removeFront()
// // console.log(SLL1);
console.log(SLL1.front());
SLL1.addFront(18)
// console.log(SLL1.front()); 
SLL1.addFront(14)
// // console.log(SLL1);
// // SLL1.removeFront()
// console.log(SLL1);


//testing for front

console.log(SLL1.front());
SLL1.removeFront()
console.log(SLL1.front());
console.log(SLL1);
