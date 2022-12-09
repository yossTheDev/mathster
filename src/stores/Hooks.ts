import { createTypedHooks } from 'easy-peasy';
import { CalcModel } from './CalcStore';

const typedHooks = createTypedHooks<CalcModel>();

export const useStoreActions = typedHooks.useStoreActions;
export const useStoreDispatch = typedHooks.useStoreDispatch;
export const useStoreState = typedHooks.useStoreState;
