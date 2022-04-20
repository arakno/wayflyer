import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Button from './Button';

configure({ adapter: new Adapter() });


describe('Test Button component', () => {
  it('Test click event', () => {
    // const mockCallBack = jest.fn();
    const button = shallow(<Button />, {context: {}, disableLyfecycleMethods: true});
    // const button = shallow((<Button onClick={mockCallBack}>Ok!</Button>));
    console.log(button.debug)
    // button.find('button').simulate('click');
    // expect(button.find(label.text().toBe('Go'))
    // expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});