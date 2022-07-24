import {findPlanetByNameOrFail} from '../utils/planet.utils';
import {Inhabitant} from '../data/population.constants';
import {inhabitantsWithPicoGen2} from './2.1-pico-bots-gen-2.puzzle';
import {inhabitantsWhoCouldHaveEarned79GAL} from './2.3-pay-check.puzzle';

const klausInhabitants: Array<Inhabitant> = inhabitantsWhoCouldHaveEarned79GAL
	.filter((payCheck) => {
		return inhabitantsWithPicoGen2.find(
			(gen2Inhabitant) => gen2Inhabitant.id === payCheck.inhabitant.id
		);
	})
	.map(({inhabitant}) => inhabitant);
if (klausInhabitants.length !== 1) {
	throw new Error();
}
if (klausInhabitants[0]?.name !== 'Jianwei Yakubu') {
	throw new Error('Not Klaus');
}

export const klaus = klausInhabitants[0];

export const planetKlaus = findPlanetByNameOrFail(klausInhabitants[0].homePlanet);
