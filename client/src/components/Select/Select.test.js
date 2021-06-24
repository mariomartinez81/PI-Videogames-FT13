import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../store/index';
import Select from './';
describe('<Input />', () => {
  let component;
  beforeEach(() => {
    component = render(
      <Provider store={store}>
        <Router>
          <Select />
        </Router>
      </Provider>
    );
  });
});
