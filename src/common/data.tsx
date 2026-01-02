import { SiAmazonwebservices, SiArduino, SiCelery, SiDatadog, SiDjango, SiDocker, SiFlask, SiGitlab, SiJenkins, SiJira, SiJinja, SiJupyter, SiKubernetes, SiMlflow, SiNumpy, SiPandas, SiPython, SiRabbitmq, SiRaspberrypi, SiReact, SiScikitlearn, SiSpring, SiTensorflow, SiTerraform, SiVuedotjs } from "react-icons/si";
import DefaultIcon from "../components/DefaultIcon";
import { FaChartLine, FaCircleNotch, FaCode, FaDatabase, FaJava, FaLayerGroup, FaServer, FaUser, FaWifi } from "react-icons/fa";
import CustomIcon from "./CustomIcon";

import loadsmart_logo from '../assets/images/loadsmart_logo.png';
import rotesma_logo from '../assets/images/rotesma_logo.jpg';
import cooperalfa_logo from '../assets/images/cooperalfa_logo.png';
import compass_logo from '../assets/images/compass_logo.webp';
import unisinos_logo from '../assets/images/unisinos_logo.png';
import unoesc_logo from '../assets/images/unoesc_logo.png';
import torrens_logo from '../assets/images/torrens_logo.jpg';
import speedapp_image from '../assets/images/speedapp_image.png';
import climbing_image from '../assets/images/climbing_image.png';
import sentiment_sense_image from '../assets/images/sentiment_sense_image.png';
import shippo_logo from '../assets/images/shippo_logo.png';
import { Chip } from "@mui/material";
import { ThreeDRotation } from "@mui/icons-material";

export const MY_NAME = "Darlyn Anderson Vailatti"
export const LINKEDIN_URL = "https://www.linkedin.com/in/darlynvailatti/"
export const JOB_TITLE = "💡 Senior Software Engineer & Problem Solver";
export const EMAIL = "darlynvailatti@gmail.com"
export const CURRENT_LOCATION = "Adelaide, South Australia";
export const HEADER_TEXT = `With over **10+ years of experience** designing and scaling **distributed systems**, 
I have a strong track record in **logistics, finance, and high-throughput integration platforms**. 
Skilled in building **resilient services**, automating workflows, and integrating complex systems. 
Recently graduated from a **Master’s in Software Engineering** with a focus on **Machine Learning and Neural Networks**.
I enjoy working on real-world problems and contributing to scalable, maintainable solutions,
particularly within backend and infrastructure-focused teams. 🛠️`

export const GITHUB_URL = "https://github.com/darlynvailatti"

export const HEADER_TAGS = [
    <Chip label="Software Engineering" icon={<FaCode size={25} />} />,
    <Chip label="Full-Stack" icon={<FaLayerGroup size={20} />} />,
    <Chip label="AWS" icon={<SiAmazonwebservices size={20} />} />,
    <Chip label="Python" icon={<SiPython size={20} />} />,
    <Chip label="Java" icon={<FaJava size={20} />} />,
    <Chip label="Django" icon={<SiDjango size={20} />} />,
    <Chip label="Spring" icon={<SiSpring size={20} />} />,
    <Chip label="CI/CD" icon={<FaCircleNotch size={20} />} />,
    <Chip label="Kubernetes" icon={<SiKubernetes size={20} />} />,
    <Chip label="React" icon={<SiReact size={20} />} />,
    <Chip label="Vue.js" icon={<SiVuedotjs size={20} />} />,
    <Chip label="Data Analysis" icon={<SiPandas size={20} />} />,
    <Chip label="Agile" icon={<FaChartLine size={20} />} />,

]

