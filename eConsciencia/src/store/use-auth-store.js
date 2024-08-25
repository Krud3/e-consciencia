import { auth } from '../../firebase.config.js';
import { create } from 'zustand';
import { GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth';

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
        onAuthStateChanged(auth, (user) => {
            if (user) {
                set({user, loading: false});
            } else {
                set({user: null, loading: false});
            }
        });
    }
}));

export default useAuthStore;