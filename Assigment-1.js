function sleepIn(weekday, vacation) {
    if (weekday == true && vacation == false) {
        return false;
    } else {
        return true;
    }
}
console.log(sleepIn(true,false));