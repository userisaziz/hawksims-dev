import technology from "../../../public/assets/technology.svg";
import integrated from "../../../public/assets/dsc/integrated.svg";
import data from "../../../public/assets/dsc/data.svg";
import social from "../../../public/assets/dsc/social.svg";
import promotional from "../../../public/assets/dsc/promotional.svg";
import finance from "../../../public/assets/dsc/finance.svg";
import market from "../../../public/assets/dsc/market.svg";
import aware from "../../../public/assets/dsc/aware.svg";
import distribution from "../../../public/assets/dsc/distribution.svg";
import patient from "../../../public/assets/dsc/patient.svg";
import CRM from "../../../public/assets/dsc/CRM.svg";
import sales from "../../../public/assets/dsc/sales.svg";

export const dscJson = [
  {
    imgUrl: technology,
    heading: "Technology",
    list: [
      "Data Engineering",
      "Reporting & Business Intelligence",
      "Application Development",
    ],
  },
  {
    imgUrl: data,
    heading: "Data Source Experience",
    list: [
      "Finance and Performance",
      "Customer and Engagement",
      "Other Third Party - Distribution, emails, promotional etc",
    ],
  },
  {
    imgUrl: integrated,
    heading: "Integrated Services",
    list: [
      "Data Governance & Management Solution",
      "Data Strategy & Digital Transformation",
      "Visualisation Services",
    ],
  },
];

export const hoverCardsJson = [
  {
    imageUrl: promotional,
    heading: "Promotional",
    subHeading: "Share of voice & spending",
  },
  {
    imageUrl: distribution,
    heading: "Distribution",
    subHeading: "Sell- in vs. Sell- out & Stocks",
  },
  {
    imageUrl: social,
    heading: "Social Media",
    subHeading: "Twitter, Facebook..",
  },
  {
    imageUrl: market,
    heading: "Market Access",
    subHeading: "Pricing & Formulary",
  },

  {
    imageUrl: patient,
    heading: "Patient Data",
    subHeading: "Longitudinal Patient Data",
  },
  {
    imageUrl: finance,
    heading: "Finance",
    subHeading: "Financial internal data",
  },
  {
    imageUrl: sales,
    heading: "Market Sales",
    subHeading: "Competitors sales national & subnational",
  },
  {
    imageUrl: CRM,
    heading: "CRM & MCE",
    subHeading: "Interaction with customers",
  },
  {
    imageUrl: aware,
    heading: "Awareness & Usage",
    subHeading: "Customer ladder of adoption",
  },
];

export const dataSourceJson = [
  {
    heading: "Finance and Performance",
    description: `In the realm of sales, finance and performance, we handle ex-factory
sales, spending, forecasts, market sales, and patient data. This allows us
to provide detailed analyses of market performance, brand performance
and the competitive context, unlocking insights that can help you optimize
your brand strategies and improve overall performance.`,
    imageUrl: "/assets/dsc/datasource.svg",
  },
  {
    heading: "Customer and Engagement",
    description: `Our wide expertise in customer engagement data spans customer
targeting, roster and territory management, account management, calls,
field sales interactions and omnichannel interactions. By leveraging this
data, we help you enhance customer relationships, streamline operations,
and boost sales force and omnichannel effectiveness.`,
    imageUrl: "/assets/dsc/dataeng.svg",
  },
  {
    heading: "Other Third-Party Data",
    description: `We manage third-party data sources such as distribution and promotional activities, ATU and market research, emails, and website interactions.
     This holistic approach ensures that you have a 360-degree view of your business environment, enabling you to make well-informed decisions. Our team of data architects
     , developers, and analysts use cutting-edge technologies and tools to transform raw data into actionable intelligence. With Solutionec, you can trust that your data is in
      expert hands, and that we will provide you with the insights needed to stay ahead in a competitive market. Explore how our data source experience can elevate your business
       to new heights.`,
    imageUrl: "/assets/dsc/datasource.svg",
  },
];
