// Libraries
import React, {Component} from 'react'

// Components
import {Pagination, PaginationNavProps} from './PaginationNav'
import {PaginationItem} from './PaginationItem'
import {PaginationTruncationItem} from './paginationTruncationItem'
import {PaginationDirectionItem} from './PaginationDirectionItem'

export class PaginationNav extends Component<PaginationNavProps> {
  public static readonly displayName = 'PaginationNav'

  public static PaginationNav = Pagination
  public static Item = PaginationItem
  public static TruncationItem = PaginationTruncationItem
  public static DirectionItem = PaginationDirectionItem
  render() {
    return <PaginationNav {...this.props} />
  }
}

export {Pagination, PaginationNavRef} from './PaginationNav'
export * from './PaginationItem'
export * from './paginationTruncationItem'
export * from './PaginationDirectionItem'
