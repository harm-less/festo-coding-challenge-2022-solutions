import {inhabitants} from '../data/population.constants';
import {reverseString} from './string.utils';

export function hasPicoGen1InBloodSampleLines(bloodSampleLines: Array<string>) {
	const PICO = 'pico';
	return !!bloodSampleLines.find((line) => {
		return line.includes(PICO) || reverseString(line).includes(PICO);
	});
}

export function findInhabitantByName(name: string) {
	return inhabitants.find((inhabitant) => inhabitant.name === name);
}
