import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    title: "Cost-of-Living Predictive Model (NHS)",
    description:
      "Developed a robust predictive model analysing over 500,000 member records for the Royal College of Nursing. Used Python, Pandas, NumPy, and scikit-learn for feature engineering and model development. Identified regional disparities and forecasted inflationary trends to enable equitable resource allocation.",
    technologies: ["Python", "scikit-learn", "Pandas", "NumPy", "Azure Data Factory", "Matplotlib"],
    link: "https://github.com/aswami27",
    impact: "500K+ Records | 35% Efficiency Gain",
    image: "/aswami/images/project-nhs.jpg",
  },
  {
    title: "Retail Customer Behaviour Analytics",
    description:
      "Built executive-level reports integrating multi-source customer data including transactional records, web session metrics, and loyalty program data. Applied clustering techniques (k-means) and regression analysis to segment customers and forecast conversion probabilities, driving an 8% increase in conversion rates.",
    technologies: ["Python", "SQL", "Pandas", "Power BI", "Tableau", "Databricks"],
    link: "https://github.com/aswami27",
    impact: "8% Conversion Increase",
    image: "/aswami/images/project-retail.jpg",
  },
  {
    title: "Scalable ETL Pipeline Architecture",
    description:
      "Designed and implemented scalable ETL pipelines using Databricks and Azure Data Factory, integrating structured and unstructured data from diverse sources. The optimised pipelines reduced data processing time by 30% and facilitated real-time insights through predictive analytics and dynamic dashboards.",
    technologies: ["Azure Data Factory", "Databricks", "Python", "Alteryx", "Power BI"],
    link: "https://github.com/aswami27",
    impact: "30% Faster Processing",
    image: "/aswami/images/project-etl.jpg",
  },
  {
    title: "Customer Sentiment Analysis (NLP)",
    description:
      "Applied Natural Language Processing using NLTK and spaCy to perform sentiment analysis on customer feedback across retail and FMCG sectors. Revealed key pain points that informed product improvements and enhanced customer satisfaction metrics for multiple clients.",
    technologies: ["Python", "NLTK", "spaCy", "SQL", "Power BI", "Tableau"],
    link: "https://github.com/aswami27",
    impact: "Multi-sector Implementation",
    image: "/aswami/images/project-nlp.jpg",
  },
]

export function Projects() {
  return (
    <section
      id="projects"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Selected projects"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">
          Projects
        </h2>
      </div>

      <div>
        <ul className="group/list">
          {projects.map((project, index) => (
            <li key={index} className="mb-12">
              <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-card lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />

                <div className="z-10 sm:order-2 sm:col-span-6">
                  <h3>
                    <Link
                      href={project.link}
                      className="inline-flex items-baseline font-medium leading-tight text-foreground hover:text-primary focus-visible:text-primary group/link"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} (opens in new tab)`}
                    >
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                      <span>
                        {project.title}
                        <ArrowUpRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1" />
                      </span>
                    </Link>
                  </h3>

                  {project.impact && (
                    <p className="mt-1 text-sm font-medium text-primary">
                      {project.impact}
                    </p>
                  )}

                  <p className="mt-2 text-sm leading-normal text-muted-foreground">
                    {project.description}
                  </p>

                  <ul
                    className="mt-2 flex flex-wrap"
                    aria-label="Technologies used"
                  >
                    {project.technologies.map((tech) => (
                      <li key={tech} className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-secondary px-3 py-1 text-xs font-medium leading-5 text-secondary-foreground">
                          {tech}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="z-10 sm:order-1 sm:col-span-2 sm:translate-y-1">
                  <div className="relative aspect-video overflow-hidden rounded border border-border bg-card">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={`${project.title} preview`}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, 200px"
                    />
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-12">
          <Link
            href="https://github.com/aswami27"
            className="inline-flex items-center font-medium leading-tight text-foreground group"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="border-b border-transparent pb-px transition group-hover:border-primary">
              View All Projects on GitHub
            </span>
            <ArrowUpRight className="ml-1 inline-block h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}
