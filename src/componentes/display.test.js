import React from 'react';
import ReactDOM from 'react-dom';
import { screen, render, fireEvent, cleanup } from '@testing-library/react';
import Display from './display';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';

afterEach(cleanup);
it('renders without crashing', ()=>{
    const div = document.createElement('div');
    ReactDOM.render(<Display />, div)
})

it('renders display correctly', ()=>{
    const { getByTestId } = render(<Display value='0'></Display>)
    expect(getByTestId('display')).toHaveTextContent('0')
});

it('renders display correctly', ()=>{
    const { getByTestId } = render(<Display value='987654'></Display>)
    expect(getByTestId('display')).toHaveTextContent('987654')
});