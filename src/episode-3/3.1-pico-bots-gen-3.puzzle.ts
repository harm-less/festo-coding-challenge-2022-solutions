import {labBloodSamplesGen3} from '../data/lab-blood-gen-3.data';
import {labBloodSamplesGen3Clean} from '../data/lab-blood-gen-3-clean.data';
import {inhabitants} from '../data/population.constants';
import {resolveBloodSampleBendingSequencePosibilitiesAtPointer} from '../utils/blood-sample.utils';
import {BloodSamplePointer} from '../types/blood-sample.types';

const SEQUENCES_GEN3 = ['pic', 'opi', 'cop', 'ico'] as const;

export function resolveBloodSampleSequenceFragment(
	bloodSampleLines: Array<string>,
	sequenceFragment: string
) {
	const resolvedFragmentPosibilities: Array<Array<BloodSamplePointer>> = [];
	for (let y = 0; y < bloodSampleLines.length; y++) {
		const bloodSamplesY = bloodSampleLines[y];
		if (!bloodSamplesY) {
			throw new Error('Invalid blood sample');
		}
		for (let x = 0; x < bloodSamplesY.length; x++) {
			const resolvedSequencePointers = resolveBloodSampleBendingSequencePosibilitiesAtPointer(
				bloodSampleLines,
				sequenceFragment,
				{x, y}
			);

			if (resolvedSequencePointers) {
				resolvedFragmentPosibilities.push(...resolvedSequencePointers);
			}
		}
	}
	return resolvedFragmentPosibilities;
}

export function resolveBloodSamplePicoGen3(
	bloodSampleLines: Array<string>,
	sequenceIndex = 0,
	priorPointers: Array<BloodSamplePointer> = []
): Array<BloodSamplePointer> | undefined {
	if (sequenceIndex >= SEQUENCES_GEN3.length) {
		return priorPointers;
	}

	// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
	const sequenceFragment = SEQUENCES_GEN3[sequenceIndex]!;
	const resolvedFragmentPosibilities = resolveBloodSampleSequenceFragment(
		bloodSampleLines,
		sequenceFragment
	);

	for (const fragmentPosibility of resolvedFragmentPosibilities) {
		if (!fragmentPosibility.length) {
			continue;
		}
		const intersectingPossiblePointers = priorPointers.filter((priorPointer) =>
			fragmentPosibility.some(
				(fragmentPossibilityPointer) =>
					priorPointer.x === fragmentPossibilityPointer.x &&
					priorPointer.y === fragmentPossibilityPointer.y
			)
		);

		if (intersectingPossiblePointers.length) {
			continue;
		}
		const resolvedBloadSample = resolveBloodSamplePicoGen3(bloodSampleLines, sequenceIndex + 1, [
			...priorPointers,
			...fragmentPosibility
		]);
		if (resolvedBloadSample) {
			return resolvedBloadSample;
		}
	}
}

function bloodSampleHasPicoGen3(bloodSampleLines: Array<string>) {
	return resolveBloodSamplePicoGen3(bloodSampleLines);
}

export const validatedLabBloodSamplesGen3 = () =>
	labBloodSamplesGen3.map((bloodSampleLines) => {
		return !!bloodSampleHasPicoGen3(bloodSampleLines);
	});
export const validatedLabBloodSamplesGen3Clean = () =>
	labBloodSamplesGen3Clean.map((bloodSampleLines) => {
		return !!bloodSampleHasPicoGen3(bloodSampleLines);
	});

export const inhabitantsWithPicoGen3 = () => {
	return inhabitants.filter((inhabitant) => {
		return bloodSampleHasPicoGen3(inhabitant.bloodSampleLines);
	});
};
export const inhabitantsWithPicoGen3IdSum = () => {
	return inhabitantsWithPicoGen3().reduce((sum, {id}) => {
		return sum + id;
	}, 0);
};
