# bikesched

An experiment in isomorphic React that is probably also something else.

## Run it locally

```sh
> npm install
> node index.js
```

## Development

```sh
> npm run watch
```

## How this works right now

I'm open to suggestions on how this could be better structured:

* JS is edited in `src`
* `jsx` compiles those files and puts them in `lib`. These built files are used by the server.
* Files in `lib` are built for the client using `browserify` and put in `static`

`static` and `lib` are checked in for ease of deployment.
