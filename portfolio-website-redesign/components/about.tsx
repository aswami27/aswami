export function About() {
  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="About me"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">
          About
        </h2>
      </div>

      <div className="space-y-4 text-muted-foreground">
        <p>
          I&apos;m a{" "}
          <span className="text-foreground font-medium">Microsoft Azure certified</span>{" "}
          data professional with a robust foundation in{" "}
          <span className="text-foreground font-medium">data analytics and machine learning</span>, 
          backed by a Master&apos;s degree in Data Science from the University of Salford. 
          My experience spans{" "}
          <span className="text-foreground font-medium">various domains including Insurance, Healthcare, Retail, and Finance</span>, 
          where I&apos;ve consistently delivered data-driven solutions that create measurable business impact.
        </p>

        <p>
          As a Senior Analyst at Innovation Technology by Design, I earned the{" "}
          <span className="text-primary font-medium">Q4 Superstar Award</span> for spearheading 
          analytics solutions that enhanced client sales performance and optimised resource allocation, 
          achieving a{" "}
          <span className="text-primary font-medium">15% boost in operational efficiency</span>. 
          My work has involved building ML models for demand forecasting, customer segmentation, 
          and sentiment analysis across multi-regional datasets.
        </p>

        <p>
          I&apos;m proficient in{" "}
          <span className="text-foreground font-medium">Python, SQL, R, and Azure cloud platforms</span>, 
          with hands-on experience in building scalable ETL pipelines using Databricks and Azure Data Factory. 
          I&apos;ve reduced data processing time by{" "}
          <span className="text-primary font-medium">30%</span> through pipeline optimisation and 
          automated workflows using Alteryx, enabling real-time insights through Power BI and Tableau dashboards.
        </p>

        <p>
          Currently deepening my technical expertise through certifications in Azure Data Engineering, 
          I&apos;m passionate about contributing innovative and scalable solutions to organisations 
          looking to leverage data as a strategic asset.
        </p>
      </div>
    </section>
  )
}
