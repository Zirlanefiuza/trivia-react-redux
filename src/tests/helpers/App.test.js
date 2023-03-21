import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../../App';
import { renderWithRouterAndRedux } from './renderWith';

describe('Testa a tela de Login', ()=> {
    it('Testa se a aplicação é renderizada com sucesso e se o botao é  habilitado apos preenchimento dos inputs', () => {
        const { history } = renderWithRouterAndRedux(<App></App>);

        const nameInput = screen.getByText(/Nome/i);
        expect(nameInput).toBeInTheDocument();

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
        const settingsButton = screen.getByRole('button', {
            name: 'Settings',
          });
          expect(enterButton).toBeInTheDocument();
          userEvent.click(settingsButton);
          expect(history.location.pathname).toBe('/settings');
    })
    it('', () => {})
})