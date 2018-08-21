import React from 'react';
import ReactDOM from 'react-dom';
import MainHeader from './Header';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MainHeader />, div);
  ReactDOM.unmountComponentAtNode(div);
});



it('renders correctly', () => {
  const tree = renderer
.create(<MainHeader />)
   .toJSON();
expect(tree).toMatchSnapshot();
});
