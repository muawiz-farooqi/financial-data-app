export interface FinancialData {
  date: string
  revenue: number
  netIncome: number
  grossProfit: number
  eps: number
  operatingIncome: number
}

export interface FilterCriteria {
  startYear?: number
  endYear?: number
  minRevenue?: number
  maxRevenue?: number
  minNetIncome?: number
  maxNetIncome?: number
}

