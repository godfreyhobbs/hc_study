import React from 'react';
import ReactDOM from 'react-dom';
import PaymentPage from './PaymentPage';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PaymentPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});



it('renders correctly', () => {
  const tree = renderer
.create(<PaymentPage />)
   .toJSON();
expect(tree).toMatchSnapshot();
});
