import { AppBar, Button, Paper, Toolbar, Typography } from '@mui/material'

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar className="mx-auto flex w-full max-w-6xl gap-3 px-6 py-3">
          <div
            aria-hidden="true"
            className="grid size-9 place-items-center rounded-full bg-[#1e3a8a] font-semibold text-lg text-white"
          >
            S
          </div>
          <Typography variant="subtitle1" className="font-bold text-[#1e3a8a]">
            Sunday School
          </Typography>
          <Typography aria-hidden="true" className="text-[#94a3b8]">
            /
          </Typography>
          <Typography variant="body2" className="text-[#475569]">
            Curriculum
          </Typography>
        </Toolbar>
      </AppBar>

      <main className="mx-auto flex w-full max-w-6xl flex-1 items-center px-6 py-16">
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

      <footer className="mx-auto w-full max-w-6xl border-t border-[#e2e8f0] px-6 py-6">
        <Typography variant="caption" className="text-[#475569]">
          Made for learning, reflection, and community.
        </Typography>
      </footer>
    </div>
  )
}

export default App
