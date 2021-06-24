import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../store/index';
import ButtonGamesCreated from './ButtonGamesCreated';

describe('<Input />', () => {
  let component;
  beforeEach(() => {
    component = render(
      <Provider store={store}>
        <Router>
          <ButtonGamesCreated />
        </Router>
      </Provider>
    );
  });

  test('button contain attribute disabled', () => {
    const button = component.getByTestId('btnCreated');
    expect(button).not.toHaveAttribute('type', 'button');
  });

  test('button not contain attribute type', () => {
    const button = component.getByTestId('btnCreated');
    expect(button).toHaveAttribute('disabled');
    expect(button).not.toHaveAttribute('type', 'button');
  });

  test('button to have class buttonGamesCreate', () => {
    const button = component.getByTestId('btnCreated');
    expect(button).toHaveClass('buttonGamesCreate');
  });

  test('button not contain class btn-danger', () => {
    const button = component.getByTestId('btnCreated');
    expect(button).toHaveClass('buttonGamesCreate');
    expect(button).not.toHaveClass('btn-danger', { exact: true });
  });

  test('button not have description', () => {
    const createdButton = component.getByRole('button', {
      name: 'Games Created',
    });
    expect(createdButton).not.toHaveDescription();
  });
});
