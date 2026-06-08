import { Skill, Project, Dashboard, Certification } from './types';

export const PERSONAL_INFO = {
  name: 'Debraj Adhikary',
  title: 'Aspiring Data Analyst',
  location: 'Howrah, West Bengal, India',
  tagline: 'Curious and Data-Driven Aspiring Analyst Skilled in Python, R, SQL, and Power BI. Focused on Turning Raw Datasets into Meaningful Insights.',
  email: 'dip.adhikary.357@gmail.com',
  github: 'https://github.com/DebrajAdhikary5',
  linkedin: 'https://www.linkedin.com/in/debrajadhikary5/',
  resumeDownloadUrl: '#',
  about: {
    intro: 'Hi! I’m Debraj Adhikary, a curious and data-driven Aspiring Analyst skilled in Python, R, SQL, and Power BI. I focus on turning raw datasets into structured, meaningful, and actionable business insights.',
    journey: 'My analytical journey includes a solid educational foundation with a Bachelor of Business Administration (Honors) from Techno Main Salt Lake, where I graduated with an excellent SGPA of 9.2/10. To further hone my quantitative skills, I completed a rigorous Data Science with Machine Learning and Artificial Intelligence program at IVY Professional School, alongside a comprehensive programming sequence at Ramkrishna Mission covering C, C++, Java, Python, and Unix systems. With hands-on experience as an SEO Intern for 7 months at MarketingBeku, I have applied data analytics to optimize rankings and drive high-impact organic traffic.',
    careerObjectives: 'I am eagerly seeking a Data Analyst role to help teams solve critical business problems by constructing relational database queries, modeling trends, and formulating interactive visual BI dashboards.',
    passions: 'I am passionate about data precision, structural tidiness, and storytelling. I enjoy designing optimized SQL queries and coding exploratory statistical models to illuminate clear pathways from raw data to business decisions.',
  }
};

export const SKILLS: Skill[] = [
  // Programming
  { name: 'Python', category: 'Programming', level: 'Advanced', yearsOfExp: '1-2 Yrs', iconName: 'Terminal' },
  { name: 'SQL & MySQL', category: 'Programming', level: 'Advanced', yearsOfExp: '1-2 Yrs', iconName: 'Database' },
  { name: 'R Programming', category: 'Programming', level: 'Intermediate', yearsOfExp: '1 Yr', iconName: 'Code' },
  { name: 'C / C++ & Java', category: 'Programming', level: 'Intermediate', yearsOfExp: '1 Yr', iconName: 'FileCode' },
  
  // Analytics & Visualization
  { name: 'Power BI', category: 'Analytics & Visualization', level: 'Advanced', yearsOfExp: '1-2 Yrs', iconName: 'BarChart2' },
  { name: 'Tableau', category: 'Analytics & Visualization', level: 'Intermediate', yearsOfExp: '1 Yr', iconName: 'PieChart' },
  { name: 'Excel (Advanced)', category: 'Analytics & Visualization', level: 'Advanced', yearsOfExp: '2 Yrs', iconName: 'Table' },
  { name: 'Dashboard Design', category: 'Analytics & Visualization', level: 'Advanced', yearsOfExp: '1-2 Yrs', iconName: 'Layout' },

  // Other Tools
  { name: 'Oracle Data Platform', category: 'Other Tools', level: 'Intermediate', yearsOfExp: 'Oracle Cert', iconName: 'Cloud' },
  { name: 'Pandas & NumPy', category: 'Other Tools', level: 'Advanced', yearsOfExp: '1-2 Yrs', iconName: 'Activity' },
  { name: 'scikit-learn & ML', category: 'Other Tools', level: 'Intermediate', yearsOfExp: '1 Yr', iconName: 'Cpu' },
  { name: 'GitHub & Git', category: 'Other Tools', level: 'Intermediate', yearsOfExp: '1-2 Yrs', iconName: 'Github' },
];

