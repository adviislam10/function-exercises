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
    let sum = 0;
    for (let n = start; n <= stop; n += step) {
        sum += n
    }
    return sum
}

console.log("The sum of 1 + 2 + … + 1000 is " + arithmeticSum(1, 1000, 1) + ".");
console.log("The sum of 10 + 15 + … + 50 is " + arithmeticSum(10, 50, 5) + ".");

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