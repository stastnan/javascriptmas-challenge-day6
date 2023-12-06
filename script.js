function generateSecretSantaPairs(arr) {
  const shuffledArray = [...arr];

  for (let i = 0; i < shuffledArray.length; i++) {
    const j = Math.floor(Math.random() * shuffledArray.length);
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }

  // modulo (%) operator here makes sure that from the last element is not the logic continuing in index + 1, but that it is going back to the very first element in the array

  const pairs = {};
  for (let i = 0; i < shuffledArray.length; i++) {
    const giver = shuffledArray[i];
    const receiver = shuffledArray[(i + 1) % shuffledArray.length];
    pairs[giver] = receiver;
  }

  return pairs;
}

const people = ["Alice", "Bob", "Carly", "Dan", "Ed", "Ferdinand", "Ginny"];
console.log(generateSecretSantaPairs(people));
