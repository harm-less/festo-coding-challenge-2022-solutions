import {jellyJones} from './episode-1/1.0.start';
import {inhabitantsWithPicoIdSum} from './episode-1/1.1-pico-bots-gen-1.puzzle';
import {allPossibleOutliersIdSum} from './episode-1/1.2-two-dimentional-galaxy.puzzle';
import {klaus} from './episode-2/2.0.start';
import {inhabitantsWithPicoGen2IdSum} from './episode-2/2.1-pico-bots-gen-2.puzzle';
// import {inhabitantsFromPlanetsWithSpaceRobberiesIdSum} from './episode-2/2.2-space-robbery.puzzle';
import {inhabitantsWith79GALEarningsIdSum} from './episode-2/2.3-pay-check.puzzle';
import {
	foundUsersContainingId814IdSum,
	foundUsersHavingAccessToRoom5IdSum,
	foundUsersLoggedInBefore714IdSum
} from './intro/intro-puzzles';

console.info('Intro');
console.info('Intro 1.1 answer:', {foundUsersContainingId814IdSum}); // 56503155
console.info('Intro 1.2 answer:', {foundUsersHavingAccessToRoom5IdSum}); // 53905239
console.info('Intro 1.3 answer (wrong?)', {foundUsersLoggedInBefore714IdSum}); // 18824468

console.info('\n');
console.info('Episode 1');
console.info('Episode 1 answer:', {jellyJones: jellyJones.name}); // Tun Kazem
console.info('Episode 1.1 answer:', {inhabitantsWithPicoIdSum}); // 2288948789
console.info('Episode 1.2 answer:', {allPossibleOutliersIdSum}); // 2438905648

console.info('\n');
console.info('Episode 2');
console.info('Episode 2 answer:', {klaus: klaus.name}); // Jianwei Yakubu
console.info('Episode 2.1 answer:', {inhabitantsWithPicoGen2IdSum}); // 2105304392
// console.info('Episode 2.2 answer:', {inhabitantsFromPlanetsWithSpaceRobberiesIdSum}); // 2105304392
console.info('Episode 2.3 answer:', {inhabitantsWith79GALEarningsIdSum}); // 3288804647
