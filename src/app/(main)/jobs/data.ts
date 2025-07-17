export type Job = {
  id: string;
  title: string;
  company: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Internship';
  description: string;
};

export const jobs: Job[] = [
  {
    id: '1',
    title: 'Frontend Developer',
    company: 'Innovatech',
    location: 'San Francisco, CA',
    type: 'Full-time',
    description: `
**About the role:**
We are seeking a passionate Frontend Developer to join our dynamic team. You will be responsible for building the ‘client-side’ of our web applications. You should be able to translate our company and customer needs into functional and appealing interactive applications.

**Responsibilities:**
- Use markup languages like HTML to create user-friendly web pages
- Maintain and improve website
- Optimize applications for maximum speed
- Design mobile-based features
- Collaborate with back-end developers and web designers to improve usability

**Qualifications:**
- Proven work experience as a Frontend Developer
- Hands on experience with markup languages
- Experience with JavaScript, CSS and jQuery
- Familiarity with browser testing and debugging
- In-depth understanding of the entire web development process (design, development and deployment)
`
  },
  {
    id: '2',
    title: 'Backend Developer',
    company: 'DataSolutions',
    location: 'New York, NY',
    type: 'Full-time',
    description: `
**About the role:**
We are looking for an experienced Back-end developer to join our IT team! As a Back-end Developer, you will be responsible for the server-side web application logic as well as for the integration of the front-end part.

**Responsibilities:**
- Be involved and participate in the overall application lifecycle
- Main focus on coding and debugging
- Collaborate with Front-end developers
- Define and communicate technical and design requirements
- Provide training, help and support to other team members

**Qualifications:**
- 3+ years of experience as a Back-end developer
- In-depth understanding of web development
- Experience with programming languages like Java, Ruby, Python, PHP and .Net
- Familiarity with front-end languages (e.g. HTML, JavaScript and CSS)
`
  },
  {
    id: '3',
    title: 'Product Manager',
    company: 'Creative Minds',
    location: 'Austin, TX',
    type: 'Full-time',
    description: `
**About the role:**
We are looking for an experienced Product Manager to participate in the creation of new products and features, from the idea stage to launch. To be successful in this role, you should have previous experience in end-to-end project management.

**Responsibilities:**
- Suggest product enhancements to improve user experience
- Perform quality assurance controls on products
- Coordinate with the engineering department to deliver functional solutions
- Conduct research to identify customer needs and market gaps
- Prioritize the implementation of new features and set specific timelines

**Qualifications:**
- Previous experience as a Product Manager or similar role
- Experience managing the entire product lifecycle
- Familiarity with market research, consumers’ behavior and marketing techniques
- Hands-on experience with web technologies
- Knowledge of project management tools, like Jira or Trello
`
  },
   {
    id: '4',
    title: 'UI/UX Designer',
    company: 'Pixel Perfect Inc.',
    location: 'Remote',
    type: 'Contract',
    description: `
**About the role:**
We're looking for a talented UI/UX Designer to create amazing user experiences. The ideal candidate should have an eye for clean and artful design, possess superior UI skills and be able to translate high-level requirements into interaction flows and artifacts, and transform them into beautiful, intuitive, and functional user interfaces.

**Responsibilities:**
- Collaborate with product management and engineering to define and implement innovative solutions for the product direction, visuals and experience
- Execute all visual design stages from concept to final hand-off to engineering
- Create wireframes, storyboards, user flows, process flows and site maps to effectively communicate interaction and design ideas
- Conduct user research and evaluate user feedback

**Qualifications:**
- Proven UI/UX experience with a strong portfolio
- Solid experience in creating wireframes, storyboards, user flows, process flows and site maps
- Proficiency in Photoshop, Illustrator, OmniGraffle, or other visual design and wire-framing tools
- Excellent visual design skills with sensitivity to user-system interaction
`
  },
  {
    id: '5',
    title: 'Data Scientist',
    company: 'QuantumLeap AI',
    location: 'Boston, MA',
    type: 'Full-time',
    description: `
**About the role:**
We are looking for a Data Scientist to analyze large amounts of raw information to find patterns that will help improve our company. We will rely on you to build data products to extract valuable business insights.

**Responsibilities:**
- Identify valuable data sources and automate collection processes
- Undertake preprocessing of structured and unstructured data
- Analyze large amounts of information to discover trends and patterns
- Build predictive models and machine-learning algorithms
- Present information using data visualization techniques

**Qualifications:**
- Proven experience as a Data Scientist or Data Analyst
- Experience in data mining
- Understanding of machine-learning and operations research
- Knowledge of R, SQL and Python; familiarity with Scala, Java or C++ is an asset
- Experience using business intelligence tools (e.g. Tableau) and data frameworks (e.g. Hadoop)
`
  }
];