export const EXPERIENCES = [
    {
        "title": "Backend Software Engineer",
        "company": "Shippo",
        "location": "San Francisco, CA, US",
        "geoLocation": {
            "latitude": 37.7749,
            "longitude": -122.4194
        },
        "startDate": "11/2025",
        "endDate": "Present",
        "website": "https://shippo.com/",
        "description": "Building a **distributed integration platform** to enable carriers, shippers, and customers to stay connected. Focused on designing and implementing scalable solutions that facilitate seamless communication and data flow across the shipping ecosystem.",
        "icon": <CustomIcon src={shippo_logo} />,
        "skills": [
            { component: SiPython, name: "Python" },
            { component: SiAmazonwebservices, name: "AWS" },
            { component: SiKubernetes, name: "Kubernetes" },
            { component: SiTerraform, name: "Terraform" },
            { component: FaChartLine, name: "Agile" },
            { component: SiJira, name: "Jira" },
        ],
        "tags": [
        ]
    },
    {
        "title": "Full-Stack Software Engineer",
        "company": "Loadsmart",
        "location": "Remote, US, Illinois, Chicago",
        "geoLocation": {
            "latitude": 40,
            "longitude": -20
        },
        "startDate": "11/2020",
        "endDate": "11/2025",
        "website": "https://loadsmart.com/",
        "description": "Technical research, implementation and evolution of a high-throughput integration broker platform, maintaining and scaling a system that processes **7M+ logistics messages monthly** and supports **1500+ active integrations** across carriers, shippers, and partners. Built a **CLI tool** that empowered engineers to define, test and deploy integrations using **infrastructure-as-code**, significantly improving developer productivity. Enabled robust interoperability across **FTP, SFTP, AS2, HTTP protocols** and **X12, XML, JSON, CSV content types**, over **RESTful and SOAP channels**. Improved observability and performance using **Datadog, Kubernetes, and AWS**, supporting reliable scaling under increasing demand. Delivered a **self-service onboarding tool** built with **React**, enabling non-technical users to configure integrations independently, reducing operational costs and support effort.",
        "icon": <CustomIcon src={loadsmart_logo} />,
        "skills": [
            { component: SiPython, name: "Python" },
            { component: SiReact, name: "React" },
            { component: SiAmazonwebservices, name: "AWS" },
            { component: SiKubernetes, name: "Kubernetes" },
            { component: SiDatadog, name: "Datadog" },
            { component: SiTerraform, name: "Terraform" },
            { component: FaChartLine, name: "Agile" },
            { component: SiJira, name: "Jira" },
        ],
        "tags": [
        ]
    },
    {
        "title": "Full-Stack Software Engineer",
        "company": "Compass UOL",
        "location": "Chapecó, SC, Brazil",
        "geoLocation": {
            "latitude": -27.1214077,
            "longitude": -52.6169738
        },
        "startDate": "10/2019",
        "endDate": "11/2020",
        "website": "https://compassuol.com.br/",
        "description": "Designed and developed integration services around a reward platform used by **100k+ customers**, building and maintaining **30+ system integrations** to extend platform capabilities. Implemented solutions using **Spring Boot** within a **microservices architecture**, ensuring scalability, resilience, and independent deployment across distributed systems. Contributed to front-end functionality using **Vue.js**, enhancing partner and internal user experiences.",
        "icon": <CustomIcon src={compass_logo} />,
        "skills": [
            { component: SiSpring, name: "Spring Boot" },
            { component: SiVuedotjs, name: "Vue.js" },
            { component: FaJava, name: "Java" },
            { component: FaChartLine, name: "Agile" },
            { component: SiJira, name: "Jira" },
        ],
        "tags": [

        ]
    },
    {
        "title": "Full-Stack Software Engineer",
        "company": "Coop. Agroindustrial Alfa ",
        "location": "Chapecó, SC, Brazil",
        "geoLocation": {
            "latitude": -27.1214077,
            "longitude": -52.6169738
        },
        "startDate": "08/2015",
        "endDate": "10/2019",
        "website": "https://www.cooperalfa.com.br/",
        "description": "Developed and maintained **JavaEE applications** using **Spring and JPA** for logistics and financial domains, including **TMS and ERP systems**. Built a centralized logistics platform managing freight operations for **150+ branches**, achieving a **20% cost reduction** through improved coordination and automation. Introduced and implemented **CI/CD pipelines**, significantly enhancing software delivery speed, reliability, and deployment consistency.",
        "icon": <CustomIcon src={cooperalfa_logo} />,
        "skills": [
            { component: FaJava, name: "Java" },
            { component: SiSpring, name: "Spring" },
            { component: SiJenkins, name: "Jenkins" },
            { component: FaChartLine, name: "Agile" },
        ],
        "tags": [
        ]
    },
    {
        "title": "I.T Analyst",
        "company": "Rotesma Pré-fabricados",
        "location": "Chapecó, SC, Brazil",
        "geoLocation": {
            "latitude": -27.1214077,
            "longitude": -52.6169738
        },
        "startDate": "08/2013",
        "endDate": "08/2015",
        "website": "https://www.rotesma.com.br/",
        "description": "Managed a full-scale **ERP system** (HR, Manufacturing, CRM, Accounting), supporting cross-functional business operations. Delivered **BI reports** using **SQL and iReport**, enabling informed decision-making. Bridged business and technical teams as a **Business Analyst**, and oversaw local IT infrastructure. Implemented an **industrial tracking system** to monitor production flow with precision, boosting operational efficiency.",
        "icon": <CustomIcon src={rotesma_logo} />,
        "skills": [
            { component: FaJava, name: "Java" },
            { component: FaDatabase, name: "SQL" },
            { component: FaChartLine, name: "Business Intelligence" },
            { component: FaUser, name: "Business Analyst" },
            { component: FaServer, name: "Server Management" },
        ],
        "tags": [

        ]
    }
]

