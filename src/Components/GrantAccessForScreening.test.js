import React from 'react';
import ReactDOM from 'react-dom';
import GrantAccessForScreening from './GrantAccessForScreening';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<GrantAccessForScreening />, div);
  ReactDOM.unmountComponentAtNode(div);
});



it('renders correctly', () => {
  const tree = renderer
.create(<GrantAccessForScreening />)
   .toJSON();
expect(tree).toMatchSnapshot();
});
