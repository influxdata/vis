import {CSSProperties, ReactNode} from 'react'

// Copied over the constants instead of exporting
const GRID_BREAKPOINT_SM = 750
const GRID_BREAKPOINT_MD = 1080
const GRID_BREAKPOINT_LG = 1500

// Utilities
export type Omit<K, V> = Pick<K, Exclude<keyof K, V>>

// Standardized prop definitons
export interface StandardFunctionProps {
  /** Unique identifier for getting an element */
  id?: string
  /** Useful for setting common attributes like width or height */
  style?: CSSProperties
  /** ID for Integration Tests */
  testID?: string
  /** Children */
  children?: ReactNode
  /** Useful for overriding styles of the component and its constituent elements */
  className?: string
}

// Standard Validation Function
export type ValidationFunction = (input: string) => string | null

// Passing in link elements
export type RenderLinkElement = (className: string) => JSX.Element

// Shared Data Types
export enum ComponentColor {
  Default = 'default',
  Primary = 'primary',
  Secondary = 'secondary',
  Tertiary = 'tertiary',
  Success = 'success',
  Warning = 'warning',
  Danger = 'danger',
}

export enum ComponentSize {
  ExtraSmall = 'xs',
  Small = 'sm',
  Medium = 'md',
  Large = 'lg',
}

export enum ComponentStatus {
  Default = 'default',
  Loading = 'loading',
  Error = 'error',
  Valid = 'valid',
  Disabled = 'disabled',
}

export enum ComponentOrientation {
  Horizontal = 'horizontal',
  Vertical = 'vertical',
}
export interface Color {
  hex: string
  name: string
}

export interface Gradient {
  start: InfluxColors
  stop: InfluxColors
}

export enum Gradients {
  BeijingEclipse = 'BeijingEclipse',
  DistantNebula = 'DistantNebula',
  SpirulinaSmoothie = 'SpirulinaSmoothie',
  CephalopodInk = 'CephalopodInk',
  DarkChocolate = 'DarkChocolate',
  LASunset = 'LASunset',
  PolarExpress = 'PolarExpress',
  RebelAlliance = 'RebelAlliance',
  JungleDusk = 'JungleDusk',
  SavannaHeat = 'SavannaHeat',
  DocScott = 'DocScott',
  GundamPilot = 'GundamPilot',
  TropicalTourist = 'TropicalTourist',
  JalapenoTaco = 'JalapenoTaco',
  FuyuPersimmon = 'FuyuPersimmon',
  DesertFestival = 'DesertFestival',
  MiyazakiSky = 'MiyazakiSky',
  GarageBand = 'GarageBand',
  MangoGrove = 'MangoGrove',
  ScotchBonnet = 'ScotchBonnet',
  BrooklynCowboy = 'BrooklynCowboy',
  PastelGothic = 'PastelGothic',
  LowDifficulty = 'LowDifficulty',
  CitrusSodapop = 'CitrusSodapop',
  CaliforniaCampfire = 'CaliforniaCampfire',
  SynthPop = 'SynthPop',
  CottonCandy = 'CottonCandy',
  HotelBreakfast = 'HotelBreakfast',
  CandyApple = 'CandyApple',
  JustPeachy = 'JustPeachy',
  MagicCarpet = 'MagicCarpet',
  CruisingAltitude = 'CruisingAltitude',
  CoconutLime = 'CoconutLime',
  MillennialAvocado = 'MillennialAvocado',
  GoldenHour = 'GoldenHour',
  PastryCafe = 'PastryCafe',
  KawaiiDesu = 'KawaiiDesu',
  RobotLogic = 'RobotLogic',
  MintyFresh = 'MintyFresh',
  SimpleCream = 'SimpleCream',
  // Brand Gradients
  WarpSpeed = 'WarpSpeed',
  PowerStone = 'PowerStone',
  MilkyWay = 'MilkyWay',
  LazyAfternoon = 'LazyAfternoon',
  NineteenEightyFour = 'NineteenEightyFour',
  RadioactiveWarning = 'RadioactiveWarning',
  LostGalaxy = 'LostGalaxy',
  GrapeSoda = 'GrapeSoda',
  LavenderLatte = 'LavenderLatte',
  OminousFog = 'OminousFog',
  // Single Hue Gradients
  DefaultLight = 'DefaultLight',
  Default = 'Default',
  DefaultDark = 'DefaultDark',
  PrimaryLight = 'PrimaryLight',
  Primary = 'Primary',
  PrimaryDark = 'PrimaryDark',
  SecondaryLight = 'SecondaryLight',
  Secondary = 'Secondary',
  SecondaryDark = 'SecondaryDark',
  SuccessLight = 'SuccessLight',
  Success = 'Success',
  SuccessDark = 'SuccessDark',
  WarningLight = 'WarningLight',
  Warning = 'Warning',
  WarningDark = 'WarningDark',
  DangerLight = 'DangerLight',
  Danger = 'Danger',
  DangerDark = 'DangerDark',
}

