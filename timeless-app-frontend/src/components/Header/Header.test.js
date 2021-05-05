import React from 'react';
import renderer from 'react-test-renderer';

import Header from './Header';

describe('Snapshot test', () => {
  it('Renders correctly', () => {
    const tree = renderer.create(<Header />).toJSON();
    expect(tree).toMatchSnapshot();
  });
})