import {createContext, useState} from 'react';
import {api} from '../services/api';

type TRefreshContext = {
    refreshTrigger: number,
    handleRefreshCustomersList: () => void;
}

export const RefreshContext = createContext<TRefreshContext>({
    refreshTrigger: 0,
    handleRefreshCustomersList: () => {},
});

export const RefreshProvider = ({children}: {children: React.ReactNode;}): JSX.Element => {
    const [refreshTrigger, setRefreshTrigger] = useState(0);

    const handleRefreshCustomersList = async () => {
        setRefreshTrigger(refreshTrigger + 1);
    }

    return (
        <RefreshContext.Provider value={{handleRefreshCustomersList, refreshTrigger}}>
            {children}
        </RefreshContext.Provider>
    )
}