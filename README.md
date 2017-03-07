# Tepee - Automation for frontend beginners

## Installation

You can either clone the repository from [Github](//github.com/hopi-stack/tepee) or install it using the [CLI Tool](//github.com/hopi-stack/hopi-cli)

This text assumes you have installed the CLI.

1. For initialize, a fresh stack use the following command

```

hopi init tepee <your project name>

```

If you want to automatically install the npm or yarn dependencies you can use the `-d | --dependencies` flag for npm or `-y | --yarn` flag for yarn at the end of the statement.

## What is included

Tepee assumes you have a basic understanding of the following tools:

+ [SASS](http://sass-lang.com)
+ [Babel](https://babeljs.io)
+ You preferred terminal or command prompt

## Usage

Once all the dependencies have been installed you just have to run the npm script on the terminal inside the project's folder:

```

npm run dev

```

This will provide you the following:
+ Javascript minification and es2015 compiler through babel
+ Process, auto prefix and minify either vanilla CSS or scss/sass (check out the file extension).
+ Browser sync and CSS injection out of the box
