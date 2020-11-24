import React from 'react';
import {useObserver} from 'mobx-react-lite';
// import {StoreContext} from './context';
// import {TStore} from './stores/store';


export const useStoreData = <Selection, ContextData, Store>(
    context: React.Context<ContextData>,
    storeSelector: (ContextData: ContextData) => Store,
    dataSelector: (store: Store) => Selection
) => {
    const value = React.useContext(context);
    if(!value) {
        throw new Error();
    }
    const store = storeSelector(value);
    return useObserver(() => {
        return dataSelector(store)
    });
}

// export const useRootData = <Selection>(
//     dataSelector: (store: TStore) => Selection
// ) => useStoreData(StoreContext, contextData => contextData!, dataSelector)