export enum DropdownMenuTheme {
  Amethyst = 'amethyst',
  Malachite = 'malachite',
  Sapphire = 'sapphire',
  Onyx = 'onyx',
}

export interface DropdownMenuScrollbarColors {
  thumbStartColor: InfluxColors
  thumbStopColor: InfluxColors
}

export enum DropdownItemType {
  Dot = 'dot',
  Checkbox = 'checkbox',
  None = 'none',
}

export enum Direction {
  Left = 'CaretLeft',
  Right = 'CaretRight',
}

export enum ButtonShape {
  Default = 'none',
  Square = 'square',
  StretchToFit = 'stretch',
}

export enum ButtonType {
  Button = 'button',
  Submit = 'submit',
}

export enum InfluxColors {
  // Greys
  Obsidian = '#0f0e15',
  Raven = '#181820',
  Kevlar = '#202028',
  Castle = '#292933',
  Onyx = '#31313d',
  Pepper = '#383846',
  Smoke = '#434453',
  Graphite = '#545667',
  Storm = '#676978',
  Mountain = '#757888',
  Wolf = '#8e91a1',
  Sidewalk = '#999dab',
  Forge = '#a4a8b6',
  Mist = '#bec2cc',
  Chromium = '#c6cad3',
  Platinum = '#d4d7dd',
  Pearl = '#e7e8eb',
  Whisper = '#eeeff2',
  Cloud = '#f6f6f8',
  Ghost = '#fafafc',
  White = '#ffffff',
  // Blues
  Abyss = '#120653',
  Sapphire = '#0b3a8d',
  Ocean = '#066fc5',
  Pool = '#00a3ff',
  Laser = '#00C9FF',
  Hydrogen = '#6BDFFF',
  Neutrino = '#BEF0FF',
  Yeti = '#F0FCFF',
  // Purples
  Shadow = '#2b007e',
  Void = '#5c10a0',
  Amethyst = '#8e1fc3',
  Star = '#be2ee4',
  Comet = '#ce58eb',
  Potassium = '#dd84f1',
  Moonstone = '#ebadf8',
  Twilight = '#fad9ff',
  // Greens
  Gypsy = '#003e34',
  Emerald = '#006f49',
  Viridian = '#009f5f',
  Rainforest = '#34bb55',
  Honeydew = '#67d74e',
  Krypton = '#9bf445',
  Wasabi = '#c6f98e',
  Mint = '#f3ffd6',
  // Yellows
  Oak = '#3F241F',
  Topaz = '#E85B1C',
  Tiger = '#F48D38',
  Pineapple = '#FFB94A',
  Thunder = '#FFD255',
  Sulfur = '#FFE480',
  Daisy = '#FFF6B8',
  Banana = '#FFFDDE',
  // Reds
  Basalt = '#2F1F29',
  Ruby = '#BF3D5E',
  Fire = '#DC4E58',
  Curacao = '#F95F53',
  Dreamsicle = '#FF8564',
  Tungsten = '#FFB6A0',
  Marmelade = '#FFDCCF',
  Flan = '#FFF7F4',
  // Brand Colors
  Chartreuse = '#D6F622',
  DeepPurple = '#13002D',
  Magenta = '#BF2FE5',
  Galaxy = '#9394FF',
  Pulsar = '#513CC6',
}

