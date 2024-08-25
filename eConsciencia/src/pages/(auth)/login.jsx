import React, { useEffect } from "react";
import useAuthStore from "../../store/use-auth-store";

function AuthComponent() {
    const { user, loading, loginGoogleWithPopup, logout, observeAuthState } = useAuthStore();

    useEffect(() => {
        observeAuthState();
    }, [observeAuthState]);

    return (
        <div>
            {loading && <p>Loading...</p>}
            {user && <p>Welcome, {user.displayName}</p>}
            {!user && <button onClick={loginGoogleWithPopup}>Login with Google</button>}
            {user && <button onClick={logout}>Logout</button>}
        </div>
    );
}

export default AuthComponent;