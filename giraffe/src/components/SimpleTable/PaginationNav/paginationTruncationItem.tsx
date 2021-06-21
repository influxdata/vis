// Libraries
import React, {forwardRef, MouseEvent} from 'react'
import classnames from 'classnames'
import {Button} from './Button/Button'

// Styles
import './Pagination.scss'

// Types
import {
  StandardFunctionProps,
  ComponentColor,
  ComponentSize,
  ButtonShape,
} from '../Types'

export interface PaginationTruncationItemProps extends StandardFunctionProps {
  onClick?: (e?: MouseEvent<HTMLElement>) => void
  size?: ComponentSize
}

export type PaginationTruncationItemRef = HTMLLIElement
export const PaginationTruncationItem = forwardRef<
  PaginationTruncationItemRef,
  PaginationTruncationItemProps
>(
  (
    {
      id,
      style,
      testID = 'pagination-truncation-item',
      className,
      onClick,
      size = ComponentSize.Medium,
    },
    ref
  ) => {
    const paginationClassName = classnames('cf-pagination--item--container', {
      [`${className}`]: className,
    })

    return (
      <li
        className={paginationClassName}
        data-testid={testID}
        id={id}
        style={style}
        ref={ref}
      >
        <Button
          size={size}
          color={ComponentColor.Tertiary}
          onClick={onClick}
          shape={ButtonShape.Square}
          text={'...'}
        ></Button>
      </li>
    )
  }
)

PaginationTruncationItem.displayName = 'PaginationTruncationItem'
