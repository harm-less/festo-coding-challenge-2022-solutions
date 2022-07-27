import {toMinutes} from '../utils/time.utils';
import {securityLogs} from './security-log.data';

const places = securityLogs.split('Place: ');
places.shift();

export interface SecurityLog {
	place: string;
	time: string;
	hours: number;
	minutes: number;
	minutesFromMidnight: number;
	type: 'in' | 'out';
}

export const inhabitantsSecurityLogs = places.reduce<Record<string, Array<SecurityLog>>>(
	(inhabitants, rawPlace) => {
		const rawEntries = rawPlace.split('\n\n');
		const place = rawEntries.shift();
		if (!place) {
			throw new Error('No place found');
		}
		rawEntries.pop();

		rawEntries.forEach((rawEntry) => {
			const entry = rawEntry.split('\n');
			const time = entry.shift();
			if (!time) {
				throw new Error('No time found');
			}

			const timeSplit = time.split(':');
			// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
			const hours = parseInt(timeSplit[0]!, 10);
			// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
			const minutes = parseInt(timeSplit[1]!, 10);

			entry.forEach((entryLine) => {
				const typeLines = entryLine.split(': ');
				const type = typeLines[0] as 'in' | 'out';
				const names = typeLines[1]?.split(', ');

				names?.forEach((name) => {
					if (!inhabitants[name]) {
						inhabitants[name] = [];
					}
					inhabitants[name]?.push({
						place,
						time,
						hours,
						minutes,
						minutesFromMidnight: toMinutes(hours, minutes),
						type
					});
				});
			});
		});
		return inhabitants;
	},
	{}
);
