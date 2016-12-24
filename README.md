# The rails react redux boilerplate.
### Installation

**Be sure that you have installed:**

1. `node@5.7.0` -> `$ sudo npm install n -g && sudo n 5.7.0`
2. [yarnpkg](https://yarnpkg.com/en/docs/install)
3. `ruby-2.3.1`

**Terminal**:
- `$ git clone git@github.com:Ch-Valentine/rails-react-redux-boilerplate.git`
- `$ cd rails-react-redux-boilerplate`
__or you can rename this project and change the git repo:__
- `$ git clone git@github.com:Ch-Valentine/rails-react-redux-boilerplate.git --origin rails-react-redux-boilerplate your-project-name`
- `$ cd your-project-name`
- `$ ./bin/rename_project YourProjectName`
- `$ ./bin/reset_git https://github.com/yourusername/your-project-name.git`
__then:__
1. `$ bundle install`
1. `$ npm run yarn` or `$ cd app/frontend && yarn`
1. `$ rails s`
1. `$ npm start` or `$ npm run build` in production
1. open [http://localhost:3000/](http://localhost:3000/)
1. Try to change the `app/frontend/src/components/AppTitle/` (`index.jsx` or `style.scss`)
1. Look on changes without reloading.


### Add a new npm package
`$ cd app/frontend` and `$ npm i --save [package]` or `$ yarn add [package]`

### Features:
1. Webpack development and production build.
2. React-hot-reload
3. Redux dev-tools
4. [yarnpkg](https://yarnpkg.com/)
5. [eslist](http://eslint.org/)
6. [ES6 and ES7 compiler](https://babeljs.io/)
5. request to the Rails
6. 404 page

### Todo

- [ ] Split js files for an optimization.
- [x] Include a JS Testing frameworks.
- [x] Upgrade npm dependencies to latest versions.
- [x] Upgrade to ruby and rails latest versions
