"use client"

import React from 'react'
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel, // <-- Import the filter engine
  flexRender,
  ColumnDef
} from '@tanstack/react-table'

interface DataGridProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
  globalFilter: string
  setGlobalFilter: (value: string) => void
}

export function DataGrid<TData, TValue>({
  columns,
  data,
  globalFilter,
  setGlobalFilter,
}: DataGridProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    state: {
      globalFilter, // <-- Pass filter state here
    },
    onGlobalFilterChange: setGlobalFilter, // <-- Handler to update it
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(), // <-- Initialize filtering logic
  })

  return (
    <div className="w-full overflow-hidden rounded-xl border border-zinc-900 bg-zinc-950">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left text-sm text-zinc-400">
          <thead className="bg-zinc-900/40 text-xs font-semibold tracking-wider text-zinc-500 uppercase border-b border-zinc-900">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id} className="px-6 py-4 font-semibold">
                    {header.isPlaceholder
                      ? null
                      : flexRender(header.column.columnDef.header, header.getContext())}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="divide-y divide-zinc-900">
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="hover:bg-zinc-900/20 transition-colors">
                {row.getVisibleCells().map((cell) => (
                  <th key={cell.id} className="px-6 py-4 font-normal text-zinc-300">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </th>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
