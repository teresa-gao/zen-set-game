# Zen Set

## About

This repository is forked from https://github.com/hugosaintemarie/set-game
and implements some additional features that are listed in the table below.

### Added Features

| Feature | Description | Status |
| ------- | ----------- | ------ |
| UI simplification | Remove menus, instructions, sounds | In progress |
| Dark mode | Automatically toggle theme based on user device and/or explicitly designated preferences | In progress |
| Zen mode | Allow user to play Set for a set time, number of sets, or ad infinitum | Not yet started |

## Code

### Setup

1. On the command line, run `python3 -m http.server`.
2. In a browser, open [http://localhost:8000/](http://localhost:8000/).

## Making Changes

Sass files (.scss) must be explicitly compiled to CSS.
Running `sass --style=compressed --watch css/style.scss css/style.min.css`
automatically generates a .css from the primary .scss,
which is helpful while developing.
However, browser caching can prevent some changes from appearing immediately.
To get around this, the page should be refreshed via **Ctrl + F5**.
