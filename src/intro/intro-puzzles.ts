import {users} from '../data/users.data';
import {reverseString} from '../utils/string.utils';

// program to convert decimal to binary
function convertToBinary(x: number) {
	let bin = 0;
	let rem,
		i = 1;
	while (x != 0) {
		rem = x % 2;
		x = parseInt((x / 2).toString());
		bin = bin + rem * i;
		i = i * 10;
	}
	return bin;
}

// // puzzle 1
const foundUsersContainingId814 = users.filter((user) => {
	return user.id.includes('814');
});
export const foundUsersContainingId814IdSum = foundUsersContainingId814.reduce((sum, {id}) => {
	return sum + parseInt(id, 10);
}, 0);

// // puzzle 2
const foundUsersHavingAccessToRoom5 = users.filter(({accessKey}) => {
	return reverseString(convertToBinary(accessKey).toString()).charAt(3) === '1';
});
export const foundUsersHavingAccessToRoom5IdSum = foundUsersHavingAccessToRoom5.reduce(
	(sum, {id}) => {
		return sum + parseInt(id, 10);
	},
	0
);

// // puzzle 3
const foundUsersLoggedInBefore714 = users.filter(({firstLogin}) => {
	const [hours, minutes] = firstLogin.split(':') as [string, string];
	if (parseInt(hours, 10) <= 7 && parseInt(minutes, 10) < 14) {
		return true;
	}

	return false;
});
export const foundUsersLoggedInBefore714IdSum = foundUsersLoggedInBefore714.reduce((sum, {id}) => {
	return sum + parseInt(id, 10);
}, 0);
