# haxe-is-like-other-programming-languages

Source code for [Haxe is like other programming languages](https://joshtynjala.github.io/haxe-is-like-other-programming-languages/), a simple website to compare Haxe's syntax to the syntax of various other popular programming languages — including TypeScript, C#, Kotlin, Swift, Go, and ActionScript 3.0.

Built with the [Eleventy](https://11ty.dev/) static site generator.

## Credits

Inspired by similar comparisons between other programming languges:

- [Kotlin is like TypeScript](https://github.com/gi-no/kotlin-is-like-typescript)
- [TypeScript is like C#](https://github.com/CharlieDigital/typescript-is-like-csharp)
- [Kotlin is like C#](https://github.com/ttu/kotlin-is-like-csharp)
- [Swift is like Kotlin](https://github.com/Nilhcem/swift-is-like-kotlin)
- [Swift is like Go](https://github.com/tiye/swift-is-like-go)
- [Swift is like C#](https://github.com/myquay/swift-is-like-c-sharp)

## Prerequisites

Install [Node.js](https://nodejs.org/), if you don't have it already.

Then, use **npm** (which is included with Node.js) to install dependencies.

```sh
npm ci
```

## Run Local Server

For development, run the following command to start a local server.

```sh
npm start
```

Then, open a browser with the following URL: _http://localhost:8080_

Changes to files will be detected automatically, and your browser will refresh too.

## Build Locally

The build the website locally, run this command.

```sh
npm run build
```

Build output will be in __site_ directory.
