import { create } from 'zustand';
import { collection, doc, getDoc, updateDoc, setDoc } from 'firebase/firestore';
import { db } from '../../firebase.config';

const coinsRef = collection(db, 'coins');

const useCoinsStore = create((set, get) => ({
  coins: 0,
  loadingCoins: true,

  
  fetchCoinsForUser: async (uid) => {
    set({ loadingCoins: true });
    const docRef = doc(coinsRef, uid);
    const snapshot = await getDoc(docRef);
    if (snapshot.exists()) {
      const data = snapshot.data();
      set({ coins: data.n, loadingCoins: false });
    } else {
      
      await setDoc(docRef, { n: 0, user_id: uid });
      set({ coins: 0, loadingCoins: false });
    }
  },

  incrementCoins: async (uid, amount = 10) => {
    const newCoins = get().coins + amount;
    set({ coins: newCoins });
    // Actualizamos en Firestore
    const docRef = doc(coinsRef, uid);
    await updateDoc(docRef, { n: newCoins });
  },

  decrementCoins: async (uid, amount = 10) => {
    const newCoins = Math.max(0, get().coins - amount); 
    set({ coins: newCoins });
    // Actualizamos en Firestore
    const docRef = doc(coinsRef, uid);
    await updateDoc(docRef, { n: newCoins });
  }
}));

export default useCoinsStore;
