import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../store/index';
import Input from './Input';

describe('<Input />', () => {
  let component;
  beforeEach(() => {
    const name = 'name';
    const placeholder = `input ${name}`;
    component = render(
      <Provider store={store}>
        <Router>
          <Input name={name} placeholder={placeholder} />
        </Router>
      </Provider>
    );
  });

  test('input is element required', () => {
    const input = component.getByTestId('input-validation');
    expect(input).toBeRequired();
  });

  test('recibe name as dynamic attribute', () => {
    const component = render(<Input />);
    component.getByText('name');
  });

  test('recibe placeholder as dynamic attribute', () => {
    const component = render(<Input />);
    component.getByPlaceholderText('input name');
  });

  test('label contain a input', () => {
    const div = component.getByTestId('label-input');
    const input = component.getByTestId('input-validation');
    expect(div).toContainElement(input);
  });
});
