import { Preferences } from '@capacitor/preferences';
import { PersistStorage } from 'easy-peasy';

export const CustomStorage: PersistStorage = {
	async getItem(key: string): Promise<any> {
		let { value } = await Preferences.get({ key: key });
		let s = JSON.parse(value as string);
		return s;
	},

	async setItem(key: string, data: any): Promise<void> {
		let value = JSON.stringify(data);
		await Preferences.set({ key: key, value: value });
	},

	async removeItem(key: string): Promise<void> {
		await Preferences.remove({ key: key });
	},
};
