Kitchen
=======

The ultimate kitchen for making tasty Node waffles!

## Features

* Basic Express app ready to handle sessions, body parsing, and asset serving
* 3 in 1 server that provides an API, full page rendering, and partials
* Swig JS integration for fast template rendering on the server
* Atomic design pattern via Stylus
* Automated tasks via NPM



## Getting Started

To get started, first install all dependencies via NPM:

```
npm install
```

Start the Node application and automated build tasks in development mode via NPM:

```
npm start
```



## Automated Tasks

All automated tasks are ran via NPM and are configured in the `package.json` file. This removes the need for unnecessary complexity introduced by build systems like Grunt or Gulp. Inspired by this blog post: http://blog.keithcirkel.co.uk/how-to-use-npm-as-a-build-tool/
