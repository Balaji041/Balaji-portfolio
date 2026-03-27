import type { Resume } from "./types";

export const resume: Resume = {
  profile: {
    name: "Balaji Penugonda",
    title: "Data Analyst",
    location: "Tirupathi, India",
    email: "balajipenugonda41@gmail.com",
    phone: "+91-8610235694",
    linkedin: "https://linkedin.com/in/balajipenugonda",
    github: "https://github.com/balajipenugonda",
    summary:
      "Data Analyst with hands-on experience in data cleaning, analysis, and visualization. Skilled in SQL, Python, Excel, Metabase, and Power BI. Passionate about transforming data into actionable insights to support business decisions.",
  },
  experience: [
    {
      company: "Rozana Rural Commerce Pvt Ltd",
      role: "Data Analyst",
      period: "Oct 2025 – Present",
      location: "Bangalore",
      highlights: [
        "Designed and developed end-to-end interactive dashboards in Power BI and Metabase to track supply chain operations, inventory performance, and business KPIs.",
        "Built dashboards for multiple operational modules including PO, ASN, GRN, Putaway, Sales, Picklist, Products, Catalog, Inventory, Marketing, and Pricing.",
        "Performed extensive data cleaning, validation, and transformation using SQL and Python to ensure data accuracy across OMS, CMS, and reporting databases.",
        "Played a key role in stabilizing the CMS by identifying data inconsistencies such as incorrect EAN, GST mismatches, and implementing validation logic to reduce recurring errors.",
        "Wrote highly optimized SQL queries for data extraction, transformation, aggregation, and reporting across SQL Server, PostgreSQL, and ClickHouse databases.",
        "Automated recurring data workflows using Python and Playwright, including scheduled data synchronization tasks pushing data to ClickHouse for faster analytical reporting.",
        "Developed n8n automation workflows to generate automated alerts for WAC deviation, incorrect EAN detection, IGST mismatches, and data validation failures.",
      ],
    },
    {
      company: "Mahindra Holidays Resorts India Ltd",
      role: "Application Support Engineer",
      period: "Jul 2024 – Sep 2025",
      location: "Chennai",
      highlights: [
        "Provided L2 application support by troubleshooting and resolving production issues related to bookings, payments, and customer point management.",
        "Acted as a bridge between business and technical teams, handling real-time queries related to night audit issues, payment failures, and account discrepancies.",
        "Developed and maintained SSRS reports including Holiday Utilization Summary, Confirmation Voucher, Annual Subscription Fee, and customer points balance reports.",
        "Wrote optimized SQL queries and stored procedures for backend data validation, issue debugging, and report generation.",
        "Performed data validation and correction activities to maintain data integrity, especially in cases of payment mismatches and booking inconsistencies.",
      ],
    },
    {
      company: "Young Innovation IT Solutions Pvt Ltd",
      role: "Web Development Intern",
      period: "Nov 2018 – Apr 2019",
      location: "Tirupathi",
      highlights: [
        "Designed and developed responsive static websites using HTML, CSS, and Bootstrap, ensuring cross-browser compatibility and mobile responsiveness.",
        "Built and customized websites using WordPress, including theme configuration, plugin integration, and content management.",
        "Worked with WooCommerce to develop and manage e-commerce functionalities such as product listings, cart, and checkout workflows.",
      ],
    },
  ],
  education: [
    {
      degree: "B.Tech in Computer Science and Systems Engineering",
      school: "Sree Vidyanikethan Engineering College",
      location: "Tirupathi",
      period: "Nov 2020 – May 2023",
      detail: "CGPA: 8.6 / 10",
    },
  ],
  skills: {
    languages: ["SQL", "Python"],
    web: ["HTML", "CSS", "Bootstrap", "WordPress", "WooCommerce"],
    tools: ["Power BI", "Metabase", "SSRS", "Excel", "Power Query", "N8n", "Playwright", "ClickHouse", "PostgreSQL", "SQL Server"],
  },
  certifications: [
    "Responsive Website Development – Nxtwave",
    "Data Analytics using Power BI – Nxtwave",
    "Static Website Development – Nxtwave",
    "Python Programming – Nxtwave",
    "CCNA Routing & Switching – Cisco",
    "Git & GitHub – APSSDC",
  ],
};
