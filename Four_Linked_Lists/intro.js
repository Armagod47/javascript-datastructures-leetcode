// Linked List
// Arrays are in contiguous memory but LL is not, it can be in any places in memory.
// LL has Head pointing to 1st element & Tail pointing to last element.
// Each Item in LL points to next item, & last item points to null
// Null Terminated List

// Big O of LL
/*
 Add Something at the end : O(1)
 Removing from the end (Pop) : O(n) . We have to iterate through the entire LL from head, to point the tail at the last node, after removal of the item
 Add or Remove at the start : O(1)

 Insert or Remove  in the middle/index of LL : O(n) . We have to start at the head and iterate through the entire LL from head

 Finding an item with Value : O(n) we start at the head and iterate through the LL
 Finding an item with index : O(n) we start at the head and iterate through the LL
 */