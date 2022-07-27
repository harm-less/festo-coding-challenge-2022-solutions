import {Inhabitant} from '../data/population.constants';
import {inhabitantsSecurityLogs, SecurityLog} from '../data/security-log.constants';
import {chunk} from '../utils/array.utils';
import {findInhabitantByName} from '../utils/inhabitant.utils';
import {toMinutes} from '../utils/time.utils';

interface Shift {
	shiftIn: SecurityLog;
	shiftOut: SecurityLog;
}

export interface InhabitantWithoutAliby {
	shifts: Array<Shift>;
	inhabitant: Inhabitant;
}

const CRIME_SCENE_TRAVEL_TIMES: Record<string, number> = {
	'Bio-Lab': 21,
	Factory: 18,
	'Shopping Mall': 17,
	'Food Plant': 20,
	'Office Station': 20,
	Gym: 7,
	'Starship Garage': 16,
	'Happy-Center': 27,
	Palace: 37,
	Junkyard: 16,
	'Pod Racing Track': 19,
	'Mining Outpost': 15
};

const windowStartMinutes = toMinutes(11, 0);
const windowEndMinutes = toMinutes(13, 0);

function getSecurityLogPlaceTravelTime(shift: SecurityLog) {
	const travelTime = CRIME_SCENE_TRAVEL_TIMES[shift.place];
	if (!travelTime) {
		throw new Error('Place not listed');
	}
	return travelTime;
}

function getShifts(shiftSecurityLogs: Array<Array<SecurityLog>>) {
	return shiftSecurityLogs.reduce<Array<Shift>>((shiftLengths, shiftSecurityLogs) => {
		if (shiftSecurityLogs.length !== 2) {
			throw new Error('Not a valid shift');
		}

		// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
		const shiftIn = shiftSecurityLogs[0]!;
		if (shiftIn.type !== 'in') {
			throw new Error('Expected shift to have type "in"');
		}
		const shiftInMinutes = shiftIn.minutesFromMidnight;
		const travelTimeFromCrimeScene = getSecurityLogPlaceTravelTime(shiftIn);
		if (shiftInMinutes - travelTimeFromCrimeScene > windowEndMinutes) {
			return shiftLengths;
		}

		// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
		const shiftOut = shiftSecurityLogs[1]!;
		if (shiftOut.type !== 'out') {
			throw new Error('Expected shift to have type "out"');
		}
		const shiftOutMinutes = shiftOut.minutesFromMidnight;
		const travelTimeTowardsCrimeScene = getSecurityLogPlaceTravelTime(shiftOut);
		if (shiftOutMinutes + travelTimeTowardsCrimeScene < windowStartMinutes) {
			return shiftLengths;
		}

		return [...shiftLengths, {shiftIn, shiftOut}].sort(({shiftIn: inA}, {shiftIn: inB}) => {
			return inA.minutesFromMidnight < inB.minutesFromMidnight ? -1 : 1;
		});
	}, []);
}

export const inhabitantsWithoutAnAlibi = () =>
	Object.keys(inhabitantsSecurityLogs).reduce<Array<InhabitantWithoutAliby>>(
		(subjects, inhabitantName) => {
			const inhabitantsSecurityLog = inhabitantsSecurityLogs[inhabitantName];
			if (!inhabitantsSecurityLog) {
				throw new Error('Logs not found');
			}

			const shiftSecurityLogs = chunk(inhabitantsSecurityLog, 2);

			const shifts = getShifts(shiftSecurityLogs);

			const hasDubiousShift = shifts.reduce<{previousShift: Shift | undefined; isDubious: boolean}>(
				({previousShift, isDubious}, shift, _currentIndex) => {
					if (shifts.length === 1) {
						const {shiftIn, shiftOut} = shift;
						const previousShiftPossibleArrivalAtCrimeScene =
							shiftOut.minutesFromMidnight + getSecurityLogPlaceTravelTime(shiftOut);

						const shiftPossibleLeavingOfCrimeScene =
							shiftIn.minutesFromMidnight - getSecurityLogPlaceTravelTime(shiftIn);

						if (
							previousShiftPossibleArrivalAtCrimeScene + 20 <= windowEndMinutes ||
							shiftPossibleLeavingOfCrimeScene - 20 >= windowStartMinutes
						) {
							return {previousShift: shift, isDubious: true};
						}
					}
					if (!isDubious && previousShift) {
						const {shiftOut: previousShiftOut} = previousShift;
						const previousShiftPossibleArrivalAtCrimeScene =
							previousShiftOut.minutesFromMidnight +
							getSecurityLogPlaceTravelTime(previousShiftOut);

						const {shiftIn} = shift;
						const shiftPossibleLeavingOfCrimeScene =
							shiftIn.minutesFromMidnight - getSecurityLogPlaceTravelTime(shiftIn);

						if (shiftPossibleLeavingOfCrimeScene - previousShiftPossibleArrivalAtCrimeScene >= 20) {
							return {previousShift: shift, isDubious: true};
						}
					}
					return {previousShift: shift, isDubious};
				},
				{previousShift: undefined, isDubious: !shifts.length}
			);

			if (!hasDubiousShift.isDubious) {
				return subjects;
			}

			const inhabitant = findInhabitantByName(inhabitantName);
			if (!inhabitant) {
				throw new Error('Inhabitant not found');
			}

			return [
				...subjects,
				{
					shifts,
					inhabitant
				}
			];
		},
		[]
	);

// first try: 	592424337
// second try: 	560991360
// third try: 	560991360
// fourth try: 	1809744737
export const inhabitantsWithoutAnAlibiIdSum = () => {
	return inhabitantsWithoutAnAlibi().reduce((sum, {inhabitant}) => {
		return sum + inhabitant.id;
	}, 0);
};
