// New Node
class Node {
   constructor(value) {
        this.value = value;
        this.next = null;
   }
};

// Creates New Linked List
class LinkedList {
   constructor(value){
      const newNode = new Node(value);
      this.head = newNode;
      // this.tail = newNode or
      this.tail = this.head //since only one element is there.
      this.length = 1;
   }

   // add new node at the end
   push(value) {
      const newNode = new Node(value);
      // edge case : if there's no head or tail / no element in LL
      if(!this.head){
         this.head = newNode;
         this.tail = newNode;
      }
      else {
         // Esiting 4, i will add 10
         //Update Existing node's next to new node
         this.tail.next = newNode;
         // Updating new node as the tail
         this.tail = newNode;
      }

      this.length++;

      // return the entire LinkedList for a particular New Instance
      return this;
   }

   // POP
   pop() {
      // Edge Case 1 : if LL is empty
      if (!this.head){
         return undefined;
      }
      
      // When LL has more than 2 items
         let temp = this.head;
         let pre = this.head; // pre points to n-1 node
         // 11 -> 3 -> 23 -> 7 -> 4 :null
         while(temp.next){
            pre = temp;
            temp = temp.next;
         }

         this.tail = pre;
         this.tail.next = null;
         this.length--;

         // Edge Case 2 : if LL has only 1 item
         if(this.length === 0){ //0 after popping the one item
            this.head = null;
            this.tail = null;
         }

         return temp;
      }
   
   // Unshift : Adds element to first node
   // 4 to be Unshifted 11 -> 3 -> 23 -> 7 : null
   unshift(value){
      const newNode =new Node(value);
      // if LL is empty
      if(!this.head){
         this.head = newNode;
         this.tail = newNode;
      }
      else {
         newNode.next = this.head;
         this.head = newNode;
      }

      this.length++;
      return this;
   }

   // Shift : First element to be removed
   // 11 to be Shifted from 11 -> 3 -> 23 -> 7 : null
   shift() {
      // If LL is empty
      if(this.head === null){
         return undefined;
      }

      let temp = this.head;
      this.head = this.head.next;
      temp.next = null;
      this.length--;

      // For Single Item in LL after decrement
      if(this.length === 0){
         this.tail = null
      }
      return temp;
   }

   // Get Node from Index
   get(index) {
      if(index < 0 || index >= this.length){
         return undefined;
      }
      let temp = this.head;
      for(let i=0; i<index ; i++){
         temp = temp.next;
      }
      return temp;
   }

   // Set New Value in Particular Index
   set(index, value) {
      let temp = this.get(index);  // this will get the current item at that location
      if(temp){
         temp.value = value;
         return true;
      }
      return false;
   }
   
}

// Default LinkedList : 11 -> 3 -> 23 -> 7
const myNewLinkedList = new LinkedList(11);
myNewLinkedList.push(3);
myNewLinkedList.push(23);
myNewLinkedList.push(7);

// myNewLinkedList.pop();
// myNewLinkedList.unshift(11);
// myNewLinkedList.shift();
//myNewLinkedList.get(2);
//myNewLinkedList.set(2,100);
