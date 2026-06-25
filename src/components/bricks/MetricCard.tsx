"use client"

import React from 'react'

interface MetricCardProps {
  title: string
  value: string
  change: string
  isPositive: boolean
  subtext: string
}

export function MetricCard({ title, value, change, isPositive, subtext }: MetricCardProps) {
  return (
    <div className="flex-1 bg-zinc-900/30 border border-zinc-900 p-6 rounded-xl backdrop-blur-sm shadow-xl flex flex-col gap-2">
      <div className="flex justify-between items-start">
        <span className="text-xs font-semibold tracking-wider text-zinc-500 uppercase">
          {title}
        </span>
        <span className={`text-xs font-bold px-2 py-0.5 rounded ${
          isPositive ? 'bg-emerald-500/10 text-emerald-400' : 'bg-rose-500/10 text-rose-400'
        }`}>
          {isPositive ? '↑' : '↓'} {change}
        </span>
      </div>
      
      <div className="flex items-baseline gap-2 mt-1">
        <span className="text-2xl font-bold tracking-tight text-zinc-100 font-mono">
          {value}
        </span>
      </div>
      
      <span className="text-xs text-zinc-500">
        {subtext}
      </span>
    </div>
  )
}
