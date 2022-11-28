# RPS Challenge

### Dependencies installed:
- `npm i -g nodemon`
- `npm install --save express dotenv`
- `npm init` - to initalise folder as an npm project
- `npm install ejs`
##### Testing tools:
- `npm i --save-dev mocha`
- `npm i --save-dev chai chai-http`
---
### User stories & tests
```
As a DFAT member
So that I can see my name
I would like to register my name before playing an online game

As a DFAT member
So that I can enjoy myself away from the daily grind
I would like to be able to play rock/paper/scissors
```
| Objects  | Properties         | Messages              | Output  |
| -------- | ------------------ | --------------------- | ------- |
| Player   | name               | setupPlayer(@Player)  | @String |
| Computer | randomChoice@Array | computerMove(@String) | @String |
| RPS      | result             | getResult(@String)    | @String |

1. Test that setupPlayer returns name & choice as expected.
2. Test that computerMove generates either rock, paper, scissors.
3. Test that getResult returns result as expected when player & computer choice are inputted.
---
### Route testing

#### Index router
- Check that get request is successfully made on index page '/'.
  - It should return a 202 status code.
  - It should generate html page.
  - It should include appropriate texts displayed.

#### Game router
- Check that post request is successfully made on '/game' page.
  - It should return a 202 status code
- Check that get request is successfully made on '/game' page.
  - It should return a 202 status code
  - It should generate a html page.
- It should include appropriate text displayed.

#### Result router
- Check that post request is successfully made on '/result' page.
  - It should return a 202 status code.
  - It should generate a html page.
  - It should include "Result" text.