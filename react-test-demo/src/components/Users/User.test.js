import React from 'react';
import {render,cleanup,waitForElementToBeRemoved} from '@testing-library/react';

import Users from './Users';

const data = [{
    "userId": 1,
    "id": 1,
    "title": "a",
    "body": "b"
},
{
    "userId": 2,
    "id": 2,
    "title": "c",
    "body": "d"
}
]
window.fetch = jest.fn(() =>{
    return Promise.resolve({
        json: () => Promise.resolve(data)
    })
})

afterEach(cleanup);

it('renders a loading indicator',async() =>{
    const {findByText} = render(<Users/>);
    const loading = await findByText('Loading');
    expect(loading).toBeInTheDocument();

})

it('renders a list of posts ',async() =>{
    const {findByText} = render(<Users/>);
    const post = await findByText('a');
    expect(post).toBeInTheDocument();

})