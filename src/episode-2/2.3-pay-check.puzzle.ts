import {Inhabitant} from '../data/population.constants';
import {inhabitantsSecurityLogs} from '../data/security-log.constants';
import {chunk} from '../utils/array.utils';
import {findInhabitantByName} from '../utils/inhabitant.utils';

export interface InhabitantPayCheck {
	shifts: Array<number>;
	inhabitant: Inhabitant;
}

const workInhabitants = Object.keys(inhabitantsSecurityLogs).map<InhabitantPayCheck>(
	(inhabitantName) => {
		const inhabitantsSecurityLog = inhabitantsSecurityLogs[inhabitantName];
		if (!inhabitantsSecurityLog) {
			throw new Error('Logs not found');
		}

		const shiftSecurityLogs = chunk(inhabitantsSecurityLog, 2);

		const shifts = shiftSecurityLogs.reduce<Array<number>>((shiftLengths, shiftSecurityLogs) => {
			if (shiftSecurityLogs.length !== 2) {
				throw new Error('Not a valid shift');
			}
			// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
			const shiftIn = shiftSecurityLogs[0]!;
			if (shiftIn.type !== 'in') {
				throw new Error('Expected shift to have type "in"');
			}
			// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
			const shiftOut = shiftSecurityLogs[1]!;
			if (shiftOut.type !== 'out') {
				throw new Error('Expected shift to have type "out"');
			}

			const hoursWorked =
				shiftOut.hours - shiftIn.hours - (shiftOut.minutes < shiftIn.minutes ? 1 : 0);
			const minutesWorked =
				shiftOut.minutes < shiftIn.minutes
					? shiftOut.minutes + 60 - shiftIn.minutes
					: shiftOut.minutes - shiftIn.minutes;

			const currentShiftLength = hoursWorked * 60 + minutesWorked;
			return [...shiftLengths, currentShiftLength];
		}, []);

		const inhabitant = findInhabitantByName(inhabitantName);
		if (!inhabitant) {
			throw new Error('Inhabitant not found');
		}

		return {
			shifts,
			inhabitant
		};
	}
);

function findPossibleShiftEarningCombinations(shiftLenghs: Array<number>) {
	const possibleEarnings: Array<number> = [];
	const findCombinations = (startValue: number, remainingShiftLengths: Array<number>) => {
		for (let i = 0; i < remainingShiftLengths.length; i++) {
			// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
			possibleEarnings.push(startValue + remainingShiftLengths[i]!);
			// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
			findCombinations(startValue + remainingShiftLengths[i]!, remainingShiftLengths.slice(i + 1));
		}
	};
	findCombinations(0, shiftLenghs);
	return possibleEarnings;
}

export const inhabitantsWhoCouldHaveEarned79GAL = workInhabitants.filter(({shifts}) => {
	const shiftsShorterThan79 = shifts.filter((shift) => shift <= 79);
	const shiftEarningCombinations = findPossibleShiftEarningCombinations(shiftsShorterThan79);
	return shiftEarningCombinations.includes(79);
});

// first try: 2155372608
// second try: 3288804647
export const inhabitantsWith79GALEarningsIdSum = inhabitantsWhoCouldHaveEarned79GAL.reduce(
	(sum, {inhabitant}) => {
		return sum + inhabitant.id;
	},
	0
);
