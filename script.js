$(document).ready(function () {
    $(".submit").click(function () {
        // add a loading screen
        $(".search-output").html('<div class="loader"></div>');
        $(".search-output").css("align-items", "center");



        const api_key = '67793da13a45b414acd274ea' // replace this with your api key. The current api key has 15 more requests that can be made.
        // input variables
        var flightString = $(".flight-number").val();
        var flightDate = $(".flight-date").val();
        var regex = /^([A-Za-z]{1,3})(\d+)$/;
        var match = flightString.match(regex);
        var dateObj = new Date(flightDate);

        // variables for the API
        if (match) {
            var flightCode = match[1];
            var flightNumber = match[2];
        }
        else {
            $(".search-output").html('<div class="error-message"><p>No Data Found. Please make sure the data entered is valid.</p></div>');
            return;
        }

        var formattedDate = dateObj.getFullYear() +
            String(dateObj.getMonth() + 1).padStart(2, '0') +
            String(dateObj.getDate()).padStart(2, '0');

        //send a request to the api
        $.ajax({
            url: `https://api.flightapi.io/airline/${api_key}`,
            type: "GET",
            data: {
                num: flightNumber,
                name: flightCode,
                date: formattedDate
            },
            success: function (response) {
                $(".search-output").css("align-items", "");


                // display the information obtained from the api
                var departure = response[0].departure[0];
                var arrival = response[1].arrival[0];


                var output = `
                    <div class="search-output-header">
                        <b>${flightString}</b> 
                        <p>Flight Status: <b>${departure.status}</b></p> 
                    </div>

                    <div class="search-output-body">        
                        <div class="search-output-departure">
                            <b>Departure</b>
                            ${generateDetails(departure)}
                        </div>
                        <div class="search-output-arrival">
                            <b>Arrival</b>
                            ${generateDetails(arrival)}
                        </div>
                    </div>`;

                // Function to dynamically generate the key-value pairs
                function generateDetails(data) {
                    var detailsHtml = '';
                    $.each(data, function (key, value) {
                        if (key != 'status') {
                            detailsHtml += `<p><strong>${key}</strong> ${value}</p>`;
                        }
                    });
                    return detailsHtml;
                }

                $(".search-output").html(output);
            },
            error: function (error) {
                $(".search-output").html('<div class="error-message"><p>No Data Found. Please make sure the data entered is valid.</p></div>');
                return;
            }
        });


    });
});
