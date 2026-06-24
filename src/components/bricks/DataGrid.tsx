"use client"

import React from 'react'
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  ColumnDef
} from '@tanstack/react-table'

interface DataGridProps<TData> {
  columns: ColumnDef<TData, any>[]
  data: TData[]
}

export function DataGrid<TData>({ columns, data }: DataGridProps<TData>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <div className="w-full overflow-x-auto rounded-xl border border-zinc-800 bg-zinc-950/50 backdrop-blur-md">
      <table className="w-full text-left text-sm text-zinc-400 border-collapse">
        <thead className="bg-zinc-900/80 text-xs uppercase tracking-wider text-zinc-200 sticky top-0">
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id} className="border-b border-zinc-800">
              {headerGroup.headers.map(header => (
                <th key={header.id} className="p-4 font-semibold select-none">
                  {header.isPlaceholder
                    ? null
                    : flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr 
              key={row.id} 
              className="border-b border-zinc-900 hover:bg-zinc-900/30 transition-colors duration-150"
            >
              {row.getVisibleCells().map(cell => (
                <td key={cell.id} className="p-4 font-mono text-xs text-zinc-300">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
