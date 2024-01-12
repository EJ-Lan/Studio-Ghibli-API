// // Create a request variable and assign a new XMLHttpRequest object to it.
// var request = new XMLHttpRequest()

// // Open a new connection, using the GET request on the URL endpoint
// request.open('GET', 'https://ghibli.rest/films', true)

// request.onload = function () {
//   // Begin accessing JSON data here
// }

// // Send request
// request.send()


// METHOD 2
async function getData() {
    const response = await fetch('https://ghibli.rest/films')
    const data = await response.json()
}

// Begin accessing JSON data here
var data = JSON.parse(this.response)

data.forEach((movie) => {
  // Log each movie's title
  console.log(movie.title)
})