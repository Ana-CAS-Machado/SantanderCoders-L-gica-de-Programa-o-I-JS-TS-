function fibonacci(n) {
 const sequencia = [1, 1]; 
 for (let i = 2; i < n; i++) {
     sequencia[i] = sequencia[i - 1] + sequencia[i - 2]; 
 }
 return sequencia.slice(0, n);
}
console.log(fibonacci(6)); 
console.log(fibonacci(14)); 