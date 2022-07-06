// logic-2


// makeBricks
function makeBricks(small, big, goal) {
    if (small + 5 * big < goal)
        return false;
    else if (goal % 5 > small)
        return false;
    return true;
}

// loneSum
function loneSum(a, b, c) {
    if (a == b && b == c && a == c)
        return 0;
    else if (a == b)
        return c;
    else if (b == c)
        return a;
    else if (a == c)
        return b;
    return a + b + c;
}

//   luckySum
function luckySum(a, b, c) {
    if (a == 13)
        return 0;
    if (b == 13)
        return a;
    if (c == 13)
        return a + b;
    return a + b + c;
}

//   noTeenSum
function roundSum(a, b, c) {
    return round10(a) + round10(b) + round10(c)
}
function round10(num) {
    if (num % 10 < 5)
        return num - (num % 10)
    return num + (10 - num % 10)
}

// roundSum  
function roundSum(a, b, c) {
    return round10(a) + round10(b) + round10(c)
}
function round10(num) {
    if (num % 10 < 5)
        return num - (num % 10)
    return num + (10 - num % 10)
}

//   closeFar
function closeFar(a, b, c) {
    if (Math.abs(a - b) <= 1 && Math.abs(a - c) >= 2 && Math.abs(b - c) >= 2) {
        return true;
    } else if (Math.abs(a - c) <= 1 && Math.abs(a - b) >= 2 && Math.abs(b - c) >= 2) {
        return true;
    } else {
        return false;
    }

}

//  blackjack
function blackjack(a, b) {
    if (a > 21 && b > 21) {
        return 0;
    } else if (a > 21) {
        return b;
    } else if (b > 21) {
        return a;
    }
    let sumA = 21 - a;
    let sumB = 21 - b;
    if (sumA > sumB) {
        return b;
    } else {
        return a;
    }
}

//   evenlySpaced
function evenlySpaced(a, b, c) {
    if (a == b && a == c)
        return true;
    if (a == b || b == c || a == c)
        return false;
    let diff1 = Math.abs(a - b);
    let diff2 = Math.abs(a - c);
    let diff3 = Math.abs(b - c);
    if (diff1 == diff2)
        return true;
    if (diff1 == diff3)
        return true;
    if (diff2 == diff3)
        return true;
    return false;
}

// makeChocolate
function makeChocolate(small, big, goal) {
    let rem = goal % 5;

    if (small + (big * 5) < goal)
        return -1;
    else if (rem <= small && goal - big * 5 > 4)
        return rem + 5;
    else if (rem <= small)
        return rem;
    else
        return -1;

}




// String-1



//helloName 
function helloName(name) {
    return "Hello " + name + "!";
}

//   makeAbba
function makeAbba(a, b) {
    return a + b + b + a;
}

//   makeTags
function makeTags(tag, word) {
    return `<${tag}>` + word + `</${tag}>`;
}

//  makeOutWord 
function makeOutWord(out, word) {
    return out.substring(0, 2) + word + out.substring(2, 4);

}

// extraEnd
function extraEnd(str) {
    return (str.substring(str.length - 2, str.length)).repeat(3)
}

//   firstTwo
function firstTwo(str) {
    if (str.length < 3)
        return str;
    return str.substring(0, 2)
}

//   firstHalf
function firstHalf(str) {
    return str
}


//   withoutEnd
function withoutEnd(str) {
    return str.substring(1, str.length - 1);
}

//comboString   
function comboString(a, b) {
    if (a.length < b.length)
        return a + b + a;
    else
        return b + a + b;
}


//   nonStart
function nonStart(a, b) {
    return a.substring(1, a.length) + b.substring(1, b.length)
}

//   left2
function left2(str) {
    return str.substring(2, str.length) + str.substring(0, 2)
}


//   right2
function right2(str) {
    if (str.length > 1) {
        back = str.substring(str.length - 2, str.length);
        front = str.substring(0, str.length - 2);
        return back + front;
    }
    return str;
}

//   theEnd
function theEnd(str, front) {
    if (front) {
        return str.substring(0, 1);
    }
    return str.substring(str.length - 1);
}

//   withoutEnd2
function withoutEnd2(str) {
    if (str.length <= 1) {
        return '';
    }
    return str.substring(1, str.length - 1);
}

