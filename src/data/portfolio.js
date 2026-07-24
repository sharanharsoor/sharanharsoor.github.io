export const personal = {
  name: "Sharan Harsoor",
  titles: [
    "Principal ML Engineer",
    "Agentic AI Architect",
    "AI Researcher & Author",
    "Conference Speaker",
    "Open Source Builder",
  ],
  tagline: "Building AI systems that actually ship to production.",
  location: "Bengaluru, India",
  email: "sharanharsoor@gmail.com",
  links: {
    linkedin: "https://linkedin.com/in/sharan-harsoor",
    github: "https://github.com/sharanharsoor",
    medium: "https://medium.com/@sharanharsoor",
    kaggle: "https://www.kaggle.com/sharanharsoor/code",
  },
  stats: [
    { value: "12+", label: "Years Experience" },
    { value: "9", label: "Patents Filed" },
    { value: "26K+", label: "Medium Reads" },
    { value: "30+", label: "Articles" },
  ],
};

export const skills = {
  "Agentic AI & LLMs": ["LangChain", "LangGraph", "LlamaIndex", "HuggingFace", "OpenAI API", "Vertex AI", "RAG Pipelines", "MCP (Model Context Protocol)", "Agentic Workflows", "Prompt Engineering", "LLM Fine-tuning"],
  "ML / Deep Learning": ["PyTorch", "TensorFlow/Keras", "scikit-learn", "XGBoost", "NumPy", "Pandas", "Anomaly Detection", "Time Series Forecasting", "Statistical Modeling", "Reinforcement Learning", "NLP"],
  "Security AI": ["Ransomware Detection", "Cybersecurity AI", "Data Security", "Threat Intelligence", "Anomaly Detection Systems", "Cyber Recovery"],
  "Vector & Retrieval": ["pgvector", "Qdrant", "Chroma", "Pinecone", "Semantic Chunking", "Cross-Encoder Re-ranking", "Embeddings", "Vector Search", "Hybrid Retrieval (Dense + Sparse)"],
  "Data Engineering & ETL": ["Apache Spark", "PySpark", "Apache Kafka", "ETL Pipelines", "Azure Data Factory", "Data Pipelines", "Distributed Systems"],
  "MLOps & Infra": ["FastAPI", "Docker", "Kubernetes", "MLflow", "REST APIs", "CI/CD", "Microservices"],
  "Cloud": ["Google Cloud (Vertex AI)", "Microsoft Azure", "AWS"],
  "Languages": ["Python", "Go (Golang)", "C++", "C", "SQL", "JavaScript / React", "Bash/Shell"],
};

