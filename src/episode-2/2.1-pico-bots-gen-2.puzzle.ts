import {labBloodSamplesGen2} from '../data/lab-blood-gen-2.data';
import {labBloodSamplesGen2Clean} from '../data/lab-blood-gen-2-clean.data';
import {inhabitants} from '../data/population.constants';

interface Pointer {
	x: number;
	y: number;
}

interface Edge {
	character: string;
}
interface SequenceEdges {
	left?: Edge;
	right?: Edge;
	top?: Edge;
	bottom?: Edge;
}

const SEQUENCE = 'picoico';

function findSequenceEdgesAtIndex(bloodSamples: Array<string>, {x, y}: Pointer) {
	if (!bloodSamples[y]) {
		return;
	}
	const edges: SequenceEdges = {};
	const bloodSampleY = bloodSamples[y];
	if (bloodSampleY) {
		if (x > 0) {
			// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
			edges.left = {character: bloodSampleY[x - 1]!};
		}
		if (x < bloodSampleY.length - 1) {
			// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
			edges.right = {character: bloodSampleY[x + 1]!};
		}
	}

	const bloodSampleYTop = bloodSamples[y - 1];
	if (y > 0 && bloodSampleYTop && bloodSampleYTop.length > x) {
		// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
		edges.top = {character: bloodSampleYTop[x]!};
	}
	const bloodSampleYBottom = bloodSamples[y + 1];
	if (y < bloodSamples.length - 1 && bloodSampleYBottom && bloodSampleYBottom.length > x) {
		// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
		edges.bottom = {character: bloodSampleYBottom[x]!};
	}

	return edges;
}

function validSequencesAtIndex(
	bloodSamples: Array<string>,
	pointer: Pointer,
	sequenceIndex: number
): boolean {
	const nextSequenceIndex = sequenceIndex + 1;
	const nextSequenceCharacter = SEQUENCE[nextSequenceIndex];
	if (!nextSequenceCharacter) {
		return true;
	}

	const edges = findSequenceEdgesAtIndex(bloodSamples, pointer);
	if (!edges) {
		return false;
	}
	const {x, y} = pointer;
	const {left, right, top, bottom} = edges;
	const leftHasNextSequenceCharacter = left?.character === nextSequenceCharacter;
	const rightHasNextSequenceCharacter = right?.character === nextSequenceCharacter;
	const topHasNextSequenceCharacter = top?.character === nextSequenceCharacter;
	const bottomHasNextSequenceCharacter = bottom?.character === nextSequenceCharacter;
	if (
		leftHasNextSequenceCharacter &&
		validSequencesAtIndex(bloodSamples, {x: x - 1, y}, nextSequenceIndex)
	) {
		return true;
	}
	if (
		rightHasNextSequenceCharacter &&
		validSequencesAtIndex(bloodSamples, {x: x + 1, y}, nextSequenceIndex)
	) {
		return true;
	}
	if (
		topHasNextSequenceCharacter &&
		validSequencesAtIndex(bloodSamples, {x, y: y - 1}, nextSequenceIndex)
	) {
		return true;
	}
	if (
		bottomHasNextSequenceCharacter &&
		validSequencesAtIndex(bloodSamples, {x, y: y + 1}, nextSequenceIndex)
	) {
		return true;
	}

	return false;
}

function bloodSampleHasPicoGen2(bloodSampleLines: Array<string>) {
	const firstCharacter = SEQUENCE[0];
	if (!firstCharacter) {
		throw new Error('Sequence must have a character');
	}
	for (let y = 0; y < bloodSampleLines.length; y++) {
		const bloodSamplesY = bloodSampleLines[y];
		if (!bloodSamplesY) {
			throw new Error('Invalid blood sample');
		}
		for (let x = 0; x < bloodSamplesY.length; x++) {
			if (bloodSamplesY[x] === firstCharacter) {
				const isValidBloodSample = validSequencesAtIndex(bloodSampleLines, {x, y}, 0);
				if (!isValidBloodSample) {
					continue;
				}
				return true;
			}
		}
	}
	return false;
}

export const validatedLabBloodSamplesGen2 = labBloodSamplesGen2.map((bloodSampleLines) => {
	return bloodSampleHasPicoGen2(bloodSampleLines);
});
export const validatedLabBloodSamplesGen2Clean = labBloodSamplesGen2Clean.map(
	(bloodSampleLines) => {
		return bloodSampleHasPicoGen2(bloodSampleLines);
	}
);

export const inhabitantsWithPicoGen2 = inhabitants.filter((inhabitant) => {
	return bloodSampleHasPicoGen2(inhabitant.bloodSampleLines);
});
export const inhabitantsWithPicoGen2IdSum = inhabitantsWithPicoGen2.reduce((sum, {id}) => {
	return sum + id;
}, 0);