export const PROJECTS: Project[] = [
  {
    id: 'naukri-job-market',
    title: 'Naukri.com Job Market Analysis',
    subtitle: 'Python Job Market EDA',
    description: 'Cleaned and transformed job listing data using Python (Pandas, NumPy). Extracted structured salary and experience information from text blocks, created parsed average pay/experience features, and visualized job location patterns.',
    tools: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
    keyInsights: [
      'Successfully cleaned and parsed messy listing details inside Naukri.com dataset using regular expressions and advanced data transformations.',
      'Extracted structured ranges to create new calculated metrics: average pay benchmarks and required experience clusters.',
      'Insight: Discovered that metro cities offered higher average pay ranges and required broader experience levels compared to smaller cities.'
    ],
    githubUrl: 'https://github.com/DebrajAdhikary5/naukri_com_job_analysis',
    imageSrc: 'https://picsum.photos/seed/naukri/600/400',
    featured: true,
  },
  {
    id: 'russian-tweets',
    title: 'Russian Tweets & US Election Interaction',
    subtitle: 'Political Engagement Analysis',
    description: 'Performed extensive exploratory data analysis (EDA) on Russian tweets related to the 2016 US election using Python, focusing on spike detection and time patterns.',
    tools: ['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'Jupyter'],
    keyInsights: [
      'Visualized enormous tweet logs across timeline series, isolating frequencies and hourly activity cycles.',
      'Detected specific clusters representing coordinated troll operations mimicking typical domestic accounts.',
      'Insight: Discovered a highly significant increase in politically motivated tweet activity immediately before and during the election week.'
    ],
    githubUrl: 'https://github.com/DebrajAdhikary5/Russian_Tweets',
    imageSrc: 'https://picsum.photos/seed/tweets/600/400',
    featured: true,
  },
  {
    id: 'tesla-stock',
    title: 'Tesla Stock Price Prediction',
    subtitle: 'Machine Learning Forecasting',
    description: 'Built a Random Forest Regressor forecasting model to predict Tesla stock prices, preprocessing extensive historical time-series data and evaluating against actual prices.',
    tools: ['Python', 'Scikit-Learn', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
    keyInsights: [
      'Preprocessed and normalized 10+ years of pricing rows to construct custom features like rolling window distributions.',
      'Tested multiple regression algorithms, validating Random Forest as highly adapted for capturing periodic trends.',
      'Insight: The model showed strong performance in capturing short-term trends but had reduced accuracy in long-range forecasting.'
    ],
    githubUrl: 'https://github.com/DebrajAdhikary5/Tesla-Stock-Price-Prediction',
    imageSrc: 'https://picsum.photos/seed/tesla-stock/600/400',
    featured: true,
  },
  {
    id: 'weather-history',
    title: 'Climatic Weather History Analysis',
    subtitle: 'R Climatological Foundations',
    description: 'Analyzed historical weather data using R to identify key driving factors influencing temperature variations. Performed ANOVA, correlation matrices, linear regressions, and decision tree models.',
    tools: ['R', 'ANOVA', 'Linear Regression', 'Decision Trees', 'Seaborn'],
    keyInsights: [
      'Conducted rigorous Analysis of Variance (ANOVA) testing and correlation matrices to isolate strong covariates of heating patterns.',
      'Constructed predictive decision tree diagrams to map meteorology conditions and transition splits.',
      'Insight: Found that humidity and wind speed were strongly correlated with temperature, while visibility had minimal influence.'
    ],
    githubUrl: 'https://github.com/DebrajAdhikary5/Weather_History',
    imageSrc: 'https://picsum.photos/seed/weather-r/600/400',
    featured: false,
  },
  {
    id: 'sql-loyalty-bonus',
    title: 'Gaming Platform Reward and Bonus Analysis',
    subtitle: 'MySQL Database Insights Case Study',
    description: 'Analyzed massive player transaction behavior using PostgreSQL/MySQL to calculate loyalty points from deposits, game completions, and cashouts.',
    tools: ['MySQL', 'CTEs', 'Window Functions', 'GROUP BY', 'RANK', 'CASE', 'COALESCE', 'STR_TO_DATE'],
    keyInsights: [
      'Leveraged advanced database mechanics including recursive self-joins, ranking systems, and date-parsing functions for transactional cleanup.',
      'Calculated player indicators to drive retention strategies and built an active customer cohort map.',
      'Insight: Built an equitable ₹50,000 bonus distribution model—70% based on calculated loyalty points and 30% on active games played, with a baseline boost to motivate all.'
    ],
    githubUrl: 'https://github.com/DebrajAdhikary5/SQL-Loyalty-Points-Project',
    imageSrc: 'https://picsum.photos/seed/sql-loyalty/600/400',
    featured: true,
  }
];

export const POWER_BI_DASHBOARDS: Dashboard[] = [
  {
    id: 'pbi-gaming-kpis',
    title: 'Player Loyalty & Revenue Dashboard',
    platform: 'Power BI',
    description: 'A strategic Power BI dashboard accompanying the online gaming case study. Distributes loyalty point rankings, deposits vs withdrawals metrics, and regional player counts.',
    comingSoon: false,
    imageSrc: 'https://picsum.photos/seed/pbi-gaming/600/400',
    kpis: ['Total Bonus Pool: ₹50,000', 'Top Tier Players: 18%', 'Active Deposit Rate: 84.6%', 'Games Played Mean: 14.5'],
    toolsUsed: ['DAX', 'Power Query', 'Star Schema Modeler', 'Cohort Columns']
  },
  {
    id: 'pbi-market-trends',
    title: 'Naukri.com Enterprise Hiring Monitor',
    platform: 'Power BI',
    description: 'Visual tracking dashboard analyzing parsed employment openings across Indian tech hubs. Tracks median income, average prerequisite years, and geographical sector distributions.',
    comingSoon: false,
    imageSrc: 'https://picsum.photos/seed/pbi-naukri/600/400',
    kpis: ['Tracked Openings: 12.4K', 'Metro Premium Bias: +34%', 'Top Tech Stack: Python', 'Avg Exp Baseline: 3.4 Yrs'],
    toolsUsed: ['DAX', 'Filter Contexts', 'Geospatial Map Layers', 'Column Parameters']
  },
  {
    id: 'pbi-climate-soon',
    title: 'European Crop yield Predictive Monitor',
    platform: 'Power BI',
    description: 'Forecasting model visualizing agrarian moisture index predictions and land temperatures across Central Europe.',
    comingSoon: true,
    imageSrc: 'https://picsum.photos/seed/pbi-soon1/600/400',
    toolsUsed: ['What-If Analysis', 'Forecasting Matrix', 'Analytical Hierarchies']
  }
];

export const TABLEAU_DASHBOARDS: Dashboard[] = [
  {
    id: 'tab-weather-spatial',
    title: 'Hungary Climatological Spatial Model',
    platform: 'Tableau',
    description: 'Geospatial heat mapping tool correlating humidity variables, altitude anomalies, and average seasonal temperature spikes across Hungary stations.',
    comingSoon: false,
    imageSrc: 'https://picsum.photos/seed/tab-clim/600/400',
    kpis: ['Stations Sampled: 45', 'R² Correlation: 0.81', 'Summer Mean elevation: +1.2°C'],
    toolsUsed: ['Geospatial Layers', 'LOD Expressions', 'Trend Lines', 'Dual-Axis Charts']
  },
  {
    id: 'tab-stock-predictive',
    title: 'Tesla Financial Volatility Analyzer',
    platform: 'Tableau',
    description: 'A professional Tableau dashboard graphing historical vs predicted TSLA volumes, absolute prediction errors, and rolling moving averages.',
    comingSoon: false,
    imageSrc: 'https://picsum.photos/seed/tab-tsla/600/400',
    kpis: ['Data Points: 2.5K+', 'Random Forest Accuracy: 88.2%', 'Rolling Average Window: 30D'],
    toolsUsed: ['LOD Expressions', 'Trendline Integrations', 'Interactive Storypoints']
  },
  {
    id: 'tab-soon-retail',
    title: 'SEO Performance & organic Growth Dashboard',
    platform: 'Tableau',
    description: 'Predictive modeling analytics tracking user acquisition, click-through rates (CTR) and rank transitions inspired by SEO intern experiences.',
    comingSoon: true,
    imageSrc: 'https://picsum.photos/seed/tab-soon1/600/400',
    toolsUsed: ['SEO APIs Integration', 'Cohort Analysis', 'Dynamic CTR Filters']
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'cert-oracle',
    name: 'Oracle Data Platform 2025 Certified Foundations Associate',
    organization: 'Oracle',
    issueDate: '2025 (Valid Oct 2027)',
    credentialUrl: 'https://education.oracle.com/',
    previewUrl: '#',
    isUpcoming: false,
    imageSrc: 'https://picsum.photos/seed/oracle-cert/600/400'
  },
  {
    id: 'cert-deloitte',
    name: 'Deloitte Data Analytics Job Simulation Certificate',
    organization: 'Deloitte via Forage',
    issueDate: '2025',
    credentialUrl: 'https://www.theforage.com/',
    previewUrl: '#',
    isUpcoming: false,
    imageSrc: 'https://picsum.photos/seed/deloitte-cert/600/400'
  },
  {
    id: 'cert-ivy',
    name: 'Data Science with ML & Artificial Intelligence',
    organization: 'IVY Professional School',
    issueDate: '2023 - 2025',
    credentialUrl: 'https://ivyproschool.com/',
    previewUrl: '#',
    isUpcoming: false,
    imageSrc: 'https://picsum.photos/seed/ivy-cert/600/400'
  },
  {
    id: 'cert-rkm',
    name: 'Programming in C, C++, Java, Python, and Unix Systems',
    organization: 'Ramkrishna Mission',
    issueDate: '2022 - 2023',
    credentialUrl: 'https://ramkrishnamission.org/',
    previewUrl: '#',
    isUpcoming: false,
    imageSrc: 'https://picsum.photos/seed/rkm-cert/600/400'
  }
];