export const experience = [
  {
    company: "Red Hat",
    role: "Principal Machine Learning Engineer",
    team: "Data & AI Team",
    period: "Oct 2025 — Present",
    location: "Bengaluru, India",
    color: "#ee0000",
    highlights: [
      "Designing and deploying MCP-integrated agentic AI systems for large-scale enterprise operations — multi-source retrieval, intelligent lookup, and context-aware responses across complex internal data",
      "Architecting production RAG pipelines integrating heterogeneous data sources via Model Context Protocol (MCP), forming the backbone of an enterprise-grade AI assistant",
      "Developed and open-sourced chunking-strategy demonstrating 40–60% retrieval accuracy improvement via semantic-aware segmentation; adopted externally by startups",
      "Filed invention disclosure: 'Predictive Context Degradation in LLM Agents' (pending USPTO)",
    ],
    stack: ["LangChain", "LangGraph", "Vertex AI", "pgvector", "MCP", "React", "FastAPI", "Python"],
  },
  {
    company: "Cohesity",
    role: "Staff Software Engineer",
    team: "ML & Data Science, Data Security Squad",
    period: "Jun 2022 — Sep 2025",
    location: "Bengaluru, India",
    color: "#00b4d8",
    highlights: [
      "Led and delivered the Cohesity Cyber Recovery Assistant — first customer-facing GenAI product in Cohesity's security portfolio, using LangChain's agentic framework; enabled natural language querying of complex cybersecurity data",
      "Promoted from Sr.MTS to Staff Software Engineer (Oct 2024) for consistently driving high-impact initiatives from architecture to field validation",
      "Architected GenAI initiatives including LLM fine-tuning, document embedding pipelines for real-time query response, and multi-agent security workflows; filed 7 patents at USPTO",
      "Technical lead for Anti-Ransomware team of 8 engineers — reduced false positives by 40% and cut anomaly detection time from 120 to 15 minutes",
      "Worked closely with customers and cross-functional teams to ensure ML models performed effectively in real-world enterprise environments",
      "Designed FBProphet-based storage capacity forecasting microservice enabling proactive 30-day planning for customers",
      "Trained and mentored engineers across the team; recognized as go-to person for AI/ML architecture and unblocking technical challenges",
      "Won 'Most Innovative Project' at Cohesity GenAI Hackathon 2023",
    ],
    stack: ["LangChain", "Python", "ML/Statistical Modeling", "FastAPI", "Data Pipelines"],
  },
  {
    company: "Citrix",
    role: "Senior Software Engineer II",
    team: "Performance Analytics Team",
    period: "Apr 2019 — Jun 2022",
    location: "Bengaluru, India",
    color: "#00aaff",
    highlights: [
      "Reduced system outage detection time from 24 hours to 15 minutes — a 93% reduction — by designing and deploying anomaly detection algorithms for critical customer systems",
      "Developed time series forecasting and changepoint detection models for Citrix CVAD resources (CPU, RAM), enabling proactive failure prediction and performance capacity planning",
      "Built ML models for user behavior analysis using Microsoft Teams Optimization (MTOP) metrics and Double Q-learning, delivering actionable insights for performance management",
      "Invented and filed patent for proactive session failure prediction — US20230325280A1, Issued 2023",
    ],
    stack: ["Python", "ML", "Azure Data Factory", "Time Series", "Anomaly Detection"],
  },
  {
    company: "Cisco",
    role: "Software Engineer → Software Engineer II",
    team: "Systems & Cloud",
    period: "May 2015 — Apr 2019",
    location: "Bengaluru, India",
    color: "#1ba0d7",
    highlights: [
      "Implemented PAYG (Pay-as-you-go) licensing for Cisco ASAv on Microsoft Azure; designed autoscaling feature improving resource utilization on cloud deployments",
      "Built 'Jeeves' (Cisco ThingQbator innovation program) — cloud-based NLP system for natural language instruction execution; selected from thousands of employee submissions",
      "Developed ML regression POC for hardware health monitoring on Cisco ASR-9000, predicting device durability from sensor data",
    ],
    stack: ["C++", "C", "Python", "Azure", "AWS", "NLP"],
  },
];

export const patents = [
  { title: "Session Failure Prediction in Virtual Applications & Desktop Deployments", number: "US20230325280A1", status: "Issued 2023", company: "Citrix" },
  { title: "Artificial Intelligence Chatbot for Data Platform Security Analysis", number: "US20250284800A1", status: "Filed Nov 2024", company: "Cohesity" },
  { title: "Actionable AI Bot for Data Security Correlations", number: "US20250335583A1", status: "Filed Apr 2024", company: "Cohesity" },
  { title: "Recovery of Compromised Snapshots", number: "US20260064844A1", status: "Filed Aug 2024", company: "Cohesity" },
  { title: "4 additional patents in Generative AI and Security domains", number: null, status: "Pending USPTO", company: "Cohesity" },
  { title: "Predictive Context Degradation: Multi Signal Trajectory Analysis for Proactive Context Management in LLM Agents", number: null, status: "Filing Approved", company: "Red Hat" },
];

