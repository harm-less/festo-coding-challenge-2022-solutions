import {
	resolveBloodSamplePicoGen3,
	resolveBloodSampleSequenceFragment,
	validatedLabBloodSamplesGen3,
	validatedLabBloodSamplesGen3Clean
} from './3.1-pico-bots-gen-3.puzzle';

describe('Episode 3.1 - Inhabitants with PICO Gen 3', () => {
	test('All samples must have PICO Gen 3', () => {
		for (const sampleIsNotClean of validatedLabBloodSamplesGen3()) {
			expect(sampleIsNotClean).toBeTruthy();
		}
	});
	test('No sample must have PICO Gen 3', () => {
		for (const sampleIsNotClean of validatedLabBloodSamplesGen3Clean()) {
			expect(sampleIsNotClean).toBeFalsy();
		}
	});
});

test('resolveBloodSamplePicoGen3', () => {
	expect(
		resolveBloodSamplePicoGen3([
			'i   ippc',
			'i icoppi',
			'pip  ic ',
			'o  op  o',
			'oc oi   ',
			' ipioi p'
		])
	).toEqual([
		{x: 6, y: 1},
		{x: 7, y: 1},
		{x: 7, y: 0},
		{x: 0, y: 3},
		{x: 0, y: 2},
		{x: 1, y: 2},
		{x: 3, y: 1},
		{x: 4, y: 1},
		{x: 5, y: 1},
		{x: 1, y: 5},
		{x: 1, y: 4},
		{x: 0, y: 4}
	]);
});

test('Util', () => {
	expect(resolveBloodSampleSequenceFragment(['c    oic', 'cico opp'], 'pic')).toEqual([
		[
			{x: 6, y: 1},
			{x: 6, y: 0},
			{x: 7, y: 0}
		]
	]);
});
