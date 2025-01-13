'use client'

import { useState, useEffect } from 'react'
import FinancialTable from '@/components/FinancialTable'
import FilterForm from '@/components/FilterForm'
import { FinancialData, FilterCriteria } from './types'

export default function Home() {
  const [data, setData] = useState<FinancialData[]>([])
  const [filteredData, setFilteredData] = useState<FinancialData[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    setIsLoading(true)
    setError(null)
    try {
      const apiKey = process.env.NEXT_PUBLIC_FDA_API_KEY
      const response = await fetch(`https://financialmodelingprep.com/api/v3/income-statement/AAPL?period=annual
                                    &apikey=${apiKey}`)
      if (!response.ok) {
        throw new Error('Failed to fetch data')
      }
      const jsonData = await response.json()
      const formattedData: FinancialData[] = jsonData.map((item: FinancialData) => ({
        date: item.date,
        revenue: item.revenue,
        netIncome: item.netIncome,
        grossProfit: item.grossProfit,
        eps: item.eps,
        operatingIncome: item.operatingIncome
      }))
      setData(formattedData)
      setFilteredData(formattedData)
    } catch {
      setError('An error occurred while fetching data')
    } finally {
      setIsLoading(false)
    }
  }

  const handleFilter = (criteria: FilterCriteria) => {
    const filtered = data.filter(item => {
      const date = new Date(item.date).getFullYear()
      return (
        (!criteria.startYear || date >= criteria.startYear) &&
        (!criteria.endYear || date <= criteria.endYear) &&
        (!criteria.minRevenue || item.revenue >= criteria.minRevenue) &&
        (!criteria.maxRevenue || item.revenue <= criteria.maxRevenue) &&
        (!criteria.minNetIncome || item.netIncome >= criteria.minNetIncome) &&
        (!criteria.maxNetIncome || item.netIncome <= criteria.maxNetIncome)
      )
    })
    setFilteredData(filtered)
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Apple Inc. Financial Data</h1>
      {isLoading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {!isLoading && !error && (
        <>
          <FilterForm onFilter={handleFilter} />
          <FinancialTable data={filteredData} />
        </>
      )}
    </main>
  )
}
