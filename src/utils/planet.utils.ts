import {planets} from '../data/galaxy.data';

export function findPlanetByName(name: string) {
	return planets.find((planet) => planet.name === name);
}
export function findPlanetByNameOrFail(name: string) {
	const planet = findPlanetByName(name);
	if (!planet) {
		throw new Error('Planet not found');
	}
	return planet;
}
