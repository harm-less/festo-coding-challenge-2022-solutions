import {inhabitants} from '../data/population.constants';
import {hasPicoGen1InBloodSampleLines} from '../utils/inhabitant.utils';

export const inhabitantsWithPico = inhabitants.filter(({bloodSampleLines}) => {
	if (bloodSampleLines[0]) {
		for (let x = 0; x < bloodSampleLines[0].length; x++) {
			const verticalBloodSampleLine = bloodSampleLines.reduce(
				(newLine, bloodSampleLine) => `${newLine}${bloodSampleLine.charAt(x)}`,
				''
			);

			if (hasPicoGen1InBloodSampleLines([verticalBloodSampleLine])) {
				return true;
			}
		}
	}

	return hasPicoGen1InBloodSampleLines(bloodSampleLines);
});

export const inhabitantsWithPicoIdSum = inhabitantsWithPico.reduce((sum, {id}) => {
	sum += id;
	return sum;
}, 0);
