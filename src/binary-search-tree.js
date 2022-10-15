const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.head = null;
  }

  root() {
      return this.head;
  }

  add(data){
    let newNode = new Node(data);
    if (!this.head)  return this.head = newNode;
    
    let currentNode =this.head;
    function insertNode(node, data){
      if (data < node.data) {
          if (!node.left) return node.left = newNode;
          insertNode(node.left, data);
      } else {
          if (!node.right) return node.right = newNode;
          insertNode(node.right, data);    
      }
    }
    currentNode = insertNode(currentNode, data)
  }

  has(data) {
    function findNode(node, data) {
      if (!node) return false;
      if (node.data == data) return true;
      return (data < node.data)? findNode(node.left, data): findNode(node.right, data);  
    }
    return findNode(this.head, data);
  }

  find(data) {
    function findNode(node, data) {
      if (!node) return null;
      if (node.data == data) return node;
      return (data < node.data)? findNode(node.left, data): findNode(node.right, data);  
    }
    return findNode(this.head, data);

  }

  remove(data){
    function removeNode(node, data){
       if (!node) return null;
      
      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node
      }else if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      }else{
        if (!node.left && !node.right) {return null}
        if (!node.left) {return node.right}
        if (!node.right) {return node.left}
        
        
        let lastNode = node.right;
        while (lastNode.left) {
          lastNode = lastNode.left;
        }
        node.data = lastNode.data;

        node.right = removeNode(node.right, lastNode.data);
        return node;
      }
    }
    this.head = removeNode(this.head, data);
  }
  

  min() {
    if(!this.head) return null;
    let currentNode = this.head;
    while(currentNode.left) {
        currentNode = currentNode.left;
    }
    return currentNode.data; 
  }

  max() {
      if(!this.head) return null;
      let currentNode = this.head;
      while(currentNode.right) {
          currentNode = currentNode.right;
      }
      return currentNode.data; 
  }
}

module.exports = {
  BinarySearchTree
};