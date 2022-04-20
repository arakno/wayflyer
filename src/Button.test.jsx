import React from 'react';
import { shallow, render, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Button from './Button';
import toJson from 'enzyme-to-json'
configure({ adapter: new Adapter() });


describe('Test Button component', () => {

  it('Test render', () => {
    const wrapper = shallow(<Button />)
    console.log(wrapper.props())
    console.log(wrapper.debug)
  });

  it('Test click event', (props) => {
    // const mockCallBack = jest.fn();
    const mockCallBack = jest.fn(() => props || {});
    const wrapper = shallow(<Button onClick={mockCallBack} />, {context: {}, disableLyfecycleMethods: true});
    // expect(wrapper.find('label').text()).toBe('Go')
    // const wrapper = shallow((<Button onClick={mockCallBack}>Ok!</Button>));
    // wrapper.find('button').simulate('click');
    // expect(mockCallBack.mock.calls.length).toEqual(1);
    wrapper.simulate('click') // 2nd click should abort the inFlight request
    console.log(wrapper.debug)
  });

  it('matches the snapshot', () => {
    const wrapper = shallow(<Button />, {context: {}, disableLyfecycleMethods: true});
    expect(toJson(wrapper)).toMatchSnapshot()
  })

});