# Moscow blockchain hackathon tutorial

> this repo is my implementation of origin https://github.com/coder11/fluence-nodejs-template/commits/master

> usefull fluence link on [how to hack](https://www.notion.so/How-to-hack-on-Fluence-97e20ba47ef04df2bfd0c234ee90537d) 

Template for FluenceJS applications running on nodejs.

Useful resources:

-   [How to hack on Fluence](https://cutt.ly/HackMoscow)
-   [Aqua documentation](https://doc.fluence.dev/aqua-book/)
-   [FluenceJS documentation](https://doc.fluence.dev/docs/fluence-js)
-   [More examples](https://github.com/fluencelabs/examples)

## Prerequisites

nodejs v16.04+ installed

## Installation

To install dependencies:

```bash
npm i
```

## Building and running

To start application:

```bash
npm start
```

The start script will compile the aqua code and run the `index.ts` file using `ts-node`

It might be useful to have continuous aqua files recompilation on each file save (e.g to have shorted dev feedback cycles). To do so execute:

```bash
npm run watch-aqua
```

For single recompilation execute:

```bash
npm run compile-aqua
```

## Project structure

All aqua code is placed in `aqua` directory. The TypeScript files are located in `src (by aqua)` directory as usual. The compiled (by aqua) TypeScript code goes into `src/_aqua` directory. This one should (and in fact is) be gitignored.

`package.json` contains some useful scripts to work with aqua compiler.

## Using FluenceJS in browser

You are free to use the UI framework of your choosing. Bootstrap the application and then install the same dependencies and set up the compiler. You can also refer to the [related documentation](https://doc.fluence.dev/docs/fluence-js/2_basics) section. Also you need to configure the http server, hosting you application code to serve additional files. You can read about it in the (documentation)[https://doc.fluence.dev/docs/fluence-js/4_run_in_browser-1]
