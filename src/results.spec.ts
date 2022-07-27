import {jellyJones} from './episode-1/1.0.start';
import {inhabitantsWithPicoIdSum} from './episode-1/1.1-pico-bots-gen-1.puzzle';
import {allPossibleOutliersIdSum} from './episode-1/1.2-two-dimentional-galaxy.puzzle';
import {klaus} from './episode-2/2.0.start';
import {inhabitantsWithPicoGen2IdSum} from './episode-2/2.1-pico-bots-gen-2.puzzle';
import {inhabitantsFromPlanetsWithSpaceRobberiesIdSum} from './episode-2/2.2-space-robbery.puzzle';
import {inhabitantsWith79GALEarningsIdSum} from './episode-2/2.3-pay-check.puzzle';
import {redMoth} from './episode-3/3.0.start';
import {inhabitantsWithPicoGen3IdSum} from './episode-3/3.1-pico-bots-gen-3.puzzle';
import {inhabitantsWithoutAnAlibiIdSum} from './episode-3/3.3-alibi.puzzle';
import {
	foundUsersContainingId814IdSum,
	foundUsersHavingAccessToRoom5IdSum,
	foundUsersLoggedInBefore714IdSum
} from './intro/intro-puzzles';

describe('Intro', () => {
	test('0.1 - Found users containing id 814', () => {
		expect(foundUsersContainingId814IdSum).toBe(56503155);
	});
	test('0.2 - Found users having access to room 5', () => {
		expect(foundUsersHavingAccessToRoom5IdSum).toBe(53905239);
	});
	// TODO: Somehow it's wrong
	test('0.3 - Found users logged in before 7:14', () => {
		expect(foundUsersLoggedInBefore714IdSum).toBe(47594213);
	});
});

describe('Episode 1', () => {
	test("1.0 - Find Jelly Jones's real name", () => {
		expect(jellyJones.name).toBe('Tun Kazem');
	});
	test('1.1 - Inhabitants with PICO', () => {
		expect(inhabitantsWithPicoIdSum).toBe(2288948789);
	});
	test('1.2 - All possible outliers', () => {
		expect(allPossibleOutliersIdSum).toBe(2438905648);
	});
	// TODO
	test.skip('1.3 - All people from place sequence', () => {});
});

describe('Episode 2', () => {
	test("2.0 - Find Klaus's real name", () => {
		expect(klaus()?.name).toBe('Jianwei Yakubu');
	});
	test('2.1 - Inhabitants with PICO Gen 2', () => {
		expect(inhabitantsWithPicoGen2IdSum()).toBe(2105304392);
	});
	// TODO
	test.skip('2.2 - Inhabitants from planets with space robberies', () => {
		expect(inhabitantsFromPlanetsWithSpaceRobberiesIdSum).toBe(0);
	});
	test('2.3 - Inhabitants with 79 GAL earnings', () => {
		expect(inhabitantsWith79GALEarningsIdSum()).toBe(3288804647);
	});
});

describe('Episode 3', () => {
	test("3.0 - Find The Red Moth's real name", () => {
		expect(redMoth()?.name).toBe('Agnes Carter');
	});
	test('3.1 - Inhabitants with PICO Gen 3', () => {
		expect(inhabitantsWithPicoGen3IdSum()).toBe(1924306984);
	});
	// TODO
	test.skip('3.2 - Inhabitants from planets with space robberies', () => {
		expect(inhabitantsFromPlanetsWithSpaceRobberiesIdSum).toBe(0);
	});
	test.skip('3.3 - Inhabitants without an alibi', () => {
		expect(inhabitantsWithoutAnAlibiIdSum()).toBe(3288804647);
	});
});
