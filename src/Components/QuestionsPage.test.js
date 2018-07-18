import React from 'react';
import ReactDOM from 'react-dom';
import QuestionsPage from './QuestionsPage';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<QuestionsPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});



it('renders correctly', () => {
  const tree = renderer
.create(<QuestionsPage />)
   .toJSON();
expect(tree).toMatchSnapshot();
});
