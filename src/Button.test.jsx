import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Button from './Button';
import toJson from 'enzyme-to-json'
configure({ adapter: new Adapter() });


describe('Test Button component', () => {
  it('Test click event', () => {
    // const mockCallBack = jest.fn();
    // const mockUsersLists = jest.fn(() => props || {});
    const wrapper = shallow(<Button />, {context: {}, disableLyfecycleMethods: true});
    // expect(button.find(label.text().toBe('Go'))
    // const wrapper = shallow((<Button onClick={mockCallBack}>Ok!</Button>));
    // button.find('button').simulate('click');
    // expect(mockCallBack.mock.calls.length).toEqual(1);
    console.log(wrapper.props());
    console.log(wrapper.debug)
  });

  it('matches the snapshot', () => {
    const wrapper = shallow(<Button />, {context: {}, disableLyfecycleMethods: true});
    expect(toJson(wrapper)).toMatchSnapshot()
  })

});