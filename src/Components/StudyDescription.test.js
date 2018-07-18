import React from 'react';
import ReactDOM from 'react-dom';
import StudyDescription from './StudyDescription';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<StudyDescription />, div);
  ReactDOM.unmountComponentAtNode(div);
});



it('renders correctly', () => {
  const tree = renderer
.create(<StudyDescription />)
   .toJSON();
expect(tree).toMatchSnapshot();
});
