import {BloodSamplePointer} from '../types/blood-sample.types';
import {reverseString} from './string.utils';

interface Edge {
	character: string;
}
interface SequenceEdges {
	self?: Edge;
	left?: Edge;
	right?: Edge;
	top?: Edge;
	bottom?: Edge;
}

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

function findBloadSampleEdgesAtIndex(bloodSamples: Array<string>, {x, y}: BloodSamplePointer) {
	if (!bloodSamples[y]) {
		return;
	}
	const bloodSampleY = bloodSamples[y];
	const edges: SequenceEdges = {};
	if (bloodSampleY) {
		// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
		edges.self = {character: bloodSampleY[x]!};

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

export function resolveBloodSampleBendingSequencePosibilitiesAtPointer(
	bloodSamples: Array<string>,
	sequence: string,
	pointer: BloodSamplePointer,
	sequenceIndex = 0,
	priorPointers?: Array<BloodSamplePointer>
): Array<Array<BloodSamplePointer>> | undefined {
	const sequenceCharacter = sequence[sequenceIndex];
	if (!sequenceCharacter) {
		throw new Error(`Sequence not found at index ${sequenceIndex}`);
	}

	const edges = findBloadSampleEdgesAtIndex(bloodSamples, pointer);
	if (!edges) {
		return;
	}
	const {self, left, right, top, bottom} = edges;
	const selfHasSequenceCharacter = self?.character === sequenceCharacter;

	if (sequence === 'cop' && pointer.x === 5 && pointer.y === 3) {
		// console.log('whyyyy?', selfHasSequenceCharacter);
	}

	if (!selfHasSequenceCharacter) {
		return;
	}
	const nextSequenceCharacter = sequence[sequenceIndex + 1];
	if (!nextSequenceCharacter) {
		return [[...(priorPointers || []), pointer]];
	}
	const leftHasSequenceCharacter = left?.character === nextSequenceCharacter;
	const rightHasSequenceCharacter = right?.character === nextSequenceCharacter;
	const topHasSequenceCharacter = top?.character === nextSequenceCharacter;
	const bottomHasSequenceCharacter = bottom?.character === nextSequenceCharacter;

	function resolveNextPointer(nextPointer: BloodSamplePointer) {
		return resolveBloodSampleBendingSequencePosibilitiesAtPointer(
			bloodSamples,
			sequence,
			nextPointer,
			sequenceIndex + 1,
			[...(priorPointers || []), pointer]
		);
	}

	const {x, y} = pointer;

	const sequencePosibilities: Array<Array<BloodSamplePointer>> = [];

	const nextInSequenceLeft = leftHasSequenceCharacter
		? resolveNextPointer({x: x - 1, y})
		: undefined;
	if (nextInSequenceLeft) {
		sequencePosibilities.push(...nextInSequenceLeft);
	}

	const nextInSequenceRight = rightHasSequenceCharacter
		? resolveNextPointer({x: x + 1, y})
		: undefined;
	if (nextInSequenceRight) {
		sequencePosibilities.push(...nextInSequenceRight);
	}
	const nextInSequenceTop = topHasSequenceCharacter ? resolveNextPointer({x, y: y - 1}) : undefined;
	if (nextInSequenceTop) {
		sequencePosibilities.push(...nextInSequenceTop);
	}
	const nextInSequenceBottom = bottomHasSequenceCharacter
		? resolveNextPointer({x, y: y + 1})
		: undefined;
	if (nextInSequenceBottom) {
		sequencePosibilities.push(...nextInSequenceBottom);
	}

	return sequencePosibilities;
}
