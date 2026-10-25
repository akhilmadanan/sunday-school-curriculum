import { Accordion, AccordionDetails, AccordionSummary, Paper, Typography } from '@mui/material'
import { curriculumTerms } from '../data/curriculum'

function Curriculum() {
  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8 sm:px-6 sm:py-12">
      <header className="mb-8 max-w-3xl sm:mb-10">
        <Typography
          component="p"
          variant="overline"
          className="font-bold tracking-[0.14em] text-[#3b82f6]"
        >
          Explore and grow
        </Typography>
        <Typography
          id="curriculum-title"
          component="h1"
          variant="h2"
          className="mt-2 tracking-tight text-[#1e3a8a]"
        >
          Curriculum
        </Typography>
        <Typography component="p" variant="body1" className="mt-4 leading-relaxed text-[#475569]">
          Weekly lesson plans, adapted for each age group, to support learning throughout the year.
        </Typography>
      </header>

      <div className="space-y-8">
        {curriculumTerms.map((term) => (
          <section key={term.id} aria-labelledby={`${term.id}-title`}>
            <Paper
              elevation={0}
              className="mb-5 rounded-3xl border border-[#bfdbfe] bg-[#eff6ff] p-5 sm:p-6 md:p-8"
            >
              <Typography
                id={`${term.id}-title`}
                component="h2"
                variant="h4"
                className="font-bold text-[#1e3a8a]"
              >
                {term.title}
              </Typography>
              <Typography component="p" variant="h6" className="mt-3 text-[#1e3a8a]">
                {term.focus}
              </Typography>
              <Typography component="p" variant="body2" className="mt-3 leading-relaxed text-[#475569]">
                {term.summary}
              </Typography>
            </Paper>

            <div className="space-y-4">
              {term.ageGroups.map((ageGroup, index) => (
                <Accordion
                  key={ageGroup.id}
                  defaultExpanded={index === 0}
                  disableGutters
                  elevation={0}
                  className="overflow-hidden rounded-2xl border border-[#bfdbfe] before:hidden"
                >
                  <AccordionSummary
                    aria-controls={`${term.id}-${ageGroup.id}-content`}
                    id={`${term.id}-${ageGroup.id}-header`}
                    expandIcon={<span aria-hidden="true" className="text-[#1e3a8a]">⌄</span>}
                    className="bg-white px-4 py-2 sm:px-6"
                  >
                    <div>
                      <Typography component="h3" variant="h6" className="font-bold text-[#1e3a8a]">
                        {ageGroup.name}
                        <span className="ml-2 text-sm font-normal text-[#475569]">
                          {ageGroup.ages}
                        </span>
                      </Typography>
                      <Typography component="p" variant="body2" className="mt-1 text-[#475569]">
                        {ageGroup.theme}
                      </Typography>
                    </div>
                  </AccordionSummary>
                  <AccordionDetails
                    id={`${term.id}-${ageGroup.id}-content`}
                    className="bg-[#f8fafc] px-3 pb-5 pt-2 sm:px-5 sm:pb-6 md:px-6"
                  >
                    <ol className="grid list-none gap-4 p-0 md:grid-cols-2">
                      {ageGroup.lessons.map((lesson) => (
                        <li key={lesson.week}>
                          <Paper
                            component="article"
                            elevation={0}
                            className="h-full rounded-2xl border border-[#e2e8f0] bg-white p-4 sm:p-5"
                          >
                            <div className="mb-4 flex items-start gap-3">
                              <span className="grid size-9 shrink-0 place-items-center rounded-full bg-[#dbeafe] text-sm font-bold text-[#1e3a8a]">
                                {lesson.week}
                              </span>
                              <Typography
                                component="h4"
                                variant="subtitle1"
                                className="font-bold leading-snug text-[#1e3a8a]"
                              >
                                {lesson.title}
                              </Typography>
                            </div>
                            <dl className="space-y-3">
                              {lesson.details.map((detail) => (
                                <div key={detail.label}>
                                  <dt className="text-xs font-bold uppercase tracking-wide text-[#64748b]">
                                    {detail.label}
                                  </dt>
                                  <dd className="mt-1 text-sm leading-relaxed text-[#334155]">
                                    {detail.value}
                                  </dd>
                                </div>
                              ))}
                            </dl>
                          </Paper>
                        </li>
                      ))}
                    </ol>
                  </AccordionDetails>
                </Accordion>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  )
}

export default Curriculum
