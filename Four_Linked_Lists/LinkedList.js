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
}

const newLL = new LinkedList(1);
newLL.push(2);
