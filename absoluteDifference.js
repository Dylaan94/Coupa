// find both the highest and lowest numbers from each array
// compare which of the two pairings (highA - lowB or highB - lowA) returns the highest number and return

const absoluteDifference = (A, B) => {
  let highA = A[0];
  let lowA = A[0];
  let lowB = B[0];
  let highB = B[0];

  for (let i = 0; i < A.length; i++) {
    if (A[i] >= highA) {
      highA = A[i];
    } else if (A[i] <= lowA) {
      lowA = A[i];
    }
  }

  for (let i = 0; i < B.length; i++) {
    if (B[i] >= highB) {
      highB = B[i];
    } else if (B[i] <= lowB) {
      lowB = B[i];
    }
  }

  if (highA - lowB > highB - lowA) {
    return highA - lowB;
  } else {
    return highB - lowA;
  }
};

console.log(absoluteDifference([4, 2, 59, 1], [4, 2, 69, 23]));
