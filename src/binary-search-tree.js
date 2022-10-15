const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.root = null;
  }

  root() {
      return root;
  }

  add(data){
    let newNode = new Node(data);
    if (!this.root)  return this.root = newNode;
    
    let currentNode =this.root;
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
    return findNode(this.root, data);
  }

  find(data) {
    function findNode(node, data) {
      if (!node) return null;
      if (node.data == data) return node;
      return (data < node.data)? findNode(node.left, data): findNode(node.right, data);  
    }
    return findNode(this.root, data);

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
    this.root = removeNode(this.root, data);
  }
  

  min() {
    if(!this.root) return null;
    let currentNode = this.root;
    while(currentNode.left) {
        currentNode = currentNode.left;
    }
    return currentNode.data; 
  }

  max() {
      if(!this.root) return null;
      let currentNode = this.root;
      while(currentNode.right) {
          currentNode = currentNode.right;
      }
      return currentNode.data; 
  }
}

module.exports = {
  BinarySearchTree
};