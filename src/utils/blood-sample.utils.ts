import {reverseString} from './string.utils';

export function parseBloodsample(rawBlooadSample: string) {
	const lines = rawBlooadSample.split('\n');
	lines.shift();
	lines.shift();
	lines.pop();
	return cleanBloodSample(lines);
}

export function cleanBloodSample(bloodSampleLines: Array<string>) {
	return bloodSampleLines.map((line) => line.trim().replace('|', '').replace('|', ''));
}

export function hasPicoGen1InBloodSampleLines(bloodSampleLines: Array<string>) {
	const PICO = 'pico';
	return !!bloodSampleLines.find((line) => {
		return line.includes(PICO) || reverseString(line).includes(PICO);
	});
}
