import React from 'react';

export const NameContext = React.createContext();

const NameProvider = () =>{
    const [Name,setName] = React.useState('')
    const changeName = () =>{
        setName('React Context test')
    }
    return (
        <NameContext.Provider value={{Name,changeName}}>
            <TestElementContext/>
        </NameContext.Provider>
    )
}

export const TestElementContext = () =>{
    const {Name,changeName} = React.useContext(NameContext);
    return(
        <>
            <h1 data-testid="Name">{Name}</h1>
            <button data-testid="changeName" onClick={changeName}>Change Name</button>
        </>
    )
}

export default NameProvider