export enum IconFont {
  AddCell = 'add-cell',
  Alerts = 'alerts',
  AlertTriangle = 'alert-triangle',
  Annotate = 'annotate',
  AnnotatePlus = 'annotate-plus',
  AuthZero = 'authzero',
  BarChart = 'bar-chart',
  Bell = 'bell',
  BellRinging = 'bell-ringing',
  BellSolid = 'bell-solid',
  BookCode = 'book-code',
  BookPencil = 'book-pencil',
  Book = 'book',
  Brush = 'brush',
  BucketOutline = 'bucket-outline',
  BucketSolid = 'bucket-solid',
  Calendar = 'calendar',
  Capacitor = 'capacitor2',
  CaretDown = 'caret-down',
  CaretLeft = 'caret-left',
  CaretRight = 'caret-right',
  CaretUp = 'caret-up',
  Chat = 'chat',
  Checkmark = 'checkmark',
  Circle = 'circle',
  CircleThick = 'circle-thick',
  Clock = 'clock',
  Cloud = 'cloud',
  CogOutline = 'cog-outline',
  CogThick = 'cog-thick',
  Collapse = 'collapse',
  CrownOutline = 'crown-outline',
  CrownSolid = 'crown2',
  Cube = 'cube',
  Cubo = 'cubo',
  CuboNav = 'cubo-nav',
  Cubouniform = 'cubo-uniform',
  CurrencyEUR = 'currency-eur',
  CurrencyGBP = 'currency-gbp',
  CurrencyUSD = 'currency-usd',
  Dashboards = 'dashboards',
  DashF = 'dash-f',
  DashH = 'dash-h',
  DashJ = 'dash-j',
  Disks = 'disks',
  DisksNav = 'disks-nav',
  Download = 'download',
  DragToExpand = 'drag-to-expand',
  Duplicate = 'duplicate',
  Erlenmeyer = 'erlenmeyer',
  ExpandA = 'expand-a',
  ExpandB = 'expand-b',
  Export = 'export',
  Eye = 'eye',
  Function = 'fn',
  FunnelOutline = 'funnel-outline',
  FunnelSolid = 'funnel-solid',
  EyeClosed = 'eye-closed',
  EyeOpen = 'eye-open',
  GitHub = 'github',
  Google = 'google',
  GraphLine = 'graphline-2',
  Group = 'group',
  HeartSolid = 'heart-solid',
  Heroku = 'heroku',
  HerokuSimple = 'heroku-simple',
  Import = 'import',
  Layers = 'layers',
  Link = 'link',
  Lock = 'lock',
  Maximize = 'maximize',
  Minimize = 'minimize',
  Moon = 'moon',
  Merge = 'merge',
  NavChat = 'nav-chat',
  OAuth = 'oauth',
  Octagon = 'octagon',
  Okta = 'okta',
  Pause = 'pause',
  Pencil = 'pencil',
  Play = 'play',
  Plus = 'plus',
  PlusSkinny = 'plus-skinny',
  Polaroid = 'polaroid',
  Pulse = 'pulse-c',
  Redo = 'redo',
  Refresh = 'refresh',
  Remove = 'remove',
  Search = 'search',
  Server = 'server2',
  Share = 'share',
  ShareSolid = 'share-solid',
  Shield = 'shield',
  ShieldSolid = 'shield-solid',
  Shuffle = 'shuffle',
  Square = 'square',
  SquareCheck = 'square-check',
  Star = 'star',
  Stop = 'stop',
  Sun = 'sun',
  TextBlock = 'text-block',
  Trash = 'trash',
  Triangle = 'triangle',
  Undo = 'undo',
  Upgrade = 'upgrade',
  User = 'user',
  UserAdd = 'user-add',
  UserOutline = 'user-outline',
  UserRemove = 'user-remove',
  UsersDuo = 'users-duo',
  UsersTrio = 'users-trio',
  Wand = 'wand',
  Wood = 'wood',
  Wrench = 'wrench',
  WrenchNav = 'wrench-nav',
  Zap = 'zap',
}

