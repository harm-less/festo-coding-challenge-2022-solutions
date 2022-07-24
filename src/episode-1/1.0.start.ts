import {Inhabitant} from '../data/population.constants';
import {inhabitantsWithPico} from './1.1-pico-bots-gen-1.puzzle';
import {outlierPlanets} from './1.2-two-dimentional-galaxy.puzzle';

const jellyJonesInhabitants: Array<Inhabitant> = inhabitantsWithPico.filter((inhabitant) => {
	return outlierPlanets.find((planet) => planet.name === inhabitant.homePlanet);
});
if (jellyJonesInhabitants.length !== 1) {
	throw new Error();
}
if (jellyJonesInhabitants[0]?.name !== 'Tun Kazem') {
	throw new Error('Not Jelly Jones');
}

export const jellyJones = jellyJonesInhabitants[0];
