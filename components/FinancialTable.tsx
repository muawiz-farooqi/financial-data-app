'use client'

import { useState } from 'react'
import { FinancialData } from '../types'

interface Props {
  data: FinancialData[]
}

export default function FinancialTable({ data }: Props) {
  const [sortColumn, setSortColumn] = useState<keyof FinancialData>('date')
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc')

  const handleSort = (column: keyof FinancialData) => {
    if (column === sortColumn) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')
    } else {
      setSortColumn(column)
      setSortDirection('desc')
    }
  }

  const sortedData = [...data].sort((a, b) => {
    if (a[sortColumn] < b[sortColumn]) return sortDirection === 'asc' ? -1 : 1
    if (a[sortColumn] > b[sortColumn]) return sortDirection === 'asc' ? 1 : -1
    return 0
  })

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            {['date', 'revenue', 'netIncome', 'grossProfit', 'eps', 'operatingIncome'].map((column) => (
              <th
                key={column}
                className="px-4 py-2 bg-gray-100 border-b cursor-pointer"
                onClick={() => handleSort(column as keyof FinancialData)}
              >
                {column.charAt(0).toUpperCase() + column.slice(1)}
                {sortColumn === column && (
                  <span className="ml-1">{sortDirection === 'asc' ? '▲' : '▼'}</span>
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedData.map((item, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
              <td className="px-4 py-2 border-b">{item.date}</td>
              <td className="px-4 py-2 border-b">${item.revenue.toLocaleString()}</td>
              <td className="px-4 py-2 border-b">${item.netIncome.toLocaleString()}</td>
              <td className="px-4 py-2 border-b">${item.grossProfit.toLocaleString()}</td>
              <td className="px-4 py-2 border-b">${item.eps.toFixed(2)}</td>
              <td className="px-4 py-2 border-b">${item.operatingIncome.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

