"use client"

import React from 'react'
import { DataGrid } from '../../components/bricks/DataGrid'
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

  const mockLedgerData: LedgerEntry[] = [
    { id: 'tx_8831', timestamp: '2026-06-23 19:24:01', asset: 'BTC/USD', type: 'BUY', amount: '0.42180000', price: '$67,420.50', status: 'COMPLETED' },
    { id: 'tx_8832', timestamp: '2026-06-23 19:24:15', asset: 'ETH/USD', type: 'SELL', amount: '4.15000000', price: '$3,512.10', status: 'COMPLETED' },
    { id: 'tx_8833', timestamp: '2026-06-23 19:25:02', asset: 'SOL/USD', type: 'BUY', amount: '55.00000000', price: '$148.75', status: 'PENDING' }
  ]

  return (
    <main className="min-h-screen bg-zinc-950 p-8 text-zinc-100 flex flex-col gap-6 pt-24">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Institutional Asset Ledger</h1>
        <p className="text-sm text-zinc-500">Real-time atomic order clearing and processing matrix.</p>
      </div>
      <div className="max-w-6xl w-full">
        <DataGrid columns={columns} data={mockLedgerData} />
      </div>
    </main>
  )
}
