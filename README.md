YeoMEAN
=======

A Yeoman based, generator-angular-fullstack project.

## Dependencies to run:

You will need node/npm as well as mongodb installed. To install other dependencies, see below:

```sh
$ npm install -g bower
$ npm install -g yo
$ npm install -g grunt
$ npm install -g generator-angular-fullstack
```

To use yo generators, see [https://github.com/DaftMonk/generator-angular-fullstack](https://github.com/DaftMonk/generator-angular-fullstack)

For example, running ```yo angular-fullstack:route testing``` from a terminal will generate a page titled 'testing'.

## To Develop

Run ```grunt serve``` to start node and run the web application on [http://localhost:9000](http://localhost:9000). (The page will be opened automatically by grunt)

To run tests, run ```grunt test```.