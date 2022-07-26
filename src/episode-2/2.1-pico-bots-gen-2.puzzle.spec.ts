import {
	validatedLabBloodSamplesGen2,
	validatedLabBloodSamplesGen2Clean
} from './2.1-pico-bots-gen-2.puzzle';

describe('Episode 2.1 - Inhabitants with PICO Gen 2', () => {
	test('All samples must have PICO Gen 2', () => {
		for (const sampleIsNotClean of validatedLabBloodSamplesGen2()) {
			expect(sampleIsNotClean).toBeTruthy();
		}
	});
	test('No sample must have PICO Gen 2', () => {
		for (const sampleIsNotClean of validatedLabBloodSamplesGen2Clean()) {
			expect(sampleIsNotClean).toBeFalsy();
		}
	});
});
