
//  4
let dataA = [];
let dataAB = [];

function getData(url) {
    let result = fetch(url);
    result.then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error(`Error: ${response.status}`);
        })
        .catch(error => console.log(error.message))
        .then(data => {
            let str = [];
            let j = 0;
            for (let i = 0; i < data.length; i++) {
                str = data[i].title.split('');
                if (str[0] === 'a') {
                    dataA[j] = data[i];
                    j += 1;
                }
            }

            j = 0;
            for (i in dataA) {
                str = dataA[i].title.split('');
                if (str[0] === 'a' && str[1] === 'b') {
                    dataAB[j] = dataA[i];
                    j += 1;
                }
            }
        })
    return dataA, dataAB;
}
getData('https://jsonplaceholder.typicode.com/todos');

let btn1 = document.querySelector('.add-a');
btn1.addEventListener('click', function (event) {
    let userA = document.getElementById('user-a');
    userA.innerHTML = '';
    let userAB = document.getElementById('user-ab');
    userAB.innerHTML = '';
    for (i in dataA) {
        let p = document.createElement('p');
        p.innerHTML = JSON.stringify(dataA[i], ['userId', 'id', 'title', 'completed']);;
        userA.insertBefore(p, userA.children[i]);
    }
})

let btn2 = document.querySelector('.add-ab');
btn2.addEventListener('click', function (event) {
    let userA = document.getElementById('user-a');
    userA.innerHTML = '';
    let userAB = document.getElementById('user-ab');
    userAB.innerHTML = '';
    for (i in dataAB) {
        p = document.createElement('p');
        p.innerHTML = JSON.stringify(dataAB[i], ['userId', 'id', 'title', 'completed']);;
        userAB.insertBefore(p, userAB.children[i]);
    }
})

let btn3 = document.querySelector('.add-all');
btn3.addEventListener('click', function (event) {
    let userA = document.getElementById('user-a');
    userA.innerHTML = '';
    for (i in dataA) {
        p = document.createElement('p');
        p.innerHTML = JSON.stringify(dataA[i], ['userId', 'id', 'title', 'completed']);;
        userA.insertBefore(p, userA.children[i]);
    }
    let userAB = document.getElementById('user-ab');
    userAB.innerHTML = '';
    for (i in dataAB) {
        p = document.createElement('p');
        p.innerHTML = JSON.stringify(dataAB[i], ['userId', 'id', 'title', 'completed']);;
        userAB.insertBefore(p, userAB.children[i]);
    }
})