//  1
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
            let newData = [];
            let j = 0;
            for (let i in data) {
                str = data[i].title.split('');
                if (str[0] === 'a') {
                    newData[j] = data[i];
                    j += 1;
                }
            }
            console.log(newData);
        })
}
getData('https://jsonplaceholder.typicode.com/todos');





//  2

async function getAsincData(url) {
    try {
        let result = await fetch(url);
        if (result.ok) {
            let response = await result.json();
            let str = [];
            let newData = [];
            let j = 0;
            for (let i in response) {
                str = response[i].title.split('');
                if (str[0] === 'a') {
                    newData[j] = response[i];
                    j += 1;
                }
            }
            console.log(newData);
        } else {
            throw new Error(`Error: ${result.status}`);
        }
    } catch (error) {
        console.log(error.message)
    }
}
getAsincData('https://jsonplaceholder.typicode.com/todos');


