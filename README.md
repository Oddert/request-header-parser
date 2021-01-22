# Request Header Parser

A request header parser JSON microservice made for the Free Code Camp challenge

## Live Demo
[https://picayune-surf.glitch.me/](https://picayune-surf.glitch.me/)

## Installation
```
$ git clone https://github.com/Oddert/request-header-parser.git
$ cd request-header-parser
$ npm i
$ npm start
```

## Scripts
| script | command                                        | action
|--------|------------------------------------------------|------------------------------------------------|
| start  | node app.js                                    | runs the server                                |
| dev | nodemon app.js                                 | runs the server with auto restart              |

# Routes
| Route  | Method | Returns
|--------|-------------|-------------------|
| /  | GET | A JSON object with the users IP, User Agent, and compatible languages |
