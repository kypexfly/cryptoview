import { useState, useMemo } from 'react'

export const useSortableData = (items, config = null) => {
  const [sortConfig, setSortConfig] = useState(config)

  const sortedItems = useMemo(() => {
    let sortableItems = [...items]

    // START: this section should be improved
    sortableItems = sortableItems.map((item) => {
      if (item.priceUsd) {
        return { ...item, priceUsd: Number(item.priceUsd) }
      }
      return sortableItems
    })
    sortableItems = sortableItems.map((item) => {
      if (item.changePercent24Hr) {
        return { ...item, changePercent24Hr: Number(item.changePercent24Hr) }
      }
      return sortableItems
    })
    sortableItems = sortableItems.map((item) => {
      if (item.marketCapUsd) {
        return { ...item, marketCapUsd: Number(item.marketCapUsd) }
      }
      return sortableItems
    })
    // END: this section should be improved

    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1
        }
        return 0
      })
    }
    return sortableItems
  }, [items, sortConfig])

  const requestSort = (key) => {
    let direction = 'ascending'
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending'
    }
    setSortConfig({ key, direction })
  }

  return { items: sortedItems, requestSort, sortConfig }
}

export default useSortableData
