const BinarySearchTree = require('./BinarySearchTree');

test('Should create an empty tree', () => {
  const bst = new BinarySearchTree();
  expect(bst.root).toBe(null);
});

test('Should insert nodes correctly', () => {
  const bst = new BinarySearchTree();
  bst.insert(10);
  bst.insert(7);
  bst.insert(5);
  bst.insert(15);
  //first node inserted is always the root
  expect(bst.root.value).toBe(10);
  expect(bst.root.left.value).toBe(7);
  expect(bst.root.left.left.value).toBe(5);
  expect(bst.root.right.value).toBe(15);
});

test('Should return a node when finding a value that exists', () => {
  const bst = new BinarySearchTree();
  bst.insert(10);
  bst.insert(7);
  bst.insert(15);
  expect(bst.find(7).value).toBe(7);
});

test('Should return null when finding a value that does not exist', () => {
  const bst = new BinarySearchTree();
  bst.insert(10);
  bst.insert(7);
  bst.insert(15);
  expect(bst.find(20)).toBe(null);
});