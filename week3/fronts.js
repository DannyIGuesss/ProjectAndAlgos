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

    // Display assignment

    display() {
        let runner = this.head
        let list = []
        while(runner !== null) {
            list.push(runner.data)
            runner = runner.next
        }
        return list
    }
}

//ASSIGNMENT STARTS HERE

let SLL1 = new SLL()
SLL1.addFront(12)
SLL1.addFront(456)
SLL1.addFront(3.34)
console.log(SLL1.display()); 
console.log(SLL1);
