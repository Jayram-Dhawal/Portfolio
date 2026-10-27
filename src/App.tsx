import { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  MapPinned,
  Mail,
  Phone,
  ExternalLink,
  Award,
  GraduationCap,
  Briefcase,
  Code,
  ArrowUp,
  Download,
} from "lucide-react";

// Text Writer Component
const TextWriter = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const designations = [
    "IT Support Specialist",
    "System Administrator",
    "Cloud Engineer",
    "IT Operation Engineer",
    "AI Enthusiast",
    "Tech Content Creator",
  ];

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % designations.length;
      const fullText = designations[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 60 : 85);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 5);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(15);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
      {text}
      <span className="animate-pulse">|</span>
    </span>
  );
};

// Sidebar Navigation Component - Always visible with responsive design
const SidebarNavigation = () => {
  const navItems = [
    { name: "Home", href: "#home", icon: <span className="text-lg">🏠</span> },
    {
      name: "Experience",
      href: "#experience",
      icon: <span className="text-lg">💼</span>,
    },
    {
      name: "Technical Skills",
      href: "#t-skills",
      icon: <span className="text-lg">⚙️</span>,
    },
    // {
    //   name: "Projects",
    //   href: "#projects",
    //   icon: <span className="text-lg">🚀</span>,
    // },
    {
      name: "Certifications",
      href: "#certifications",
      icon: <span className="text-lg">🏆</span>,
    },
    {
      name: "Education",
      href: "#education",
      icon: <span className="text-lg">🎓</span>,
    },
    {
      name: "Resume",
      href: "/IT Operation Engineer_Jayram Dhawal.pdf",
      download: true,
      icon: <span className="text-lg">📄</span>,
    },
    {
      name: "Contact",
      href: "#contact",
      icon: <span className="text-lg">📞</span>,
    },
  ];

  return (
    <div
      className="fixed left-0 top-0 h-full bg-gray-900 border-r border-gray-700 z-50 
                    w-16 md:w-20 lg:w-60 overflow-hidden transition-all duration-300"
    >
      <div className="flex flex-col h-full">
        {/* Profile Photo */}
        <div className="flex justify-center p-2 md:p-3 lg:p-4 border-b border-gray-700">
          <div
            className="rounded-full overflow-hidden 
                          w-12 h-12 md:w-14 md:h-14 lg:w-32 lg:h-32 
                          transition-all duration-300"
          >
            <img
              src="./Jayram1.png"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Navigation Items */}
        <div className="flex-1 pt-4 lg:pt-8 ps-3 md:ps-5 lg:ps-6">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              download={item.download}
              className="flex items-center px-2 md:px-3 lg:px-4 py-3 
                         text-gray-300 hover:bg-gray-800 hover:text-white 
                         transition-colors duration-200 group"
              title={item.name} // Tooltip for mobile/small screens
            >
              <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                {item.icon}
              </div>
              {/* Show text only on large screens */}
              <span className="ml-3 hidden lg:block group-hover:text-white transition-colors">
                {item.name}
              </span>
            </a>
          ))}
        </div>

        {/* Social Links - Only show on desktop */}
        <div className="hidden lg:flex justify-center space-x-4 p-4 border-t border-gray-700">
          <a
            href="mailto:jayram.dhawal123@gmail.com"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Mail className="h-5 w-5" />
          </a>
          <a
            href="https://linkedin.com/in/jayram-dhawal/"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="https://github.com/Jayram-Dhawal"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Github className="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

// Scroll to Top Component
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 bg-cyan-500 text-white p-3 rounded-full shadow-lg hover:bg-cyan-600 transition-all duration-300 z-40"
        >
          <ArrowUp className="h-6 w-6" />
        </button>
      )}
    </>
  );
};