export const SKILLS = [
    {
        "title": "⌱ Full-Stack Software Development",
        "description": "Experience in designing, developing, and maintaining scalable web applications using a wide range of technologies. Skilled in both front-end and back-end development, with a focus on integrating complex systems. Emphasis on creating user-friendly interfaces and implementing best practices for code quality and maintainability.",

        "tools": [
            <DefaultIcon component={SiPython} name="Python" />,
            <DefaultIcon component={FaJava} name="Java" />,
            <DefaultIcon component={SiDjango} name="Django" />,
            <DefaultIcon component={SiReact} name="React" />,
            <DefaultIcon component={SiVuedotjs} name="Vue.js" />,
            <DefaultIcon component={SiSpring} name="Spring" />,
        ],
        "tags": [
            "REST APIs",
            "Microservices Architecture",
            "SOAP",
            "SQL",
        ]
    },
    {
        "title": "⎈ DevOps and Cloud Infrastructure",
        "description": "Implementation and maintenance of CI/CD pipelines to enhance software delivery speed and reliability. Experience leveraging cloud services to support scalability and reliability of software solutions. Skilled in setting up automated testing environments and integrating diverse systems to improve operational performance.",
        "tools": [
            <DefaultIcon component={SiTerraform} name="Terraform" />,
            <DefaultIcon component={SiDocker} name="Docker" />,
            <DefaultIcon component={SiRabbitmq} name="RabbitMQ" />,
            <DefaultIcon component={SiCelery} name="Celery" />,
            <DefaultIcon component={SiAmazonwebservices} name="AWS" />,
            <DefaultIcon component={SiKubernetes} name="Kubernetes" />,
            <DefaultIcon component={SiDatadog} name="Datadog" />,
            <DefaultIcon component={SiJenkins} name="Jenkins" />,
            <DefaultIcon component={SiGitlab} name="GitLab" />,
        ],
        "tags": [
            "CI/CD",
            "Monitoring",
            "Logging",
            "Containerization",
            "Orchestration",
        ]
    },
    {
        "title": "⌗ Data Analysis and Machine Learning",
        "description": "Data analysis and machine learning to develop innovative solutions in various business domains. Experience in developing platforms that use machine learning models for real-time data processing and decision-making.",
        "tools": [
            <DefaultIcon component={SiPandas} name="Pandas" />,
            <DefaultIcon component={SiPython} name="Python" />,
            <DefaultIcon component={SiNumpy} name="Numpy" />,
            <DefaultIcon component={SiScikitlearn} name="Scikit Learn" />,
            <DefaultIcon component={SiJupyter} name="Jupyter Notebooks" />,
        ],
        "tags": [
            "ML",
            "EDA",
            "SQL",
            "Data Visualization Tools"
        ]
    },
    {
        "title": "⎌ Systems Integration and Automation",
        "description": "Experience integrating various business systems and automating workflows to improve efficiency and reduce operational costs. Skilled in building custom solutions for complex system integrations and enabling smooth data flow across platforms.",
        "tools": [
            <DefaultIcon component={SiPython} name="Python" />,
            <DefaultIcon component={FaJava} name="Java" />,
            <DefaultIcon component={SiCelery} name="Celery" />,
            <DefaultIcon component={SiRabbitmq} name="RabbitMQ" />,
            <DefaultIcon component={SiAmazonwebservices} name="AWS" />,
        ],
        "tags": [
            "REST",
            "SOAP",
            "SFTP",
            "Microservices",
            "Distributed Systems",
        ]
    }
]

