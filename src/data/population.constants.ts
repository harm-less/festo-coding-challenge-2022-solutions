import {cleanBloodSample} from '../utils/blood-sample.utils';
import {rawPopulation, rawPopulationSmall} from './population.data';

export interface Inhabitant {
	name: string;
	id: number;
	homePlanet: string;
	bloodSampleLines: Array<string>;
}

export function parseInhabitant(rawInhabitant: string) {
	const lines = rawInhabitant.split('\n');
	const name = lines.shift()?.split(': ')[1];
	const id = lines.shift()?.split(': ')[1];
	const homePlanet = lines.shift()?.split(': ')[1];
	if (!name || !id || !homePlanet) {
		throw new Error();
	}

	lines.shift();
	lines.shift();
	lines.pop();

	return {
		name,
		id: parseInt(id, 10),
		homePlanet,
		bloodSampleLines: cleanBloodSample(lines)
	};
}

const rawInhabitants = rawPopulation.split('\n\n\n');
const rawInhabitantsSmall = rawPopulationSmall.split('\n\n\n');

export const inhabitants = rawInhabitants.map<Inhabitant>((rawInhabitant) => {
	return parseInhabitant(rawInhabitant);
});

export const inhabitantsSmall = rawInhabitantsSmall.map<Inhabitant>((rawInhabitantSmall) => {
	return parseInhabitant(rawInhabitantSmall);
});
