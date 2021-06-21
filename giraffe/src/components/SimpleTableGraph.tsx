// Combined index.tsx and view.tsx from the simpletable in ui
import React, {FC} from 'react'
import {FluxDataType} from '../index'

// Other pieces of the SimpleTable
import PageControl from './SimpleTable/PageControl'
import PagedTable from './SimpleTable/PagedTable'

// Other things (make sure to fix file paths)
import {FluxResult} from './SimpleTable/flows'

// Cut and just copied the specific item being imported over
// import {VisualizationProps} from 'src/visualization'
import {PaginationProvider} from './SimpleTable/pagination'

// SCSS also uses clockface stuff
import './SimpleTable/SimpleTableGraph.scss'

// Vizualization props copied over from
// ui/src/visualization/index.ts
/** 
export interface VisualizationProps {
  properties: ViewProperties | SimpleTableViewProperties
  result: FluxResult['parsed']
  timeRange?: TimeRange
  annotations?: AnnotationsList
  cellID?: string
} */

export interface SimpleTableViewProperties {
  type: 'simple-table'
  showAll: boolean
}

interface SubsetTableColumn {
  name: string
  type: string
  fluxDataType: FluxDataType
  data: Array<any>
  group: boolean
}

export interface SubsetTable {
  idx: number
  yield: string
  start: number
  end: number
  signature: string
  cols: SubsetTableColumn[]
}

/** 
interface Props extends VisualizationProps {
  properties: SimpleTableViewProperties
  result: FluxResult['parsed']
} */

interface Props {
  properties: SimpleTableViewProperties
  result: FluxResult['parsed']
}

export const SimpleTable: FC<Props> = ({properties, result}) => {
  return (
    <div className="visualization--simple-table">
      <PaginationProvider total={result?.table?.length || 0}>
        <PagedTable properties={properties} result={result} />
        <PageControl />
      </PaginationProvider>
    </div>
  )
}
