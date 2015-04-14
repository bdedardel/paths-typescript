Paths.TypeScript
================

*Paths.TypeScript* is a port of the [Paths.js](https://github.com/andreaferretti/paths-js) javascript library
for the [TypeScript](http://www.typescriptlang.org/) language.

It *WILL* be provided to the [DefinitelyTyped](https://github.com/borisyankov/DefinitelyTyped).

Usage
-----

Include a line like this:

```
/// <reference path="paths.d.ts" />
```

Contributions
-------------

Paths.TypeScript only binds 1/4 APIs :

- Low level API

Others apis must be done and/or requested contributors.

Licence
-------

[Apache License Version 2.0](License.md)

Samples
-------

```
var path = paths.Path()
	  .moveto(10, 20)
	  .lineto(30, 50)
	  .lineto(25, 28)
	  .qcurveto(27, 30, 32, 27)
	  .closepath();
```

Roadmap
-------

### Low level API

DONE, to be tested.

### Miscellaneous

TODO

### Mid level API (shapes)

TODO / Contributors requested

### High level API (graphs)

Contributors requested

### Test and samples

Contributors requested