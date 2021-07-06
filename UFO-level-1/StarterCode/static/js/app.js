// from data.js
var tableData = data;

// Select the button
var button = d3.select("#filter-btn");

//Select the form
var form = d3.select("form");

//Create event handlers
button.on("click", runEnter);
form.on("submit", runEnter);

//Complete the event handler function for the form
function runEnter() {
    
    //Prevent page from refreshing
    d3.event.preventDefault();

    //Select the input element and get the raw HTML node
    var inputElement =  d3.select(".form-control");

    //Get the value property of the input element
    var inputValue = inputElement.property("value");

    console.log(inputValue);
    console.log(tableData);

    var table = d3.select("#ufo-table");

    //Remove any existing values from the table to reset in case new filter date
    table.html("");

    var tbody = table.append("tbody");


    //Filter data according to the date user provided
    var filteredData = tableData.filter(ufodata => ufodata.datetime === inputValue);

    //For each ufo data in the new filteredData
    filteredData.forEach(function (UFO) {
        console.log(UFO);
        //Create a row
        var row = tbody.append("tr");

        //For each 'entry' in the data
        Object.entries(UFO).forEach(function([key, value]) {
            console.log(key, value);
            //Add a td with the value
            var cell = row.append("td").text(value);
        });
    });

}
