//Task-1:- sleepIn
function sleepIn(weekday, vacation) {

    //checking the condition for validation
    if (weekday == true && vacation == false) {
        return false;
    } else {
        return true;
    }
}
//cosole output
console.log(sleepIn(true, false));

//Task-2:- icyHot
function icyHot(temp1, temp2) {

    //checking the condition for validation
    if ((temp1 < 0 || temp2 < 0) && (temp1 > 100 || temp2 > 100)) {
        return true;
    } else {
        return false;
    }
}

//cosole output
console.log(icyHot(2, 120));