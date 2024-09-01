import { SiAmazonalexa, SiAmazonwebservices, SiCelery, SiDatadog, SiDjango, SiDocker, SiGitlab, SiJenkins, SiJupyter, SiKubernetes, SiNumpy, SiPandas, SiPython, SiRabbitmq, SiReact, SiScikitlearn, SiSpring, SiTerraform, SiVuedotjs } from "react-icons/si";
import DefaultIcon from "../components/DefaultIcon";
import { FaJava } from "react-icons/fa";
import CustomIcon from "./CustomIcon";

import loadsmart_logo from '../assets/images/loadsmart_logo.png';
import rotesma_logo from '../assets/images/rotesma_logo.jpg';
import cooperalfa_logo from '../assets/images/cooperalfa_logo.png';
import compass_logo from '../assets/images/compass_logo.webp';

export const JOB_TITLE = "💡 Problem Solver using Software"; // Replace with your job title
export const EMAIL = "darlynvailatti@gmail.com"
export const CURRENT_LOCATION = "Adelaide, South Australia"; // Replace with your current location
export const HEADER_TEXT = "Every challenge has a solution through the power of software. With over a <b>decade of experience</b>, I've enhanced value creation and empowered business processes with curiosity and enthusiasm. Currently pursuing a Master's in Software Engineering with a focus on Machine Learning, I'm passionate about matching challenges with the right tools. Let's connect to discuss how my skills can drive innovation for your team!"
export const LINKEDIN_URL = "https://www.linkedin.com/in/darlynvailatti/"

export const EXPERIENCES = [
    {
        "title": "Software Engineer",
        "company": "Loadsmart",
        "location": "Remote, Chicago, IL",
        "startDate": "11/2020",
        "endDate": "Present",
        "website": "https://loadsmart.com/",
        "description": "Software development focused on complex system integrations utilizing Python frameworks like Django (ORM, REST) and message brokers (Celery, Redis, RabbitMQ). Implemented integrations using diverse protocols (REST, SOAP, EDI, SFTP) to seamlessly connect various systems. Enhanced system performance and visibility through instrumentation and monitoring with tools such as Datadog. Leveraged AWS cloud infrastructure to ensure scalability and reliability.  Additionally, possess expertise in front-end development using React, creating user-friendly interfaces.  One of my main achievements was building a self-service integration onboarding system. This empowered high-level users to integrate applications independently, resulting in a significant reduction in operational costs.",
        "icon": <CustomIcon  src={loadsmart_logo}/>,
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
        "icon": <CustomIcon  src={compass_logo}/>,
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
        "icon": <CustomIcon  src={cooperalfa_logo}/>,
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
        "icon": <CustomIcon  src={rotesma_logo}/>,
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
        "description": "Skilled in implementing and maintaining CI/CD pipelines to enhance software delivery speed and reliability. Extensive experience leveraging cloud services to ensure scalability and reliability of software solutions. Proficient in setting up automated testing environments and integrating diverse systems to improve operational performance.",
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
        "title": "📈 Data Analysis and Machine Learning",
        "description": "Strong foundation in data analysis and machine learning, applying these skills to develop innovative solutions in various domains. Experience in developing platforms that use machine learning models for real-time data processing and decision-making.",
        "tools": [
            <DefaultIcon component={SiPandas} />,
            <DefaultIcon component={SiPython} />,
            <DefaultIcon component={SiNumpy} />,
            <DefaultIcon component={SiScikitlearn} />,
            <DefaultIcon component={SiJupyter} />,
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
            <DefaultIcon component={SiPython} />,
            <DefaultIcon component={FaJava} />,
            <DefaultIcon component={SiCelery} />,
            <DefaultIcon component={SiRabbitmq} />,
            <DefaultIcon component={SiAmazonwebservices} />,
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
