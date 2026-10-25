import { AppBar as MuiAppBar, Toolbar, Typography } from '@mui/material'

function AppBar() {
  return (
    <MuiAppBar position="static" color="transparent" elevation={0}>
      <Toolbar className="mx-auto flex w-full max-w-6xl flex-wrap gap-4 px-6 py-4">
        <div className="flex min-w-0 flex-1 items-center gap-3">
          <div
            aria-hidden="true"
            className="grid size-9 shrink-0 place-items-center rounded-full bg-[#1e3a8a] font-semibold text-lg text-white"
          >
            S
          </div>
          <Typography variant="subtitle1" className="font-bold text-[#1e3a8a]">
            Sunday School
          </Typography>
        </div>

        <nav
          aria-label="Main navigation"
          className="flex items-center gap-1 rounded-2xl border border-[#bfdbfe] bg-[#eff6ff] p-1"
        >
          <a
            href="#home"
            className="rounded-xl px-4 py-2 text-sm font-semibold text-[#1e3a8a] transition hover:bg-white"
          >
            Home
          </a>
          <a
            href="#curriculum"
            aria-current="page"
            className="rounded-xl bg-[#1e3a8a] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[#172e70]"
          >
            Curriculum
          </a>
        </nav>

        <form role="search" className="relative order-1 w-full md:order-none md:ml-auto md:w-64">
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
      </Toolbar>
    </MuiAppBar>
  )
}

export default AppBar
