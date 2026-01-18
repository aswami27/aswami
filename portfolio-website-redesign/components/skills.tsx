"use client"

import {
  Code2,
  Brain,
  Database,
  BarChart3,
  Cloud,
  Award,
  Briefcase,
} from "lucide-react"

const skillCategories = [
  {
    name: "Programming Languages",
    icon: Code2,
    skills: ["Python", "R", "SQL", "Shell Scripting"],
  },
  {
    name: "Machine Learning & AI",
    icon: Brain,
    skills: [
      "scikit-learn",
      "Pandas",
      "NumPy",
      "NLTK",
      "spaCy",
      "MLlib",
      "Time Series Analysis",
    ],
  },
  {
    name: "Big Data & Cloud",
    icon: Cloud,
    skills: ["Azure Data Factory", "Databricks", "Azure Machine Learning", "Apache Spark", "Apache Hadoop"],
  },
  {
    name: "Databases",
    icon: Database,
    skills: [
      "Relational Databases",
      "NoSQL",
      "Database Migrations",
      "Database Replication",
      "SSIS",
    ],
  },
  {
    name: "Visualization & BI",
    icon: BarChart3,
    skills: [
      "Power BI",
      "Tableau",
      "Matplotlib",
      "Seaborn",
      "Alteryx",
      "Microsoft Excel",
    ],
  },
]

const certifications = [
  {
    name: "Azure Fundamentals",
    issuer: "Microsoft",
    year: "Jan 2025",
    badge: "AZ-900",
  },
  {
    name: "Power BI",
    issuer: "A-Leap",
    year: "Oct 2024",
    badge: "Certified",
  },
  {
    name: "Machine Learning",
    issuer: "Coursera - Andrew Ng",
    year: "Dec 2022",
    badge: "Stanford",
  },
  {
    name: "Azure Data Engineer",
    issuer: "Microsoft",
    year: "In Progress",
    badge: "DP-203",
  },
]

const domains = [
  { name: "Retail Analytics", years: "4+" },
  { name: "Financial Services", years: "3+" },
  { name: "Healthcare / NHS", years: "1+" },
  { name: "FMCG", years: "2+" },
]

const competencies = [
  "Data Cleaning & Analytics",
  "ETL Pipeline Development",
  "ELT Processes",
  "Exploratory Data Analysis",
  "Statistical Analysis",
  "Data Visualisation",
  "Customer Segmentation",
  "Demand Forecasting",
  "Sentiment Analysis",
  "Predictive Modelling",
]

export function Skills() {
  return (
    <section
      id="skills"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Skills and certifications"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">
          Skills
        </h2>
      </div>

      <div className="space-y-12">
        {/* Technical Skills Grid */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-6">
            Technical Stack
          </h3>

          <div className="grid gap-4 sm:grid-cols-2">
            {skillCategories.map((category) => {
              const Icon = category.icon
              return (
                <div
                  key={category.name}
                  className="group rounded-lg border border-border bg-card p-5 transition-all hover:border-primary/50 hover:bg-card/80"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h4 className="font-medium text-foreground">
                      {category.name}
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center rounded-md bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground transition-colors hover:bg-primary/20 hover:text-primary"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Competencies */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-6">
            Core Competencies
          </h3>
          <div className="flex flex-wrap gap-2">
            {competencies.map((item) => (
              <span
                key={item}
                className="inline-flex items-center rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-6 flex items-center gap-2">
            <Award className="h-4 w-4" />
            Certifications
          </h3>

          <div className="grid gap-4 sm:grid-cols-2">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="group relative rounded-lg border border-border bg-card p-4 transition-all hover:border-primary/50"
              >
                <div className="absolute top-3 right-3">
                  <span className="inline-flex items-center rounded bg-primary/10 px-2 py-0.5 text-xs font-mono text-primary">
                    {cert.badge}
                  </span>
                </div>
                <h4 className="font-medium text-foreground pr-16 leading-tight">
                  {cert.name}
                </h4>
                <p className="mt-2 text-sm text-muted-foreground">
                  {cert.issuer}
                </p>
                <p className="text-xs text-muted-foreground mt-1">{cert.year}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Domain Expertise */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-6 flex items-center gap-2">
            <Briefcase className="h-4 w-4" />
            Domain Expertise
          </h3>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {domains.map((domain) => (
              <div
                key={domain.name}
                className="rounded-lg border border-border bg-card p-4 text-center transition-all hover:border-primary/50"
              >
                <p className="text-2xl font-bold text-primary">{domain.years}</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {domain.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
