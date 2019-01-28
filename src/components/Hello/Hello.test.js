/* eslint-env jest */
/* 
  JS Dom Web Component Polyfill Workaround for Jest:
  https://github.com/tmpvar/jsdom/issues/1030

  Will be resolved in: 
  https://github.com/tmpvar/jsdom/pull/1872
*/
import 'document-register-element'

import React from 'react'
import renderer from 'react-test-renderer'

import { Hello } from '../index.js'

test('Hello renders default properly', () => {
  const component = renderer.create(<Hello />)

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Hello renders name properly', () => {
  const component = renderer.create(<Hello name="Bob" />)

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
