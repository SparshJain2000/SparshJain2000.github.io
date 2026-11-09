# Sparsh Jain

**Senior Software Engineer**

India | +91-6397696910 | [jainsparsh0801@gmail.com](mailto:jainsparsh0801@gmail.com)

[LinkedIn](https://www.linkedin.com/in/jain-sparsh/) | [GitHub](https://github.com/sparshjain2000) | [Portfolio](https://sparshjain.in)

---

## Summary

Senior Software Engineer with 5+ years of experience in designing and developing high-performance, scalable software solutions. Proficient in Java/Spring Boot, distributed systems, and agile methodologies. Strong background in AI-assisted development and automation, with a focus on improving code quality and delivery speed.

## Experience

### Oracle | Bengaluru, India

**Senior Member of Technical Staff** | Apr 2026 – Present

- Led design and delivery of **FHIR search and query handling** — including **escaped query parameter support**, multi-value parameters, and validation logic — defining requirements and approach, and guiding a **3-member team** through implementation and review.
- Engineered **Java/Micronaut FHIR REST APIs** on **Oracle Integration Cloud**, supporting Read/Search operations, FHIR Bundle construction, and standardized error handling across **4 FHIR resources** (Location, FamilyMemberHistory, QuestionnaireResponse, Binary), including **US Core**-aligned profile and terminology mappings, with additional **Da Vinci CRD/PAS** conformance for Location.
- Enabled and validated **SMART on FHIR** authorization across Provider, Patient, and System personas, covering **PKCE**, launch context, confidential-client authentication, token validation, and scoped FHIR request authorization.

### Wells Fargo | Bengaluru, India

**Senior Software Engineer** | Feb 2025 – Apr 2026

- Automated **TCI compliance** using **Chainlit** and **LangGraph**, orchestrating 4 enterprise tools and a **Playwright**-based evidence pipeline, reducing manual reporting effort by **80%** and turnaround from **3 days to hours** across 4 teams.
- Architected a distributed **semantic search platform** using **Milvus**, **FastAPI**, and sentence-transformer embeddings, powering semantic search across **10M+ policy records** with metadata-aware ingestion.
- Designed and deployed an **OpenSearch** POC using production-mirrored Elasticsearch data, building a custom relevance benchmarking framework across **Milvus, Elasticsearch, and OpenSearch** with MRR/Recall analysis.
- Enabled **real-time Elasticsearch Cross Cluster Replication (CCR)** between PROD and BCP clusters, replacing a **3-hour daily manual synchronization** process.
- Engineered **Model Context Protocol (MCP)** servers over enterprise search APIs using **stdio** transport, enabling AI-native tooling integrations.

**Software Engineer** | Aug 2023 – Feb 2025

- Engineered scalable **Java/Spring Boot microservices** with **MongoDB**, providing unified APIs and query orchestration over Elasticsearch search, index, and delete operations.
- Implemented hybrid semantic search using **ELSER, dense vector search (HNSW), and BM25**, improving search accuracy by **30%** through benchmark-driven relevance tuning.
- Integrated **Learning-to-Rank (LTR)** models using client click-track data for feature extraction, relevance labeling, and model tuning, improving personalized search relevancy by **15%**.
- Built a high-performance **Node.js REST API** with efficient content chunking for Elasticsearch ingestion, achieving **20% faster query performance** for high-volume workloads.
- Automated **Kibana benchmarking dashboards** for search configurations, enabling data-driven relevance tuning and production parameter selection.

**Program Associate** | Jul 2022 – Aug 2023

- Integrated DMS with **AWS S3** through StorageGrid using a Spring-based **RESTful service** with custom metadata for document ingestion.
- Developed a **Spring Shell** health-check CLI for 9 applications, reducing manual monitoring effort by **60%**.
- Implemented **SonarQube quality gates** and unit testing across 6 legacy components, achieving **80%+ code coverage** and resolving **200+ major code smells**.

---

## Education

### Vellore Institute of Technology | Vellore, India

**Bachelor of Technology in Information Technology** | Jul 2018 – May 2022

CGPA: **9.40**

### Dehradun Public School | Muzaffarnagar, India

**Higher Secondary (Class XII, CBSE)** | Apr 2016 – Mar 2018

Percentage: **95.4%**

---

## Projects

### Inbox Zero – AI Email Intelligence & Finance Agent

_Python, LangChain, LangGraph, Gmail API, OpenSearch, Chainlit_

- Built an end-to-end **AI email intelligence system** that ingests Gmail data via OAuth, classifies emails into categories (Work, Finance, Personal, Travel) with **4+ intent categories**, and extracts structured financial metadata (merchant, amount, payment mode, debit/credit type) from **1,000+ processed emails**.
- Designed **multi-agent LLM workflows** using **LangGraph** and **LangChain** with conditional routing across **4 model providers** (Anthropic, OpenAI, Gemini, Ollama) to orchestrate classification, finance extraction, summarization, and report generation.
- Engineered a production-style ingestion pipeline with asynchronous processing, concurrency control, and state persistence, achieving reliable resumable processing across **multi-batch** email ingestion runs.
- Implemented **semantic + keyword search (RAG)** over indexed email/finance data in **OpenSearch**, powering a **Chainlit**-based dashboard for natural-language queries over spending data.

### Order and Inventory Management System

_Java, Spring Boot, Spring Cloud, Kafka, PostgreSQL, MongoDB_

[Source Code](https://github.com/SparshJain2000/Inventory-Management-System)

- Engineered a scalable **microservices-based** e-commerce platform with **4 independent services** covering product catalog, inventory validation, order processing, and event-driven notifications, using **PostgreSQL** for transactional data and **MongoDB** for product catalog storage.
- Designed a secure **API Gateway** with **Spring Cloud Gateway**, **Eureka** service discovery, and **Keycloak/OAuth2** authentication, routing requests across all backend services through a single entry point.
- Implemented asynchronous, **event-driven communication** with **Kafka** to publish order events, enabling real-time inventory validation and eliminating tight coupling between order and inventory services.
- Applied **Resilience4j** circuit breaker, retry, and timeout patterns alongside **Zipkin/Actuator**-based distributed tracing across **4 services** to improve fault tolerance and end-to-end observability.

---

## Technical Skills

- **Programming Languages:** Java, Python, JavaScript, TypeScript, SQL.
- **Frameworks & Libraries:** Spring Boot, Node.js, React.js, Angular, Flask, Karate.
- **Cloud & DevOps:** Docker, Kubernetes/OpenShift, Jenkins, Harness, Kafka, APIGEE, Gradle, Maven, Git.
- **Databases & Search:** PostgreSQL, MongoDB, Elasticsearch, Solr, Redis, Milvus, OpenSearch.
- **Architecture & AI:** Microservices, REST, Distributed Systems, System Design, CI/CD, AI/ML, LLMs, MCP, LangGraph, LangChain.

---

## Certifications and Achievements

- [**Wells Fargo Top Achievers Award**](https://www.linkedin.com/posts/jain-sparsh_wellsfargo-topachievers-careergrowth-share-7453130760720396288-CnNF) – 2026, recognized among highest-performing engineers.
- **Wells Fargo White Paper Contest** – Winner, 2024.
- **PROB-A-THON** – 1st place, India & Philippines, 2023.
- [**Elastic Certified Engineer**](https://certified.elastic.co/2e539ed6-d14c-4136-8586-a043883b32e1) – Nov. 2024.
- [**Microsoft Azure Fundamentals (AZ-900)**](https://www.credly.com/badges/4acf1dca-db0c-4a7f-a2ae-9bcf012b2f8b/linked_in_profile) – Oct. 2022.
