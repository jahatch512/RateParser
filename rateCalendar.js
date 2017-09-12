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

function generateHex (n){
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
    return "#0" + hexColor.slice(-5);
}

function rateParser (data) {
    var data = JSON.parse(data);

    var rateColorCalendar = [],
        newRange = {},
        previousDate = data[0].date,
        currentRate = data[0].rate;

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
            newRate = true;
        }
        if (i === data.length-1) {
          newRange["period-end"] = date;
          rateColorCalendar.push(newRange);
        }
        previousDate = date;
        newRate = false;
    }
    return JSON.stringify(rateColorCalendar);
}

var testArray = [
    {"date": "2018-01-01", "rate": "199.99"},
    {"date": "2018-01-02", "rate": "199.99"},
    {"date": "2018-01-03", "rate": "199.99"},
    {"date": "2018-01-04", "rate": "199.99"},
    {"date": "2018-01-05", "rate": "199.99"},
    {"date": "2018-01-06", "rate": "115.49"},
    {"date": "2018-01-07", "rate": "115.49"},
    {"date": "2018-01-08", "rate": "115.49"},
    {"date": "2018-01-09", "rate": "115.49"},
    {"date": "2018-01-10", "rate": "115.49"},
    {"date": "2018-01-11", "rate": "200.00"},
    {"date": "2018-01-15", "rate": "115.49"},
    {"date": "2018-01-16", "rate": "115.49"},
    {"date": "2018-01-17", "rate": "115.49"},
    {"date": "2018-01-20", "rate": "115.49"},
    {"date": "2018-01-21", "rate": "115.49"},
    {"date": "2018-01-22", "rate": "200.00"}
];

jsonArray = JSON.stringify(testArray);

rateParser(jsonArray);
