// Type definitions for Paths.js for paths.js vx.y.z TODO
// Project: https://github.com/andreaferretti/paths-js
// Definitions by: Benjamin de Dardel <https://github.com/bdedardel>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

// API documentation: https://github.com/andreaferretti/paths-js/wiki

/*
interact.d.ts(151,5): error TS2300: Duplicate identifier 'x'.
interact.d.ts(152,5): error TS2300: Duplicate identifier 'y'.
paths.d.ts(9,2): error TS2300: Duplicate identifier 'x'.
paths.d.ts(10,2): error TS2300: Duplicate identifier 'y'.

interface Point {
	x: number;
	y: number;
}
*/

interface Path {
	print(): string;
	points(): any[];
	connect(path: Path): Path;
	moveto(x: number, y: number): Path;
	lineto(x: number, y: number): Path;
	hlineto(x: number): Path;
	vlineto(y: number): Path;
	curveto(x1: number, y1: number, x2: number, y2: number, x: number, y: number): Path;
	smoothcurveto(x2: number, y2: number, x: number, y: number): Path;
	qcurveto(x1: number, y1: number, x: number, y: number): Path;
	smoothqcurveto(x: number, y: number): Path;
	arc(rx: number, ry: number, xrot: number, large_arc_flag: number, sweep_flag: number, x: number, y: number): Path;
	closepath(): Path;
}	

/**
 * Static members of paths
 */
interface PathsStatic {

    Path(): Path;
	
}

declare module "paths" {
    export = paths;
}
declare var paths: PathsStatic;