export const publications = [
  {
    title: "AmbiguityBench: A Decision-Theoretic Diagnostic Suite for Evaluating LLM Behavior Under Uncertainty",
    venue: "In preparation — targeting 2027 conference submission",
    description: "Benchmark of 22,680 experimental trials across 9 frontier models (Google, DeepSeek, Anthropic). Introduces the novel Ambiguity Premium (AP) metric. Full open artifact release.",
    tags: ["LLM Evaluation", "Decision Theory", "Benchmark"],
  },
  {
    title: "Reasoning and Ambiguity Sensitivity in Frontier LLMs: A Cross-Provider Behavioral Audit",
    venue: "In preparation — targeting 2027 conference submission",
    description: "Cross-provider empirical study on how reasoning modes alter ambiguity-sensitive behavior in frontier LLMs. Direct implications for safe deployment of LLM agents.",
    tags: ["LLM Safety", "Empirical Study", "Agent Behavior"],
  },
];

export const talks = [
  {
    title: "Why Your RAG System Hallucinates: Fixing the Content Segmentation Problem",
    event: "DevConf.IN 2026",
    location: "Pune, India",
    date: "February 2026",
    type: "Delivered",
    result: "40–60% retrieval accuracy improvement demonstrated live",
    link: "https://pretalx.devconf.info/devconf-in-2026/talk/ZZTD8P/",
    youtube: "https://www.youtube.com/watch?v=N2FimF1i4wE",
    library: "chunking-strategy",
  },
  {
    title: "Beyond Token Limits: Building Memory That Actually Works for LLM Agents",
    event: "DevConf.CZ 2026",
    location: "Czech Republic",
    date: "2026",
    type: "Selected",
    result: "Topic-aware memory compression for production LLM agents",
    link: null,
    youtube: null,
    library: "llm-smartmem",
  },
];

export const openSource = [
  {
    name: "chunking-strategy",
    pip: "pip install chunking-strategy",
    github: "https://github.com/sharanharsoor/chunking",
    pypi: "https://pypi.org/project/chunking-strategy/",
    description: "Production-grade semantic text chunking with thread-safe parallel processing, streaming pipelines for large files, and adaptive retrieval feedback loops.",
    tags: ["RAG", "Python", "NLP", "Production"],
    highlight: "Adopted by startups in production. Demonstrated 40–60% RAG accuracy improvement at DevConf.IN 2026.",
  },
  {
    name: "llm-smartmem",
    pip: "pip install llm-smartmem",
    github: "https://github.com/sharanharsoor/llm-smartmem",
    pypi: "https://pypi.org/project/llm-smartmem/",
    description: "Smart memory management for LLM conversations in agentic production systems. Topic-aware compression that adapts as conversations evolve.",
    tags: ["Agents", "Memory", "LLMs", "Python"],
    highlight: "Selected for DevConf.CZ 2026 talk on production LLM memory systems.",
  },
];

export const writing = [
  { title: "Agent Skills: The Quiet Standard That's Changing How We Build AI Agents", reads: "New", url: "https://medium.com/@sharanharsoor/agent-skills-the-quiet-standard-thats-changing-how-we-build-ai-agents-53118b633401" },
  { title: "The Complete Guide to Embeddings and RAG: From Theory to Production", reads: "7.2K reads", url: "https://medium.com/@sharanharsoor/the-complete-guide-to-embeddings-and-rag-from-theory-to-production-758a16d747ac" },
  { title: "Embeddings: A Deep Dive from Basics to Advanced Concepts", reads: "6K reads", url: "https://medium.com/@sharanharsoor/embeddings-a-deep-dive-from-basics-to-advanced-concepts-f092765476fc" },
  { title: "The Rise of MCP: How a 'USB-C for AI' Is Quietly Reshaping Intelligent Systems", reads: "167 views", url: "https://medium.com/@sharanharsoor/the-rise-of-mcp-how-a-usb-c-for-ai-is-quietly-reshaping-the-future-of-intelligent-systems-9ea13acfcf20" },
  { title: "Understanding Mixture of Experts (MoE): The Architecture Powering Next-Gen LLMs", reads: "1.2K reads", url: "https://medium.com/@sharanharsoor/understanding-mixture-of-experts-moe-the-architecture-powering-next-generation-language-models-49c1d1d467c9" },
];

