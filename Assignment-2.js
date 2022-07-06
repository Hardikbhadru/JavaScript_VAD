
// makeBricks
function makeBricks(small, big, goal){
    if(small+5*big<goal)
      return false;
    else if(goal%5>small)
      return false;
    return true;
  }

// loneSum
function loneSum(a, b, c){
    if(a==b && b==c && a==c)
      return 0;
    else if(a==b)
      return c;
    else if(b==c)
      return a;
    else if(a==c)
      return b;
    return a+b+c;
  }

//   luckySum
function luckySum(a, b, c){
    if(a==13)
      return 0;
    if(b==13)
      return a;
    if(c==13)
      return a+b;
    return a+b+c;
  }

//   noTeenSum
