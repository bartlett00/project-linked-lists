import LinkedList from "./LinkedList.js";

console.log("hello world!");
let linkedList = LinkedList();

linkedList.append("dog");
linkedList.append("cat");
linkedList.append("parrot");
linkedList.append("hamster");
linkedList.append("snake");
linkedList.append("turtle");
linkedList.prepend("chicken");

console.log(linkedList.size());
console.log(linkedList.head());
console.log(linkedList.tail());
console.log(linkedList.at(1));
console.log(linkedList.contains("turtle"));

console.log(linkedList.tail());
linkedList.pop();
console.log(linkedList.tail());

console.log(linkedList.contains("turtle"));
console.log(linkedList.contains("dog"));
console.log(linkedList.find("turtle"));
console.log(linkedList.toString());
