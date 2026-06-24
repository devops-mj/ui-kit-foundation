import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card/30" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <span className="text-lg font-bold tracking-tight text-foreground">
              MJ<span className="text-primary">TEMPLATES</span>
            </span>
            <p className="text-sm leading-6 text-muted-foreground max-w-xs">
              Premium UI kits, modular web assets, and engineering baselines built for fast modern deployment.
            </p>
          </div>
          
          {/* Link Matrix Columns */}
          <div className="mt-8 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-foreground">Products</h3>
                <ul role="list" className="mt-4 space-y-3">
                  <li><Link href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">UI Kits</Link></li>
                  <li><Link href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Web Templates</Link></li>
                  <li><Link href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Audio Assets</Link></li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-foreground">Support</h3>
                <ul role="list" className="mt-4 space-y-3">
                  <li><Link href= "/view/docs" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Documentation</Link></li>
                  <li><Link href="/view/changelog" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Changelog</Link></li>
                  <li><Link href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Contact</Link></li>
                </ul>
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold leading-6 text-foreground">Legal</h3>
              <ul role="list" className="mt-4 space-y-3">
                <li><Link href="/view/privacy" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</Link></li>
                <li><Link href="/view/terms" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Terms of Service</Link></li>
                <li><Link href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">License Agreement</Link></li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Attribution Row */}
        <div className="mt-12 border-t border-border/60 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs leading-5 text-muted-foreground">
            &copy; {new Date().getFullYear()} MJTemplates. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground font-mono">
            v1.0.0 // Production Stack
          </p>
        </div>
      </div>
    </footer>
  )
}
