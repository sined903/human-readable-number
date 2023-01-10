module.exports = function toReadable (number) {
  const units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const teens = {
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen', 
    19: 'nineteen'
  }
  
  const decade = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    
    let numberToString = number.toString();
    let numberLength = numberToString.length;

    if (numberLength === 1) {
        return units[number];
    } else if (numberLength === 2) {

        if (numberToString.charAt(1) === "0") {
            console.log(true)
            return decade[numberToString.charAt(0) - 1]
        } else if (number < 20) {
            return teens[number];
        } else {
            return `${decade[numberToString.charAt(0) - 1]} ${units[numberToString.charAt(1)]}`
        }

    } else if (numberLength === 3) {

        let twoLastSymbol = `${numberToString.charAt(1)}${numberToString.charAt(2)}`.toString();

        if (numberToString.charAt(1) === "0" && numberToString.charAt(2) === "0") {
            return `${units[numberToString.charAt(0)]} hundred`
        } else if (numberToString.charAt(2) === "0") {
            return `${units[numberToString.charAt(0)]} hundred ${decade[numberToString.charAt(1) - 1]}`
        } else if (twoLastSymbol < 10) {
            return `${units[numberToString.charAt(0)]} hundred ${units[numberToString.charAt(2)]}`;
        } else if (twoLastSymbol < 20) {
            return `${units[numberToString.charAt(0)]} hundred ${teens[twoLastSymbol]}`;
        } else {
            return `${units[numberToString.charAt(0)]} hundred ${decade[numberToString.charAt(1) - 1]} ${units[numberToString.charAt(2)]}`
        }
    }

}

