
import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, ExternalLink, Award, GraduationCap, Briefcase, Code, Cloud, Database, BarChart, MessageSquare, Menu, X } from 'lucide-react';

//Types
interface MousePosition {
    x: number;
    y: number;
}

// Header Animation Hook
const useHeaderAnimation = (): MousePosition => {
    const [position, setPosition] = useState<MousePosition>({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent): void => {
            setPosition({ x: e.clientX / 50, y: e.clientY / 50 });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return position;
};

// Text Writer Component
const TextWriter: React.FC = () => {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(30);

    const designations = [
        "Cloud Engineer",
        "IT Support Engineer",
        "IT Specialist",
        "Systems Administrator",
        "Desktop Support Engineer",
        "Microsoft 365 Administrator",
    ];

    useEffect(() => {
        const handleType = () => {
            const i = loopNum % designations.length;
            const fullText = designations[i];

            setText(isDeleting
                ? fullText.substring(0, text.length - 1)
                : fullText.substring(0, text.length + 1));

            setTypingSpeed(isDeleting ? 15 : 30);

            if (!isDeleting && text === fullText) {
                setTimeout(() => setIsDeleting(true), 3);
            } else if (isDeleting && text === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        const timer = setTimeout(handleType, typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, typingSpeed, designations]);

    return (
        <span className='text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent'>
            {text}<span className='animate-pulse'>|</span>
        </span>
    );
};

//Navigation Component
const Navigation: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'Home', href: '#home' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Skills', href: '#skills' },
        { name: 'Certifications', href: '#certifications' },
        { name: 'Education', href: '#education' },
        { name: 'Contact', href: '#contact' }


    ];

    return (
        <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
            }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                            SD
                        </h1>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4  font-bold">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-bold transition-colors duration-200"
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-300 hover:text-white p-2"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="md:hidden bg-gray-800/95 backdrop-blur-md">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};


// Hero Section Component
const Hero: React.FC = () => {
    const position = useHeaderAnimation();
    const [imageAngle, setImageAngle] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setImageAngle((prev) => (prev + 1) % 360);
        }, 50);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <Navigation />
            <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 relative overflow-hidden">
                {/* Animated Background */}
                <div
                    className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20"
                    style={{
                        transform: `translate(${position.x}px, ${position.y}px)`,
                        transition: 'transform 0.3s ease-out'
                    }}
                />

                {/* Mesh Gradient Overlay */}
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-tr from-gray-900 via-transparent to-gray-900 opacity-80"></div>
                    <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
                </div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="flex-1 text-white">
                            <h1 className="text-4xl md:text-6xl font-bold mb-4">
                                <span className="bg-clip-text text-white">
                                    Samit Dhawal
                                </span>
                            </h1>

                            <div className="mb-6">
                                <span className='text-3xl md:text-4xl font-bold'>I'm a </span><TextWriter />
                            </div>

                            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                                A self-motivated professional with expertise in AI Development, Machine Learning,
                                and Full Stack Development. Passionate about extracting meaningful insights from data
                                and building innovative solutions that drive business success internationally.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <a
                                    href="#contact"
                                    className="inline-block bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 px-8 py-3 rounded-full text-white font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                                >
                                    Get In Touch
                                </a>
                                <a
                                    href="#projects"
                                    className="inline-block border-2 border-gray-600 px-8 py-3 rounded-full text-white font-semibold hover:bg-gray-800 hover:border-gray-500 transform hover:-translate-y-1 transition-all duration-300"
                                >
                                    View Projects
                                </a>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl relative">
                                {/* Animated gradient border */}
                                <div
                                    className="absolute inset-0 rounded-full p-1"
                                    style={{
                                        background: `linear-gradient(${imageAngle}deg, #06b6d4, #3b82f6, #8b5cf6)`,
                                    }}
                                >
                                    <div className="w-full h-full rounded-full overflow-hidden">
                                        <img
                                            src="/samit_h1.png"
                                            alt="Samit Dhawal"
                                            className="w-full h-full object-cover rounded-full"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Glow effect */}
                            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-full blur-3xl opacity-30"></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

// CSS for proper full-width layout
const globalStyles = `
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  html, body {
    width: 100%;
    overflow-x: hidden;
  }
  
  .container {
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
  }
`;

// Add this to your main CSS file or as a style tag
export const GlobalStyle = () => (
    <style dangerouslySetInnerHTML={{ __html: globalStyles }} />
);

// Experience Component
const Experience = () => {
    const experiences = [
        {
            company: "Blackcoffer",
            role: "Data Scientist Associate",
            duration: "Apr'24 - Dec'24",
            website: "https://blackcoffer.com",
            responsibilities: [
                "Developed and managed Data Science and AI projects including predictive modeling and NLP",
                "Built AI applications using OpenAI for ChatBots and transcription APIs",
                "Led a small Data Science team ensuring successful project outcomes",
                "Engaged in client meetings and created technical proposals",
                "Developed backend APIs using FastAPI/Flask and deployed to AWS/GCP"
            ]
        },
        {
            company: "AI Variant",
            role: "Data Science Trainee",
            duration: "May'23 - Feb'24",
            website: "https://aivariant.com",
            responsibilities: [
                "Worked on Finance project for Bankruptcy Prevention using ML models",
                "Developed sentiment classification model achieving 90.51% accuracy",
                "Performed data cleaning, visualization, and feature engineering",
                "Built ETL/ELT pipelines for data extraction and transformation"
            ]
        },
        {
            company: "Bisag-N",
            role: "Data Science Intern",
            duration: "Jan'23 - Apr'23",
            website: "https://bisag-n.in",
            responsibilities: [
                "Conducted exploratory data analysis and increased data coverage",
                "Developed ML model to forecast house prices with 82.28% accuracy",
                "Improved model accuracy by 20.81% through hyperparameter tuning"
            ]
        }
    ];

    return (
        <section id="experience" className="py-20 bg-gray-900">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
                    EXPERIENCE
                </h2>

                <div className="relative">
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-600"></div>

                    {experiences.map((exp, index) => (
                        <div key={index} className={`relative flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'} mb-12`}>
                            <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                                <div className="bg-gray-800 p-6 rounded-lg shadow-xl border border-gray-700 hover:border-blue-500 transition-all duration-300">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="text-2xl font-bold text-white">{exp.company}</h3>
                                        <a href={exp.website} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                                            <ExternalLink className="w-5 h-5" />
                                        </a>
                                    </div>
                                    <p className="text-lg text-gray-300 mb-1">{exp.role}</p>
                                    <p className="text-sm text-gray-400 mb-4">{exp.duration}</p>
                                    <ul className="space-y-2">
                                        {exp.responsibilities.map((resp, i) => (
                                            <li key={i} className="text-gray-300 text-sm flex items-start">
                                                <span className="text-blue-400 mr-2">▪</span>
                                                {resp}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-gray-900"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// Projects Component
const Projects = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const projects = [
        {
            name: "ReviewInsight",
            description: [
                "Engineered element extractor to analyze 20,000+ hotel reviews",
                "Achieved 90.51% sentiment accuracy classification",
                "Reduced review analysis time by 40.75%"
            ],
            technologies: ["Python", "NLP", "Machine Learning", "Scikit", "Streamlit"],
            image: "/api/placeholder/400/250"
        },
        {
            name: "Vid2GIFs",
            description: [
                "Automated detection and conversion of expressions from videos to GIFs",
                "Integrated OpenAI and Whisper AI for expression detection",
                "Saves hours of manual video processing, delivering results in minutes"
            ],
            technologies: ["Python", "OpenAI", "Whisper AI", "Machine Learning"],
            image: "/api/placeholder/400/250"
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="projects" className="py-20 bg-gray-800">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
                    PROJECTS
                </h2>

                <div className="relative overflow-hidden">
                    <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                        {projects.map((project, index) => (
                            <div key={index} className="w-full flex-shrink-0 px-4">
                                <div className="max-w-4xl mx-auto bg-gray-900 rounded-lg shadow-xl border border-gray-700 hover:border-blue-500 transition-all duration-300">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="relative h-64 md:h-auto">
                                            <img
                                                src={project.image}
                                                alt={project.name}
                                                className="w-full h-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent md:bg-gradient-to-r"></div>
                                        </div>

                                        <div className="p-6">
                                            <h3 className="text-2xl font-bold text-white mb-4">{project.name}</h3>
                                            <ul className="space-y-2 mb-6">
                                                {project.description.map((desc, i) => (
                                                    <li key={i} className="text-gray-300 flex items-start">
                                                        <span className="text-blue-400 mr-2">•</span>
                                                        {desc}
                                                    </li>
                                                ))}
                                            </ul>
                                            <div className="flex flex-wrap gap-2">
                                                {project.technologies.map((tech, i) => (
                                                    <span key={i} className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm border border-gray-700">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-center mt-6 space-x-2">
                        {projects.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${currentIndex === index ? 'bg-blue-500 w-8' : 'bg-gray-600'
                                    }`}
                                aria-label={`Go to project ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

// Technical Skills Component
const TechnicalSkills = () => {
    const skillCategories = [
        {
            title: "Languages",
            icon: <Code className="w-6 h-6" />,
            skills: ["Python", "SQL", "JavaScript"]
        },
        {
            title: "Data Science",
            icon: <BarChart className="w-6 h-6" />,
            skills: ["Machine Learning", "Natural Language Processing", "Neural Networks", "Forecasting", "Recommendation Engines"]
        },
        {
            title: "ML Algorithms",
            icon: <MessageSquare className="w-6 h-6" />,
            skills: ["Linear Regression", "Logistic Regression", "Decision Tree", "KNN", "SVM", "Naive Bayes", "Random Forest", "K-Means"]
        },
        {
            title: "Frameworks",
            icon: <Code className="w-6 h-6" />,
            skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Plotly", "Scikit-learn", "PyTorch"]
        },
        {
            title: "Backend",
            icon: <Briefcase className="w-6 h-6" />,
            skills: ["Flask", "FastAPI", "React JS", "Streamlit"]
        },
        {
            title: "Databases",
            icon: <Database className="w-6 h-6" />,
            skills: ["MySQL", "MongoDB", "PostgreSQL", "Vector Database"]
        },
        {
            title: "Cloud",
            icon: <Cloud className="w-6 h-6" />,
            skills: ["AWS (S3, EC2, Athena)", "GCP (Compute Engine, BigQuery)", "IBM Cloud"]
        }
    ];

    return (
        <section id="skills" className="py-20 bg-gray-900">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
                    TECHNICAL SKILLS
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300">
                            <div className="flex items-center mb-4 text-blue-400">
                                {category.icon}
                                <h3 className="text-xl font-bold ml-3 text-white">{category.title}</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, i) => (
                                    <span key={i} className="px-3 py-1 bg-gray-900 text-gray-300 rounded-full text-sm border border-gray-700">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// Training & Certifications Component
const TrainingCertifications = () => {
    const certifications = [
        {
            name: "Data Science Certified",
            institution: "Excelr, Bangalore",
            duration: "May'23 - Oct'23",
            description: [
                "Completed hands-on training and projects under industry experts",
                "Gained expertise in Data Analysis, ML, NLP, and cloud technologies"
            ]
        },
        {
            name: "AWS Academy Machine Learning",
            institution: "AWS Academy (Online)",
            description: [
                "Learned ML algorithms: classification, regression, and clustering",
                "Studied AWS machine learning services and deployment"
            ]
        },
        {
            name: "Big Data Concepts",
            institution: "IBM Skills Network",
            description: [
                "Explored big data characteristics and different Vs of big data",
                "Studied impact of big data and big data platforms"
            ]
        }
    ];

    return (
        <section id="certifications" className="py-20 bg-gray-800">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
                    TRAINING & CERTIFICATIONS
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certifications.map((cert, index) => (
                        <div key={index} className="bg-gray-900 rounded-lg p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300">
                            <Award className="w-8 h-8 text-blue-400 mb-4" />
                            <h3 className="text-xl font-bold text-white mb-2">{cert.name}</h3>
                            <p className="text-gray-400 text-sm mb-1">{cert.institution}</p>
                            {cert.duration && <p className="text-gray-500 text-sm mb-4">{cert.duration}</p>}
                            <ul className="space-y-2">
                                {cert.description.map((desc, i) => (
                                    <li key={i} className="text-gray-300 text-sm flex items-start">
                                        <span className="text-blue-400 mr-2">•</span>
                                        {desc}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// Education Component
const Education = () => {
    return (
        <section id="education" className="py-20 bg-gray-900">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
                    EDUCATION
                </h2>

                <div className="max-w-3xl mx-auto">
                    <div className="bg-gray-800 rounded-lg p-8 border border-gray-700 hover:border-blue-500 transition-all duration-300">
                        <div className="flex items-start">
                            <GraduationCap className="w-10 h-10 text-blue-400 mr-6 flex-shrink-0" />
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-2">
                                    Bachelor of Technology
                                </h3>
                                <p className="text-lg text-gray-300 mb-2">
                                    Computer Science & Engineering with specialization in Big Data & Analytics
                                </p>
                                <a
                                    href="https://ganpatuniversity.ac.in"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-400 hover:text-blue-300 mb-2 inline-flex items-center"
                                >
                                    Institute of Computer Technology, Ganpat University
                                    <ExternalLink className="w-4 h-4 ml-2" />
                                </a>
                                <p className="text-gray-400">2019 - 2023</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Contact Component
const Contact = () => {
    const contactDetails = [
        { icon: <Mail className="w-6 h-6" />, label: "Email", value: "samitdhawal10@gmail.com", link: "mailto:samitdhawal10@gmail.com" },
        { icon: <Phone className="w-6 h-6" />, label: "Phone", value: "+91-8734012353", link: "tel:+977-8734012353" },
        { icon: <Github className="w-6 h-6" />, label: "GitHub", value: "github.com/Samit-Dhawal", link: "https://github.com/Samit-Dhawal" },
        { icon: <Linkedin className="w-6 h-6" />, label: "LinkedIn", value: "linkedin.com/in/samitdhawal", link: "https://linkedin.com/in/samitdhawal" }
    ];

    return (
        <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
                    Get In Touch
                </h2>

                <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
                    {contactDetails.map((contact, index) => (
                        <a
                            key={index}
                            href={contact.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 flex items-center space-x-4"
                        >
                            <div className="text-blue-400">{contact.icon}</div>
                            <div>
                                <p className="text-gray-400 text-sm">{contact.label}</p>
                                <p className="text-white text-lg">{contact.value}</p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

// Main Portfolio Component
const Check = () => {
    return (
        <div className="bg-gray-900 min-h-screen px-20">
            <Hero />
            <Experience />
            <Projects />
            <TechnicalSkills />
            <TrainingCertifications />
            <Education />
            <Contact />

        </div>
    );
};

export default Check;