# sg-project-1
Sparta Game project 1


## Purpose

This is a sample game using HTML, HTML5 , JS , CSS (Single Page Web Application).

This project is intended as a demonstration of technical capabilities rather than design or helpful data., usinng the tecnologies discribed above.


## Functionality

This is a simple application uses sounds, css styles for diferent

## Implementation

The functionality has been implemented using the following features:

* AngularJS 1.2, documented
* Twitter Bootstrap 3.2
* Javascript validated with JSHint and JSCS
* automated CI build on code repo change
* semantic HTML5
* well-structured CSS built with LESS
* responsive web development/design (no separate m-dot site)
* page content sourced via XHR service call with JSON response (static)
* multi-browser unit testing with Jasmine & Karma
* grunt-driven builds to dev and prod distributions

## Usage

### Building

Fork/clone this repo, then:
```
bower install
npm install
grunt dev       # build the dev distribution
grunt test      # run the unit tests
grunt docs      # just build the docs
grunt prod      # build the prod distribution (includes clean, test & docs)
```

### Running

Set up local web servers to point to `dist/dev` and `dist/prod` for _dev_ and _prod_ distributions, respectively.

### Customising

To customise the content, modify the contents of the following files:

* `svc/*/*.json`
* `src/js/app/*/*/*.html`

### Viewing the docs

Fire up a web server with `dist/docs` as the webroot, and point your browser.

## Issues

The github issue system holds the issues for this project:

* [all](https://github.com/mcalthrop/angular-spa-demo/issues)
* [bugs](https://github.com/mcalthrop/angular-spa-demo/labels/bug)
* [enhancements](https://github.com/mcalthrop/angular-spa-demo/labels/enhancement)
* [investigate](https://github.com/mcalthrop/angular-spa-demo/labels/investigate)

## Demo site
http://mcalthrop.github.io/angular-spa-demo/

This site is kept up to date with the latest code in the codebase.
