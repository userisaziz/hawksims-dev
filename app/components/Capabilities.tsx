import Image from "next/image";
import Link from "next/link";
import Highlighter from "./HighLighter";

const services = [
  {
    title: "Computational Modeling",
    description:
      "Develop sophisticated mathematical models and simulations for complex systems, from molecular dynamics to climate modeling.",
  },
  {
    title: "AI & Machine Learning",
    description:
      "Implement cutting-edge ML algorithms for pattern recognition, predictive analytics, and automated discovery in scientific data.",
  },
  {
    title: "Data Analysis & Visualization",
    description:
      "Transform complex datasets into actionable insights with advanced statistical analysis and interactive visualizations.",
  },
  {
    title: "Research Consulting",
    description:
      "Expert guidance on experimental design, methodology selection, and computational approach optimization for your research goals.",
  },
  {
    title: "High-Performance Computing",
    description:
      "Optimize algorithms and leverage parallel computing resources to accelerate computationally intensive research tasks.",
  },
  {
    title: "Custom Software Development",
    description:
      "Build specialized research tools and applications tailored to your specific scientific workflow and requirements.",
  },
];

const iconPaths = [
  "/images/features/big-icon.svg",
  "/images/features/icon-05.svg",
  "/images/features/icon-07.svg",
  "/images/features/icon-06.svg",
  "/images/features/icon-04.svg",
  "/images/features/icon-03.svg",
];

const Capabilities = () => {
  return (
    <section className="pt-12.5">
      <div className="mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0">
        <div className="grid gap-7.5 sm:grid-cols-12">
          {services.map((service, index) => (
            <div
              key={index}
              className={`sm:col-span-${
                index === 0 ? "12" : index % 2 === 0 ? "5" : "7"
              }`}
            >
              <Highlighter>
                <div className="features-box-border relative rounded-3xl">
                  <div
                    className={`${
                      index === 0
                        ? "box-hover relative overflow-hidden rounded-3xl p-10 xl:p-15"
                        : "box-hover box-hover-small relative overflow-hidden rounded-3xl px-11 pb-14 pt-12.5"
                    }`}
                  >
                    <div className="relative z-20 flex items-start justify-between gap-6">
                      <div className="w-full max-w-[477px]">
                        {index === 0 && (
                          <span className="hero-subtitle-gradient relative mb-4 inline-flex items-center gap-2 rounded-full px-4.5 py-2 text-sm font-medium">
                            <Image
                              src="/images/hero/icon-title.svg"
                              alt="icon"
                              width={16}
                              height={16}
                            />
                            <span className="hero-subtitle-text">
                              Build Stronger Relationships
                            </span>
                          </span>
                        )}
                        <h3 className="mb-4.5 text-heading-4 font-bold text-white">
                          {service.title}
                        </h3>
                        <p className="mb-10 font-medium">
                          {service.description}
                        </p>
                        {index === 0 && (
                          <Link
                            href="/escrow"
                            className="features-button-gradient relative inline-flex items-center gap-1.5 rounded-full px-6 py-3 text-sm text-white duration-300 ease-in hover:shadow-button"
                          >
                            Learn more
                            <svg
                              width="14"
                              height="12"
                              viewBox="0 0 14 12"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M13.3992 5.60002L8.22422 0.350024C7.99922 0.125024 7.64922 0.125024 7.42422 0.350024C7.19922 0.575024 7.19922 0.925025 7.42422 1.15002L11.6242 5.42503H0.999219C0.699219 5.42503 0.449219 5.67502 0.449219 5.97502C0.449219 6.27502 0.699219 6.55003 0.999219 6.55003H11.6742L7.42422 10.875C7.19922 11.1 7.19922 11.45 7.42422 11.675C7.52422 11.775 7.67422 11.825 7.82422 11.825C7.97422 11.825 8.12422 11.775 8.22422 11.65L13.3992 6.40002C13.6242 6.17502 13.6242 5.82502 13.3992 5.60002Z"
                                fill="white"
                              />
                            </svg>
                          </Link>
                        )}
                      </div>
                      {index === 0 ? (
                        <div className="relative hidden aspect-square w-full max-w-[428px] sm:block">
                          <Image src={iconPaths[index]} alt="icon" fill />
                        </div>
                      ) : (
                        <span className="icon-border relative mx-auto mb-13.5 inline-flex h-20 w-full max-w-[80px] items-center justify-center rounded-full">
                          <Image
                            src={iconPaths[index]}
                            alt="icon"
                            width={32}
                            height={32}
                          />
                        </span>
                      )}
                    </div>

                    {/* Background shape placeholders (can be customized per box if needed) */}
                    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
                      <span className="absolute bottom-0 left-0 h-full w-full bg-[url(/images/blur/blur-06.svg)] bg-cover bg-center bg-no-repeat" />
                    </div>
                  </div>
                </div>
              </Highlighter>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
