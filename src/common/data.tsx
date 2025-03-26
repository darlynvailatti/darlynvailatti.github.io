import { SiAmazonwebservices, SiArduino, SiCelery, SiDatadog, SiDjango, SiDocker, SiFlask, SiGitlab, SiJenkins, SiJinja, SiJupyter, SiKubernetes, SiMlflow, SiNumpy, SiPandas, SiPython, SiRabbitmq, SiRaspberrypi, SiReact, SiScikitlearn, SiSpring, SiTensorflow, SiTerraform, SiVuedotjs } from "react-icons/si";
import DefaultIcon from "../components/DefaultIcon";
import { FaChartLine, FaCircleNotch, FaCode, FaJava, FaLayerGroup, FaWifi } from "react-icons/fa";
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
import { Chip } from "@mui/material";
import { ThreeDRotation } from "@mui/icons-material";

export const MY_NAME = "Darlyn Anderson Vailatti"
export const LINKEDIN_URL = "https://www.linkedin.com/in/darlynvailatti/"
export const JOB_TITLE = "💡 Software Engineer & Problem Solver";
export const EMAIL = "darlynvailatti@gmail.com"
export const CURRENT_LOCATION = "Adelaide, South Australia";
export const HEADER_TEXT = `#### 📌 Every challenge has a solution through the power of software

With over **10+ years of software engineering experience** ☔️, 
I've enhanced value creation and empowered business processes with **curiosity** and **enthusiasm**. 
Currently pursuing a Master's in Software Engineering with a focus on **Machine Learning**, 
I'm passionate about **matching challenges with the right tools** 🛠️`

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
        "title": "Software Engineer",
        "company": "Loadsmart",
        "location": "Remote, Chicago, IL",
        "startDate": "11/2020",
        "endDate": "Present",
        "website": "https://loadsmart.com/",
        "description": "Software development focused on complex system integrations utilizing Python frameworks like Django (ORM, REST) and message brokers (Celery, Redis, RabbitMQ). Implemented integrations using diverse protocols (REST, SOAP, EDI, SFTP) to seamlessly connect various systems. Enhanced system performance and visibility through instrumentation and monitoring with tools such as Datadog. Leveraged AWS cloud infrastructure to ensure scalability and reliability.  Additionally, possess expertise in front-end development using React, creating user-friendly interfaces.  One of my main achievements was building a self-service integration onboarding system. This empowered high-level users to integrate applications independently, resulting in a significant reduction in operational costs.",
        "icon": <CustomIcon src={loadsmart_logo} />,
        "tags": [
        ]
    },
    {
        "title": "Full-Stack Software Engineer",
        "company": "Compass UOL",
        "location": "Chapecó, SC, Brazil",
        "startDate": "10/2019",
        "endDate": "11/2020",
        "website": "https://compassuol.com.br/",
        "description": "Architected and developed robust API integrations utilizing a microservices architecture. This approach ensured scalability, maintainability, and independent deployment of our services. Utilized Vue.js and Javascript to craft highly performant and interactive front-end experiences. Implemented  Test-Driven Development (TDD) practices using Ruby, ensuring high code quality. Further extended my automation expertise by applying Gherkin syntax for comprehensive testing of our React Native mobile app.",
        "icon": <CustomIcon src={compass_logo} />,
        "tags": [

        ]
    },
    {
        "title": "Full-Stack Software Engineer",
        "company": "Coop. Agroindustrial Alfa ",
        "location": "Chapecó, SC, Brazil",
        "startDate": "08/2015",
        "endDate": "10/2019",
        "website": "https://www.cooperalfa.com.br/",
        "description": "Developed and maintained JavaEE applications (Spring, JPA) for logistics and financial business solutions, including TMS and ERP systems. Focused on improving efficiency and streamlining operations. Built a centralized logistics platform that managed freight for over 150+ branches, resulting in a 20% reduction in costs. Additionally, implemented DevOps practices (CI/CD pipeline) to improve software delivery speed and reliability.",
        "icon": <CustomIcon src={cooperalfa_logo} />,
        "tags": [
        ]
    },
    {
        "title": "I.T Analyst",
        "company": "Rotesma Pré-Moldados",
        "location": "Chapecó, SC, Brazil",
        "startDate": "08/2013",
        "endDate": "08/2015",
        "website": "https://www.rotesma.com.br/",
        "description": "Managed a comprehensive ERP system encompassing HR, Industrial Manufacturing, Labor Safety, CRM, and Accounting modules. Developed insightful BI reports using SQL and tools like iReport, enabling data-driven decision making. Doubled as a Business Analyst, bridging the gap between business needs and IT solutions. Additionally, oversaw the local IT infrastructure as the IT Manager, ensuring smooth operation of networks and databases. My main achievement was the implementation of an industrial tracking system that empowered operations to accurately track each piece of production along the assembly line.",
        "icon": <CustomIcon src={rotesma_logo} />,
        "tags": [

        ]
    }
]

export const SKILLS = [
    {
        "title": "⌱ Full-Stack Software Development",
        "description": "Expertise in designing, developing, and maintaining scalable web applications using a wide range of technologies. Proficient in both front-end and back-end development, ensuring seamless integration of complex systems. Emphasis on creating user-friendly interfaces and implementing best practices for code quality and maintainability.",

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
        "description": "Implementation and maintenance of CI/CD pipelines to enhance software delivery speed and reliability. Extensive experience leveraging cloud services to ensure scalability and reliability of software solutions. Proficient in setting up automated testing environments and integrating diverse systems to improve operational performance.",
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
        "description": "Proficient in integrating various business systems and automating workflows to improve efficiency and reduce operational costs. Capable of building custom solutions for complex system integrations and enabling smooth data flow across platforms.",
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
        "description": "Gamify indoor climbing. Software and hardware development of a platform to gamify indoor climbing using machine learning through video capturing.",
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
        "description": "Athletic measurement platform. Software and Hardware development of a platform for collecting, managing and test sports teams with photoelectric sensors, with Python, Django, and other technologies ",
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
        "institution": "Torrens Universtiry Australia",
        "location": "Adelaide, South Australia",
        "startDate": "09/2023",
        "endDate": "09/2025",
        "website": "https://www.torrens.edu.au/",
        "icon": <CustomIcon src={torrens_logo} />,
        "tags": [
            "Machine Learning",
            "Data Analysis",
            "Software Development",
            "Research"
        ]
    },
    {
        "title": "Post-Graduate of Software Engineering",
        "institution": "UNISINOS",
        "location": "Porto Alegre, RS, Brazil",
        "startDate": "09/2019",
        "endDate": "04/2021",
        "website": "https://www.unisinos.br/",
        "icon": <CustomIcon src={unisinos_logo} />,
        "tags": [
            "Software Architecture",
            "System Analysis",
            "Project Management"
        ]
    },
    {
        "title": "Bachelor's in Information Systems ",
        "institution": "UNOESC",
        "location": "Chapecó, SC, Brazil ",
        "startDate": "02/2014",
        "endDate": "09/2017",
        "website": "https://www.unoesc.edu.br/",
        "icon": <CustomIcon src={unoesc_logo} />,
        "tags": [
            "Software Development",
            "Data Sctructures",
            "Programming Marathon",
            "System Analysis"
        ]
    }
]