export enum Columns {
  One = 1,
  Two = 2,
  Three = 3,
  Four = 4,
  Five = 5,
  Six = 6,
  Seven = 7,
  Eight = 8,
  Nine = 9,
  Ten = 10,
  Eleven = 11,
  Twelve = 12,
}

export enum Sort {
  Descending = 'desc',
  Ascending = 'asc',
  None = 'none',
}

export enum Alignment {
  Left = 'left',
  Center = 'center',
  Right = 'right',
}

export enum VerticalAlignment {
  Top = 'top',
  Middle = 'middle',
  Bottom = 'bottom',
}

export enum JustifyContent {
  FlexStart = 'flex-start',
  Center = 'center',
  FlexEnd = 'flex-end',
  SpaceBetween = 'space-between',
  SpaceAround = 'space-around',
}

export enum AlignItems {
  FlexStart = 'flex-start',
  Center = 'center',
  FlexEnd = 'flex-end',
  Stretch = 'stretch',
}

export enum FlexDirection {
  Row = 'row',
  RowReverse = 'row-reverse',
  Column = 'column',
  ColumnReverse = 'column-reverse',
}

export enum RemoteDataState {
  NotStarted = 'NotStarted',
  Loading = 'Loading',
  Done = 'Done',
  Error = 'Error',
}

export enum AutoComplete {
  On = 'on',
  Off = 'off',
}

export enum Orientation {
  Vertical = 'vertical',
  Horizontal = 'horizontal',
}

export enum BorderType {
  None = 'none',
  Horizontal = 'horizontal',
  Vertical = 'vertical',
  Both = 'both',
  All = 'all',
}

export interface TimeRange {
  lower: string
  upper?: string | null
  seconds?: number
  format?: string
  label?: string
  duration?: string
}

export enum InputType {
  Text = 'text',
  Number = 'number',
  Password = 'password',
  Email = 'email',
  Checkbox = 'checkbox',
  Range = 'range',
}

export enum InputToggleType {
  Checkbox = 'checkbox',
  Radio = 'radio',
}

export enum AutoInputMode {
  Auto = 'auto',
  Custom = 'custom',
}

export enum PopoverInteraction {
  Hover = 'hover',
  Click = 'click',
  None = 'none',
}

export enum PopoverPosition {
  Above = 'above',
  Below = 'below',
  ToTheLeft = 'to-left',
  ToTheRight = 'to-right',
}

export enum Appearance {
  Solid = 'solid',
  Outline = 'outline',
}

export enum EncType {
  Application = 'application/x-www-form-urlencoded',
  Multipart = 'multipart/form-data',
  Text = 'text/plain',
}

export enum Method {
  Post = 'post',
  Get = 'get',
  Dialog = 'dialog',
}

export enum Wrap {
  Hard = 'hard',
  Soft = 'soft',
  Off = 'off',
}

export interface Coordinates {
  x: number
  y: number
}

export enum LinkTarget {
  Blank = '_blank',
  Parent = '_parent',
  Self = '_self',
  Top = '_top',
}

export enum LinkRel {
  Alternate = 'alternate',
  Author = 'author',
  Bookmark = 'bookmark',
  External = 'external',
  Help = 'help',
  License = 'license',
  Next = 'next',
  NoFollow = 'nofollow',
  NoOpener = 'noopener',
  NoReferrer = 'noreferrer',
  Prev = 'prev',
  Search = 'search',
  Tag = 'tag',
}

export enum Typeface {
  IBMPlexMono = 'ibm-plex-mono',
  Rubik = 'rubik',
}

export enum HeadingElement {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  H6 = 'h6',
  Span = 'span',
  Div = 'div',
  P = 'p',
}

export enum FontWeight {
  Light = '300',
  Regular = '400',
  Medium = '500',
  Bold = '700',
  Black = '900',
}

export enum Breakpoint {
  None = 0,
  Small = GRID_BREAKPOINT_SM,
  Medium = GRID_BREAKPOINT_MD,
  Large = GRID_BREAKPOINT_LG,
}
