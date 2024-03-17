import { useContext } from 'react'
import { useQuery } from '@tanstack/react-query'
import { AuthContext } from '../context/AuthProvider'

const useCart = () => {
    const { user } = useContext(AuthContext);
    const { refresh, data: cart = [] } = useQuery({
        queryKey: ["carts", user?.email],
        queryFn: async () => {
            const res = await fetch(`http:localhost:4000/carts/${user?.email}`);
            return res.json();
        },
    });
  return [cart, refresh]
}

export default useCart