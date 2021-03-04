function reduce_add(num) {
    if (num < 10) {
        return num;
    }
    var i = 0;
    var j = 0;
    for (;true;) {
        if (num < 10) {
            i += num;
            break;
        }
        j = num % 10;
        num = parseInt(num / 10);
        i += j;
    }
    if (i >= 10) {
        return reduce_add(i);
    } else {
        return i;
    }
}
