import {findPlanetByNameOrFail} from '../utils/planet.utils';
import {Inhabitant} from '../data/population.constants';
import {inhabitantsWithPicoGen2} from './2.1-pico-bots-gen-2.puzzle';
import {inhabitantsWhoCouldHaveEarned79GAL} from './2.3-pay-check.puzzle';

const klausInhabitants = (): Array<Inhabitant> =>
	inhabitantsWhoCouldHaveEarned79GAL
		.filter((payCheck) => {
			return inhabitantsWithPicoGen2().find(
				(gen2Inhabitant) => gen2Inhabitant.id === payCheck.inhabitant.id
			);
		})
		.map(({inhabitant}) => inhabitant);

export const klaus = () => {
	const inhabitants = klausInhabitants();
	if (inhabitants.length !== 1) {
		console.error('Should hav found 1 inhabitant');
	}
	return inhabitants[0];
};

export const planetKlaus = () => {
	const inhabitant = klaus();
	return inhabitant ? findPlanetByNameOrFail(inhabitant.homePlanet) : undefined;
};
