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

- In `project1/index.html`, put your real name instead of "_Maxence_".
- In `project1/index.html`, add a paragraph `<p>` to write your job title.
- In `project1/style.css`, set the `<p class="company">...</p>` text color in green.
- In `project1/style.css`, set the `<p class="company">...</p>` text bold with the CSS property `font-weight` (https://www.w3schools.com/cssref/pr_font_weight.asp)

### Project 2 | HTML & CSS with Twitter Bootstrap
> HTML: Change text + tag
> CSS: change color
> Bootstrap: make a blue button

### Project 3 | Basic JavaScript
> var beertime = false;
> if (beertime) { $('.content').text("It's beer time!") }
> else { $('.content').text("Nothing special") }
> Change to false
> Use Math.random()

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
