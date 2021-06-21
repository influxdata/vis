// Libraries
import React, {forwardRef} from 'react'
import classnames from 'classnames'

// Types
import {StandardFunctionProps} from '../Types'

export interface TableBodyProps extends StandardFunctionProps {}

export type TableBodyRef = HTMLTableSectionElement

export const TableBody = forwardRef<TableBodyRef, TableBodyProps>(
  ({id, style, testID = 'table-body', children, className}, ref) => {
    const tableBodyClass = classnames('cf-table--body', {
      [`${className}`]: className,
    })

    return (
      <tbody
        id={id}
        ref={ref}
        style={style}
        className={tableBodyClass}
        data-testid={testID}
      >
        {children}
      </tbody>
    )
  }
)

TableBody.displayName = 'TableBody'
