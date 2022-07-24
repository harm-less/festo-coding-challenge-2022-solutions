import {distance} from '../utils/math.utils';
import {findPlanetByNameOrFail} from '../utils/planet.utils';
import {planetKlaus} from './2.0.start';

const tradeRoutes = [
	{start: 'Scurus V', end: 'Tauries VII', expectation: 'Ok'},
	{start: 'Saturus', end: 'Beta Geminus', expectation: 'too far'},
	{start: 'Corpeia V', end: 'Menta', expectation: 'too far'},
	{start: 'Grux', end: 'Alpha Beron', expectation: 'too far'},
	{start: 'Gamma Veni', end: 'Beta Earos', expectation: 'too far'},
	{start: 'Alpha Sexta', end: 'Alpha Caprida', expectation: 'too far'},
	{start: 'Beta Drado VI', end: 'Uranis', expectation: 'Ok'}
];

tradeRoutes.map(({start, end, expectation}) => {
	const startPlanet = findPlanetByNameOrFail(start);
	const endPlanet = findPlanetByNameOrFail(end);

	// console.log(
	// 	startPlanet,
	// 	endPlanet,
	// 	distance(startPlanet, endPlanet),
	// 	distance(startPlanet, planetKlaus),
	// 	distance(endPlanet, planetKlaus)
	// );
});

export const inhabitantsFromPlanetsWithSpaceRobberiesIdSum = 0;
