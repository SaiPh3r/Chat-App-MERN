import { useEffect, useState } from 'react' 
import {useAuthContext} from '../context/Authcontext'

const useLogout = () => {
    const[loading,setLoading] = useState(false);
    const {setAuthUser} = useAuthContext();

    const logout = async () => {
        setLoading(true);
        try {
            const res = await fetch("/api/auth/logout", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const data = await res.json();
            if (data.error) {
                throw new Error(data.error);
            }
            setAuthUser(null);
            localStorage.removeItem("chat-user");
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }
    return {logout,loading};
    
}

export default useLogout