const ARRAY_SIZE = 1000; // 1 million elements

// ✅ Test 1: Dynamic Array Growth (Resizing Happens)
console.time("Dynamic Array");
let dynamicArr = [];
for (let i = 0; i < ARRAY_SIZE; i++) {
  dynamicArr.push(i); // Causes resizing
}
console.timeEnd("Dynamic Array");

// ✅ Test 2: Preallocated Array (No Resizing)
console.time("Preallocated Array");
let preallocatedArr = new Array(ARRAY_SIZE);
for (let i = 0; i < ARRAY_SIZE; i++) {
  preallocatedArr[i] = i; // No resizing
}
console.timeEnd("Preallocated Array");