//   middleTwo
function middleTwo(str) {
    if (str.length % 2 == 0) {
        temp = str.substring(str.length);
        mid = temp.substring(0, 2);
        return mid;
    }
    return str;
}

//   endsLy
function endsLy(str) {
    if (str.substring(str.length - 2, str.length) == 'ly') {
        return true;
    } else {
        return false;
    }
}

//   nTwice
function nTwice(str, n) {
    first = str.substring(0, n);
    end = str.substring(str.length - n);
    return first + end;
}

//   twoChar
function twoChar(str, index) {
    if (str.length <= index + 1 || index < 0)
        return str.substring(0, 2);
    else
        return str.substring(index, index + 2);
}


//   middleThree
function middleThree(str) {
    const i = Math.floor(str.length / 2);
    return str.substring(i - 1, i + 2);
}


//   hasBad
function hasBad(str) {
    if (str.length == 3) {
        return str.substring(0, 3) == 'bad';
    }
    if (str.length >= 4) {
        return str.substring(0, 3) == 'bad' ||
            str.substring(1, 4) == 'bad';
    }
    return false;
}

//   atFirst
function atFirst(str) {
    if (str.length == 0) {
        return '@@';
    }
    if (str.length == 1) {
        return `${str}@`;
    }
    return str.substring(0, 2);
}

//   lastChars
function lastChars(a, b) {
    let res = '';
    if (a.length == 0) {
        res += '@';
    } else {
        res += a.charAt(0);
    }
    if (b.length == 0) {
        res += '@';
    } else {
        res += b.charAt(b.length - 1);
    }

    return res;
}

// conCat
function conCat(a, b) {
    if (a.charAt(a.length - 1) == b.charAt(0)) {
        return a + b.substring(1);
    } else {
        return a + b;
    }
}

//   lastTwo
function lastTwo(str) {
    if (str.length < 2) {
        return str;
    }

    return str.substring(0, str.length - 2) + str.charAt(str.length - 1) +
        str.charAt(str.length - 2);
}

//   seeColor
function seeColor(str) {
    if (str.length >= 3 && str.substring(0, 3) == 'red') {
        return 'red';
    }

    if (str.length >= 4 && str.substring(0, 4) == 'blue') {
        return 'blue';
    }

    return '';
}

//   frontAgain
function frontAgain(str) {
    if (str.length < 2) {
        return false;
    }
    return str.substring(0, 2) == str.substring(str.length - 2);
}

// minCat
function minCat(a, b) {
    const min = Math.min(a.length, b.length);
    return a.substring(a.length - min) + b.substring(b.length - min);
}
//   extraFront
function extraFront(str) {
    if (str.length >= 2) {
        str = str.substring(0, 2);
    }
    return str + str + str;
}
//   without2
function without2(str) {
    if (str.length >= 2 &&
        str.substring(0, 2) == str.substring(str.length - 2)) {
        return str.substring(2);
    }
    return str;
}

//   deFront
function deFront(str) {
    if (str.length == 1 && str.charAt(0) != 'a') {
        return '';
    }
    if (str.length >= 2) {
        if (str.charAt(0) != 'a' && str.charAt(1) != 'b') {
            return str.substring(2);
        } else if (str.charAt(0) != 'a') {
            return str.substring(1);
        } else if (str.charAt(1) != 'b') {
            return `a${str.substring(2)}`;
        }
    }
    return str;
}

//  startWord
function startWord(str, word) {
    if (str.length >= word.length &&
        str.substring(1, word.length) == (word.substring(1))) {
        return str.substring(0, word.length);
    }
    return '';
}

//  withoutX 
function withoutX(str) {
    let start = 0;
    let end = str.length;

    if (str.length > 0 && str.charAt(0) == 'x') { start = 1; }

    if (str.length > 1 && str.charAt(str.length - 1) == 'x') {
        end--;
    }
    return str.substring(start, end);
}

//   withoutX2
function withoutX2(str) {
    if (str.length == 1 && str.charAt(0) == 'x') {
        return '';
    }
    if (str.length >= 2) {
        if (str.charAt(0) == 'x' && str.charAt(1) == 'x') {
            return str.substring(2);
        } else if (str.charAt(0) == 'x') {
            return str.substring(1);
        } else if (str.charAt(1) == 'x') {
            return str.charAt(0) + str.substring(2);
        }
    }
    return str;
}


