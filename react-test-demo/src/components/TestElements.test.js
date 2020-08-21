import React from 'react'
import {render,cleanup,fireEvent,waitForElement} from '@testing-library/react';
import TestElements from './TestElements';

afterEach(cleanup)

it('Should save Snapshot',() =>{
const {asFragment} = render(<TestElements/>);
expect(asFragment(<TestElements/>)).toMatchSnapshot();
});

it('Should equal to 0',() =>{
    const {getByTestId} = render(<TestElements/>);
    expect(getByTestId('counter')).toHaveTextContent(0)
});

it('should be enabled',() =>{
    const {getByTestId} = render(<TestElements/>);
    expect(getByTestId('button-up')).not.toHaveAttribute('disabled');
});

it('should be disabled',() =>{
    const{getByTestId} = render(<TestElements/>)
    expect(getByTestId('button-down')).toBeDisabled();
});

it('increments Counter', () =>{
    const {getByTestId} = render(<TestElements/>);
    fireEvent.click(getByTestId('button-up'));
    expect(getByTestId('counter')).toHaveTextContent('1')
});

it('decrements Counter',() =>{
    const {getByTestId} = render(<TestElements/>);
    fireEvent.click(getByTestId('button-down'));
    expect(getByTestId('counter')).toHaveTextContent('0')
});

it('increments counter after 0.5s',async() =>{
    const{getByTestId,getByText} = render(<TestElements/>);
    fireEvent.click(getByTestId('button-aync'));
    const counter = await waitForElement(() =>getByText('1'));
    expect(counter).toHaveTextContent('1');
});
