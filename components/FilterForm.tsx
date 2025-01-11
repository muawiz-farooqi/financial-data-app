'use client'

import { useState } from 'react'
import { FilterCriteria } from '@/app/types'
import { PlusIcon, MinusIcon } from '@heroicons/react/solid'

interface Props {
  onFilter: (criteria: FilterCriteria) => void
}

export default function FilterForm({ onFilter }: Props) {
  const [criteria, setCriteria] = useState<FilterCriteria>({
    startYear: undefined,
    endYear: undefined,
    minRevenue: undefined,
    maxRevenue: undefined,
    minNetIncome: undefined,
    maxNetIncome: undefined,
  })
  const [isOpen, setIsOpen] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setCriteria(prev => ({ ...prev, [name]: value ? Number(value) : undefined }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onFilter(criteria)
  }

  const handleClearFilters = () => {
    setCriteria({
      startYear: undefined,
      endYear: undefined,
      minRevenue: undefined,
      maxRevenue: undefined,
      minNetIncome: undefined,
      maxNetIncome: undefined,
    })
    onFilter({
      startYear: undefined,
      endYear: undefined,
      minRevenue: undefined,
      maxRevenue: undefined,
      minNetIncome: undefined,
      maxNetIncome: undefined,
    })
  }

  return (
    <div className="mb-6 p-4 bg-gray-100 rounded-lg">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center w-full text-left font-bold"
      >
        {isOpen ? <MinusIcon className="h-5 w-5 mr-2" /> : <PlusIcon className="h-5 w-5 mr-2" />}
        {isOpen ? 'Hide Filters' : 'Show Filters'}
      </button>
      {isOpen && (
        <form onSubmit={handleSubmit} className="mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="startYear" className="block mb-1">Start Year:</label>
              <input
                type="number"
                id="startYear"
                name="startYear"
                value={criteria.startYear || ''}
                onChange={handleChange}
                className="w-full px-2 py-1 border rounded"
              />
            </div>
            <div>
              <label htmlFor="endYear" className="block mb-1">End Year:</label>
              <input
                type="number"
                id="endYear"
                name="endYear"
                value={criteria.endYear || ''}
                onChange={handleChange}
                className="w-full px-2 py-1 border rounded"
              />
            </div>
            <div>
              <label htmlFor="minRevenue" className="block mb-1">Min Revenue:</label>
              <input
                type="number"
                id="minRevenue"
                name="minRevenue"
                value={criteria.minRevenue || ''}
                onChange={handleChange}
                className="w-full px-2 py-1 border rounded"
              />
            </div>
            <div>
              <label htmlFor="maxRevenue" className="block mb-1">Max Revenue:</label>
              <input
                type="number"
                id="maxRevenue"
                name="maxRevenue"
                value={criteria.maxRevenue || ''}
                onChange={handleChange}
                className="w-full px-2 py-1 border rounded"
              />
            </div>
            <div>
              <label htmlFor="minNetIncome" className="block mb-1">Min Net Income:</label>
              <input
                type="number"
                id="minNetIncome"
                name="minNetIncome"
                value={criteria.minNetIncome || ''}
                onChange={handleChange}
                className="w-full px-2 py-1 border rounded"
              />
            </div>
            <div>
              <label htmlFor="maxNetIncome" className="block mb-1">Max Net Income:</label>
              <input
                type="number"
                id="maxNetIncome"
                name="maxNetIncome"
                value={criteria.maxNetIncome || ''}
                onChange={handleChange}
                className="w-full px-2 py-1 border rounded"
              />
            </div>
          </div>
          <div className="mt-4 flex justify-center space-x-4">
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              Apply Filters
            </button>
            <button type="button" onClick={handleClearFilters} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
              Clear Filters
            </button>
          </div>
        </form>
      )}
    </div>
  )
}

