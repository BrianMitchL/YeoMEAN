YeoMEAN [![Build Status](https://travis-ci.org/bman4789/YeoMEAN.svg?branch=master)](https://travis-ci.org/bman4789/YeoMEAN)
=======

A Yeoman based, generator-angular-fullstack project.
This site is hosted by Heroku and can be accessed at [https://brianm.me/](https://brianm.me/)

The goal of this project is to learn and experiment with the MEAN stack. The word "YeoMEAN" is a pun combining the "Yeoman" generator and "MEAN" stack.

## Dependencies to run:

You will need node/npm as well as mongodb installed. To install other dependencies, see below:

```sh
$ npm install -g bower
$ npm install -g yo
$ npm install -g grunt
$ npm install -g generator-angular-fullstack
$ npm install
$ bower install
```

To use yo generators, see [https://github.com/DaftMonk/generator-angular-fullstack](https://github.com/DaftMonk/generator-angular-fullstack)

For example, running ```yo angular-fullstack:route testing``` from a terminal will generate a view and route titled 'testing'.

## To Develop

Run ```grunt serve``` to start node and run the web application on [http://localhost:9000](http://localhost:9000).

To run tests, run ```grunt test```.

##Attributions

The blog posts were adapted from [this](http://hugodias.github.io/angularjs/markdown/blog/creating-a-markdown-blog-using-angular-js/) tutorial by Hugo Dias.

Social share buttons were adapted from [this](https://github.com/tinacious/angular-easy-social-share) directive by Tina Holly. My fork with a couple new services can be found [here](https://github.com/bman4789/angular-easy-social-share).

The styling for the brand and social/share buttons on the contact page and posts was adapted from Amey Raut's demo, which can be found [here](http://codepen.io/ameyraut/pen/yfzog).
