export interface Point3D {
	x: number;
	y: number;
	z: number;
}

export function distance(point1: Point3D, point2: Point3D) {
	var a = point2.x - point1.x;
	var b = point2.y - point1.y;
	var c = point2.z - point1.z;

	return Math.sqrt(a * a + b * b + c * c);
}
