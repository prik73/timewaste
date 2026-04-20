import type { Question } from '../types'

export const IOT_QUESTIONS: Question[] = [
  {
    "q": "Which of the following sensors is an example of a Zero Order System?",
    "o": ["Thermometer", "Potentiometer", "Accelerometer", "Gyroscope"],
    "a": "Potentiometer"
  },
  {
    "q": "Which Zigbee device type acts as the root and also functions as the network bridge?",
    "o": ["Zigbee Router", "Zigbee End Device", "Zigbee Coordinator", "Zigbee Gateway"],
    "a": "Zigbee Coordinator"
  },
  {
    "q": "Which physical principle primarily explains the operation of hydraulic actuators?",
    "o": ["Pascal's law", "Bernoulli's principle", "Ideal gas law", "Faraday's law"],
    "a": "Pascal's law"
  },
  {
    "q": "At which OSI layer does the 6LoWPAN protocol primarily operate to enable IPv6 packets over IEEE 802.15.4?",
    "o": ["Physical Layer", "Network Layer (Adaptation Layer)", "Transport Layer", "Application Layer"],
    "a": "Network Layer (Adaptation Layer)"
  },
  {
    "q": "Which IEEE 802.15.4 variant introduces Direct Sequence Ultra-Wideband (UWB) Physical Layer?",
    "o": ["802.15.4a", "802.15.4b", "802.15.4e", "802.15.4g"],
    "a": "802.15.4a"
  },
  {
    "q": "In the context of sensor characteristics, the properties of the system's transient response to an input are collectively termed as ______ characteristics.",
    "o": ["Dynamic characteristics", "Static characteristics", "Time-domain characteristics", "Steady-state characteristics"],
    "a": "Dynamic characteristics"
  },
  {
    "q": "In the context of the WirelessHART standard (IEC 62591) operating in the 2.4 GHz ISM band, what is the frequency gap maintained between two adjacent channels?",
    "o": ["2 MHz", "5 MHz", "20 MHz", "25 MHz"],
    "a": "5 MHz"
  },
  {
    "q": "State True or False. A Passive NFC device can neither transmit nor read any data.",
    "o": ["True", "False"],
    "a": "False"
  },
  {
    "q": "What is the data rate of Bluetooth 2.0?",
    "o": ["1 Mbps", "2 Mbps", "3 Mbps", "4 Mbps"],
    "a": "3 Mbps"
  },
  {
    "q": "Fill in the blank: The primary focus of the ISA 100.11a technology is the implementation of __________ in the industrial environment.",
    "o": ["Automation", "Connectivity", "Predictive maintenance", "Security"],
    "a": "Automation"
  },
  {
    "q": "State True or False. Classical Internet is not meant for constrained IoT devices.",
    "o": ["True", "False"],
    "a": "True"
  },
  {
    "q": "In the context of CoRE Service Discovery, IoT devices (acting as mini web servers) register their resources to the Resource Directory (RD) using which interface?",
    "o": ["Lookup Interface (LI)", "Transport Interface (TI)", "Registration Interface (RI)", "Application Interface (AI)"],
    "a": "Registration Interface (RI)"
  },
  {
    "q": "In the context of QoS for IoT Networks, which data timeliness policy mandates dropping stale data and notifying the application that a deadline has been missed?",
    "o": ["Latency budget policy", "Deadline policy", "Retention policy", "Priority policy"],
    "a": "Deadline policy"
  },
  {
    "q": "State True or False. MQTT works on the Request/Response framework on top of UDP.",
    "o": ["True", "False"],
    "a": "False"
  },
  {
    "q": "Which of the following is/are advantages of XMPP?",
    "o": ["Interoperability", "Extensibility", "Flexibility", "All of these"],
    "a": "All of these"
  },

  // Week 2
  {
    "q": "Which type of waste in the Lean Production System is defined as \"Non value-added movement of people\"?",
    "o": ["Transportation", "Motion", "Waiting", "Defects"],
    "a": "Motion"
  },
  {
    "q": "Which type of business model value proposition exists when a bunch of goods/services are of higher value compared to the individual value of that product?",
    "o": ["Efficiency-centric", "Novelty-centric", "Lock-in centric", "Complementary"],
    "a": "Complementary"
  },
  {
    "q": "In the context of Lean Manufacturing wastes, what causes \"Processing waste\"?",
    "o": ["Producing products before demand", "Use of inappropriate tools for processing", "Excess inventory on the factory floor", "Non-value added movement of personnel"],
    "a": "Use of inappropriate tools for processing"
  },
  {
    "q": "Which resource is primarily utilized to achieve \"Optimization\" in smart and connected products?",
    "o": ["Optimization algorithms", "Custom software", "External data sources", "Sensors only"],
    "a": "Optimization algorithms"
  },
  {
    "q": "Which specific \"New Material\" mentioned in the context of Physical Megatrends is described as being stronger than steel but thinner than a human hair?",
    "o": ["Carbon Fiber", "Graphene", "Aerogel", "Titanium Alloy"],
    "a": "Graphene"
  },
  {
    "q": "What are the three types of work to be noticed when analyzing \"Value streams\"?",
    "o": ["Design, Production, and Delivery", "Value-added, Incidental, and Pure Waste", "Manual, Automated, and Hybrid", "Planning, Execution, and Monitoring"],
    "a": "Value-added, Incidental, and Pure Waste"
  },
  {
    "q": "What are the three categories of Megatrends driving the Fourth Industrial Revolution?",
    "o": ["Economic, Social, Political", "Physical, Digital, Biological", "Hardware, Software, Network", "Local, National, Global"],
    "a": "Physical, Digital, Biological"
  },
  {
    "q": "Which material except Graphene is cited as an example of \"New Materials\" under Physical Megatrends?",
    "o": ["Silicon", "Thermoset plastics", "Copper", "Aluminum"],
    "a": "Thermoset plastics"
  },
  {
    "q": "How do you define Sustainability in the context of a Manufacturing Industry?",
    "o": ["To increase profit margins annually", "To continue at a fixed rate", "To eliminate all waste products", "To automate all processes"],
    "a": "To continue at a fixed rate"
  },
  {
    "q": "In the context of \"Government Regulations,\" what does the acronym EPA stand for?",
    "o": ["Economic Policy Agency", "Environmental Protection Agencies", "Energy Production Association", "Employment Protection Act"],
    "a": "Environmental Protection Agencies"
  },
  {
    "q": "Which of the following is a characteristic of an economic depression?",
    "o": ["Duration is less than a year", "High employment rates", "Exponential unemployment increase", "Increase in available credit"],
    "a": "Exponential unemployment increase"
  },
  {
    "q": "Which layer in the architecture of smart and connected products is responsible for collecting and acquiring data?",
    "o": ["Digital layer", "Connectivity layer", "Physical layer", "Application layer"],
    "a": "Physical layer"
  },
  {
    "q": "Which of the following is a \"Lock-in centric\" value creation model?",
    "o": ["Focusing on novelty", "Improving transaction efficiency", "Preventing customer migration", "Offering complementary products"],
    "a": "Preventing customer migration"
  },
  {
    "q": "Which characteristic of smart factories involves \"Self-configuration\"?",
    "o": ["Proactivity", "Transparency", "Agility", "Connection"],
    "a": "Agility"
  },
  {
    "q": "In the automation pyramid of a smart factory, which level is at the very top?",
    "o": ["Device level", "Control level", "Manufacturing execution system level", "ERP level"],
    "a": "ERP level"
  },

  // Week 3
  {
    "q": "Who developed the first functioning Augmented Reality (AR) system in 1992?",
    "o": ["Ivan Sutherland", "Louis Rosenberg", "Thamos Caudell", "Morton Heilig"],
    "a": "Louis Rosenberg"
  },
  {
    "q": "In the 5C Architecture of CPS, which level provides the \"Collaborative Diagnostics\" functionality?",
    "o": ["Cyber Level", "Cognition Level", "Configuration Level", "Conversion Level"],
    "a": "Cognition Level"
  },
  {
    "q": "State True or False: AR technologies are widely used in the field of medical science to perform complex surgeries in the domain of Neurosurgery, MRI, and X-Ray systems.",
    "o": ["True", "False"],
    "a": "True"
  },
  {
    "q": "Which \"V\" of Big Data refers to the fact that Big Data supports diverse categories and formats of data with no restrictions over input data formats?",
    "o": ["Volume", "Velocity", "Variety", "Value"],
    "a": "Variety"
  },
  {
    "q": "In the context of Data Acquisition in Industry 4.0, what are the three main steps followed during the \"Data pre-processing\" of relational data?",
    "o": ["Collection, Transmission, Storage", "Integration, Clearing, Redundancy Mitigation", "Analysis, Visualization, Decision Making", "Encryption, Compression, Archiving"],
    "a": "Integration, Clearing, Redundancy Mitigation"
  },
  {
    "q": "What is the first step involved in the working of a Virtual Reality (VR) system?",
    "o": ["Display screen shows the user view through lenses", "Processing unit creates sensations for the user", "Lenses focus and reshape the image for each eye", "Sensors estimate the user's motion and direction in space"],
    "a": "Sensors estimate the user's motion and direction in space"
  },
  {
    "q": "State True or False: Brain-machine interfaces are engineered systems based on cognition and neuroscience and are a part of CPS.",
    "o": ["True", "False"],
    "a": "True"
  },
  {
    "q": "What are PMUs in the context of CPS for Smart Grid?",
    "o": ["Power Management Unit", "Phasor Measurement Unit", "Performance Monitoring Unit", "Project Management Unit"],
    "a": "Phasor Measurement Unit"
  },
  {
    "q": "Which of the following options best describes a Collaboration Platform?",
    "o": ["Manufacturing hardware device", "Business networking software", "Entertainment social app", "Financial record database"],
    "a": "Business networking software"
  },
  {
    "q": "What are the five phases of the Product Lifecycle?",
    "o": ["Plan, Do, Check, Act", "Design, Build, Test, Deploy", "Ideate, Create, Market, Sell", "Visualize, Explain, Perceive, Retire"],
    "a": "Visualize, Explain, Perceive, Retire"
  },
  {
    "q": "Which of the following is a Technique/Method proposed to refine production across the lifecycle?",
    "o": ["ABC (Activity Based Costing)", "XYZ Analysis", "PQR Theory", "LMN Modeling"],
    "a": "ABC (Activity Based Costing)"
  },
  {
    "q": "Which of the following best describes Artificial Intelligence (AI)?",
    "o": ["Hardware manufacturing process", "Manmade thinking power", "Database management system", "Manual data entry"],
    "a": "Manmade thinking power"
  },
  {
    "q": "Fill in the blank: Declarative knowledge is also known as ________.",
    "o": ["Operational knowledge", "Heuristic knowledge", "Relational knowledge", "Procedural knowledge"],
    "a": "Relational knowledge"
  },
  {
    "q": "Which of the following is a usecase of AI in Industry 4.0?",
    "o": ["Increasing manual labor", "Reducing internet usage", "Slowing production cycles", "Ensuring machine safety"],
    "a": "Ensuring machine safety"
  },
  {
    "q": "Which of the following statement best describes the characteristics of Unstructured data?",
    "o": ["Possesses pre-defined model", "Stored in relational databases", "Managed by SQL", "No pre-defined model"],
    "a": "No pre-defined model"
  },

  // Week 4
  {
    "q": "Which component of Cybersecurity protects applications from outer threats, often using firewalls?",
    "o": ["Application Security", "Network Security", "Cloud Security", "End-user Education"],
    "a": "Application Security"
  },
  {
    "q": "What is Zephyr?",
    "o": ["A Smart Sensor", "An Website", "An OS", "None of these"],
    "a": "An OS"
  },
  {
    "q": "Fill in the blank: Most of the commonly used ransomware attacks use ________, where the user receives a legal file as an attachment and is skillfully forced to download or open it.",
    "o": ["Worm", "Virus", "Trojan", "Malware"],
    "a": "Trojan"
  },
  {
    "q": "In the Software-Defined Cloud Manufacturing Architecture (SDCMA), which component is responsible for \"detecting abnormality\"?",
    "o": ["Control Elements (CE)", "Hardware Plane", "Ensemble Intelligence Framework (EIF)", "Software Plane"],
    "a": "Ensemble Intelligence Framework (EIF)"
  },
  {
    "q": "Fill in the blank: Typically, ________ form the core of the smart sensor nodes.",
    "o": ["Transistors", "Microprocessors", "MOSFETS", "Diodes"],
    "a": "Microprocessors"
  },
  {
    "q": "Which cybersecurity component involves \"strategies to maintain the availability, integrity, and confidentiality of business data\"?",
    "o": ["Network Security", "Operational Security", "Information Security", "Physical Security"],
    "a": "Information Security"
  },
  {
    "q": "Which of the following is NOT a protected asset in cybersecurity?",
    "o": ["Hardware", "Software", "Data", "Public domain information"],
    "a": "Public domain information"
  },
  {
    "q": "How does IIoT modify traditional automation techniques?",
    "o": ["By removing all sensors", "By exploiting IT technology", "By using manual tools", "By ignoring data"],
    "a": "By exploiting IT technology"
  },
  {
    "q": "Which of the following has been identified as a major challenge in IIoT deployment?",
    "o": ["Excessive standardization", "Lack of generated data", "Surplus of skilled workers", "Data integration challenges"],
    "a": "Data integration challenges"
  },
  {
    "q": "How does Industrial Internet assist Power Production?",
    "o": ["Increases inspection costs", "Locates broken equipment easily", "Disconnects the grid", "Hides performance data"],
    "a": "Locates broken equipment easily"
  },
  {
    "q": "State True or False: The Industrial Internet can benefit commercial aviation industries by improving both airline operations and asset management.",
    "o": ["True", "False"],
    "a": "True"
  },
  {
    "q": "What is considered the primary source of IIoT data?",
    "o": ["Cloud Server", "Actuator", "Sensor", "Microprocessor"],
    "a": "Sensor"
  },
  {
    "q": "Fill in the blank: Conventional Sensing is primarily involved in ________.",
    "o": ["Feedback automation", "Cloud computing", "Internet connectivity", "Big data analytics"],
    "a": "Feedback automation"
  },
  {
    "q": "Which challenge of Industry 4.0 is directly associated with ageing society and lack of skilled workers?",
    "o": ["Dynamic market conditions", "Resource utilization", "Constrained workforce", "Product management"],
    "a": "Constrained workforce"
  },
  {
    "q": "Efficient use of materials, water, and energy is categorized under which expected feature of Industry 4.0?",
    "o": ["Competitiveness", "Innovation", "Workforce", "Efficiency"],
    "a": "Efficiency"
  },

  // Week 5
  {
    "q": "In the context of the \u201cValue Proposition\u201d building block, which of the following is considered a qualitative value?",
    "o": ["Price", "Post-purchase cost reduction", "Customer experience", "Product performance"],
    "a": "Customer experience"
  },
  {
    "q": "A business model that serves specific and specialized customer groups is known as a:",
    "o": ["Mass market", "Segmented market", "Niche market", "Diversified market"],
    "a": "Niche market"
  },
  {
    "q": "Credits and cash owned by an organization are classified under which asset category?",
    "o": ["Physical assets", "Human assets", "Intellectual assets", "Financial assets"],
    "a": "Financial assets"
  },
  {
    "q": "Which component of the IIoT business model focuses on solving the complexities and uncertainties inherent in interactions between various business actors?",
    "o": ["Value Proposition", "Value Network", "Value Capturing", "Value Communication"],
    "a": "Value Communication"
  },
  {
    "q": "The \u201cInformation Domain\u201d in IIRA handles data persistence. In the context of Big Data generated by IIoT, which \u201cV\u201d refers to the trustworthiness or quality of the data?",
    "o": ["Volume", "Velocity", "Variety", "Veracity"],
    "a": "Veracity"
  },
  {
    "q": "Which of the following is considered a \u201cLagging KPI\u201d for occupational safety?",
    "o": ["Percentage of workers with adequate safety training", "Number of OSH audits performed", "Frequency of observed unsafe behavior", "Number of production days lost due to sickness absence"],
    "a": "Number of production days lost due to sickness absence"
  },
  {
    "q": "Caterpillar uses IoT combined with which technology for machine monitoring?",
    "o": ["Virtual Reality (VR)", "Augmented Reality (AR)", "Blockchain technology", "Quantum computing"],
    "a": "Augmented Reality (AR)"
  },
  {
    "q": "Fill in the blank: Maersk uses IoT primarily for ________.",
    "o": ["Smart Logistics", "Manufacturing cars", "Generating electricity", "Mining coal"],
    "a": "Smart Logistics"
  },
  {
    "q": "What does a Business Model primarily describe?",
    "o": ["Technical hardware specifications", "Rationale of creating value", "Employee holiday schedules", "Office floor plan"],
    "a": "Rationale of creating value"
  },
  {
    "q": "State True or False: Lack of interoperability leads to increased complexity.",
    "o": ["True", "False"],
    "a": "True"
  },
  {
    "q": "Fill in the blank: The three categories of IIoT business models are Cloud-based, Process-Oriented, and ______ Business Model.",
    "o": ["Hardware-Oriented", "Service-Oriented", "Product-Oriented", "Data-Oriented"],
    "a": "Service-Oriented"
  },
  {
    "q": "In the IIRA Framework, what are defined as \u201ccollection of ideas which describe, analyze, and solve the set of specific concerns\u201d?",
    "o": ["Stakeholders", "Architecture Frames", "Viewpoints", "Testbeds"],
    "a": "Viewpoints"
  },
  {
    "q": "Which architecture pattern allows for fast device-to-device integration with minimum response time?",
    "o": ["Three-tier architecture", "Client-Server architecture", "Layered Databus pattern", "Gateway-mediated architecture"],
    "a": "Layered Databus pattern"
  },
  {
    "q": "Which element in the Usage Viewpoint of IIRA is defined as the \u201cbasic unit of work\u201d carried out by a party assuming a role?",
    "o": ["Task", "Activity", "Agent", "Workflow"],
    "a": "Task"
  },
  {
    "q": "Which IIRA viewpoint relates to the technical representation of an IIoT system including interfaces, protocols, and behaviors?",
    "o": ["Functional Viewpoint", "Implementation Viewpoint", "Usage Viewpoint", "Business Viewpoint"],
    "a": "Implementation Viewpoint"
  },

  // Week 6
  {
    "q": "What is the usual packet size requirement for uRLLC?",
    "o": ["8 B", "16\u201332 B", "32\u2013200 B", "1024 B"],
    "a": "32\u2013200 B"
  },
  {
    "q": "Fill in the blank: ModBus-TCP is an industrial communication protocol that is primarily designed to run over ______.",
    "o": ["Serial RS-232 links", "Standard Ethernet and TCP/IP", "Bluetooth Low Energy", "Satellite communication"],
    "a": "Standard Ethernet and TCP/IP"
  },
  {
    "q": "Which Profibus variant is designed for high-speed communication between automation systems and equipment using RS-485 or fiber optics?",
    "o": ["Profibus PA", "Profibus FMS", "Profibus DP", "Profinet"],
    "a": "Profibus DP"
  },
  {
    "q": "What is the maximum transmission rate of the \u201cStandard CC-Link\u201d technology?",
    "o": ["156 kbps", "500 kbps", "10 Mbps", "1 Gbps"],
    "a": "10 Mbps"
  },
  {
    "q": "Which gas sensing method relies specifically on \u201cElectrical Variation\u201d for detection?",
    "o": ["Acoustic Methods", "Optic Methods", "Metal Oxide Semiconductors (MOS)", "Calorimetric Method"],
    "a": "Metal Oxide Semiconductors (MOS)"
  },
  {
    "q": "In manufacturing processes, Fieldbus is primarily used for which type of data transfer?",
    "o": ["Clock synchronization", "High-performance analytics", "Periodic I/O data transfer", "Wide Area Network (WAN) management"],
    "a": "Periodic I/O data transfer"
  },
  {
    "q": "Under which category of sensors do \u201csmoke detectors\u201d and \u201calcohol detectors\u201d fall in an industrial monitoring context?",
    "o": ["Optical sensors", "Thermal sensors", "Chemical sensors", "Electrical sensors"],
    "a": "Chemical sensors"
  },
  {
    "q": "Which variant of the CC-Link protocol is specifically designed to ensure error-free data communication of large data through Industrial Ethernet?",
    "o": ["CC-Link Safety", "CC-Link LT", "CC-Link IE", "CC-Link RTU"],
    "a": "CC-Link IE"
  },
  {
    "q": "Improvement of which of the following is emphasized as a key concern in IIoT systems?",
    "o": ["Only profitability", "Only system throughput", "Efficiency, productivity, health, and safety", "Hardware miniaturization alone"],
    "a": "Efficiency, productivity, health, and safety"
  },
  {
    "q": "State True or False: The output voltage of the LM35 sensor is linearly proportional to Kelvin temperature.",
    "o": ["True", "False"],
    "a": "False"
  },
  {
    "q": "Fill in the blank: Air quality monitoring and alert systems with gas sensing units are primarily deployed to ______.",
    "o": ["Improve network bandwidth", "Avoid risks of harmful gas exposure", "Reduce hardware cost", "Increase cloud storage"],
    "a": "Avoid risks of harmful gas exposure"
  },
  {
    "q": "Which of the following belongs to the Fieldbus category?",
    "o": ["Profinet", "EtherNet/IP", "TSN", "Modbus-RTU"],
    "a": "Modbus-RTU"
  },
  {
    "q": "Which Profibus variant handles communication between PCs and Programmable Logic Controllers?",
    "o": ["Profibus DP", "Profibus PA", "Profibus FMS", "Profibus IE"],
    "a": "Profibus FMS"
  },
  {
    "q": "Which network topology is used by Interbus?",
    "o": ["Bus", "Star", "Active ring", "Hybrid"],
    "a": "Active ring"
  },
  {
    "q": "Which frequency band is classified as high band in 5G NR?",
    "o": ["< 1 GHz", "1\u20136 GHz", "> 24 GHz", "6\u201324 GHz"],
    "a": "> 24 GHz"
  },

  // Week 7
  {
    "q": "What does LPWAN stand for?",
    "o": ["Low Power Wireless Access Network", "Long Power Wide Area Network", "Low Power Wide Area Network", "Long Power Wireless Area Network"],
    "a": "Low Power Wide Area Network"
  },
  {
    "q": "LoRa technology operates in which of the following frequency bands?",
    "o": ["License-free sub-gigahertz bands", "Licensed microwave bands", "Optical frequency bands", "Millimeter-wave bands"],
    "a": "License-free sub-gigahertz bands"
  },
  {
    "q": "What is the maximum wireless throughput achieved by SIGFOX?",
    "o": ["1 kbps", "500 bps", "10 kbps", "100 bps"],
    "a": "100 bps"
  },
  {
    "q": "Which IEEE standard forms the basis of the physical and MAC layers of Zigbee?",
    "o": ["IEEE 802.11", "IEEE 802.3", "IEEE 802.15.4", "IEEE 802.16"],
    "a": "IEEE 802.15.4"
  },
  {
    "q": "Which of the following is NOT a Zigbee-supported network topology?",
    "o": ["Star", "Tree", "Mesh", "Ring"],
    "a": "Ring"
  },
  {
    "q": "What is Xbee in the context of Zigbee communication?",
    "o": ["A network protocol", "A product that uses the Zigbee protocol", "A routing algorithm", "A MAC-layer standard"],
    "a": "A product that uses the Zigbee protocol"
  },
  {
    "q": "Which sensor in an autonomous vehicle generates data in the range of 20\u201340 MB/s?",
    "o": ["GPS", "RADAR", "Camera", "SONAR"],
    "a": "Camera"
  },
  {
    "q": "What type of computing processes data closer to sensors before sending it to the cloud?",
    "o": ["Edge computing", "Centralized computing", "Distributed computing", "Batch computing"],
    "a": "Edge computing"
  },
  {
    "q": "In an end-to-end IIoT processing pipeline, where are rules initially configured?",
    "o": ["At the sensor nodes", "In the cloud", "At the edge analytics agent", "At the actuators"],
    "a": "In the cloud"
  },
  {
    "q": "What is the main objective of AR drones-based precision agriculture?",
    "o": ["Monitoring soil moisture", "Precise fertilizer spray to weeds", "Autonomous harvesting", "Livestock monitoring"],
    "a": "Precise fertilizer spray to weeds"
  },
  {
    "q": "SWAMP enables a smart management layer between which two systems?",
    "o": ["Water distribution network and farm-based irrigation system", "Cloud services and mobile applications", "Sensors and actuators", "Enterprise and automation networks"],
    "a": "Water distribution network and farm-based irrigation system"
  },
  {
    "q": "What do process variables represent in an industrial control system?",
    "o": ["Controller decision outputs", "Standard operating limits", "Values of process parameters measured using sensors", "Signals sent to actuators"],
    "a": "Values of process parameters measured using sensors"
  },
  {
    "q": "What is the fundamental element of industrial control systems for automatic control?",
    "o": ["Control loops", "Sensors", "Controllers", "Actuators"],
    "a": "Control loops"
  },
  {
    "q": "Which component of a SCADA system interfaces directly with sensors to read and convert data?",
    "o": ["The Supervisory System", "The Human Machine Interface (HMI)", "The Communication Infrastructure", "Programmable Logic Controllers (PLC) and Remote Terminal Units (RTU)"],
    "a": "Programmable Logic Controllers (PLC) and Remote Terminal Units (RTU)"
  },
  {
    "q": "What is a primary advantage of PLCs over traditional hard-wired systems?",
    "o": ["They are physically larger and more durable", "They can be easily reprogrammed, making maintenance and upgrades more economical", "They operate at a much higher voltage", "They do not require a power supply"],
    "a": "They can be easily reprogrammed, making maintenance and upgrades more economical"
  },

  // Week 8
  {
    "q": "What is the purpose of feature extraction in ML?",
    "o": ["Convert raw data into compressed bitstreams only", "Convert raw data to information that relates to the physical state of the asset", "Encrypt sensor data for security", "Remove time stamps from data"],
    "a": "Convert raw data to information that relates to the physical state of the asset"
  },
  {
    "q": "What is a primary goal of applying analytics in industrial systems?",
    "o": ["Maximizing data volume", "Replacing all controllers with cloud services", "Improving operational platform, performance, and safety", "Eliminating human workers completely"],
    "a": "Improving operational platform, performance, and safety"
  },
  {
    "q": "What kind of data does supervised learning require?",
    "o": ["Completely unlabeled streams", "Only binary sensor signals", "Labeled datasets with known output classes or values", "Data without any prior samples"],
    "a": "Labeled datasets with known output classes or values"
  },
  {
    "q": "Which of the following is explicitly listed as a goal of IIoT analytics?",
    "o": ["Manual inspection", "Dynamic operations optimization", "Hardware miniaturization", "Network routing"],
    "a": "Dynamic operations optimization"
  },
  {
    "q": "What approach replaces physics-based models in modern IIoT analytics?",
    "o": ["Data-driven modelling using ML and DL", "Heuristic optimization", "Rule-based control", "Manual calibration"],
    "a": "Data-driven modelling using ML and DL"
  },
  {
    "q": "Data Science is an interdisciplinary field involving which of the following areas?",
    "o": ["Only computer science", "Only data processing", "Only artificial intelligence", "Computer science, statistics, mathematics, machine learning, and domain expertise"],
    "a": "Computer science, statistics, mathematics, machine learning, and domain expertise"
  },
  {
    "q": "Fill in the blank: Unsupervised learning is primarily used for identifying similar groups of data called ______.",
    "o": ["Clustering", "Classification", "Regression", "Prediction"],
    "a": "Clustering"
  },
  {
    "q": "Which clustering algorithm allows a data point to belong to more than one cluster?",
    "o": ["K-Means", "Linear Regression", "Decision Tree", "Fuzzy c-Means"],
    "a": "Fuzzy c-Means"
  },
  {
    "q": "Fill in the blank: Machine learning algorithms are not useful for ______ data.",
    "o": ["Structured", "Temporal", "High dimensional", "Labeled"],
    "a": "High dimensional"
  },
  {
    "q": "State True or False: Deep learning mimics the working function of billions of neurons in the human brain.",
    "o": ["True", "False"],
    "a": "True"
  },
  {
    "q": "Platform-as-a-Service mainly allows industries to do what?",
    "o": ["Only deploy hardware", "Self-develop applications", "Store raw sensor data only", "Replace networking infrastructure"],
    "a": "Self-develop applications"
  },
  {
    "q": "Which type of data is explicitly mentioned as contributing to cloud demand in IIoT?",
    "o": ["Image data", "M2M sensor data", "Social media data", "Textual reports"],
    "a": "M2M sensor data"
  },
  {
    "q": "State True or False: Increase in number of devices makes IIoT ecosystems more complex, necessitating cloud-based device management.",
    "o": ["True", "False"],
    "a": "True"
  },
  {
    "q": "What is one key purpose of a Service Level Agreement (SLA) for IIoT?",
    "o": ["Eliminating cloud providers", "Promising deliverables from cloud providers", "Increasing hardware redundancy", "Enforcing local computation"],
    "a": "Promising deliverables from cloud providers"
  },
  {
    "q": "Fill in the blank: A good SLA should be affordable, quantifiable, controllable, meaningful, mutually acceptable, and ______.",
    "o": ["Flexible", "Enforceable", "Achievable", "Adaptive"],
    "a": "Achievable"
  },

  // Week 9
  {
    "q": "Why is Julia programming considered advantageous?",
    "o": ["It is slower than Python.", "It merges Python's benefits with C's performance.", "It is a closed-source language.", "It does not support parallelism."],
    "a": "It merges Python's benefits with C's performance."
  },
  {
    "q": "What relationship does Linear Regression detect?",
    "o": ["A non-linear relationship between binary variables", "A clustering pattern in unlabeled data", "A random relationship between unrelated variables", "A linear relationship between a dependent variable and independent variables"],
    "a": "A linear relationship between a dependent variable and independent variables"
  },
  {
    "q": "Which core concept defines Software-Defined Networking (SDN)?",
    "o": ["Hardwiring control logic into every switch", "Decoupling the control plane from the data plane", "Combining all network functions into a single monolithic server", "Eliminating the need for any software in networking"],
    "a": "Decoupling the control plane from the data plane"
  },
  {
    "q": "Fill in the blank: Fog computing architecture places fog nodes between ________ and the cloud.",
    "o": ["Industrial end devices", "Enterprise servers", "Mobile applications", "Databases"],
    "a": "Industrial end devices"
  },
  {
    "q": "What is the major challenge in handling data from sensors and machines in IIoT?",
    "o": ["High cost of sensors", "Diversity in protocols, data syntax, and data sources", "Lack of storage capacity", "Insufficient processing power"],
    "a": "Diversity in protocols, data syntax, and data sources"
  },
  {
    "q": "State True or False: Fog computing in IIoT prevents unnecessary noisy big data crowd at the cloud.",
    "o": ["True", "False"],
    "a": "True"
  },
  {
    "q": "State True or False: R is an open source tool for programming, statistical analysis, and graphics representation.",
    "o": ["True", "False"],
    "a": "True"
  },
  {
    "q": "Which R package provides functions for fuzzy clustering, support vector machine, and na\u00efve bayes classifier?",
    "o": ["rpart", "e1071", "nnet", "caret"],
    "a": "e1071"
  },
  {
    "q": "Fill in the blank: The basic service models provided by cloud computing include IaaS, PaaS, and ______.",
    "o": ["DaaS", "NaaS", "SaaS", "FaaS"],
    "a": "SaaS"
  },
  {
    "q": "Which Hadoop component is described as a module containing the utilities that support the other Hadoop components?",
    "o": ["HDFS", "MapReduce", "Hadoop Common", "YARN"],
    "a": "Hadoop Common"
  },
  {
    "q": "What routing protocol does BCube run?",
    "o": ["BSR (BCube Source Routing)", "BGP", "OSPF", "RIP"],
    "a": "BSR (BCube Source Routing)"
  },
  {
    "q": "Which of the following is mentioned as a data center network challenge?",
    "o": ["High cost", "Poor server-to-server connectivity", "Complex configuration", "Limited vendors"],
    "a": "Poor server-to-server connectivity"
  },
  {
    "q": "Which protocol is mentioned as part of SDN components?",
    "o": ["TCP", "UDP", "OpenFlow", "HTTP"],
    "a": "OpenFlow"
  },
  {
    "q": "State True or False: GCAM is used to place flow-rules in SDN forwarding devices, but it is limited in capacity.",
    "o": ["True", "False"],
    "a": "False"
  },
  {
    "q": "Which advantage of SDIIoT enables events to be processed in order through deterministic forwarding of traffic?",
    "o": ["Deterministic networking", "High availability", "Low-latency virtualization", "Robust security"],
    "a": "Deterministic networking"
  },

  // Week 10
  {
    "q": "What is the primary objective of the IETF 6TiSCH protocol in the context of IIoT?",
    "o": ["To enable deterministic communication and efficient resource allocation", "To increase non-deterministic communication", "To replace SDN controllers entirely", "To increase jitter in the network"],
    "a": "To enable deterministic communication and efficient resource allocation"
  },
  {
    "q": "\u03bcSDN is integrated with which protocol stack?",
    "o": ["Zigbee stack", "IPv4 stack", "Contiki IEEE 802.15.4-2015 stack", "LTE stack"],
    "a": "Contiki IEEE 802.15.4-2015 stack"
  },
  {
    "q": "Fill in the blank: The public network in SDIIoT consists of switches, routers, and ______ network.",
    "o": ["Sensor", "Access", "Control", "Storage"],
    "a": "Access"
  },
  {
    "q": "State True or False: Trustworthy IIoT includes security, privacy, safety, reliability, and resilience.",
    "o": ["True", "False"],
    "a": "True"
  },
  {
    "q": "Fill in the blank: Current security architectures are mostly ______-centric.",
    "o": ["OT", "IT", "Cloud", "Device"],
    "a": "IT"
  },
  {
    "q": "Which of the following is the first step in IIoT security risk management?",
    "o": ["Mitigating risks", "Accepting risks", "Avoiding risks", "Outsourcing risks"],
    "a": "Avoiding risks"
  },
  {
    "q": "Fill in the blank: Security of the whole IIoT system depends on deployed devices, communication security, data protection, and ______.",
    "o": ["Network topology", "Security management", "Sensor calibration", "Hardware redundancy"],
    "a": "Security management"
  },
  {
    "q": "Fill in the blank: End device protection requires physical security, access control, identity, and ______ protection.",
    "o": ["Application", "Network", "Cloud", "Data"],
    "a": "Data"
  },
  {
    "q": "What is the primary security requirement of IIoT systems?",
    "o": ["Device scalability", "End-to-end security", "High bandwidth", "Low latency"],
    "a": "End-to-end security"
  },
  {
    "q": "Which feature of a smart factory enables prediction of future outcomes?",
    "o": ["Transparent", "Connected", "Proactive", "Agile"],
    "a": "Proactive"
  },
  {
    "q": "Airbus uses which technology to visualize production processes in real time?",
    "o": ["Augmented Reality", "Blockchain visualization", "Virtual reality only", "3D real-time visualization"],
    "a": "3D real-time visualization"
  },
  {
    "q": "What technology does Amazon use to automate product search and retrieval in its warehouse?",
    "o": ["Automated conveyor belts", "Robotic shelves", "Augmented Reality devices", "Autonomous forklifts"],
    "a": "Robotic shelves"
  },
  {
    "q": "What is the role of the sensing layer in IoT-enabled food supply chains?",
    "o": ["Data encryption", "Monitoring food quality using sensors", "Providing cloud analytics", "Managing business operations"],
    "a": "Monitoring food quality using sensors"
  },
  {
    "q": "What is one major benefit of supply chain transparency in the food industry?",
    "o": ["Increased manual intervention", "Reduced food wastage", "Reduced sensor usage", "Elimination of automation"],
    "a": "Reduced food wastage"
  },
  {
    "q": "What does the \u201cFlavor Matrix\u201d by Culinary Science Industries use to enhance dishes?",
    "o": ["Robot chefs", "Augmented Reality menus", "3D printed food", "Machine learning and data analysis of food ingredients"],
    "a": "Machine learning and data analysis of food ingredients"
  },

  // Week 11
  {
    "q": "In the context of the IIoT Healthcare Architecture, which process immediately follows \u201cSensing\u201d?",
    "o": ["Learning", "Storing", "Sending", "Processing"],
    "a": "Sending"
  },
  {
    "q": "State True or False: Asthma is a lifelong disease that can be completely cured using IIoT-based smart inhalers.",
    "o": ["True", "False"],
    "a": "False"
  },
  {
    "q": "Which of the following is given as an example of a wireless ECG monitoring device?",
    "o": ["iHealth BP5", "Dexcom", "QardioCore", "Kinsa smart thermometer"],
    "a": "QardioCore"
  },
  {
    "q": "State True or False: In Advanced Metering Infrastructure (AMI), Broadband over PowerLine and Fixed radio frequency are used for communication networks.",
    "o": ["True", "False"],
    "a": "True"
  },
  {
    "q": "Which specific issue can IoT predict in the water sector besides tracking water pressure and water quality?",
    "o": ["Water freezing points", "Exact rainwater volume", "Water leakage", "New underground water sources"],
    "a": "Water leakage"
  },
  {
    "q": "How does a digital power plant reduce costs?",
    "o": ["By increasing manpower", "By increasing fuel consumption", "By using manual monitoring", "By utilizing automated devices reducing the need for manpower and maintenance"],
    "a": "By utilizing automated devices reducing the need for manpower and maintenance"
  },
  {
    "q": "Which type of RFID tag relies on backscattering and has no internal power source?",
    "o": ["Active RFID", "Passive RFID", "Battery-Assisted Passive RFID", "Hybrid RFID"],
    "a": "Passive RFID"
  },
  {
    "q": "Which of the following is considered a primary function of Inventory Management?",
    "o": ["Increasing data scattering", "Decoupling components of the production-distribution system", "Broadcasting information signals", "Creating additional noise"],
    "a": "Decoupling components of the production-distribution system"
  },
  {
    "q": "Fill in the blank: Quality Control is defined as a system of routine technical activities to measure and control the quality of the inventory as it is being ______.",
    "o": ["Developed", "Transported to retail", "Sold to the customer", "Disposed of"],
    "a": "Developed"
  },
  {
    "q": "Fill in the blank: The Intrusion Triangle consists of Opportunity, Means, and ______.",
    "o": ["Integrity", "Motive", "Availability", "Authentication"],
    "a": "Motive"
  },
  {
    "q": "Which Software Security concept is responsible for the verification of credentials entered locally or remotely?",
    "o": ["Integrity", "Authentication", "Availability", "Network segmentation"],
    "a": "Authentication"
  },
  {
    "q": "Which type of Network Security specifically scans for malware detection and prevention?",
    "o": ["Access control", "Application security", "Behavioral analytics", "Antivirus/antimalware software"],
    "a": "Antivirus/antimalware software"
  },
  {
    "q": "According to the Facilities Management Good Practice Guide, what does Facility Management manage on behalf of property owners?",
    "o": ["Factory assembly lines", "Buildings, precincts, community infrastructure", "Cloud computing servers", "Retail supply chains"],
    "a": "Buildings, precincts, community infrastructure"
  },
  {
    "q": "State True or False: In the scope of IoT in Facility Management, implementing new technology includes Light Fidelity (Li-Fi) and data security.",
    "o": ["True", "False"],
    "a": "True"
  },
  {
    "q": "Which support service focuses on researching potential customers?",
    "o": ["Administrative Support", "Marketing", "Business Development", "Information Technology"],
    "a": "Marketing"
  },

  // Week 12
  {
    "q": "In the Oil and Gas Industry Work-flow, which step immediately precedes the data moving to a cloud-based analytics platform?",
    "o": ["Deploy IoT solutions", "Apply predictive analytics", "Data analysis by extraction, transform and load", "Identify required maintenance"],
    "a": "Data analysis by extraction, transform and load"
  },
  {
    "q": "State True or False: In the Machine Learning and Cloud Services workflow, identifying specific data types occurs after analyzing and evaluating data.",
    "o": ["True", "False"],
    "a": "False"
  },
  {
    "q": "In the Chemical Industry, what is a primary goal of Predictive Maintenance?",
    "o": ["Address real time issues", "Track vehicle locations", "Increase energy usage", "Optimize medicine routing"],
    "a": "Address real time issues"
  },
  {
    "q": "Which of the following actions is part of \u201cImprove Logistics\u201d in the Chemical Industry?",
    "o": ["Analyzing water and nutrients", "Detection of contamination or attacks", "Pricing model with profit margin", "Reducing equipment breakdown"],
    "a": "Detection of contamination or attacks"
  },
  {
    "q": "Fill in the blank: IoT applications in the Pharmaceutical Industry are deployed to connect different technologies including manufacturing, monitoring, controlling, and ______.",
    "o": ["Distribution", "Farming", "Extraction", "Refining"],
    "a": "Distribution"
  },
  {
    "q": "How do UAVs typically communicate with industrial systems?",
    "o": ["Through handwritten notes", "Through SCADA systems", "Via wired connections only", "They do not communicate with industrial systems"],
    "a": "Through SCADA systems"
  },
  {
    "q": "The ______ generation of UAV technology features transformable designs with 360\u00b0 gimbals, high quality video, and improved piloting modes.",
    "o": ["Third", "Fourth", "Fifth", "Sixth"],
    "a": "Fifth"
  },
  {
    "q": "Which of the following is an application of UAVs in Energy Management?",
    "o": ["Resisting deforestation", "Inspecting large boiler at power plants", "Delivery of defibrillators", "Broadcasting live events"],
    "a": "Inspecting large boiler at power plants"
  },
  {
    "q": "In the mining industry, regular surface surveys by UAVs are primarily used for:",
    "o": ["Watershed analysis", "Canopy mapping", "Finding missing items", "Optimized blast design"],
    "a": "Optimized blast design"
  },
  {
    "q": "Fill in the blank: In the Healthcare sector, research is being done on drones with ______ that can help the senior population.",
    "o": ["Manipulator arms", "Defibrillators", "Thermal imagery", "360\u00b0 gimbals"],
    "a": "Manipulator arms"
  },
  {
    "q": "How do UAVs specifically assist in testing networks within the Telecommunication sector?",
    "o": ["By broadcasting live events", "By providing internet services to urban areas", "By monitoring construction sites", "By testing network coverage and stability"],
    "a": "By testing network coverage and stability"
  },
  {
    "q": "Fill in the blank: A case study enables a researcher to closely examine the data within a ______.",
    "o": ["Broad universal scope", "Specific context", "Simulated testing environment", "Purely hypothetical scenario"],
    "a": "Specific context"
  },
  {
    "q": "State True or False: Case studies are limited to providing only qualitative analysis of the data.",
    "o": ["True", "False"],
    "a": "False"
  },
  {
    "q": "Fill in the blank: A key point to ponder for all case studies is the reduction of ______ of workers.",
    "o": ["Mandatory work hours", "Annual paid leaves", "Technical training costs", "Health hazards"],
    "a": "Health hazards"
  },
  {
    "q": "What do case studies explore and investigate through detailed analysis?",
    "o": ["Real-life phenomenon", "Purely fictional events", "Ancient historical myths", "Unknown future predictions"],
    "a": "Real-life phenomenon"
  }
]
