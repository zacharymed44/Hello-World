import { render, screen } from '@testing-library/react';
import App from './App';
import Enzyme, { shallow, configure } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() })

it('When Button is clicked, will show text on the page', () => {
  const wrapper = shallow(<App />);
  const button = wrapper.find('#Activate');
  button.simulate('click');
  const text = wrapper.find('p').text();
  expect(text).toEqual('Hello World!');
})