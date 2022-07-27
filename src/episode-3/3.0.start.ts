import {findPlanetByNameOrFail} from '../utils/planet.utils';
import {Inhabitant} from '../data/population.constants';
import {inhabitantsWithPicoGen3} from './3.1-pico-bots-gen-3.puzzle';
import {inhabitantsWithoutAnAlibi} from './3.3-alibi.puzzle';

export const redMothInhabitants = (): Array<Inhabitant> => {
	const picoGen3Inhabitants = inhabitantsWithPicoGen3();
	return inhabitantsWithoutAnAlibi()
		.filter((payCheck) => {
			return picoGen3Inhabitants.find(
				(gen2Inhabitant) => gen2Inhabitant.id === payCheck.inhabitant.id
			);
		})
		.map(({inhabitant}) => inhabitant);
};

export const redMoth = () => {
	const inhabitants = redMothInhabitants();
	if (inhabitants.length !== 1) {
		console.error('Should hav found 1 inhabitant');
	}
	return inhabitants[0];
};

export const planetKlaus = () => {
	const inhabitant = redMoth();
	return inhabitant ? findPlanetByNameOrFail(inhabitant.homePlanet) : undefined;
};
