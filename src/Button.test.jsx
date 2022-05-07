import React from 'react';
import { component, shallow, mount, configure } from 'enzyme';
import {screen, fireEvent, render} from '@testing-library/react';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import ButtonContainer from './ButtonContainer';
import Button from './Button';
import toJson from 'enzyme-to-json'
configure({ adapter: new Adapter() });

let button, wrapper


const props = {
  className: 'error',
  isWorking: false,
  isError: false,
  buttonText: "Launch Rocket",
  onClick: jest.fn()
}


beforeEach(() => {
  button = shallow(<Button {...props} />)
  wrapper = shallow(<ButtonContainer {...props} />)
})

describe('Test ButtonContainer', () => {

  it('Test render Button', () => {
    console.log(button.debug)
  });

  it('it should render text', () => {
    expect(button.text()).toBe('Launch Rocket')
  });


  it('Test click event', (props) => {
    // const mockCallBack = jest.fn();
    // console.log(wrapper.props())
    const mockCallBack = jest.fn(() => props || {});
    const button = shallow(<Button onClick={mockCallBack} />);
    // const btInstance = button.instance()
    const buttonSubmit = screen.getByText('Launch Rocket');

    // expect(button.find('label').text()).toBe('Go')
    // const button = shallow((<Button onClick={mockCallBack}>Ok!</Button>));
    // button.find('button').simulate('click');
    // expect(mockCallBack.mock.calls.length).toEqual(1);
    // button.simulate('click') // 2nd click should abort the inFlight request
    fireEvent.click(buttonSubmit);
    expect(button.text()).toBe('Launching')
    console.log(button.debug)
  });

  // Add tests to backgd and color props.

  it('matches the snapshot', () => {
    const button = shallow(<Button />, {context: {}, disableLyfecycleMethods: true});
    expect(toJson(button)).toMatchSnapshot()
    console.log(button.debug)
  })

});