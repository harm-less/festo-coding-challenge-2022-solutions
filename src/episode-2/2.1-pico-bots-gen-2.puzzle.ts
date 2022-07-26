import {labBloodSamplesGen2} from '../data/lab-blood-gen-2.data';
import {labBloodSamplesGen2Clean} from '../data/lab-blood-gen-2-clean.data';
import {inhabitants} from '../data/population.constants';
import {resolveBloodSampleBendingSequencePosibilitiesAtPointer} from '../utils/blood-sample.utils';

const SEQUENCE_GEN2 = 'picoico';

function bloodSampleHasPicoGen2(bloodSampleLines: Array<string>) {
	for (let y = 0; y < bloodSampleLines.length; y++) {
		const bloodSamplesY = bloodSampleLines[y];
		if (!bloodSamplesY) {
			throw new Error('Invalid blood sample');
		}
		for (let x = 0; x < bloodSamplesY.length; x++) {
			const isValidBloodSample = resolveBloodSampleBendingSequencePosibilitiesAtPointer(
				bloodSampleLines,
				SEQUENCE_GEN2,
				{x, y}
			);
			if (!isValidBloodSample?.length) {
				continue;
			}
			return true;
		}
	}
	return false;
}

export const validatedLabBloodSamplesGen2 = () =>
	labBloodSamplesGen2.map((bloodSampleLines) => {
		return bloodSampleHasPicoGen2(bloodSampleLines);
	});
export const validatedLabBloodSamplesGen2Clean = () =>
	labBloodSamplesGen2Clean.map((bloodSampleLines) => {
		return bloodSampleHasPicoGen2(bloodSampleLines);
	});

export const inhabitantsWithPicoGen2 = () =>
	inhabitants.filter((inhabitant) => {
		return bloodSampleHasPicoGen2(inhabitant.bloodSampleLines);
	});
export const inhabitantsWithPicoGen2IdSum = () =>
	inhabitantsWithPicoGen2().reduce((sum, {id}) => {
		return sum + id;
	}, 0);
