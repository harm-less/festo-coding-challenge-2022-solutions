import {resolveBloodSampleBendingSequencePosibilitiesAtPointer} from './blood-sample.utils';

describe('resolveBloodSampleBendingSequencePointersAtPointer', () => {
	test('Passing sequence', () => {
		expect(
			resolveBloodSampleBendingSequencePosibilitiesAtPointer(['c    oic', 'cico opp'], 'pic', {
				x: 6,
				y: 1
			})
		).toEqual([
			[
				{x: 6, y: 1},
				{x: 6, y: 0},
				{x: 7, y: 0}
			]
		]);
	});
	test('Passing short sequence', () => {
		expect(
			resolveBloodSampleBendingSequencePosibilitiesAtPointer(['c    oic', 'cico opp'], 'p', {
				x: 6,
				y: 1
			})
		).toEqual([[{x: 6, y: 1}]]);
	});
	test('Failing sequence at character', () => {
		expect(
			resolveBloodSampleBendingSequencePosibilitiesAtPointer(['c    oic', 'cico opp'], 'pic', {
				x: 7,
				y: 1
			})
		).toEqual([]);
	});
	test('Failing sequence at empty pointer', () => {
		expect(
			resolveBloodSampleBendingSequencePosibilitiesAtPointer(['c    oic', 'cico opp'], 'pic', {
				x: 2,
				y: 0
			})
		).toBeUndefined();
	});
});
