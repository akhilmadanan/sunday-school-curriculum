import { AppBar as MuiAppBar, Button, Toolbar, Typography } from '@mui/material'

type AppBarProps = {
  page: 'home' | 'curriculum'
}

function AppBar({ page }: AppBarProps) {
  const linkClass =
    'whitespace-nowrap rounded-xl px-2 py-2 text-xs font-semibold transition hover:bg-white sm:px-4 sm:text-sm'

  return (
    <MuiAppBar position="static" color="transparent" elevation={0}>
      <Toolbar className="mx-auto flex w-full max-w-6xl flex-wrap gap-3 px-4 py-3 sm:gap-4 sm:px-6 sm:py-4">
        <div className="flex min-w-0 flex-1 items-center gap-3">
          <a href="/" aria-label="Sunday School home" className="flex items-center gap-3 no-underline">
            <div
              aria-hidden="true"
              className="grid size-9 shrink-0 place-items-center rounded-full bg-[#1e3a8a] font-semibold text-lg text-white"
            >
              S
            </div>
            <Typography variant="subtitle1" className="hidden font-bold text-[#1e3a8a] sm:block">
              Sunday School
            </Typography>
          </a>
        </div>

        <nav
          aria-label="Main navigation"
          className="order-1 flex w-full items-center justify-between gap-1 rounded-2xl border border-[#bfdbfe] bg-[#eff6ff] p-1 sm:order-none sm:w-auto sm:justify-start"
        >
          <a
            href="/"
            aria-current={page === 'home' ? 'page' : undefined}
            className={`${linkClass} ${
              page === 'home'
                ? 'bg-[#1e3a8a] text-white shadow-sm hover:bg-[#172e70]'
                : 'text-[#1e3a8a]'
            }`}
          >
            Home
          </a>
          <a
            href="/curriculum"
            aria-current={page === 'curriculum' ? 'page' : undefined}
            className={`${linkClass} ${
              page === 'curriculum'
                ? 'bg-[#1e3a8a] text-white shadow-sm hover:bg-[#172e70]'
                : 'text-[#1e3a8a]'
            }`}
          >
            Curriculum
          </a>
          <a href="/#learn-with-us" className={`${linkClass} text-[#1e3a8a]`}>
            Learn with us
          </a>
        </nav>

        <form
          role="search"
          className="relative order-2 min-w-0 flex-1 sm:order-none sm:ml-auto sm:w-64 sm:flex-none"
        >
          <label htmlFor="site-search" className="sr-only">
            Search lessons
          </label>
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            className="pointer-events-none absolute left-3 top-1/2 size-5 -translate-y-1/2 text-[#64748b]"
          >
            <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.8" />
            <path d="m16 16 4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
          <input
            id="site-search"
            type="search"
            placeholder="Search lessons..."
            className="w-full rounded-xl border border-[#cbd5e1] bg-white py-2.5 pl-10 pr-4 text-sm text-[#0f172a] outline-none transition placeholder:text-[#64748b] focus:border-[#3b82f6] focus:ring-2 focus:ring-[#bfdbfe]"
          />
        </form>

        <Button
          variant="contained"
          color="primary"
          className="order-3 shrink-0 rounded-xl px-4 py-2.5 text-sm font-semibold normal-case shadow-none hover:shadow-sm sm:order-none sm:px-5"
        >
          Log in
        </Button>
      </Toolbar>
    </MuiAppBar>
  )
}

export default AppBar
