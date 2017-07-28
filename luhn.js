
//1. Reverse the order of the digits in the number.
//2. Take the first, third, ... and every other odd digit in the reversed digits and sum them to form the partial sum s1
//3. Taking the second, fourth ... and every other even digit in the reversed digits:
//4. Multiply each digit by two and sum the digits if the answer is greater than nine to form partial sums for the even digits
//5. Sum the partial sums of the even digits to form s2
//6. If s1 + s2 ends in zero then the original number is in the form of a valid credit card number as verified by the Luhn test.


function check (identifier) {
   var sum     = 0,
        alt     = false,
        i       = identifier.length-1,
        num;
    if (/[^0-9-\s]+/.test(identifier)) return false;

    if (identifier.length < 13 || identifier.length > 19){
        return false;
    }

    while (i >= 0){

        //get the next digit
        num = parseInt(identifier.charAt(i), 10);

        //if it's not a valid number, abort
        if (isNaN(num)){
            return false;
        }

        //if it's an alternate number...
        if (alt) {
            num *= 2;
            if (num > 9){
                num = (num % 10) + 1;
            }
        }

        //flip the alternate bit
        alt = !alt;

        //add to the rest of the sum
        sum += num;

        //go to next digit
        i--;
    }

    //determine if it's valid
    return (sum % 10 == 0);
}

module.exports = check;