export const testimonials = [
  {
    name: "Ravi Varanasi",
    role: "Engineering Leader at Cohesity",
    linkedin: "https://www.linkedin.com/in/ravi-varanasi",
    text: "Sharan delivered Cyber Recovery AI Bot, ML based classification, and was the first engineer to lead the development of a customer-facing generative AI solution for our security product line. He brings AI and ML depth, domain knowledge in security, solid product thinking, and a focused execution mindset. Sharan became the go-to person for several cross-functional efforts and was trusted to deliver reliably in high-stakes situations.",
  },
  {
    name: "Divesh Gandhi",
    role: "Engineering Leader at Cohesity",
    linkedin: "https://www.linkedin.com/in/diveshgandhi",
    text: "Sharan spearheaded the development and implementation of numerous cutting-edge AI solutions, demonstrating a strong aptitude for innovation. His work on the Cyber Security AI bot, leveraging LangChain to build an agentic model for security conversations, showcased his deep understanding of LLMs and their practical application in complex security challenges. Sharan is an exceptional AI Engineer — he possesses a rare blend of technical expertise and the ability to translate complex concepts into tangible results.",
  },
];

export const education = [
  { degree: "Master of Science, Data Science", school: "University of Arizona", period: "2021–2023", gpa: "3.889 / 4.00", location: "Tucson, AZ, USA", highlight: "Perfect 4.0 in ML, Neural Networks, Applied NLP, Data Mining, Cloud Analytics" },
  { degree: "Reinforcement and Deep Reinforcement Learning", school: "Indian Institute of Science (IISc)", period: "2021–2022", gpa: "B+", location: "Bangalore, India", highlight: "CCE Certification from India's premier research institution" },
  { degree: "Bachelor of Engineering", school: "B.M.S. College of Engineering", period: "2009–2013", gpa: "8.44 / 10", location: "Bangalore, India", highlight: "One of the top engineering colleges in Karnataka" },
];

export const projects = [
  {
    name: "AntarDarshan",
    tagline: "Inner Vision Through Ancient Wisdom",
    description: "Production RAG system over 54 classical Indian philosophy texts — Upanishads, Bhagavad Gita, Mahabharata, Pali Canon, and more. Citation-grounded answers, reading library, highlights, bookmarks, and a community wisdom wall.",
    link: "https://antardarshan.org",
    github: "https://github.com/sharanharsoor/antardarshan",
    stats: ["54 texts", "20,369 chunks", "6 traditions", "92% retrieval eval", "600 tests"],
    stack: ["BGE-M3 (hybrid dense + sparse)", "Cross-Encoder Reranker", "Qdrant", "FastAPI", "Next.js", "Supabase", "LangFuse", "Hetzner + Vercel"],
    highlight: "Built solo, end-to-end, from corpus curation to production deployment at $6/month.",
  },
];

export const awards = [
  { title: "Most Innovative Project", org: "Cohesity GenAI Hackathon", year: "2023", detail: "Winner for a Generative AI use case" },
  { title: "Performance Analytics Hackathon", org: "Citrix", year: "2020", detail: "Winner — Machine Learning category" },
  { title: "Intel IIEC Finalist", org: "Intel India", year: "2014", detail: "Professional Category — Smart Energy Grid Applications" },
  { title: "Intel IIEC Finalist", org: "Intel India", year: "2012", detail: "Student Category — selected top 30 from thousands of applicants" },
  { title: "6th Prize — Shaastra", org: "IIT Madras", year: "2011", detail: "Speedometer circuit with intelligence locking system for bicycles" },
  { title: "Kaggle Master", org: "Kaggle", year: "Active", detail: "Active contributor to data science competitions and notebooks" },
];
