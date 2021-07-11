import React, { useContext, useState, useMemo } from 'react';

export const StateContext = React.createContext();

export function useStateContext() {
    return useContext(StateContext)
}

export function DealerProvider({ children }) {
    let PageSize = 50;

    const [dealership, setDealership] = useState('')
    const [allData, setAllData] = useState([])
    const [filteredData, setFilteredData] = useState(allData)
    const [dealerData, setDealerData] = useState([])
    const [loadingData, setLoadingData] = useState(true)
    const [currentPage, setCurrentPage] = useState(1);



    return (
        <StateContext.Provider
            value={{
                dealership,
                setDealership,
                filteredData,
                setFilteredData,
                dealerData,
                setDealerData,
                loadingData,
                setLoadingData,
                allData,
                setAllData,
                currentPage,
                setCurrentPage,
                PageSize
            }}>
            {children}
        </StateContext.Provider>
    )
}