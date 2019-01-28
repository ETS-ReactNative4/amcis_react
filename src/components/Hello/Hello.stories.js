import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text } from '@storybook/addon-knobs'
import { defaultTemplate } from '../../storybook/decorators/storyTemplates'
import { Hello } from '../index'

const stories = storiesOf('Hello', module)
stories.addDecorator(withKnobs)

const description = (
  <p>
    This component is based on the Bootstrap Hello component. See{' '}
    <a href="https://getbootstrap.com/docs/3.3/css/#buttons">
      Bootstrap Docs
    </a>{' '}
    for complete Hello component documentation.
  </p>
)

stories.addDecorator(
  defaultTemplate({
    title: 'Hello',
    documentationLink:
      'http://www.patternfly.org/pattern-library/widgets/#buttons',
    description: description
  })
)

stories.addWithInfo('Hello', '', () => {
  const name = text('Name', "I'm sourced from a Storybook Text Knob")
  const slotText = text('Slot', "I'm inside the slot!")

  // React does not natively support slots until React 16, until then use a ref
  // https://github.com/skatejs/skatejs/issues/1096
  const slot = (name = '') => {
    return {
      ref: e => {
        if (e) {
          e.setAttribute('slot', name)
        }
      }
    }
  }

  return (
    <div>
      <Hello name="Xuebin" />
      <Hello name="Patrick" />
      <Hello>
        <span {...slot('description')}>
          &nbsp; {slotText}
        </span>
      </Hello>
      <Hello name={name} />
    </div>
  )
})