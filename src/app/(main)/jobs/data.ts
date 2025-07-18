
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
    title: 'Graduate Trainee - Software Engineer',
    company: 'Safaricom PLC',
    location: 'Nairobi, Kenya',
    type: 'Internship',
    description: `
**About the role:**
This is a fantastic opportunity for fresh graduates to kick-start their careers in technology. The Graduate Trainee program is designed to provide hands-on experience in software development, working alongside a team of experienced engineers on real-world projects that impact millions of users.

**Responsibilities:**
- Write clean, maintainable, and efficient code.
- Participate in the full software development lifecycle, including design, development, and deployment.
- Collaborate with cross-functional teams to define, design, and ship new features.
- Troubleshoot, debug, and upgrade existing software.

**Qualifications:**
- Bachelor's degree in Computer Science, IT, or a related field.
- Strong understanding of data structures, algorithms, and object-oriented programming.
- Basic knowledge of at least one programming language (e.g., Java, Python, JavaScript).
- Excellent problem-solving and communication skills.
`
  },
  {
    id: '2',
    title: 'Digital Marketing Intern',
    company: 'Jumia Kenya',
    location: 'Nairobi, Kenya',
    type: 'Internship',
    description: `
**About the role:**
Join the leading e-commerce platform in Africa and learn the ropes of digital marketing. As a Digital Marketing Intern, you will support our marketing team in developing and implementing online marketing strategies to drive brand awareness and sales.

**Responsibilities:**
- Assist in managing social media channels (Facebook, Twitter, Instagram).
- Help create and schedule content for various digital platforms.
- Support the planning and execution of email marketing campaigns.
- Analyze marketing data and provide reports on campaign performance.

**Qualifications:**
- Currently pursuing or recently completed a degree in Marketing, Communications, or a related field.
- Strong written and verbal communication skills.
- Familiarity with social media platforms and digital marketing concepts.
- Creative, proactive, and eager to learn.
`
  },
  {
    id: '3',
    title: 'Junior Accountant',
    company: 'KCB Bank',
    location: 'Nairobi, Kenya',
    type: 'Full-time',
    description: `
**About the role:**
KCB Bank is seeking a detail-oriented Junior Accountant to join our finance team. You will be responsible for providing support to the finance department by managing daily accounting tasks. This is an entry-level position with opportunities for growth.

**Responsibilities:**
- Post and process journal entries to ensure all business transactions are recorded.
- Update accounts receivable and issue invoices.
- Update accounts payable and perform reconciliations.
- Assist in the processing of balance sheets, income statements, and other financial statements.

**Qualifications:**
- Bachelor's degree in Accounting, Finance, or relevant field.
- CPA Part II or equivalent qualification.
- Strong attention to detail and good analytical skills.
- Proficient in MS Excel.
`
  },
   {
    id: '4',
    title: 'Customer Service Representative',
    company: 'Africa\'s Talking',
    location: 'Nairobi, Kenya',
    type: 'Full-time',
    description: `
**About the role:**
As a Customer Service Representative, you will be the first point of contact for our developers and business clients. You will provide assistance and support, ensuring they have a seamless experience using our APIs and platform.

**Responsibilities:**
- Respond to customer queries in a timely and accurate way, via phone, email, or chat.
- Identify customer needs and help customers use specific features.
- Analyze and report product malfunctions (e.g., by testing different scenarios or impersonating users).
- Update our internal databases with information about technical issues and useful discussions with customers.

**Qualifications:**
- Previous experience in a customer support role is a plus.
- Excellent communication and problem-solving skills.
- Patience and a customer-centric attitude.
- Technical aptitude and willingness to learn about our products.
`
  },
  {
    id: '5',
    title: 'Data Science Intern',
    company: 'M-KOPA',
    location: 'Nairobi, Kenya',
    type: 'Internship',
    description: `
**About the role:**
M-KOPA is looking for a driven Data Science Intern to join our data team. You'll have the opportunity to work on projects that leverage data to make better business decisions, from customer analytics to credit scoring models.

**Responsibilities:**
- Assist in collecting, cleaning, and processing large datasets.
- Perform exploratory data analysis to identify trends and patterns.
- Support the development and validation of machine learning models.
- Create data visualizations and communicate findings to stakeholders.

**Qualifications:**
- Currently pursuing a degree in Data Science, Statistics, Computer Science, or a related quantitative field.
- Proficiency in Python and SQL.
- Familiarity with data science libraries (e.g., Pandas, Scikit-learn).
- Strong analytical and quantitative skills.
`
  },
  {
    id: '6',
    title: 'Human Resources Assistant',
    company: 'Dalberg',
    location: 'Nairobi, Kenya',
    type: 'Full-time',
    description: `
**About the role:**
Support the HR department in daily administrative tasks. You will be instrumental in recruitment, onboarding, and maintaining employee records, contributing to a positive and efficient workplace.

**Responsibilities:**
- Assist with posting job openings and screening resumes.
- Schedule interviews and communicate with candidates.
- Help with the onboarding process for new hires.
- Maintain and update employee records.

**Qualifications:**
- Degree in Human Resources, Business Administration, or a related field.
- Excellent organizational and communication skills.
- Familiarity with HR software and MS Office is a plus.
`
  },
  {
    id: '7',
    title: 'Graphic Design Intern',
    company: 'Ogilvy',
    location: 'Nairobi, Kenya',
    type: 'Internship',
    description: `
**About the role:**
We are looking for a creative Graphic Design Intern to work on a variety of projects. You will collaborate with our marketing and design teams to create engaging visuals for digital and print media.

**Responsibilities:**
- Design marketing materials such as social media posts, banners, and brochures.
- Assist in creating visual content for our website and blog.
- Participate in brainstorming sessions and contribute creative ideas.

**Qualifications:**
- A strong portfolio showcasing your design skills.
- Proficiency in Adobe Creative Suite (Photoshop, Illustrator, InDesign).
- A keen eye for detail and aesthetics.
`
  },
  {
    id: '8',
    title: 'Financial Analyst',
    company: 'Britam',
    location: 'Nairobi, Kenya',
    type: 'Full-time',
    description: `
**About the role:**
As a Financial Analyst, you will be responsible for financial planning, analysis, and projection for our company. You will help us make well-informed commercial decisions.

**Responsibilities:**
- Analyze financial data and create financial models for decision support.
- Report on financial performance and prepare for regular leadership reviews.
- Analyze past results, perform variance analysis, identify trends, and make recommendations for improvements.
- Work closely with the accounting team to ensure accurate financial reporting.

**Qualifications:**
- Degree in Finance, Economics, or a related field.
- Proven experience as a Financial Analyst.
- Strong analytical and data gathering skills.
`
  },
  {
    id: '9',
    title: 'Part-time Research Assistant',
    company: 'The University of Nairobi',
    location: 'Nairobi, Kenya',
    type: 'Part-time',
    description: `
**About the role:**
The Department of Economics is seeking a Part-time Research Assistant to support ongoing research projects. This role is ideal for a current postgraduate student.

**Responsibilities:**
- Conduct literature reviews and data collection.
- Assist with data analysis and preparation of reports.
- Provide administrative support for research activities.

**Qualifications:**
- Currently enrolled in a Master's program in Economics or a related field.
- Strong research and analytical skills.
- Excellent written and verbal communication skills.
`
  },
  {
    id: '10',
    title: 'Mechanical Engineering Intern',
    company: 'Davis & Shirtliff',
    location: 'Nairobi, Kenya',
    type: 'Internship',
    description: `
**About the role:**
Gain practical experience in the engineering field with a leading supplier of water and energy solutions. You will work with our team on various projects related to product design, testing, and implementation.

**Responsibilities:**
- Assist in the design and analysis of mechanical systems.
- Participate in product development and testing.
- Prepare technical drawings and documentation.

**Qualifications:**
- Pursuing a degree in Mechanical Engineering.
- Basic understanding of engineering principles and CAD software.
- Eager to learn and apply theoretical knowledge to real-world problems.
`
  }
];
