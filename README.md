Kitchen
=======

The ultimate kitchen for making tasty Node waffles!

## Features

* Basic Express app ready for configuration and baking
* 3 in 1 server that provides an API, full page rendering, and partials
* Swig JS integration for fast template rendering on the server
* Atomic design pattern via Stylus
* Full Grunt JS integration for ultimate automation
* SVG to icon font generation
* Automatic server restarts while working on the backend
* No more tedious setup - just get right to the baking!

## Prerequisites

* Dependencies for grunt-webfont: https://github.com/sapegin/grunt-webfont/blob/master/Readme.md#installation
  

## Getting Started

First, install all dependencies:
```
npm install
```

To get working, the last thing to do is run Grunt's default task:
```
grunt
```

This will build your JS and CSS files for development, start up your node server, and listen for changes to perform necessary Grunt tasks and server restarts.
