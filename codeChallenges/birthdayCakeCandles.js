// You are in charge of the cake for your niece's birthday and have decided the cake will have one candle for each year of her total age. When she blows out the candles, she’ll only be able to blow out the tallest ones. Your task is to find out how many candles she can successfully blow out.

// For example, if your niece is turning  years old, and the cake will have  candles of height , , , , she will be able to blow out  candles successfully, since the tallest candles are of height  and there are  such candles.

// Function Description

// Complete the function birthdayCakeCandles in the editor below. It must return an integer representing the number of candles she can blow out.

// birthdayCakeCandles has the following parameter(s):

// ar: an array of integers representing candle heights
// Input Format

// The first line contains a single integer, n, denoting the number of candles on the cake.
// The second line contains n space-separated integers, where each integer i describes the height of candle i.

function birthdayCakeCandles(ar) {
  let age = ar.length; //number of candles = age,  each index is a candle's height
  let sorted = ar.sort(function (a, b) {
    return b - a;
  }); //sorts numbers largest to smallest
  let count = 1; //minimum 1 candle is going to get blown out always

  for (let i = 0; i < age; i++)
    if (ar[i] === ar[i + 1]) {
      count += 1;
    } else {
      return count;
    }
  return count;
}
let ar = 4;
birthdayCakeCandles(ar);
