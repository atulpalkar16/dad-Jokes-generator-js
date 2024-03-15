const jokeEl = document.getElementById('jokeEl');
const jokeBtn = document.getElementById('jokeBtn');


jokeBtn.addEventListener('click' , generateJokes);
generateJokes();

async function generateJokes(){
    let joke;
    const config = {
        headers: {
            Accept: 'application/json',
        },
    };

    // it'll give us a promise back
    const resp = await fetch('https://icanhazdadjoke.com/', config );
    const data = await resp.json();
    jokeEl.innerHTML = data.joke;
}



// function generateJokes(){
//     let joke;
//     const config = {
//         headers: {
//             Accept: 'application/json',
//         },
//     };

//     // it'll give us a promise back
//     fetch('https://icanhazdadjoke.com/', config )
//     .then(res => res.json() )
//     .then( (data) => {
//         jokeEl.innerHTML = data.joke;
//     }
//     );
// }
