import React from 'react';
import {render,cleanup,fireEvent} from '@testing-library/react';

import NameProvider,{TestElementContext,NameContext} from './TestElementContext';

const renderWithContext = (component) =>{
    return {
        ...render(
            <NameProvider value={NameContext}>
                {component}
            </NameProvider>
        )
    } 
}

afterEach(cleanup)

it('Should Capture snapshot',() =>{
    const {asFragment} = renderWithContext(<TestElementContext/>)
    expect(asFragment(<TestElementContext/>)).toMatchSnapshot();
});

it('Should contain empty text onLoad',() =>{
    const{getByTestId} = renderWithContext(<TestElementContext/>)
    expect(getByTestId('Name')).toHaveTextContent('');
})

it('Should change text on click',() =>{
    const {getByTestId} = renderWithContext(<TestElementContext/>);
    fireEvent.click(getByTestId('changeName'));
    expect(getByTestId('Name')).toHaveTextContent('React Context test')
})