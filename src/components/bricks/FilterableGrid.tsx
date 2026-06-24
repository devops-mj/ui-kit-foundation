'use client'

import { useState } from 'react'
import { menuCategories, menuItems } from './menuData'

export default function FilterableGrid() {
  const [activeCategory, setActiveCategory] = useState('All')

  // Filter logic: Show everything if 'All' is active, otherwise filter by category string
  const filteredItems = activeCategory === 'All'
    ? menuItems
    : menuItems.filter(item => item.category === activeCategory)

  return (
    <section className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
      {/* Dynamic Navigation Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        {menuCategories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-200 cursor-pointer ${
              activeCategory === category
                ? 'bg-primary text-primary-foreground shadow-md scale-105'
                : 'bg-muted text-muted-foreground hover:bg-muted/80 border border-border'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="flex flex-col justify-between rounded-xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-muted-foreground/30"
          >
            <div>
              <div className="flex items-center justify-between gap-x-4">
                <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary ring-1 ring-inset ring-primary/20">
                  {item.tag}
                </span>
                <span className="text-sm font-semibold text-foreground bg-muted px-2.5 py-0.5 rounded-lg border border-border">
                  {item.price}
                </span>
              </div>
              <h3 className="mt-4 text-lg font-semibold leading-7 tracking-tight text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {item.description}
              </p>
            </div>
            
            <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
              <span className="text-xs text-muted-foreground font-mono uppercase tracking-wider">
                {item.category}
              </span>
              <button className="text-xs font-semibold text-primary hover:underline flex items-center gap-1">
                Acquire Asset <span>→</span>
              </button>
            </div>
          </div>
        ))}
      </div>
      
      {/* Empty State Fallback */}
      {filteredItems.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No assets found in this category.</p>
        </div>
      )}
    </section>
  )
}