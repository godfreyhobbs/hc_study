import React from 'react';
import ReactDOM from 'react-dom';
import GrantAccessForScreening from './GrantAccessForScreening';
import renderer from 'react-test-renderer';
const dummyJSON = {"dataHash":"0x7f92099bdee271c19498a5ff4d19d42c02c84c4b092b7ac2a50bbc0947cc2128","owner":"0xf25aac279a27e94bfb0f84929471e093bb0a63fd","metadata":"Angel Marvin","dataUri":"QmU2xovitopRBVDMnps2pzGtFqFkP54JReJhVoqdzLRhpm","irisScore":1,"sigCount":1,"createdAt":"2018-07-18T16:22:39.340Z","updatedAt":"2018-07-18T16:22:39.340Z"};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<GrantAccessForScreening searchResultJSON={dummyJSON}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});



it('renders correctly', () => {
  const tree = renderer
.create(<GrantAccessForScreening searchResultJSON={dummyJSON}/>)
   .toJSON();
expect(tree).toMatchSnapshot();
});
