// Libraries
import React, {forwardRef} from 'react'
import classnames from 'classnames'

// Types
import {StandardFunctionProps, Alignment, VerticalAlignment} from '../Types'

export interface TableHeaderCellProps extends StandardFunctionProps {
  /** How many columns this cell should take up */
  colSpan?: number
  /** Horizontal alignment of contents */
  horizontalAlignment?: Alignment
  /** Vertical alignment of contents */
  verticalAlignment?: VerticalAlignment
}

export type TableHeaderCellRef = HTMLTableHeaderCellElement

export const TableHeaderCell = forwardRef<
  TableHeaderCellRef,
  TableHeaderCellProps
>(
  (
    {
      id,
      style,
      testID = 'table-header-cell',
      colSpan = 1,
      children,
      className,
      verticalAlignment = VerticalAlignment.Middle,
      horizontalAlignment = Alignment.Left,
    },
    ref
  ) => {
    const tableHeaderCellClass = classnames('cf-table--header-cell', {
      [`${className}`]: className,
    })

    const tableHeaderCellStyle = {
      textAlign: horizontalAlignment,
      verticalAlign: verticalAlignment,
      ...style,
    }

    return (
      <th
        id={id}
        ref={ref}
        style={tableHeaderCellStyle}
        colSpan={colSpan}
        data-testid={testID}
        className={tableHeaderCellClass}
      >
        {children}
      </th>
    )
  }
)

TableHeaderCell.displayName = 'TableHeaderCell'
