import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../store/index';
import Form from './Form';

describe('<Form />', () => {
  let component;
  beforeEach(() => {
    component = render(
      <Provider store={store}>
        <Router>
          <Form />
        </Router>
      </Provider>
    );
  });

  test('contain submit', () => {
    const form = component.getByTestId('form');
    const submit = component.getByTestId('required-input-submit');
    expect(form).toContainElement(submit);
  });

  test('input type submit', () => {
    const submit = component.getByTestId('required-input-submit');
    expect(submit).toHaveAttribute('type', 'submit');
  });
});
