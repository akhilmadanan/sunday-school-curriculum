import { useEffect, useState } from 'react'
import type { MouseEventHandler } from 'react'
import { Button, Paper, Typography } from '@mui/material'
import AppBar from './components/AppBar'
import Curriculum from './components/Curriculum'

function HomePage({ onNavigate }: { onNavigate: MouseEventHandler<HTMLAnchorElement> }) {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 items-center px-4 py-12 sm:px-6 sm:py-16">
      <section
        aria-labelledby="welcome-title"
        className="grid w-full items-center gap-12 md:grid-cols-[1.2fr_0.8fr]"
      >
        <div>
          <Typography
            component="p"
            variant="overline"
            className="mb-4 font-bold tracking-[0.14em] text-[#3b82f6]"
          >
            A thoughtful place to begin
          </Typography>
          <Typography
            id="welcome-title"
            component="h1"
            variant="h2"
            className="max-w-xl leading-tight tracking-tight text-[#1e3a8a]"
          >
            Sunday School Curriculum
          </Typography>
          <Typography
            component="p"
            variant="h6"
            className="mt-6 max-w-lg font-normal leading-relaxed text-[#0f172a]"
          >
            Plan meaningful lessons and help your community grow together.
          </Typography>
          <Button
            component="a"
            href={`${import.meta.env.BASE_URL}home/curriculum`}
            onClick={onNavigate}
            variant="contained"
            color="warning"
            className="mt-8 rounded-full px-6 py-3 font-bold normal-case text-[#0f172a] shadow-none"
          >
            Get started
          </Button>
        </div>

        <Paper
          elevation={0}
          className="rounded-3xl border border-[#bfdbfe] bg-[#eff6ff] p-8 md:p-10"
        >
          <div className="mb-8 grid size-12 place-items-center rounded-2xl bg-[#dbeafe] text-2xl text-[#3b82f6]">
            ✦
          </div>
          <Typography component="h2" variant="h5" className="text-[#1e3a8a]">
            Your curriculum workspace is ready.
          </Typography>
          <Typography component="p" variant="body1" className="mt-3 leading-relaxed text-[#0f172a]">
            Start shaping lessons, organizing ideas, and making space for meaningful conversations.
          </Typography>
        </Paper>
      </section>
    </main>
  )
}

function App() {
  const basePath = import.meta.env.BASE_URL.replace(/\/$/, '')
  const [pathname, setPathname] = useState(window.location.pathname)
  const appPath = (basePath && (pathname === basePath || pathname.startsWith(`${basePath}/`))
    ? pathname.slice(basePath.length)
    : pathname
  ).replace(/\/+$/, '') || '/'
  const page = appPath === '/home/curriculum' || appPath === '/curriculum' ? 'curriculum' : 'home'
  const canonicalPath =
    appPath === '/' || appPath === '/home'
      ? '/home'
      : appPath === '/curriculum' || appPath === '/home/curriculum'
        ? '/home/curriculum'
        : '/home'

  useEffect(() => {
    const handlePopState = () => setPathname(window.location.pathname)
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  useEffect(() => {
    if (appPath !== canonicalPath) {
      const canonicalUrl = `${import.meta.env.BASE_URL}${canonicalPath.slice(1)}`
      window.history.replaceState(null, '', canonicalUrl)
    }
  }, [appPath, canonicalPath])

  const handleNavigate: MouseEventHandler<HTMLAnchorElement> = (event) => {
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      event.currentTarget.target === '_blank' ||
      event.currentTarget.hasAttribute('download')
    ) {
      return
    }

    const destination = new URL(event.currentTarget.href)
    if (destination.origin !== window.location.origin) return

    event.preventDefault()
    window.history.pushState(null, '', destination)
    setPathname(destination.pathname)

    if (destination.hash) {
      requestAnimationFrame(() => {
        document.getElementById(decodeURIComponent(destination.hash.slice(1)))?.scrollIntoView()
      })
    } else {
      window.scrollTo(0, 0)
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <AppBar page={page} onNavigate={handleNavigate} />
      {page === 'curriculum' ? <Curriculum /> : <HomePage onNavigate={handleNavigate} />}
      <footer
        id="learn-with-us"
        className="mx-auto w-full max-w-6xl border-t border-[#e2e8f0] px-4 py-6 sm:px-6"
      >
        <Typography variant="caption" className="text-[#475569]">
          Made for learning, reflection, and community.
        </Typography>
      </footer>
    </div>
  )
}

export default App
