import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../pages/providers/AuthProviders';
const useCart = () => {
    const { user } = useContext(AuthContext)

    const { refetch, data: selectedclass = [] } = useQuery({
        queryKey: ['selectedclass', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/selectedclass?email=${user?.email}`)
            return res.json();
        },
    })

    return [selectedclass, refetch]

}
export default useCart;