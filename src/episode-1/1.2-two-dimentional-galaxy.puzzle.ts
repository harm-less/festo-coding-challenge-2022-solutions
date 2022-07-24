import {planets, Planet} from '../data/galaxy.data';
import {Inhabitant, inhabitants} from '../data/population.constants';

const planetsLibrary = planets.reduce<Record<string, Planet>>((planetsLibrary, planet) => {
	planetsLibrary[planet.name] = planet;
	return planetsLibrary;
}, {});

//https://miabellaai.net/
export const plottedPlanetVectors = planets.reduce((str, {name, x, y, z}) => {
	str += `Point ${name} 1::${x}::${y}::${z}::19465.17::13::A::0::0::0::1::0;\n`;
	return str;
}, 'Interactive 3D Scatter Plot;\n::X::Y::Z;\n');
// console.info(plottedPlanetVectors);

const outlierPlanetNames = [
	'Earia',

	'Equila Minor',
	'Aquarth',
	'Alpha Carsa',
	'Alpha Menax Minor',
	'Alpha Aurnus',
	'Cralis III',
	'Beta Dela IV',
	'Phoeni V',
	'Erinix',
	'Gamma Carinus Major',
	'Dralis II',

	'Carda III',
	'Vens IV',
	'Venta',
	'Alpha Andron',
	'Viria II',
	'Forale',
	'Minoces',
	'Alpha Lupisci',
	'Cerenis V',
	'Gamma Bores',
	'Pisci',
	'Andros Major',
	'Algo Major'
];

export const outlierPlanets = outlierPlanetNames.map((name) => {
	const planet = planetsLibrary[name];
	if (!planet) {
		throw new Error();
	}
	return planet;
});

export const allPossibleOutliers: Array<Inhabitant> = inhabitants.filter((inhabitant) => {
	return outlierPlanets.find((planet) => planet.name === inhabitant.homePlanet);
});

export const allPossibleOutliersIdSum = allPossibleOutliers.reduce((sum, {id}) => {
	return sum + id;
}, 0);
