# Project 1:
## >Background Change along with time update
### solution:

``` html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Live Time</title>

    <style>
        body {
            background-color: #414141;
            color: aliceblue;
        }

        .container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }

        .clock {
            background-color: #e76f51;
            padding: 1em 3em;
            border-radius: 5px;
            font-size: 25px;
        }
        .bttn {
            padding: 1em 3em;
        }

        .bttn:hover {
            cursor: pointer;
        }
    </style>
</head>

<body>
    <section class="container">
        <h1>Live Time Update and Background Change</h1>
        <div class="clock">
        </div>
        <div class="button">
            <button class="start bttn">Start</button>
            <button class="stop bttn">Stop</button>
            <button class="default bttn">Default</button>
        </div>
    </section>
</body>

<script>

    const clock = document.querySelector('.clock');

    const randColor = function () {
        const r = Math.floor(Math.random() * 255);
        const g = Math.floor(Math.random() * 255);
        const b = Math.floor(Math.random() * 255);
        return `rgb(${r},${g},${b})`
    }

    clock.innerHTML = new Date().toLocaleTimeString()
    
    function startChange() {
        clock.innerHTML = new Date().toLocaleTimeString()
        clock.style.backgroundColor = randColor()
        document.body.style.backgroundColor = randColor()
    }

    let interval;
    document.querySelector('.start').
        addEventListener('click', () => {
            if (!interval) interval = setInterval(startChange, 1000);
        }, false)

    function stopInterval() {
        clearInterval(interval)
        interval = null
    }
    document.querySelector('.stop').
        addEventListener('click', stopInterval, false)

    document.querySelector('.default').
        addEventListener('click', function () {
            stopInterval()
            document.body.style.backgroundColor = '#414141'
            clock.style.backgroundColor = '#e76f51'
        }, false)

</script>

</html>
```

# Project 2
## >Guess the number Game
### solution

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Guess The Number</title>

    <style>
        body {
            background-color: #414141;
            color: aliceblue;
        }

        h1,
        p {
            text-align: center;
        }

        form {
            display: flex;
            flex-direction: column;
        }

        .guessBox {
            margin-top: 1em;
            margin-bottom: 3em;
            max-width: 150px;
            align-self: center;
            padding: 0.5em;
            border-radius: 5px;
        }

        #guess {
            align-self: center;
            font-size: 3em;
        }

        .guessSubmit,
        .bttn {
            align-self: center;
            padding: 0.5em 3.5em;
        }

        .bttn:hover {
            cursor: pointer;
        }
    </style>
</head>

<body>
    <section class="container">
        <h1>Guess the Number</h1>
        <p>Guess a number between 1 and 100. You have 10 attempts to guess the right number.</p>
        <h3 style="text-align: center;">So Lets Play</h3>
        <br>
        <form action="#">
            <label for="guessBox" id="guess">Guess a Number</label>
            <input type="text" id="guessBox" class="guessBox">
            <input type="submit" id="guessSubmit" class="guessSubmit bttn" value="Submit">
        </form>
        <br>
        <div class="details">
            <p>Previous Guesses: <span class="guesses"></span></p>
            <p>Guesses Remaining: <span class="guessRemain">10</span></p>
            <p class="lowOrHi"></p>
        </div>
    </section>
</body>

<script src="guess.js"></script>

</html>
```
```javascript
let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#guessSubmit');
const userInput = document.querySelector('#guessBox');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.guessRemain');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.details');

const p = document.createElement('p');

// let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        // console.log(guess);
        validateGuess(guess);
    });
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('PLease enter a valid number');
    } else if (guess < 1) {
        alert('PLease enter a number more than 1');
    } else if (guess > 100) {
        alert('PLease enter a  number less than 100');
    } else {
        // prevGuess.push(guess);
        if (numGuess === 10) {
            displayGuess(guess);
            displayMessage(`Game Over. Random number was ${randomNumber}`);
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage(`You guessed it right`);
        endGame();
    } else if (guess < randomNumber) {
        displayMessage(`Number is TOOO low`);
    } else if (guess > randomNumber) {
        displayMessage(`Number is TOOO High`);
    }
}

function displayGuess(guess) {
    userInput.value = '';
    guessSlot.innerHTML += `${guess}, `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess} `;
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    submit.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<button class="newGame bttn">Start new Game</button>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame() {
    const newGameButton = document.querySelector('.newGame');
    newGameButton.addEventListener('click', function (e) {
        randomNumber = parseInt(Math.random() * 100 + 1);
        // prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - numGuess} `;
        userInput.removeAttribute('disabled');
        submit.removeAttribute('disabled');
        startOver.removeChild(p);
        lowOrHi.innerHTML = '';
        playGame = true;
    });
}

```

# Project 3
## Make your card
### solution

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>XMLHttpRequest</title>

    <style>
        body {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #212121;
            color: white;
        }

        .form {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 10px;
        }

        .inputText {
            margin-bottom: 1em;
        }

        .card {
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            transition: 0.3s;
            border-radius: 5px;
            background-color: #dda15e;
        }

        .card:hover {
            box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
        }

        .container {
            padding: 0.5em 1em;
        }

        img {
            border-radius: 5px 5px 0 0;
        }
    </style>
</head>

<body>
    <h1 style="text-align: center;">Make Your Card</h1>
    <form action="#" class="form">
        <label for="details" class="input center">Your Github Username</label>
        <input type="text" name="inputText" id="details" class="inputText center" placeholder="username">
        <input type="submit" class="submit center" value="Submit"></input>
    </form>
    <div class="card" style="display: none;">
        <img alt="Avatar" style="width:100%" class="img">
        <div class="container">
            <h4></h4>
            <p></p>
        </div>
    </div>
</body>
<script>

    const input = document.querySelector('.inputText')
    const body = document.querySelector('body')
    const h1 = document.querySelector('h1')

    document.querySelector('.submit').
        addEventListener('click', function (e) {
            e.preventDefault();
            if (input.value) changes()

            else alert('Please fill out this field')
        })

    function changes() {
        body.style.backgroundColor = '#fefae0'
        body.style.padding = '1em 10em'
        h1.innerText = 'Here is your Card'
        h1.style.color = '#414141'
        document.querySelector('.form').style.display = 'none'
        document.querySelector('.card').style.display = 'block'
        state()
    }

    function state() {
        const requestUrl = `https://api.github.com/users/${input.value}`
        const xhr = new XMLHttpRequest();
        xhr.open('GET', requestUrl)
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                const data = JSON.parse(this.responseText)
                const avatar = data.avatar_url
                document.querySelector('.img').src = avatar
                document.querySelector('h4').innerHTML = `<b>${data.name}</b>`
                document.querySelector('p').innerHTML = `Followers: ${data.followers}`
            }
        }
        xhr.send();
        input.value = ''
    }
</script>

</html>
```