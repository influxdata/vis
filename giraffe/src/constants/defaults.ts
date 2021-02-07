import {LayerConfig} from '../types'
import {NINETEEN_EIGHTY_FOUR as DEFAULT_COLOR_SCHEME} from './colorSchemes'

export const LAYER_DEFAULTS: {[layerType: string]: Partial<LayerConfig>} = {
  line: {
    lineWidth: 1,
    hoverDimension: 'auto',
    fill: [],
    colors: DEFAULT_COLOR_SCHEME,
    interpolation: 'linear',
    maxTooltipRows: 24,
    shadeBelow: false,
    shadeBelowOpacity: 0.1,
  },
  heatmap: {
    colors: DEFAULT_COLOR_SCHEME,
    binSize: 10,
    strokeWidth: 0,
    strokePadding: 0,
    strokeOpacity: 0,
    fillOpacity: 1,
  },
  scatter: {
    colors: DEFAULT_COLOR_SCHEME,
    fill: [],
    symbol: [],
  },
  histogram: {
    fill: [],
    colors: DEFAULT_COLOR_SCHEME,
    position: 'stacked',
    binCount: null,
    strokeWidth: 1,
    strokePadding: 0.75,
    strokeOpacity: 1,
    fillOpacity: 0.75,
  },
  mosaic: {
    fill: [],
    colors: DEFAULT_COLOR_SCHEME,
    position: 'stacked',
    binCount: null,
    strokeWidth: 1,
    strokePadding: 0.75,
    strokeOpacity: 1,
    fillOpacity: 0.75,
  },
  gauge: {
    prefix: '',
    suffix: '',
    tickPrefix: '',
    tickSuffix: '',
    decimalPlaces: {},
    gaugeSize: Math.PI,
    gaugeTheme: {},
  },
  annotation: {
    hoverDimension: 'auto',
    hoverMargin: 20,
  },
  band: {
    hoverDimension: 'xy',
    maxTooltipRows: 24,
    interpolation: 'linear',
    lineWidth: 1,
    colors: DEFAULT_COLOR_SCHEME,
    upperColumnName: '',
    lowerColumnName: '',
  },
  table: {
    tableTheme: 'dark',
  },
}
