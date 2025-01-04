# Flight-Information-App

## About the application

A basic web application that retrieves flight information using an API called FlightAPI.

## Setup Instructions

This web application does not require any additional dependencies to be installed. You only need to clone the repository and open the `index.html` file in a web browser or serve it using a local HTTP server.

### API Key

The API key is stored in line 3 of `script.js`. You can head over to https://www.flightapi.io/ to create an account and obtain your API key. Once you receive it, add your API key to this variable.

## Usage Instructions

There are two input fields for the user to perform their query: `Flight Number` and `Date`. To test the web application, you can obtain the flight number and date by heading to the link below and perform a search based on the origin and destination airports:

https://www.flightaware.com/live/findflight/

This provides you with a list of flight numbers with their data to test the application.

## Approach

For the design, the intent was to have something minimal that does not overwhelm the user with colors that have a high contrast. A black and white theme has been chosen to help with visibility.

For the backend, it was vital to choose an the option that is viable and provides functionality. Many options in the market are paid and the free ones require you to verify yourself (which takes over a day). Given the time limit and the premise of the application, I chose FligthtAPI. It allows 20 free request per month, which is acceptable for testing.
