import { db, functions } from './Firebase';
import { httpsCallable } from 'firebase/functions';
import { collection, addDoc, getDocs, query, where } from 'firebase/firestore';

export const saveUserConfiguration = async (userId, configuration) => {
    const saveConfig = httpsCallable(functions, 'saveUserConfiguration');
    await saveConfig({ userId, ...configuration });
};

export const fetchUserConfiguration = async (userId) => {
    const fetchConfig = httpsCallable(functions, 'fetchUserConfiguration');
    const result = await fetchConfig({ userId });
    return result.data;
};
