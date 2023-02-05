


//  3

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
            let userA = document.getElementById('user-a');
            for (i in dataA) {
                let p = document.createElement('p');
                p.innerHTML = JSON.stringify(dataA[i], ['userId', 'id', 'title', 'completed']);;
                userA.insertBefore (p, userA.children[i]);
            }
            j = 0;
            for (i in dataA) {
                str = dataA[i].title.split('');
                if (str[0] === 'a' && str[1] === 'b') {
                    dataAB[j] = dataA[i];
                    j += 1;
                }
            }
            let userAB = document.getElementById('user-ab');
            for (i in dataAB) {
                let p = document.createElement('p');
                p.innerHTML = JSON.stringify(dataAB[i], ['userId', 'id', 'title', 'completed']);;
                userAB.insertBefore (p, userAB.children[i]);
            }

        })
}
getData('https://jsonplaceholder.typicode.com/todos');
