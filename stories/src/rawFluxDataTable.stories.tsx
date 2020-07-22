import * as React from 'react'
import {storiesOf} from '@storybook/react'
import {withKnobs, text} from '@storybook/addon-knobs'
import {Config, Plot} from '../../giraffe/src'

import {PlotContainer} from './helpers'
import {RawFluxDataTableLayerConfig} from '../../giraffe/src/types'

import {fluxCSV} from './data/fluxCSV'

storiesOf('Raw Flux Data Table', module)
  .addDecorator(withKnobs)
  .add('Raw Flux Data Table', () => {
    const csv1 = text('Paste first CSV here:', '')
    const csv2 = text('Paste second CSV here:', '')

    const files = []

    if (csv1) {
      files.push(csv1)
    }

    if (csv2) {
      files.push(csv2)
    }

    if (files.length < 1) {
      files.push(fluxCSV)
    }

    const config: Config = {
      showAxes: false,
      cursor: 'auto',
      layers: [
        {
          type: 'flux data table',
          files,
        } as RawFluxDataTableLayerConfig,
      ],
    }
    return (
      <PlotContainer>
        <Plot config={config} />
      </PlotContainer>
    )
  })
