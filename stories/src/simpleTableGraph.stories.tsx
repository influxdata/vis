import * as React from 'react'
import {storiesOf} from '@storybook/react'
import {withKnobs} from '@storybook/addon-knobs'
import {fromFlux} from '../../giraffe/src/index'
import {PlotContainer} from './helpers'
import {HoverTimeProvider} from '../../giraffe/src/components/hoverTime'
import {
  SimpleTable,
  SimpleTableViewProperties,
} from '../../giraffe/src/components/SimpleTableGraph'
import {tableCSV} from './data/tableGraph'

storiesOf('Simple Table Graph', module)
  .addDecorator(withKnobs)
  .add('Table Graph', () => {
    // make it so showAll is changable
    const properties: SimpleTableViewProperties = {
      type: 'simple-table',
      showAll: true,
    }
    const result = fromFlux(tableCSV)

    return (
      <HoverTimeProvider>
        <PlotContainer>{SimpleTable({properties, result})}</PlotContainer>
      </HoverTimeProvider>
    )
  })
