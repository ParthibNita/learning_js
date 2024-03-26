# Project 1

## solution:

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
    </style>
</head>

<body>
    <section class="container">
        <h1>Live Time Update and Background Change</h1>
        <div class="clock">
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

    setInterval(() => {
        const time = new Date()
        clock.innerHTML = time.toLocaleString()
        clock.style.backgroundColor = randColor()
        document.body.style.backgroundColor = randColor()
    }, 1000);

</script>

</html>
```

# Project 2

## solution

```

```