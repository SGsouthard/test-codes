function feast(beast, dish) {
    //your function here
      if (beast.charAt(0) === dish.charAt(0) && beast.charAt(-1) === dish.charAt(-1)) {
        console.log(beast.charAt(0), dish(charAt(0), beast.charAt(-1), dish(charAt(1))))
        return true
      } else {
    console.log(beast.charAt(0), dish(charAt(0), beast.charAt(-1), dish(charAt(1))))
      return false}
    }

console.log(feast("great blue heron", "garlic naan"), true);
console.log(feast("chickadee", "chocolate cake"), true);
console.log(feast("brown bear", "bear claw"), false);