import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import App from './app';

it(`Component rendered correctly -> App`, () => {
  const renderer = new ShallowRenderer();
  const tree = renderer.render(
      <App/>
  );
  expect(tree).toMatchSnapshot();
});