import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const experiences = [
  {
    period: "Mar 2025 — Present",
    title: "Claims Handler",
    company: "Direct Line Group",
    location: "Liverpool, U.K.",
    companyUrl: "https://www.directlinegroup.co.uk/",
    description:
      "Analyse, validate, and cross-check claim data, customer documentation, and policy information across multiple internal systems. Interpret structured data (policy records, claim histories) and unstructured data (customer statements, incident descriptions) to identify inconsistencies and risk indicators. Collaborate with underwriting, fraud, and compliance teams to resolve complex claims while meeting strict SLAs.",
    technologies: ["Data Analysis", "Risk Assessment", "Cross-functional Collaboration", "SLA Management"],
    highlights: ["Data Quality Assurance", "Regulatory Compliance"],
  },
  {
    period: "Oct 2024 — Mar 2025",
    title: "Strategic Analyst",
    company: "Smart Analytics Solutions",
    location: "Remote - Gurugram, India",
    companyUrl: "#",
    description:
      "Collaborated with retail clients to analyse shopping behaviours and purchasing patterns using SQL, Pandas, and Matplotlib. Built executive-level reports integrating multi-source customer data with clustering techniques and regression analysis, driving an 8% increase in conversion rates. Designed scalable ETL pipelines using Databricks and Azure Data Factory, reducing data processing time by 30%.",
    technologies: ["Python", "SQL", "Databricks", "Azure Data Factory", "Power BI", "Tableau", "Alteryx"],
    highlights: ["8% Conversion Increase", "30% Faster Processing", "ETL Pipeline Design"],
  },
  {
    period: "Jun 2024 — Sep 2024",
    title: "Intern Data Scientist",
    company: "Royal College of Nursing (NHS)",
    location: "Manchester, U.K.",
    companyUrl: "https://www.rcn.org.uk/",
    description:
      "Developed a cost-of-living predictive model analysing over 500,000 member records using Python (Pandas, NumPy, scikit-learn). Leveraged Azure Data Factory to automate integration of ONS and NOMIS datasets, reducing manual intervention by 30%. Automated Python scripting for data processing and report generation, improving efficiency by over 35%.",
    technologies: ["Python", "Pandas", "NumPy", "scikit-learn", "Azure Data Factory", "Matplotlib", "Seaborn"],
    highlights: ["500K+ Records Analysed", "35% Efficiency Gain", "30% Less Manual Work"],
  },
  {
    period: "Apr 2019 — Jun 2023",
    title: "Senior Analyst",
    company: "Innovation Technology by Design",
    location: "Chandigarh, India",
    companyUrl: "#",
    description:
      "Delivered bespoke analytics solutions for clients across Retail, Finance, Health, and FMCG sectors. Applied ML models including time-series analysis and regression for demand forecasting and customer behaviour prediction. Conducted sales analysis across multi-regional datasets, increasing regional sales by 15%. Applied NLP using NLTK and spaCy for sentiment analysis on customer feedback. Automated ETL workflows using Python and SSIS, reducing analysis time by 25%.",
    technologies: ["Python", "SQL", "R", "Power BI", "Tableau", "NLTK", "spaCy", "SSIS"],
    highlights: ["Q4 Superstar Award", "15% Sales Increase", "25% Faster Analysis"],
  },
]

const education = {
  period: "Sep 2023 — Sep 2024",
  degree: "Master of Science in Data Science",
  school: "University of Salford",
  location: "Manchester, U.K.",
  grade: "Merit",
  modules: ["Machine Learning & Data Mining", "Advanced Databases", "Applied Statistics & Data Visualisation", "Big Data Technologies"],
}

export function Experience() {
  return (
    <section
      id="experience"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Work experience"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">
          Experience
        </h2>
      </div>

      <div>
        <ol className="group/list">
          {experiences.map((exp, index) => (
            <li key={index} className="mb-12">
              <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-card lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />

                <header
                  className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground sm:col-span-2"
                  aria-label={exp.period}
                >
                  {exp.period}
                </header>

                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-foreground">
                    <div>
                      <Link
                        href={exp.companyUrl}
                        className="inline-flex items-baseline font-medium leading-tight text-foreground hover:text-primary focus-visible:text-primary group/link"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${exp.title} at ${exp.company}`}
                      >
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                        <span>
                          {exp.title} ·{" "}
                          <span className="inline-block">
                            {exp.company}
                            <ArrowUpRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1" />
                          </span>
                        </span>
                      </Link>
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      {exp.location}
                    </div>
                  </h3>

                  <p className="mt-2 text-sm leading-normal text-muted-foreground">
                    {exp.description}
                  </p>

                  {exp.highlights && (
                    <ul className="mt-3 flex flex-wrap gap-2" aria-label="Key achievements">
                      {exp.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                        >
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  )}

                  <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                    {exp.technologies.map((tech) => (
                      <li key={tech} className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-secondary px-3 py-1 text-xs font-medium leading-5 text-secondary-foreground">
                          {tech}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ol>

        {/* Education */}
        <div className="mt-16">
          <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-8">
            Education
          </h3>
          <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4">
            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-card lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />

            <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground sm:col-span-2">
              {education.period}
            </header>

            <div className="z-10 sm:col-span-6">
              <h4 className="font-medium text-foreground">{education.degree}</h4>
              <p className="text-sm text-primary">{education.school}</p>
              <p className="text-xs text-muted-foreground mt-1">
                {education.location} · Grade: {education.grade}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {education.modules.map((module) => (
                  <span
                    key={module}
                    className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                  >
                    {module}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <Link
            href="/resume.pdf"
            className="inline-flex items-center font-medium leading-tight text-foreground group"
          >
            <span className="border-b border-transparent pb-px transition group-hover:border-primary">
              View Full Resume
            </span>
            <ArrowUpRight className="ml-1 inline-block h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}
