import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Consent from "./Consent";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Consent  />, div);
  ReactDOM.unmountComponentAtNode(div);
});


it('renders correctly', () => {
  const tree = renderer
    .create(<Consent />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
