// Grades
function letterGrade(percentGrade) {
    if (percentGrade < 50) {
        return 'F'
    } else if (percentGrade < 60) {
        return 'D'
    } else if (percentGrade < 70) {
        return 'C'
    } else if (percentGrade < 80) {
        return 'B'
    } else {
        return 'A '
    }
}

// Temperatures
function fahrToCels(fahrTemp) {
    return ((fahrTemp - 32) * 5 / 9)
}

// Tickets
function determineTicket(speed, limit) {
    if (speed <= limit) {
        return 'No Ticket'
    } else if (speed - limit <= 20) {
        return 'Small Ticket'
    } else {
        return 'Big Ticket'
    }
}

// Divisibility
function isDivisible(num1, num2) {
    if (num1 % num2 == 0) {
        return true
    } else {
        return false
    }
}

// Arithmetic
function arithmeticSum(start, stop, step) {
    let addStep = step;
    let sum = start;
    while (addStep < stop) {
        addStep += step;
        sum += addNumber;
    }
    return sum;
}

// Constrain
function constrain(n, low, high) {
    if (n < low) {
        return low;
    } else if (n > high) {
        return high;
    } else {
        return n
    }
}
