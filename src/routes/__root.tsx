import { createRootRoute, Outlet, Link } from '@tanstack/react-router'
import { Home, AlertCircle } from 'lucide-react'

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: RootErrorComponent,
})

function RootComponent() {
  return (
    <>
      <Outlet />
    </>
  )
}

function NotFoundComponent() {
  return (
    <div className="min-h-screen bg-[#4A0E2E] rangoli-bg text-[#FDF6E3] flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-[#6B1F4A]/70 border border-[#F5C842]/30 backdrop-blur-md rounded-3xl p-8 text-center shadow-card shadow-glow">
        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#F5C842]/20 flex items-center justify-center text-[#F5C842]">
          <Home className="w-8 h-8" />
        </div>
        <h1 className="font-['Rozha_One'] text-4xl text-gold-gradient mb-3">404</h1>
        <h2 className="font-['Rozha_One'] text-2xl text-[#FDF6E3] mb-4">Lost in the Mandi?</h2>
        <p className="font-['Manrope'] text-sm text-[#FDF6E3]/80 mb-8 leading-relaxed">
          The stall or treat you're looking for might have moved or doesn't exist. Come on back to our main stall!
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gold-gradient text-[#4A0E2E] font-semibold text-sm shadow-glow hover:scale-105 active:scale-95 transition-all duration-300"
        >
          <Home className="w-4 h-4" />
          <span>Back to Diwali Bites</span>
        </Link>
      </div>
    </div>
  )
}

function RootErrorComponent({ error }: { error: unknown }) {
  const message = error instanceof Error ? error.message : 'An unexpected glitch occurred.'
  return (
    <div className="min-h-screen bg-[#4A0E2E] text-[#FDF6E3] flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-[#6B1F4A]/80 border border-red-400/40 backdrop-blur-md rounded-3xl p-8 text-center shadow-card">
        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-red-500/20 flex items-center justify-center text-red-300">
          <AlertCircle className="w-8 h-8" />
        </div>
        <h2 className="font-['Rozha_One'] text-2xl text-red-200 mb-2">Something Went Awry</h2>
        <p className="font-['Manrope'] text-xs text-red-200/70 mb-6 font-mono break-all">{message}</p>
        <button
          onClick={() => window.location.reload()}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gold-gradient text-[#4A0E2E] font-semibold text-sm hover:scale-105 transition-all"
        >
          Reload Stall
        </button>
      </div>
    </div>
  )
}
