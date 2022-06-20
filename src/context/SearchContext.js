import React from 'react';
export const AuthContext = React.createContext({});

export const SearchContext = ({children}) =>{
    const [search,setSearch] = React.useState('');
    return(
        <AuthContext.Provider value ={{search, setSearch}}>
            {children}
        </AuthContext.Provider>
    )
}