export const PROJECTS = [
    // {
    //     "title": "⚙️ LLmTR",
    //     "description": "SaaS platform for data transformation using LLMs as engine. WIP",
    //     "tags": [
    //         <Chip label="LLM" icon={<FaMagic />} />,
    //         <Chip label="Python" icon={<SiPython />} />,
    //         <Chip label="React" icon={<FaReact />} />,
    //         <Chip label="Django" icon={<SiDjango />} />,
    //     ],
    //     "videoUrl": "",
    //     "startDate": "2025",
    //     "endDate": "",
    //     "image": llmtr
    // },
    {
        "title": "💔 Sentiment Sense",
        "description": "Built a platform for sentiment analysis of customer reviews using a neural network with Python, Pandas, TensorFlow, and Flask to provide business insights.",
        "tags": [
            <Chip label="Django" icon={<SiDjango />} />,
            <Chip label="Python" icon={<SiPython />} />,
            <Chip label="ML" icon={<SiMlflow />} />,
            <Chip label="Flask" icon={<SiFlask />} />,
            <Chip label="TensorFlow" icon={<SiTensorflow />} />,
            <Chip label="Pandas" icon={<SiPandas />} />,
            <Chip label="Jinja" icon={<SiJinja />} />,
            <Chip label="Jupyter Notebooks" icon={<SiJupyter />} />,
        ],
        "videoUrl": "https://github.com/darlynvailatti/sentiment_sense",
        "startDate": "2024",
        "endDate": "2024",
        "image": sentiment_sense_image
    },
    {
        "title": "🧗 Climbing AR",
        "description": "Software and hardware development of a platform to gamify indoor climbing using machine learning through video capturing.",
        "tags": [
            <Chip label="Machine Learning" icon={<SiMlflow />} />,
            <Chip label="React" icon={<SiReact />} />,
            <Chip label="Python" icon={<SiPython />} />,
            <Chip label="AR" icon={<ThreeDRotation />} />,
        ],
        "videoUrl": "https://www.youtube.com/watch?v=B4RD-9RwN6M",
        "startDate": "2022",
        "endDate": "2023",
        "image": climbing_image
    },
    {
        "title": "⚡️ SpeedApp",
        "description": "Software and Hardware development of a platform for collecting, managing and test sports teams with photoelectric sensors, with Python, Django, and other technologies",
        "tags": [
            <Chip label="Python" icon={<SiPython />} />,
            <Chip label="IoT" icon={<FaWifi />} />,
            <Chip label="Django" icon={<SiDjango />} />,
            <Chip label="RaspberryPI" icon={<SiRaspberrypi />} />,
            <Chip label="Arduino" icon={<SiArduino />} />,
        ],
        "videoUrl": "https://www.youtube.com/watch?v=gk41hN5K648",
        "startDate": "2015",
        "endDate": "2016",
        "image": speedapp_image
    },
]

export const EDUCATION_CHAPTERS = [
    {
        "title": "Master's in Software Engineering ML",
        "institution": "Torrens University Australia",
        "location": "Adelaide, South Australia",
        "geoLocation": {
            "latitude": -34.92750,
            "longitude": 110.60000
        },
        "startDate": "2023",
        "endDate": "2025",
        "website": "https://www.torrens.edu.au/",
        "icon": <CustomIcon src={torrens_logo} />,
        "tags": [
            "Machine Learning",
            "Data Analysis"
        ]
    },
    {
        "title": "Post-Graduate of Software Engineering",
        "institution": "UNISINOS",
        "location": "Porto Alegre, RS, Brazil",
        "geoLocation": {
            "latitude": -27.1214077,
            "longitude": -52.6169738
        },
        "startDate": "2019",
        "endDate": "2021",
        "website": "https://www.unisinos.br/",
        "icon": <CustomIcon src={unisinos_logo} />,
        "tags": [
            "Architecture",
            "Agile"
        ]
    },
    {
        "title": "Bachelor's in Information Systems ",
        "institution": "UNOESC",
        "location": "Chapecó, SC, Brazil ",
        "geoLocation": {
            "latitude": -27.1214077,
            "longitude": -52.6169738
        },
        "startDate": "2014",
        "endDate": "2017",
        "website": "https://www.unoesc.edu.br/",
        "icon": <CustomIcon src={unoesc_logo} />,
        "tags": [
            "Computer Science",
            "Programming Marathon"
        ]
    }
]