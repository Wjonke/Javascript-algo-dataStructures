# BigO notation or worst case scenario time complexity

## Rather than counting seconds or ms which can vary machine to machine, or even on the same machine, we count operations

- Math operations are much more constant in a function || time is always variable
- regardless of the size of n, the number operations do not change in a function unless they are multiplied by the size of n such as a loop
- if operations are multiplied by N such as in a loop we have to factor in that as N gets bigger, the number of operations increase by a factor of N!

## for example -> log(n)

```
function addUpTo2(n){
    return n * (n+1) /2
}
console.log(addUpTo2(100))
```

- this has 3 operations regardless of the size of N its always 3 operations (\*, +, /)
- this version is much faster, but less readable, its going to come down to how important readability is.
- however the run time on this function is almost negligible regardless of the size of N

- BigO for this solution is "linear" or "O(1)" or "log(n)" ...its basically flat on a chart as N grows

## another example -> O(n)

```
function addUpTo(n) {
  let total = 0;
  //we want i to start at 1
  for (let i = 1; i <= n; i++) {
    total += i; //iterates by what ever i is, not just adding 1
  }
  return total;
}
console.log(addUpTo(100));
```

- on the other hand, this starts with 1 operation (total += i;) (lots of misc assignments and comparisons but don't worry about those in general)
- but since we are looping through it N times, the amount of operations is directly multiplied by N , in this case n is 100 so we now have 100 operations!
- since we only multiply by a factor of N one time, its not terrible, it can get much worse. but this is about as much as we want in general

- BigO for this solution is "f(n)" or "O(n)" ...its it rises in proportion to the size of n
- even if we added a separate loop inside of the function, while it increases operations, it still is only growing by a factor of N, BigO is still O(n) NOT O(n^2) or (N squared)
- However, if it were a NESTED LOOP, that changes everything and compounds operations by another factor of N and makes it a BigO of O(n^2)

## Another other Example -> O(n^2)

```
function printAllPairs(n) {
    for(let i = 0; i<n; i++){
        //NESTED LOOP//
        for(let j = 0; j<n; j++){
        console.log(i, j)
        }
    }
}
```

- A NESTED LOOP, changes everything and
- It compounds operations by another factor of N and makes the function a BigO of O(n^2)
- it has a O(n) nested in an O(n) == O(n^2)
