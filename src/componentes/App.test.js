import React from 'react';
import ReactDOM from 'react-dom';
import { screen, render, fireEvent, cleanup } from '@testing-library/react';
import App from './App';

afterEach(cleanup);
it('renders without crashing', ()=>{
    const div = document.createElement('div');
    ReactDOM.render(<App />, div)
});

it('Botones deben tener texto', () =>{
    render(<App></App>);
    const mensaje = '1';
    const tb1 = screen.getByText(mensaje);
    expect(tb1).toBeInTheDocument();
});

it('Botones deben tener texto', () =>{
    render(<App></App>);
    const mensaje = '2';
    const tb1 = screen.getByText(mensaje);
    expect(tb1).toBeInTheDocument();
});

it('Botones deben tener texto', () =>{
    render(<App></App>);
    const mensaje = '3';
    const tb1 = screen.getByText(mensaje);
    expect(tb1).toBeInTheDocument();
});

it('Botones deben tener texto', () =>{
    render(<App></App>);
    const mensaje = '4';
    const tb1 = screen.getByText(mensaje);
    expect(tb1).toBeInTheDocument();
});

it('Botones deben tener texto', () =>{
    render(<App></App>);
    const mensaje = '5';
    const tb1 = screen.getByText(mensaje);
    expect(tb1).toBeInTheDocument();
});

it('Botones deben tener texto', () =>{
    render(<App></App>);
    const mensaje = '6';
    const tb1 = screen.getByText(mensaje);
    expect(tb1).toBeInTheDocument();
});

it('Botones deben tener texto', () =>{
    render(<App></App>);
    const mensaje = '7';
    const tb1 = screen.getByText(mensaje);
    expect(tb1).toBeInTheDocument();
});

it('Botones deben tener texto', () =>{
    render(<App></App>);
    const mensaje = '8';
    const tb1 = screen.getByText(mensaje);
    expect(tb1).toBeInTheDocument();
});

it('Botones deben tener texto', () =>{
    render(<App></App>);
    const mensaje = '9';
    const tb1 = screen.getByText(mensaje);
    expect(tb1).toBeInTheDocument();
});

it('Botones deben tener texto', () =>{
    render(<App></App>);
    const mensaje = 'AC';
    const tb1 = screen.getByText(mensaje);
    expect(tb1).toBeInTheDocument();
});

it('Botones deben tener texto', () =>{
    render(<App></App>);
    const mensaje = '+/-';
    const tb1 = screen.getByText(mensaje);
    expect(tb1).toBeInTheDocument();
});

it('Botones deben tener texto', () =>{
    render(<App></App>);
    const mensaje = '%';
    const tb1 = screen.getByText(mensaje);
    expect(tb1).toBeInTheDocument();
});

it('Botones deben tener texto', () =>{
    render(<App></App>);
    const mensaje = '+';
    const tb1 = screen.getByText(mensaje);
    expect(tb1).toBeInTheDocument();
});

it('Botones deben tener texto', () =>{
    render(<App></App>);
    const mensaje = '-';
    const tb1 = screen.getByText(mensaje);
    expect(tb1).toBeInTheDocument();
});

it('Botones deben tener texto', () =>{
    render(<App></App>);
    const mensaje = '/';
    const tb1 = screen.getByText(mensaje);
    expect(tb1).toBeInTheDocument();
});

it('Botones deben tener texto', () =>{
    render(<App></App>);
    const mensaje = 'x';
    const tb1 = screen.getByText(mensaje);
    expect(tb1).toBeInTheDocument();
});

it('Botones deben tener texto', () =>{
    render(<App></App>);
    const mensaje = '=';
    const tb1 = screen.getByText(mensaje);
    expect(tb1).toBeInTheDocument();
});

it('Botones deben tener texto', () =>{
    render(<App></App>);
    const mensaje = '.';
    const tb1 = screen.getByText(mensaje);
    expect(tb1).toBeInTheDocument();
});