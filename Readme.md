![Ironhack logo](https://i.imgur.com/1QgrNNw.png)

# TechLunch | Manipulate HTML / CSS / JavaScript 

## Introduction

This project is a short introduction to HTML, CSS and JavaScript where you will be guided to manipulate the different files.

To start this project, you can simply click on the button ["**Clone or download > Download ZIP**"](https://github.com/ta-web-paris/techlunch-learn-html-css-javascript/archive/master.zip)

After downloading and unziping the file, you will find 4 different directories:
- **project1**: Basic HTML & CSS
- **project2**: HTML & CSS with Twitter Bootstrap
- **project3**: Basic JavaScript
- **project4**: Big project with a REST API

<!-- You will find the solution inside the branch `solution` by clicking on  ["**Branch: master > solution**"](https://github.com/ta-web-paris/techlunch-learn-html-css-javascript/tree/solution). But before that, let's dive into the code 😃  -->


## Instructions

### Project 1 | Basic HTML & CSS

1. Open `project1/index.html` with Chrome or any other browser.
2. In `project1/index.html`, put your real name instead of "_Maxence_".
3. In `project1/index.html`, add a paragraph `<p>` to write your job title.
4. In `project1/style.css`, set the `<p class="company">...</p>` text color in green.
5. In `project1/style.css`, set the `<p class="company">...</p>` text bold with the CSS property `font-weight` (https://www.w3schools.com/cssref/pr_font_weight.asp).

### Project 2 | HTML & CSS with Twitter Bootstrap

1. Open `project2/index.html` with Chrome or any other browser.
2. In `project2/index.html`, change "_John Doe_" with your name and email.
3. In `project2/index.html`, add a link to your LinkedIn page with a `<a>` tag with the class `my-button`(https://www.w3schools.com/tags/att_a_href.asp).
4. In `project2/style.css`, add a rule `.my-button` to make your link looking like a white button:
    - `background-color: white`: To set the backgroung white.
    - `color: black`: To set the font color black.
5. In `project2/style.css` remove all the CSS rules and in `project2/index.html` add the classes `btn btn-light btn-lg` (https://getbootstrap.com/docs/4.0/components/buttons/).

### Project 3 | Basic JavaScript

1. Open `project3/index.html` with Chrome or any other browser.
2. In `project3/main.js`, set the variable `hours` to `20`. You should see on your browser: "_Yes, it's 20:00, so let's drink!_".
3. In `project3/main.js`, set the variable `hours` to `Math.floor(24*Math.random())`. Every time you will refresh your browser, it will display a new hours and a new message.
4. **Bonus**: you can set the variable `hours` with `(new Date()).getHours()`. You can also create a variable `minutes` and find the right syntax here: https://www.w3schools.com/jsref/jsref_obj_date.asp.


### Project 4 | Big project with a REST API
> Make a nice website with Twitter Bootstrap
> Use the API: https://randomuser.me/ 
> Change some properties (number of persons, nationalities, gender)

## Solutions

### Project 1 | Basic HTML & CSS

`project1/index.html`
```html
<html>
<head>
  <title>TechLunch - Project 1</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>Hello TechLunch!</h1>
  <p class="name">My name is Alice</p>
  <p class="company">The best company ever is <a href="https://www.ironhack.com">Ironhack</a></p>
  <p>I am a web developer</p>
</body>
</html>
```

`project1/style.css`
```css
.name {
  color: red;
}
.company {
  color: green;
  font-weight: bold;
}
```

### Project 2 | HTML & CSS with Twitter Bootstrap
`project2/index.html`
```html
<!doctype html>
<html lang="en">
<head>
  <title>TechLunch - Project 2</title>
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <!-- CSS -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossorigin="anonymous">
  <link rel="stylesheet" href="cover.css">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="site-wrapper">
    <div class="site-wrapper-inner">
      <div class="cover-container">

        <header class="masthead clearfix">
          <div class="inner">
            <h3 class="masthead-brand">TechLunch</h3>
            <nav class="nav nav-masthead">
              <a class="nav-link active" href="index.html">Home</a>
              <a class="nav-link" href="https://getbootstrap.com/">Twitter Bootstrap</a>
            </nav>
          </div>
        </header>

        <main role="main" class="inner cover">
          <h1 class="cover-heading">Build your awesome project together</h1>
          <p>
            Hello, my name is Maxence Bouret, I am a new developer that code projects using HTML, CSS and Twitter Bootstrap. If you are interested by my skill, feel free to send me an email at <u>maxence@ironhack.com</u>
          </p>
          <p>
            <!-- Solution for the button link -->
            <a href="https://www.linkedin.com/in/bouretm/" class="my-button btn btn-light btn-lg">Learn more about myself on LinkedIn</a>
          </p>
        </main>

      </div>
    </div>
  </div>
</body>
</html>
```

`project2/style.css`
> The file is empty thanks to Twitter Bootsrap 😃

### Project 3 | Basic JavaScript

`project3/main.js`
```js
// var hours = 20;                             // Solution of step 2
// var hours = (Math.floor(24*Math.random())); // Solution of step 3
var hours = (new Date()).getHours();           // Solution of step 4
var minutes = (new Date()).getMinutes();       // Solution of step 4
if (hours >= 18) {
  $('.content').text("Yes, it's " + hours + ":" + minutes + ", so let's drink!")
} else { 
  $('.content').text("No, it's only " + hours + ":" + minutes + ", so go back to work!")
}
```

