require('./mystyles.scss');

console.log('hello');

function getList() {
    let req = new Request('https://api.feed-io.net');
    fetch(req)
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        })
}

getList();
