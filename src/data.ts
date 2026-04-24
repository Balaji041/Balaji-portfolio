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
      company: "Headrun Technologies Pvt Ltd",
      role: "Data Analyst",
      period: "Oct 2025 – Present",
      location: "Bangalore",
      highlights: [
        "Designed and developed end-to-end interactive dashboards in Power BI and Metabase to track supply chain operations, inventory performance, and business KPIs.",
        "Built dashboards for multiple operational modules including PO, ASN, GRN, Putaway, Sales, Picklist, Products, Catalog, Inventory, Marketing, and Pricing, enabling real-time visibility for operations and management teams.",
        "Performed extensive data cleaning, validation, and transformation using SQL and Python to ensure data accuracy across multiple systems including OMS, CMS (Catalog Management System), and reporting databases.",
        "Played a key role in stabilizing the CMS (Catalog Management System) by identifying data inconsistencies such as incorrect EAN, GST mismatches (IGST for same-state orders), and catalog-level data issues, and implementing validation logic to reduce recurring errors.",
        "Wrote highly optimized SQL queries for data extraction, transformation, aggregation, and reporting across SQL Server, PostgreSQL, and ClickHouse databases.",
        "Automated recurring data workflows using Python and Playwright, including scheduled data synchronization tasks such as pushing data from SQL/PostgreSQL systems to ClickHouse for faster analytical reporting.",
        "Developed n8n automation workflows to generate automated alerts from Metabase and Power BI dashboards for business-critical scenarios such as WAC deviation, incorrect EAN detection, IGST mismatches, and data validation failures.",
        "Automated recurring reports and manual operational tasks, significantly reducing reporting effort and improving data reliability across teams.",
        "Analyzed large datasets to monitor inventory movement, order lifecycle, pricing performance, and sales trends, providing actionable insights to improve operational efficiency.",
        "Worked closely with cross-functional teams including operations, catalog, pricing, and technology teams to deliver data-driven solutions and improve overall business decision-making."
      ],
    },

    {
      company: "Mahindra Holidays Resorts India Ltd",
      role: "Application Support Engineer",
      period: "Jul 2024 – Sep 2025",
      location: "Chennai",
      highlights: [
        "Provided L2 application support by troubleshooting and resolving production issues related to bookings, payments, and customer point management, ensuring minimal business disruption.",
        "Acted as a bridge between business and technical teams, handling real-time queries related to night audit issues, payment failures, and customer account discrepancies.",
        "Managed and resolved ticketing system requests including data modifications, payment issue resolution, realignment requests, product upgrades/downgrades, and profile configurations.",
        "Handled critical operational scenarios such as customer point balance validation, booking confirmations, and check-in/check-out discrepancies to ensure accurate system transactions.",
        "Developed and maintained SSRS reports including Holiday Utilization Summary (HUS), Confirmation Voucher (CV), Annual Subscription Fee (ASF), and customer points balance reports for business tracking.",
        "Created parameterized and drill-down reports to provide detailed insights into customer usage, subscription status, and revenue-related metrics.",
        "Wrote optimized SQL queries and stored procedures for backend data validation, issue debugging, and report generation.",
        "Performed data validation and correction activities to maintain data integrity across systems, especially in cases of payment mismatches and booking inconsistencies.",
        "Followed structured daily operational checklists including monitoring check-in/check-out activities, validating IVR logs, auditing complimentary and bonus points allocation, and ensuring accuracy of customer point balances to maintain system reliability."
      ],
    },

    {
      company: "Just Bake Pvt Ltd",
      role: "Logistics Analyst",
      period: "Jul 2019 – Jun 2020",
      location: "India",
      highlights: [
        "Planned and optimized daily delivery routes to ensure timely and efficient distribution of products to retail stores.",
        "Coordinated vehicle allocation and route mapping to minimize travel time and reduce operational costs.",
        "Monitored delivery schedules and ensured smooth execution of logistics operations.",
        "Extracted and analyzed daily data from the database to support decision-making and operational tracking.",
        "Shared accurate data reports with the confectionery team to assist in production planning and inventory management.",
        "Maintained records of shipments, deliveries, and logistics performance metrics.",
        "Identified process improvements to enhance delivery efficiency and reduce delays.",
        "Coordinated with warehouse and store teams to ensure proper stock movement and availability.",
        "Handled issue resolution related to delivery delays, route changes, or vehicle availability.",
        "Assisted in tracking KPIs such as delivery timelines, route efficiency, and cost optimization."
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
        "Assisted in designing user-friendly UI components and improving website performance and usability.",
        "Collaborated with the team to implement client requirements and deliver functional web solutions within timelines."
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
    tools: [
      "Power BI",
      "Metabase",
      "SSRS",
      "Excel",
      "Power Query",
      "n8n",
      "Playwright",
      "ClickHouse",
      "PostgreSQL",
      "SQL Server"
    ],
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
