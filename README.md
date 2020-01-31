# Personal Portfolio Website 💻 🔥 [![GitHub](https://img.shields.io/github/license/vascoalramos/portfolio?color=blue)](https://github.com/vascoalramos/portfolio/blob/master/LICENSE.md)

## Getting Started 🚀

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites 📋

* [Git](https://git-scm.com)
* [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer
* [Gatsby CLI](https://www.gatsbyjs.org/docs/quick-start/)

The version of each prerequisite should be the following:
```bash
node@v10.16.0 or higher
npm@6.9.0 or higher
git@2.17.1 or higher
gatsby-cli@2.8.22 or higher
```

### How To Use 🔧

From your command line, clone and run Portfolio:

```bash
# Clone this repository
$ git clone https://github.com/vascoalramos/portfolio

# Go into the repository
$ cd portfolio

# Remove current origin repository
$ git remote remove origin

# Install dependencies
$ npm install

# Start development server
$ npm run develop
```

❗️ NOTE: ❗️ If your run into issues installing the dependencies, use the following commands:

```bash
# Install dependencies with all permissions
$ sudo npm install --unsafe-perm=true --allow-root

# Start development server
$ npm run develop
```

## Deployment 📦

Once you have done your setup, you need to put your website online!

What I chose was [Namecheap](https://namecheap.com) to domain and dns and [GitHub Pages](https://pages.github.com/) to run my website!

Using the script I provide in [package.json](package.json) (I'm assuming your repo is already linked to your local folder and you have a gh-pages branch created), the only thing you have to do is to run the following command:

```bash
# Generate a full static production build 
# and commit this build to your gh-pages branch
npm run deploy
```

You can check my web portfolio live at: [vascoalramos.me](https://vascoalramos.me)

![Portfolio Thumbnail](thumbnail.png)

## Technologies used 🛠️

- [Gatsby](https://www.gatsbyjs.org/) - Static Site Generator
- [GraphQL](https://graphql.org/) - Query language for APIs
- [Markdown](https://www.markdownguide.org/) - Data Source
- [React](https://es.reactjs.org/) - Front-End JavaScript library
- [Bootstrap 4](https://getbootstrap.com/docs/4.3/getting-started/introduction/) - Front-End UI library

## Authors

- **Vasco Ramos:** [vascoalramos](https://github.com/vascoalramos)

## License 📄

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments 🎁

- I built my portfolio based on a customised gatsby starter from [cobidev](https://github.com/cobidev) named [gatsby-simplefolio](https://github.com/cobidev/gatsby-simplefolio)
- I draw a lot of design inspiration from [Brittany Chiang](https://github.com/bchiang7/) 4th version of her own portfolio which can be found [here](https://github.com/bchiang7/v4)
