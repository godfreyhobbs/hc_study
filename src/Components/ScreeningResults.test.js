import React from 'react';
import ReactDOM from 'react-dom';
import ScreeningResults from './ScreeningResults';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ScreeningResults />, div);
  ReactDOM.unmountComponentAtNode(div);
});



it('renders correctly', () => {
  const tree = renderer
.create(<ScreeningResults />)
   .toJSON();
expect(tree).toMatchSnapshot();
});