// Hero Section Component
const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8"
    >
      {/* Mesh Gradient Overlay - Lower z-index */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-tr from-gray-900 via-transparent to-gray-900 opacity-80"></div>
        <div className="absolute top-0 left-0 w-48 h-48 sm:w-96 sm:h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 sm:w-96 sm:h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Top Bar with Social Icons - Higher z-index */}
      <div className="absolute top-4 left-4 right-4 sm:top-6 sm:left-6 sm:right-6 z-30 flex items-start justify-between">
        <p className="text-white animate-bounce text-left flex-1 pr-4 sm:text-lg">
          <span className="text-white">
            {/* Ex-DS Associate @
            <a href="https://blackcoffer.com" target="_blank">
              Blackcoffer
            </a>
            . */}
          </span>{" "}
          Looking for a Opportunity in IT Support Engineer / System Administrator / IT Officer / Microsoft Workplace Engineer
          
        </p>

        <div className="flex items-center justify-center flex-shrink-0">
          <img src="./QR.png" alt="Get Link" height={110} width={110} />
        </div>
      </div>

      <div className="container mx-auto py-20 z-10 relative max-w-6xl">
        <div className="flex flex-col items-start text-center sm:text-left">
          <h1 className="text-4xl md:text-7xl lg:text-7xl font-bold mb-4 w-full">
            <span className="bg-clip-text text-white">Jayram Dhawal</span>
          </h1>

          <div className="mb-6 w-full">
            <span className="text-lg sm:text-xl md:text-5xl lg:text-4xl font-bold text-white">
              I'm a{" "}
            </span>
            <TextWriter />
          </div>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed max-w-6xl text-justify">
            Microsoft Certified Cloud & IT Administrator with 3+ years of experience in IT Support and Administration,
            specializing in Cloud Infrastructure and End User Management.
            deploying and managing scalable, secure, and efficient IT
            infrastructure. My expertise spans across cloud platforms, system
            administration, and innovative IT solutions that drive business
            growth.
            {/* A self-motivated professional with expertise in AI Development, Machine Learning,
            and Full Stack Development. Passionate about extracting meaningful insights from data
            and building innovative solutions that drive business success internationally. */}
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 w-full sm:w-auto">
            <a
              href="./IT Operation Engineer_Jayram Dhawal.pdf"
              download
              className="inline-block bg-cyan-500 px-6 py-3 rounded-full text-white font-semibold hover:bg-cyan-600 transform hover:-translate-y-1 transition-all duration-300 text-center"
            >
              <Download className="inline-block mr-2 h-4 w-4" />
              Download Resume
            </a>
            <a
              href="#contact"
              className="inline-block border-2 border-gray-600 px-6 py-3 rounded-full text-white font-semibold hover:bg-gray-800 hover:border-gray-500 transform hover:-translate-y-1 transition-all duration-300 text-center"
            >
              Get In Touch
            </a>
            {/* <a
              href="#projects"
              className="inline-block border-2 border-gray-600 px-6 py-3 rounded-full text-white font-semibold hover:bg-gray-800 hover:border-gray-500 transform hover:-translate-y-1 transition-all duration-300 text-center"
            >
              View Projects
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
};

// Experience Component
const Experience = () => {
  const experiences = [
    {
      company: "Interpro Wood Industries LLC | Dubai, UAE.",
      role: "IT Administrator",
      duration: "",
      website: "https://interpro.ae/",
      responsibilities: [
        "Administer Microsoft 365 users, groups, licenses, roles and tenant settings, including license assignment and cost optimization.",
        "Manage Exchange Online mailboxes, permissions and email rules, and support users with email and collaboration services.",
        "Maintain Windows Server and domain controller environments (DC-0, DC-01 and DC-02).",
        "Troubleshoot network connectivity and manage DNS, DHCP, network devices and FortiGate firewall issues.",
        "Manage company data backup using Synology backup solutions and support data availability.",
        "Provide IT support for Windows, macOS and Linux endpoints, telephony issues and day-to-day workplace technology.",
        "Coordinate with ISPs and vendors to resolve service disruptions, manage website hosting and domain renewals.",
      ],
    },
    {
      company: "Sysnet Global Technologies Pvt Ltd.",
      role: "Technical Support Engineer",
      duration: "",
      website: "https://sysnetglobal.com/",
      responsibilities: [
        "Delivered Level 1 & 2 technical support for over 200+ end users, achieving 98% ticket resolution within SLA.",
        "Installed, configured, and maintained Windows, macOS, and Linux systems for enterprise clients.",
        "Managed software Installation, system upgrades, and remote troubleshooting to ensure smooth operations.",
        "Streamlined IT helpdesk processes, reducing issue resolution time by 25% and improving end-user satisfaction.",
        "Gained hands-on exposure to Active Directory, Entra ID, and Microsoft 365 Admin Center.",
      ],
    },
    {
      company: "Konnect Nepal Networks Pvt Ltd.",
      role: "Network Support Engineer",
      duration: "",
      website: "https://konnectnepal.com/",
      responsibilities: [
        "Resolved network outages, reducing downtime by 40%, ensuring 24/7 uptime.",
        "Configured systems, Access Points, and wireless printers.",
        "Assisted users with network-related issues and solutions.",
        "Maintained detailed documentation of network setups and changes.",
        "Coordinated with ISP to resolve network downtime issues.",
        "Monitored network performance and security, troubleshooting connectivity issues to minimize downtime.",
      ],
    },
    {
      company: "Microsense Networks Pvt Ltd.",
      role: "IT Support Executive",
      duration: "",
      website: "https://microsensenetworks.com/",
      responsibilities: [
        "Delivered IT support for 150+ employees across Windows, Mac, and Linux environments, ensuring business continuity",
        "Reduced ticket resolution time by 30% through proactive troubleshooting, process automation, and documentation.",
        "Assisted in the setup and administration of Microsoft 365 services (user accounts, Outlook configuration, Teams support).",
        "Supported deployment and maintenance of enterprise Wi-Fi, VoIP, and network infrastructure.",
        "Track IT equipment inventory and asset distribution.",
        "Conducted IT security awareness sessions and implemented basic compliance measures to minimize phishing incidents.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-16 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 text-white">
          EXPERIENCE
        </h2>

        <div className="relative">
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-purple-600"></div>

          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-12 pl-12 md:pl-16">
              <div className="absolute left-0 w-8 h-8 bg-blue-500 rounded-full border-4 border-gray-900 z-10 transform -translate-x-1/2"></div>

              <div className="bg-gray-800 p-4 sm:p-6 rounded-lg shadow-xl border border-gray-700 hover:border-blue-500 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {exp.company}
                  </h3>
                  <a
                    href={exp.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 mt-2 sm:mt-0"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
                <p className="text-lg text-gray-300 mb-1">{exp.role}</p>
                <p className="text-sm text-gray-400 mb-4">{exp.duration}</p>
                <ul className="space-y-2">
                  {exp.responsibilities.map((resp, i) => (
                    <li
                      key={i}
                      className="text-gray-300 text-sm flex items-start"
                    >
                      <span className="text-blue-400 mr-2 flex-shrink-0">
                        ▪
                      </span>
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Technical Skills Component
const TechnicalSkills = () => {
  const skillCategories = [
    {
      title: "IT Support & Systems",
      icon: <Code className="w-6 h-6" />,
      skills: ["L1/L2 end-user support", "Windows, macOS and Linux,", "hardware/software troubleshooting", "Active Directory", "Group Policy", "remote support with AnyDesk and TeamViewer", "Freshdesk incident and request management", "Outlook, Teams, OneDrive"],
    },
    {
      title: "Microsoft Cloud & Identity",
      icon: <Code className="w-6 h-6" />,
      skills: ["Microsoft 365 Admin Center", "Exchange Online", "SharePoint", "OneDrive", "Teams", "Entra ID (Azure AD)", "User and Group Administration", "RBAC", "MFA", "Conditional Access", "licensing and permission", "PowerShell and Azure CLI"],
    },
    {
      title: "Intune & Endpoint Management",
      icon: <Code className="w-6 h-6" />,
      skills: ["Enrollment: Windows, Mac, Linux, Android", "Configuration Profiles: Wi-Fi, VPN", "Compliance Policies: Password, Encryption, OS Version Control", "Application Deployment: Installations, Updates, Monitoring", "Conditional Access Integration: Endpoint & Data Security", "Device Health & Access Monitoring"],
    },
    {
      title: "Operating Systems",
      icon: <Code className="w-6 h-6" />,
      skills: [
        "Windows, Linux, MacOS, Android",
        "Installation, Configuration, Troubleshooting",
        "System Updates & Patching",
        "User & Group Management",
        "File System & Permissions",
        "Task & Process Management",
        "System Monitoring & Performance Tuning",
        "Backup & Recovery",
        "Security & Antivirus",
      ],
    },
    // {
    //   title: "DevOps & CI/CD",
    //   icon: <Code className="w-6 h-6" />,
    //   skills: [
    //     "Git",
    //     "Github",
    //     "GitHub Actions",
    //     "Jenkins",
    //     "Docker",
    //     "Kubernetes",
    //     "Azure DevOps",
    //     "Terraform",
    //     "Ansible",
    //     "Bash Scripting",
    //     "Linux",

    //   ],
    // },
    
   
    {
      title: "Networking",
      icon: <Code className="w-6 h-6" />,
      skills: [
        "OSI Model",
        "TCP/IP",
        "DHCP",
        "DNS",
        "LAN",
        "WAN",
        "Access Point",
        "Router",
        "Firewall",
        "WiFi",

      ],
    },
    
    
    {
      title: "Virtualization",
      icon: <Briefcase className="w-6 h-6" />,
      skills: ["VMware Workstation", "Hyper-V", "KVM", "VirtualBox"],
    },
    //  {
    //   title: "Programming Languages",
    //   icon: <Code className="w-6 h-6" />,
    //   skills: ["Python","PowerShell", "Bash","SQL", "C", "C++"],
    // },
    
  ];

  return (
    <section id="t-skills" className="py-16 bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 text-white">
          TECHNICAL SKILLS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-lg p-4 sm:p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300"
            >
              <div className="flex items-center mb-4 text-blue-400">
                {category.icon}
                <h3 className="text-lg sm:text-xl font-bold ml-3 text-white">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm border border-gray-700"
                  >
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
      name: "Red Hat Certified System Administrator (RHCSA)",
      institution: "Red Hat",
      link: "https://rhtapps.redhat.com/verify?certId=240-105-692",
      description: [
        /* "Learned ML algorithms: classification, regression, and clustering",
        "Studied AWS machine learning services and deployment" */,
      ],
    },

    {
      name: "Microsoft 365 Certified: Administrator Expert",
      institution: "Microsoft",
      link: "https://learn.microsoft.com/en-us/users/jayramdhawal-8856/credentials/9bb46f882af5e318",
      description: [
        /* "Explored big data characteristics and different Vs of big data",
        "Studied impact of big data and big data platforms" */,
      ],
    },

    {
      name: "Microsoft 365 Certified: Endpoint Administrator Associate",
      institution: "Microsoft",
      link: "https://learn.microsoft.com/en-us/users/jayramdhawal-8856/credentials/88c777f4bcde9e2d",
      description: [
       /*  "Explored big data characteristics and different Vs of big data",
        "Studied impact of big data and big data platforms" */,
      ],
    },

    {
      name: "Microsoft Certified: Identity and Access Administrator Associate",
      institution: "Microsoft",
      link: "https://learn.microsoft.com/en-us/users/jayramdhawal-8856/credentials/bf23d5c4ea29d221",
      description: [
       /*  "Explored big data characteristics and different Vs of big data",
        "Studied impact of big data and big data platforms" */,
      ],
    },

    {
      name: "Microsoft Certified: Azure Administrator Associate",
      institution: "Microsoft",
      link: "https://learn.microsoft.com/en-us/users/jayramdhawal-8856/credentials/af0122e228f29955?ref=https%3A%2F%2Fwww.linkedin.com%2F",
      description: [
        /* "Completed hands-on training and projects under industry experts",
        "Gained expertise in Data Analysis, ML, NLP, and cloud technologies" */,
      ],
    },
    
    
    {
      name: "Microsoft Certified: Azure Network Engineer Associate",
      institution: "Microsoft",
      link: "https://learn.microsoft.com/api/credentials/share/en-in/jayramdhawal-8856/974E5AB54A404CD4?sharingId=7F422B04E3ACD72C",
      description: [
       /*  "Explored big data characteristics and different Vs of big data",
        "Studied impact of big data and big data platforms" */,
      ],
    },
    // {
    //   name: "Microsoft Certified: Azure AI Fundamentals",
    //   institution: "Microsoft",
    //   link: "https://www.credly.com/badges/e4c0b74e-d2e0-45a0-ada0-a4539de451f6",
    //   description: [
    //     /* "Explored big data characteristics and different Vs of big data",
    //     "Studied impact of big data and big data platforms" */,
    //   ],
    // },
  ];

  return (
    <section id="certifications" className="py-16 bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 text-white">
          CERTIFICATIONS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-lg p-4 sm:p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300"
            >
              <div className="flex justify-between mb-4">
                <Award className="w-8 h-8 text-blue-400 mb-4" />
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 mt-2 sm:mt-0"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                {cert.name}
              </h3>
              <p className="text-gray-400 text-sm mb-1">{cert.institution}</p>
              {/* {cert.duration && (
                <p className="text-gray-500 text-sm mb-4">{cert.duration}</p>
              )} */}
              <ul className="space-y-2">
                {cert.description.map((desc, i) => (
                  <li
                    key={i}
                    className="text-gray-300 text-sm flex items-start"
                  >
                    <span className="text-blue-400 mr-2 flex-shrink-0">•</span>
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
    <section id="education" className="py-16 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 text-white">
          EDUCATION
        </h2>

        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-800 rounded-lg p-6 sm:p-8 border border-gray-700 hover:border-blue-500 transition-all duration-300">
            <div className="flex flex-col sm:flex-row items-start">
              <GraduationCap className="w-10 h-10 text-blue-400 mb-4 sm:mb-0 sm:mr-6 flex-shrink-0" />
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                  Bachelor of Science (Honors) in Computer Science
                </h3>
                <p className="text-lg text-white-300 mb-2">
                  With Specialization in Cloud Computing & Big Data
                </p>
                <a
                  href="https://www.reva.edu.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 mb-2 inline-flex items-center"
                >
                  Reva University
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
                <p className="text-gray-400">2022 - 2025</p>
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
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "jayram.dhawal123@gmail.com",
      link: "mailto:jayram.dhawal123@gmail.com",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+971559275063",
      link: "tel:+971559275063",
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      value: "linkedin.com/in/jayram-dhawal",
      link: "https://linkedin.com/in/jayram-dhawal",
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      value: "github.com/Jayram-Dhawal",
      link: "https://github.com/Jayram-Dhawal",
    },
    {
      icon: <MapPinned className="w-6 h-6" />,
      label: "Address",
      value: "Dubai, United Arab Emirates",
      link: "#",
    },
  ];

  return (
    <section
      id="contact"
      className="py-16 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 text-white">
          GET IN TOUCH
        </h2>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {contactDetails.map((contact, index) => (
            <a
              key={index}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700 hover:border-blue-500 transition-all duration-300 flex items-center space-x-4"
            >
              <div className="text-blue-400 flex-shrink-0">{contact.icon}</div>
              <div className="overflow-hidden">
                <p className="text-gray-400 text-sm">{contact.label}</p>
                <p className="text-white text-lg break-all">{contact.value}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-gray-900 py-8 border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          {/* <a
            href="https://www.facebook.com/heysamit"
            target="_blank"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Facebook className="h-5 w-5" />
          </a> */}
          <a
            href="https://linkedin.com/in/jayram-dhawal"
            target="_blank"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="https://github.com/Jayram-Dhawal"
            target="_blank"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="mailto:jayram.dhawal123@gmail.com"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Jayram Dhawal. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

// Main Portfolio Component
const App = () => {
  return (
    <div className="bg-gray-900 min-h-screen">
      <SidebarNavigation />

      {/* Main content with responsive margin for sidebar */}
      <div className="ml-16 md:ml-20 lg:ml-64 transition-all duration-300">
        <Hero />
        <Experience />
        <TechnicalSkills />
        <TrainingCertifications />
        <Education />
        <Contact />
        <Footer />
      </div>

      <ScrollToTop />
    </div>
  );
};

export default App;
