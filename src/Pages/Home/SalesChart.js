import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import Loading from '../Shared/Loading'
import TitleUnderline from '../Shared/TitleUnderline'

const SalesChart = () => {
  const { data: salesData, isLoading } = useQuery(
    'salesData',
    async () =>
      await axios.get(`https://agile-citadel-57926.herokuapp.com/sales`)
  )

  const lastYear = new Date().getFullYear() - 1

  if (isLoading) {
    return <Loading />
  }

  return (
    <div className='container mx-auto mt-8'>
      <h2 className='text-center font-bold text-3xl uppercase'>Our Sales</h2>
      <TitleUnderline />
      <div>
        <h2 className='text-center chart-label mt-8 text-lg'>
          Yearly Sales of {lastYear}
        </h2>
        <ResponsiveContainer width='100%' height={400}>
          <BarChart data={salesData.data}>
            <CartesianGrid strokeDasharray='5 5' />
            <XAxis dataKey='month' />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey='sell' stackId='a' fill='#4506CB' />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default SalesChart
