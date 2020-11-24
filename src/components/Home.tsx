import React from 'react';
import { useStores } from 'src/hooks/useStores';
export const Home = () =>{
    const stores = useStores();
    
    return (
        <div>
           홈
        </div>

        )
}