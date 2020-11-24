import {useContext} from'react';
import { StoreContext } from 'src/context';
export const useStores = () =>{
    const store = useContext(StoreContext);
    if(!store){
        throw new Error("useStore must be used within a StoreContextWrapper.");
    }

    return store;
}
