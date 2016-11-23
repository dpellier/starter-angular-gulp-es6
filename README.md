# Starter Angular Gulp ES6
Provide a ready-to-develop project to build an angular web application

The project is already configured with:
- [angular](https://angularjs.org/)
- [ui-router](https://ui-router.github.io/)
- [angular-translate](https://angular-translate.github.io/)
- [sass](http://sass-lang.com/)
- [gulp](http://gulpjs.com/) tasks
- es6 using [babel](https://babeljs.io/)
- [bower](https://bower.io/)
- [karma](https://karma-runner.github.io) / [jasmine](https://jasmine.github.io/)
- [protractor](http://www.protractortest.org/#/)
- [travis](https://travis-ci.org/) integration
- [coveralls](https://coveralls.io/) integration

## Project installation

```
git clone git@github.com:dpellier/starter-angular-gulp-es6.git
cd starter-angular-gulp-es6
npm install
```

## Useable tasks

`gulp serve`: start a server with livereload, useful for dev

`gulp serve:dist`: start a server with the production version, useful for validation before deploying

`gulp build`: build the production version of the website

`gulp test`: execute the unit and e2e test suites

`gulp test:unit`: execute the unit suites only

`gulp test:e2e`: execute the e2e test suites only

`gulp test:e2e:dist`: execute the e2e test suites on the minified app

`gulp lint`: validate that your code follow the guideline rules for `js` and `scss`, please resolve every error/warning before submitting pull requests

`gulp`: print the above list, useful when you don't remind which task to use
