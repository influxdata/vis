// Libraries
import React, {forwardRef} from 'react'
import classnames from 'classnames'

// Types
import {StandardFunctionProps} from '../Types'

export interface TableFooterProps extends StandardFunctionProps {}

export type TableFooterRef = HTMLTableSectionElement

export const TableFooter = forwardRef<TableFooterRef, TableFooterProps>(
  ({id, style, testID = 'table-footer', children, className}, ref) => {
    const tableFooterClass = classnames('cf-table--footer', {
      [`${className}`]: className,
    })

    return (
      <tfoot
        id={id}
        ref={ref}
        style={style}
        className={tableFooterClass}
        data-testid={testID}
      >
        {children}
      </tfoot>
    )
  }
)

TableFooter.displayName = 'TableFooter'
