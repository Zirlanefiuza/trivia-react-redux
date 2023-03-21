import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../../App';
import renderWithRouterAndRedux from './renderWithRouterAndRedux';

describe('Testa a tela de Login', ()=> {
    it('Testa se a aplicação é renderizada com sucesso e se o botao é  habilitado apos preenchimento dos inputs', () => {
        const { history } = renderWithRouterAndRedux(<App/>);

        const nameInput = screen.getByText(/Name/i);
        expect(nameInput).toBeInTheDocument();
        userEvent.type(nameInput, 'test')

        const emailInput = screen.getByText(/Email/i);
        expect(emailInput).toBeInTheDocument();
        userEvent.type(emailInput, 'test@test.com');

        const playButton = screen.getByRole('button', {
            name: 'Play',
          });
          expect(playButton).toBeInTheDocument();
          userEvent.click(playButton);
          expect(history.location.pathname).toBe('/game');      
    })
    it('Testa se o botao settings existe e pra onde redireciona', () => {
        const { history } = renderWithRouterAndRedux(<App/>);
        const settingsButton = screen.getByRole('button', {
            name: 'Settings',
          });
          expect(settingsButton).toBeInTheDocument();
          userEvent.click(settingsButton);
          expect(history.location.pathname).toBe('/settings');

        const headingSettings = screen.getAllByTestId("settings-title")
    })
    // it('', () => {})
})