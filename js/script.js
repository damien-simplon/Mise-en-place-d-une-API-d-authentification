const url = `https://damien-simplon.github.io/mise-en-place-d-une-API-d-authentification/`;

const formCo = document.getElementById("connexion");
const dataCo = new FormData(formCo);
const formIn = document.getElementById("inscription");
const dataIn = new FormData(formIn);

const requestCo = new Request(url, {
    method: 'POST',
    body: data,
    headers: {
        'Content-Type' : 'application/json',
    },
});
const requestIn = new Request(url, {
    method: 'POST',
    body: data,
    headers: {
        'Content-Type' : 'application/json',
    },
});

fetch(requestCo).then(res => {
    console.log(res);
    res.jons().then(data => {
        console.log(data.data);
    })
});

fetch(requestIn).then(res => {
    console.log(res);
    res.jons().then(data => {
        console.log(data.data);
    })
});