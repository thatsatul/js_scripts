function fibonacci(n) {
  console.log(' fibonacci for ', n);
  if (n <= 1) {
    console.log(1);
    return 1;
  }
  const res = fibonacci(n - 1) + fibonacci(n - 2)
  console.log(res);
  return res;
}

fibonacci(5);
