import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
//import {Hello} from '../../src/components/Hello/Hello'
import { Button, Welcome } from '@storybook/react/demo';
import Map from '../components/Map/Map';
import CameraComponent from '../components/Camera/Camera';
import FileChooser from '../components/FileChooser/FileChooser';
import GPS from '../components/GPS/GPS';
import {SpeechRecognition} from '../components/SpeechRecognition/SpeechRecognition';


storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

storiesOf('Map', module).add('show Map', ()=> <Map/>);

storiesOf('Camera', module).add('show Camera', ()=> <CameraComponent/>);

storiesOf('FileChooser', module).add('use files', () => <FileChooser/>);

storiesOf('GPS', module).add('show Coordinates', ()=> <GPS/>);

storiesOf('SpeechRecognition', module).add('Text Output', ()=> <SpeechRecognition/>);

 /* const stories = storiesOf('Hello', module)
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
})*/
