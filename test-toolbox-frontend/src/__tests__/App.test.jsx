import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import Container from 'react-bootstrap/Container';
import FileList from '../fileList';

describe('App component', () => {
  it('renders a container', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Container)).toHaveLength(1);
  });

  it('renders a FileList component inside the container', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Container).find(FileList)).toHaveLength(1);
  });
});
