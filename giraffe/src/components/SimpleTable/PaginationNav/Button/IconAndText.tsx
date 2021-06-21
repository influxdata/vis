// Libraries
import React, {FunctionComponent} from 'react'

// Components
import {Icon} from './Icon'

// Types
import {IconFont} from '../../Types'

export interface IconAndTextProps {
  text?: string
  icon?: IconFont | string
  placeIconAfterText?: boolean
}

export const IconAndText: FunctionComponent<IconAndTextProps> = ({
  text,
  icon,
  placeIconAfterText = false,
}) => {
  const iconEl = !!icon && <Icon glyph={icon} className="cf-button-icon" />
  const textEl = !!text && <span className="cf-button--label">{text}</span>

  if (!icon && !text) {
    return null
  }

  if (placeIconAfterText) {
    return (
      <>
        {textEl}
        {iconEl}
      </>
    )
  }

  return (
    <>
      {iconEl}
      {textEl}
    </>
  )
}

IconAndText.displayName = 'IconAndText'
