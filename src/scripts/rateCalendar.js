// input: JSON string which is an array of objects with two keys each--rate, and date.

// general concept: iterate through each date/rate pair and establish a new date-range any time the rate changes.
// Also need to determine algorithm that can generate a somewhat random HEX color and produces the same output for
// any matching input. Make the algorithm such that 120 and 121 generate completely different colors, not one small variant.

// input: [{"date": “2018-01-17", "rate": "200.00"}]
// output: [{
//    “period-start”: “2018-01-22”,
//    “period-end”: “2018-01-22”,
//    “rate”: “200.00”,
//    “color”: “#0000FF”
//  }]

export function generateHex (n){
    var hexColor = "";
    var rate;
    if (n.slice(-1) % 2 == 0){
      rate = n.split(".").reverse().join("");
    }
    else {
      rate = n.split(".").join("");
    }
    rate.split("").forEach(function(digit){
        digit = parseInt(digit)**3;
        hexColor += digit.toString(16);
    })
    var prefix = hexColor.length <= 5 ? "#0" : "#";
    return prefix + hexColor.slice(-6);
}

export function rateParser (data) {
    var data = JSON.parse(data),
        rateColorCalendar = [],
        newRange = {},
        previousDate = data[0].date,
        currentRate = data[0].rate,
        i;

        newRange["period-start"] = previousDate;
        newRange["rate"] = currentRate;
        newRange["color"] = generateHex(currentRate);

    for (i = 1; i < data.length; i++) {
        var date = data[i].date,
            rate = data[i].rate;

        if (currentRate !== rate || date.slice(-2)-1 != previousDate.slice(-2)) {
            newRange["period-end"] = previousDate;
            rateColorCalendar.push(newRange);
            var newRange = {};
            newRange["period-start"] = date;
            newRange["rate"] = rate;
            newRange["color"] = generateHex(rate);
            currentRate = rate;
        }
        if (i === data.length-1) {
          newRange["period-end"] = date;
          rateColorCalendar.push(newRange);
        }
        previousDate = date;
    }
    return JSON.stringify(rateColorCalendar);
}
