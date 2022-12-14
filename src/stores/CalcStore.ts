import { Action, action, createStore, persist } from 'easy-peasy';
import { CustomStorage } from '../utils/CustomStorage';

export interface CalcModel {
	/* Calculator States and Actions */
	// String contains math expressions
	calc: string;
	// Cursor Index
	cursorIndex: number;
	// Add new character (number or operation)
	addCalc: Action<CalcModel, string>;
	// Set calc
	setCalc: Action<CalcModel, string>;
	// Clean expression
	eraseCalc: Action<CalcModel>;
	// Del expression
	delCalc: Action<CalcModel>;
	// Move cursor to the right
	rightCursor: Action<CalcModel>;
	// Move cursor to the left
	leftCursor: Action<CalcModel>;
	// Move cursor to start
	startCursor: Action<CalcModel>;
	// Move cursor to start
	endCursor: Action<CalcModel>;
	// Set cursor position
	setCursor: Action<CalcModel, number>;

	/* App General States and Actions */
	// Drawer Visisblitity
	drawerOpen: boolean;
	toggleDrawerVisibility: Action<CalcModel>;
}

export const CalcStore = createStore<CalcModel>(
	persist(
		{
			calc: '0',
			cursorIndex: 1,
			drawerOpen: false,
			addCalc: action((state, payload) => {
				if (state.calc === '0') {
					if (payload === '.') {
						state.calc += payload;
						state.cursorIndex += payload.length;
					} else {
						state.calc = payload;
						state.cursorIndex = payload.length;
					}
				} else {
					state.calc =
						state.calc.slice(0, state.cursorIndex) +
						payload +
						state.calc.slice(state.cursorIndex, state.calc.length);

					state.cursorIndex += payload.length;
				}
			}),
			setCalc: action((state, payload) => {
				state.calc = payload;
				state.cursorIndex = payload.length;
			}),
			eraseCalc: action((state) => {
				state.calc = '0';
				state.cursorIndex = 1;
			}),
			delCalc: action((state) => {
				if (state.cursorIndex > 0) {
					state.calc =
						state.calc.slice(0, state.cursorIndex - 1) +
						state.calc.slice(state.cursorIndex, state.calc.length);
					state.cursorIndex--;
				}
			}),
			rightCursor: action((state) => {
				if (state.cursorIndex <= state.calc.length) {
					state.cursorIndex = state.cursorIndex + 1;
				}
			}),
			leftCursor: action((state) => {
				if (state.cursorIndex > 0) {
					state.cursorIndex = state.cursorIndex - 1;
				}
			}),
			startCursor: action((state) => {
				state.cursorIndex = 0;
			}),
			endCursor: action((state) => {
				state.cursorIndex = state.calc.length;
			}),
			setCursor: action((state, payload) => {
				state.cursorIndex = payload;
			}),

			toggleDrawerVisibility: action((state, payload) => {
				if (state.drawerOpen) {
					state.drawerOpen = false;
				} else {
					state.drawerOpen = true;
				}
			}),
		},
		{ storage: CustomStorage }
	)
);
