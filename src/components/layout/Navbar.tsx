'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/70 backdrop-blur-md transition-all duration-200">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        {/* Brand/Logo Identity */}
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 text-xl font-bold tracking-tight text-foreground hover:opacity-80 transition-opacity">
            MJ<span className="text-primary">TEMPLATES</span>
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex md:gap-x-8">
          <Link href="/" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Home</Link>
          <Link href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Assets</Link>
          <Link href="/view/docs" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Documentation</Link>
          <Link href="/view/pricing" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Pricing</Link>
        </div>

        {/* Call to Action Desktop Button */}
        <div className="hidden md:flex md:flex-1 md:justify-end">
          <Link
            href="#features"
            className="rounded-lg bg-primary/10 border border-primary/20 px-3.5 py-1.5 text-xs font-semibold text-primary shadow-sm hover:bg-primary hover:text-primary-foreground transition-all duration-200"
          >
            Browse Vault
          </Link>
        </div>

        {/* Mobile Hamburger Trigger */}
        <div className="flex md:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-muted-foreground cursor-pointer"
          >
            <span className="sr-only">Toggle main menu</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu Overlays */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background px-6 py-4 space-y-3 animate-in fade-in slide-in-from-top-2 duration-150">
          <Link href="/" onClick={() => setMobileMenuOpen(false)} className="block text-base font-medium text-muted-foreground hover:text-foreground">Home</Link>
          <Link href="#features" onClick={() => setMobileMenuOpen(false)} className="block text-base font-medium text-muted-foreground hover:text-foreground">Assets</Link>
          <Link href="#" onClick={() => setMobileMenuOpen(false)} className="block text-base font-medium text-muted-foreground hover:text-foreground">Documentation</Link>
          <Link href="#" onClick={() => setMobileMenuOpen(false)} className="block text-base font-medium text-muted-foreground hover:text-foreground">Pricing</Link>
          <div className="pt-2 border-t border-border">
            <Link
              href="#features"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center rounded-lg bg-primary px-3.5 py-2 text-sm font-semibold text-primary-foreground"
            >
              Browse Vault
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
