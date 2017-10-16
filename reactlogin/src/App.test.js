import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import NewerHomePage from './components/NewerHomePage';

enzyme.configure({ adapter: new Adapter() });

describe('<NewerHomePage/>', function () {
	  it('should have two buttons', function () {
		  const wrapper = shallow(<NewerHomePage/>);
		    expect(wrapper.find('button')).to.have.length(1);
	  });

	  
	});



describe('<NewerHomePage/>', () => {
	  it('contains an <Login/> component', function () {
	    const wrapper = mount(<NewerHomePage/>);
	    expect(wrapper.find('Login')).to.have.length(1);
	  });
});



it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
