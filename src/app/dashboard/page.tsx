"use client"

import React, { useState, useEffect } from 'react'
import { DataGrid } from '../../components/bricks/DataGrid'
import { MetricCard } from '../../components/bricks/MetricCard'
import { ColumnDef } from '@tanstack/react-table'

interface LedgerEntry {
  id: string
  timestamp: string
  asset: string
  type: 'BUY' | 'SELL'
  amount: string
  price: string
  status: 'COMPLETED' | 'PENDING' | 'FAILED'
}

export default function DashboardPage() {
  const [globalFilter, setGlobalFilter] = useState('')
  const [ledgerData, setLedgerData] = useState<LedgerEntry[]>([])
  const [isLoading, setIsLoading] = useState(true)

  // Asynchronous network fetch layer
  useEffect(() => {
    async function fetchLiveMarketPrices() {
      try {
        // Target public ticker endpoints for BTC, ETH, and SOL
        const response = await fetch(
          'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana&vs_currencies=usd'
        )
        const marketData = await response.json()

        // Format currency readouts clean
        const btcPrice = marketData.bitcoin?.usd ? `$${marketData.bitcoin.usd.toLocaleString()}` : '$67,420.50'
        const ethPrice = marketData.ethereum?.usd ? `$${marketData.ethereum.usd.toLocaleString()}` : '$3,512.10'
        const solPrice = marketData.solana?.usd ? `$${marketData.solana.usd.toLocaleString()}` : '$148.75'

        // Map live stream data directly into our Ledger model parameters
        const synchronizedData: LedgerEntry[] = [
          { id: 'tx_8831', timestamp: new Date().toISOString().replace('T', ' ').substring(0, 19), asset: 'BTC/USD', type: 'BUY', amount: '0.42180000', price: btcPrice, status: 'COMPLETED' },
          { id: 'tx_8832', timestamp: new Date().toISOString().replace('T', ' ').substring(0, 19), asset: 'ETH/USD', type: 'SELL', amount: '4.15000000', price: ethPrice, status: 'COMPLETED' },
          { id: 'tx_8833', timestamp: new Date().toISOString().replace('T', ' ').substring(0, 19), asset: 'SOL/USD', type: 'BUY', amount: '55.00000000', price: solPrice, status: 'PENDING' }
        ]

        setLedgerData(synchronizedData)
        setIsLoading(false)
      } catch (error) {
        console.error('Network synchronization failed, executing local fallbacks:', error)
        // Fallback array prevents dashboard breakage if API limits hit
        setLedgerData([
          { id: 'tx_8831', timestamp: '2026-06-25 19:24:01', asset: 'BTC/USD', type: 'BUY', amount: '0.42180000', price: '$67,420.50', status: 'COMPLETED' },
          { id: 'tx_8832', timestamp: '2026-06-25 19:24:15', asset: 'ETH/USD', type: 'SELL', amount: '4.15000000', price: '$3,512.10', status: 'COMPLETED' },
          { id: 'tx_8833', timestamp: '2026-06-25 19:25:02', asset: 'SOL/USD', type: 'BUY', amount: '55.00000000', price: '$148.75', status: 'PENDING' }
        ])
        setIsLoading(false)
      }
    }

    fetchLiveMarketPrices()
  }, [])

  const columns: ColumnDef<LedgerEntry, any>[] = [
    { header: 'Timestamp', accessorKey: 'timestamp' },
    { header: 'Asset Pair', accessorKey: 'asset' },
    {
      header: 'Transaction Type',
      accessorKey: 'type',
      cell: (info) => {
        const type = info.getValue() as 'BUY' | 'SELL'
        return (
          <span className={`px-2 py-0.5 rounded text-xs font-bold ${
            type === 'BUY' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-rose-500/10 text-rose-400'
          }`}>
            {type}
          </span>
        )
      }
    },
    { header: 'Amount', accessorKey: 'amount' },
    { header: 'Execution Price', accessorKey: 'price' },
    {
      header: 'Status',
      accessorKey: 'status',
      cell: (info) => {
        const status = info.getValue() as string
        return (
          <span className={`text-xs ${status === 'COMPLETED' ? 'text-zinc-400' : 'text-amber-400'}`}>
            ● {status}
          </span>
        )
      }
    }
  ]

  return (
    <main className="min-h-screen bg-zinc-950 p-8 text-zinc-100 flex flex-col gap-8 pt-24 max-w-6xl w-full mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Institutional Asset Ledger</h1>
          <p className="text-sm text-zinc-500">Real-time atomic order clearing and processing matrix.</p>
        </div>

        <div className="relative max-w-xs w-full">
          <input
            type="text"
            value={globalFilter}
            onChange={(e) => setGlobalFilter(e.target.value)}
            placeholder="Filter matrix records..."
            className="w-full bg-zinc-900/50 border border-zinc-800 focus:border-zinc-700 text-zinc-200 placeholder-zinc-500 text-xs rounded-lg px-4 py-2.5 outline-none transition-all duration-200 backdrop-blur-sm"
          />
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
        <MetricCard 
          title="Total Clearing Volume" 
          value="$294,810.25" 
          change="14.2%" 
          isPositive={true} 
          subtext="Aggregated across linked API endpoints"
        />
        <MetricCard 
          title="Atomic Execution Speed" 
          value="0.42 ms" 
          change="8.1%" 
          isPositive={true} 
          subtext="Sub-millisecond settling efficiency"
        />
        <MetricCard 
          title="Active Clearing Nodes" 
          value="18 / 18" 
          change="0.0%" 
          isPositive={true} 
          subtext="All regional system relays fully operational"
        />
      </div>

      {/* Main Table Interface Layer */}
      <div className="w-full">
        {isLoading ? (
          <div className="w-full py-20 text-center border border-zinc-900 bg-zinc-950/40 rounded-xl">
            <span className="text-xs text-zinc-500 font-mono tracking-widest animate-pulse">
              SYNCHRONIZING SECURE NETWORK LEDGER RELAYS...
            </span>
          </div>
        ) : (
          <DataGrid 
            columns={columns} 
            data={ledgerData} 
            globalFilter={globalFilter}
            setGlobalFilter={setGlobalFilter}
          />
        )}
      </div>
    </main>
  )
}
