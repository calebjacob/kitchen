Kitchen
=======

The ultimate kitchen for making tasty Node waffles!

## Features

* Basic Express app ready to handle routes, body parsing, and asset serving
* Set up to render full pages and partials
* Swig JS integration for fast template rendering on the server
* Atomic design pattern via Stylus
* Automated tasks via NPM



## Getting Started

First, make sure you have the latest versions of Node and NPM installed on your machine. The easiest way to do this is with [Homebrew](http://brew.sh/) or [NVM](https://github.com/creationix/nvm).

Then install all dependencies via NPM:

```
npm install
```

Start the Node application and automated build tasks in local development mode via NPM:

```
npm start
```



## Automated Tasks

All automated tasks are ran via NPM and are configured in the `package.json` file. This removes the need for unnecessary complexity introduced by build systems like Grunt or Gulp. Inspired by this blog post: [How To Use NPM as a Build Tool](http://blog.keithcirkel.co.uk/how-to-use-npm-as-a-build-tool/)



## Deploying With Dokku

The easiest way to get any Node app running is to use Dokku. Spin up a Dokku droplet on Digital Ocean: [Dokku Droplet by Digital Ocean](https://www.digitalocean.com/products/one-click-apps/dokku/)

**Note:** *Droplet must have at least 1GB of RAM or else the build will fail.*

Here are some miscellaneous tips:

##### Add Git Remote to Deploy:

```
git remote add dokku dokku@mydomain.com:my-app-name
git push dokku master
```

##### Routing App to Root Domain:

```
dokku domains:add my-app-name mydomain.com
```

##### Configure SSL/HTTPS Via Let's Encrypt:

Read documentation here: [Dokku - Let's Encrypt](https://github.com/dokku/dokku-letsencrypt)

##### App Crash Restart Policy:

```
dokku ps:set-restart-policy my-app-name always
```

##### Check Error Logs:

```
dokku ls
docker logs <container ID>
```

##### More Dokku Documentation:

For info on setting up other plugins (databases, etc), read this documentation: [Dokku - Application Deployment](http://dokku.viewdocs.io/dokku/deployment/application-deployment/)
