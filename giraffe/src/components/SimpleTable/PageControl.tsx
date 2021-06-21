// Libraries
import React, {FC, useContext} from 'react'
import {PaginationContext} from './pagination'

// Components
import {PaginationNav} from './PaginationNav'

const PageControl: FC = () => {
  const {offset, size, total, setPage} = useContext(PaginationContext)

  return (
    <div className="visualization--simple-table--paging">
      <span className="visualization--simple-table--paging-label">
        Showing most recent 100 results per series
      </span>
      {total && size && (
        <PaginationNav.PaginationNav
          totalPages={Math.ceil(total / size)}
          currentPage={Math.floor(offset / size) + 1}
          pageRangeOffset={1}
          onChange={setPage}
        />
      )}
    </div>
  )
}

export default PageControl
