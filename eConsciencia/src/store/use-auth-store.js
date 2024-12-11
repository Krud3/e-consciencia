import { auth } from '../../firebase.config.js';
import { create } from 'zustand';
import { GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth';
import useCoinsStore from './use-coin-store.js';

const provider = new GoogleAuthProvider();

const useAuthStore = create((set) => ({
    user: null,
    loading: true,
    
    loginGoogleWithPopup: async () => {
        await signInWithPopup(auth, provider)
        .then((result) => {
            set({user: result.user});
        })
        .catch((error) => {
            console.log(error);
        });
    },
    logout: async () => {
        await signOut(auth)
        .then(() => {
            set({user: null});
        })
        .catch((error) => {
            console.log(error);
        });
    },
    observeAuthState: () => {
        set({loading: true});
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                set({user, loading: false});
                await useCoinsStore.getState().fetchCoinsForUser(user.uid);
            } else {
                set({user: null, loading: false});
                useCoinsStore.setState({ coins: 0, loadingCoins: true });
            }
        });
    }
}));

export default useAuthStore;