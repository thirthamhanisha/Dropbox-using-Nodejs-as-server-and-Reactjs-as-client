import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import NewerHomePage from './components/NewerHomePage';

describe('<NewerHomePage/>', function () {
	  it('should have two buttons', function () {
		  const wrapper = shallow(<Email/>);
		    expect(wrapper.find('button')).to.have.length(2);
	  });

	  
	});