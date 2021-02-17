require('./mystyles.scss');

console.log('hello');

function getList() {
    let req = new Request('http://api.localhost');
    fetch(req)
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        })
}

const evtSource = new EventSource("//ws.localhost");

evtSource.addEventListener("item", function(event) {
    console.log("new item")
    console.log(event.data)
    const eventList = document.getElementById("list");
    const newElement = document.createElement("li");
    const title = JSON.parse(event.data).title;
    newElement.textContent = "title: " + title;
    eventList.appendChild(newElement);
  });

evtSource.onopen = function(status) {
    console.log(status);
}

evtSource.onerror = function(status) {
    console.log("error detected");
    console.log(status);
}
