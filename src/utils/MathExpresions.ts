const letters = [
	'q',
	'w',
	'e',
	'r',
	't',
	'y',
	'u',
	'i',
	'o',
	'p',
	'a',
	's',
	'd',
	'f',
	'g',
	'h',
	'j',
	'k',
	'l',
	'z',
	'x',
	'c',
	'v',
	'b',
	'n',
	'm',
];

const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

interface mathItem {
	value: string;
	type?:
		| 'plus'
		| 'minus'
		| 'divide'
		| 'percent'
		| 'asterisk'
		| 'double_equal'
		| 'equal'
		| 'pi'
		| 'square_root'
		| 'qubic_root'
		| 'separator'
		| 'less_than'
		| 'more_than'
		| 'equal_greater'
		| 'equal_lower'
		| 'power_of'
		| 'letters';

	index: number;
}

export function parseExpression(value: string) {
	let list: mathItem[] = [];
	for (let i = 0; i < value.length; i++) {
		if (value[i] === '+') {
			// Add Space
			list.push({ value: ' ', index: -1 });

			list.push({
				value: value[i],
				type: 'plus',
				index: i,
			});

			// Add Space
			list.push({ value: ' ', index: -1 });
		} else if (value[i] === '-') {
			// Add Space
			list.push({ value: ' ', index: -1 });

			list.push({
				value: value[i],
				type: 'minus',
				index: i,
			});

			// Add Space
			list.push({ value: ' ', index: -1 });
		} else if (value[i] === '*') {
			// Add Space
			list.push({ value: ' ', index: -1 });

			list.push({
				value: value[i],
				type: 'asterisk',
				index: i,
			});

			// Add Space
			list.push({ value: ' ', index: -1 });
		} else if (value[i] === '%') {
			// Add Space
			list.push({ value: ' ', index: -1 });

			list.push({
				value: value[i],
				type: 'percent',
				index: i,
			});

			// Add Space
			list.push({ value: ' ', index: -1 });
		} else if (value[i] === '/') {
			// Add Space
			list.push({ value: ' ', index: -1 });

			list.push({
				value: value[i],
				type: 'divide',
				index: i,
			});

			// Add Space
			list.push({ value: ' ', index: -1 });
		} else if (value[i] === '<' && value[i + 1] === '=') {
			// Add Space
			list.push({ value: ' ', index: -1 });

			list.push({
				value: value[i],
				type: 'equal_lower',
				index: i,
			});

			// Add Space
			list.push({ value: ' ', index: -1 });
			i++;
		} else if (value[i] === '>' && value[i + 1] === '=') {
			// Add Space
			list.push({ value: ' ', index: -1 });

			list.push({
				value: value[i],
				type: 'equal_greater',
				index: i,
			});

			// Add Space
			list.push({ value: ' ', index: -1 });
			i++;
		} else if (value[i] === '>') {
			// Add Space
			list.push({ value: ' ', index: -1 });

			list.push({
				value: value[i],
				type: 'more_than',
				index: i,
			});

			// Add Space
			list.push({ value: ' ', index: -1 });
		} else if (value[i] === '<') {
			// Add Space
			list.push({ value: ' ', index: -1 });

			list.push({
				value: value[i],
				type: 'less_than',
				index: i,
			});

			// Add Space
			list.push({ value: ' ', index: -1 });
		} else if (value[i] === '=' && value[i + 1] === '=') {
			// Doble Equal

			// Add Space
			list.push({ value: ' ', index: -1 });

			list.push({
				value: value[i],
				type: 'double_equal',
				index: i,
			});

			// Add Space
			list.push({ value: ' ', index: -1 });

			i++;
		} else if (value[i] === '=') {
			// Equal

			// Add Space
			list.push({ value: ' ', index: -1 });

			list.push({
				value: value[i],
				type: 'equal',
				index: i,
			});

			// Add Space
			list.push({ value: ' ', index: -1 });
		} else if (value[i] === 'p' && value[i + 1] === 'i') {
			// Number Pi

			// Add Space
			list.push({ value: ' ', index: -1 });

			list.push({
				value: value[i],
				type: 'pi',
				index: i,
			});

			// Add Space
			list.push({ value: ' ', index: -1 });

			i++;
		} else if (value[i] === '^' && numbers.includes(value[i + 1])) {
			// Add Space
			list.push({ value: ' ', index: -1 });

			list.push({
				value: value[i + 1],
				type: 'power_of',
				index: i,
			});

			i++;
		} else if (
			value[i] === 's' &&
			value[i + 1] === 'q' &&
			value[i + 2] === 'r' &&
			value[i + 3] === 't'
		) {
			// Square Root

			// Add Space
			list.push({ value: ' ', index: -1 });

			list.push({
				value: value[i],
				type: 'square_root',
				index: i,
			});

			// Add Space
			//list.push({ value: ' ', index: -1 });

			i += 3;
		} else if (
			value[i] === 'c' &&
			value[i + 1] === 'b' &&
			value[i + 2] === 'r' &&
			value[i + 3] === 't'
		) {
			// Qubic Root

			// Add Space
			list.push({ value: ' ', index: -1 });

			list.push({
				value: value[i],
				type: 'qubic_root',
				index: i,
			});

			// Add Space
			//list.push({ value: ' ', index: -1 });

			i += 3;
		} else if (value[i] === '_') {
			// The _ character is used as fake cursor
			list.push({
				value: value[i],
				index: i,
			});
		} else if (value[i] === '\n') {
			// Add break line
			list.push({
				type: 'separator',
				value: '\n' + '----' + '\n',
				index: i,
			});
		} else if (value[i] === ';') {
			list.push({
				// Add break line with ; character
				value: ';' + '\n',
				index: i,
			});
		} else if (letters.includes(value[i])) {
			list.push({
				// Add letters
				type: 'letters',
				value: value[i],
				index: i,
			});
		} else if (value[i] === '(' || value[i] === ')') {
			list.push({
				value: value[i],
				index: i,
			});
		} else {
			list.push({
				value: value[i],
				index: i,
			});
		}
	}

	return list;
}
