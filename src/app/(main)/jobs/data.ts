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
  }
];
