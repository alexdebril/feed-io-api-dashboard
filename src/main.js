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

getList();

const evtSource = new EventSource("http://ws.localhost");
evtSource.onmessage = function(event) {
    console.log(event);
}
