import React from 'react';
import { component, shallow, render, mount, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import ButtonContainer from './ButtonContainer';
import Button from './Button';
import toJson from 'enzyme-to-json'
configure({ adapter: new Adapter() });

let wrapper

// beforeEach(() => {
//   wrapper = shallow(<Button />)
// })

// describe('Test Button component', () => {

//   it('Test render Button', () => {
//     // console.log(wrapper.props())
//     console.log(wrapper.debug)
//   });


// }

const props = {
  className: 'error',
  isWorking: false,
  isError: false,
  buttonText: "Launch Rocket",
  onClick: jest.fn()
}


beforeEach(() => {
  wrapper = shallow(<Button {...props} />)
})

describe('Test ButtonContainer', () => {

  it('Test render Button', () => {
    console.log(wrapper.debug)
  });

  it('it should render text', () => {
    expect(wrapper.text()).toBe('Launch Rocket')
  });


  // it('Test click event', (props) => {
  //   // const mockCallBack = jest.fn();
  //   const mockCallBack = jest.fn(() => props || {});
  //   const wrapper = shallow(<Button onClick={mockCallBack} />, {context: {}, disableLyfecycleMethods: true});
  //   // expect(wrapper.find('label').text()).toBe('Go')
  //   // const wrapper = shallow((<Button onClick={mockCallBack}>Ok!</Button>));
  //   // wrapper.find('button').simulate('click');
  //   // expect(mockCallBack.mock.calls.length).toEqual(1);
  //   wrapper.simulate('click') // 2nd click should abort the inFlight request
  //   console.log(wrapper.debug)
  // });

  // Add tests to backgd and color props.

  it('matches the snapshot', () => {
    const wrapper = shallow(<Button />, {context: {}, disableLyfecycleMethods: true});
    expect(toJson(wrapper)).toMatchSnapshot()
    console.log(wrapper.debug)
  })

});