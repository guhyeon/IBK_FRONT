import React, { useEffect, useState } from 'react';
import RootStore from './stores/RootStore';
// import {useLocalStore} from 'mobx-react-lite';
// import {createStore, TStore} from './stores/store';

export const StoreContext = React.createContext<RootStore | null>(null);

export const StoreProvider: React.FC = ({children}) => {
    // const store = useLocalStore(createStore);
    const [rootStore, setRootStore] = useState<RootStore | null>(null);


    useEffect(()=>{
        setRootStore(new RootStore());
    },[])

    if(rootStore===null) return null;

    return (
        <StoreContext.Provider value={rootStore}>
            {children}
        </StoreContext.Provider>
    )
}

export default StoreProvider;