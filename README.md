### Hexlet tests and linter status:
[![Actions Status](https://github.com/SonnyOnni/frontend-project-lvl1/workflows/hexlet-check/badge.svg)](https://github.com/SonnyOnni/frontend-project-lvl1/actions)
<a href="https://codeclimate.com/github/codeclimate/codeclimate/maintainability"><img src="https://api.codeclimate.com/v1/badges/a99a88d28ad37a79dbf6/maintainability" /></a>
[![ESlint](https://github.com/SonnyOnni/frontend-project-lvl1/actions/workflows/eslint.yml/badge.svg)](https://github.com/SonnyOnni/frontend-project-lvl1/actions)

# Brain-games

A set of console games for the Hexlet front-end development course study project No. 1.

### Installation and setup:
```
git clone git@github.com:SonnyOnni/frontend-project-lvl1.git
npm ci
npm link
```

## Game 1: 'Even-game'
The essence of the game is as follows: the user is shown a random number. And he needs to answer yes if the number is even, or no if it is odd. The user must give the correct answer to three questions in a row.

Run game:

```
brain-even
```

[![asciicast](https://asciinema.org/a/497182.svg)](https://asciinema.org/a/497182)

## Game 2: 'Calc-game'
The essence of the game is as follows: the user is shown a random mathematical expression that needs to be calculated and written down the correct answer. The user must give the correct answer to three questions in a row.
- It is enough to implement the following operations: +, - and *.
- Operations, like numbers, are chosen randomly.

Run game:

```
brain-calc
```

[![asciicast](https://asciinema.org/a/497814.svg)](https://asciinema.org/a/497814)

## Game 3: 'GCD-game(greatest common divisor)'
The essence of the game is as follows: the user is shown two random numbers. The user must calculate and enter the greatest common divisor of these numbers. The user must give the correct answer to three questions in a row.

Run game:

```
brain-gcd
```

[![asciicast](https://asciinema.org/a/497927.svg)](https://asciinema.org/a/497927)

## Game 4: 'Progression-game'
The user have to find out the number in an arithmetic progression that is hidden with two dots.
- The recommended progression length is 10 numbers. Length can be randomly generated but must contain at least 5 numbers
- The position of the hidden element changes each time (selected randomly)
- 
Run game:

```
brain-progression
```
[![asciicast](https://asciinema.org/a/498062.svg)](https://asciinema.org/a/498062)

## Game 5: 'Prime-game'
The user have to find out if the number is prime. The user must give the correct answer to three questions in a row.

Run game:

```
brain-prime
```
[![asciicast](https://asciinema.org/a/498096.svg)](https://asciinema.org/a/498096)

