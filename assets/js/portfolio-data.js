/* global window */

window.PORTFOLIO = {
  connect: {
    title: 'InPart — Connect',
    images: [
      'assets/img/portfolio/inpart-9.png',
      'assets/img/portfolio/inpart-7.png',
      'assets/img/portfolio/inpart-10.png',
      'assets/img/portfolio/inpart-11.png',
      'assets/img/portfolio/inpart-12.png'
    ],
    category: 'Web App / B2B',
    client: 'InPart',
    date: '2025-05-01',
    url: 'https://inpart.io/',
    description: `
  <p>
    <strong>InPart — Connect</strong> is a large-scale <strong>B2B web platform</strong> designed to connect universities,
    research institutes, and pharmaceutical companies to accelerate innovation partnerships in the biopharma industry.
    The application centralizes project proposals, collaboration requests, and communication between academic and
    corporate R&D teams within a single intuitive interface.
  </p>

  <p>
    The platform is built with a modern <strong>React + TypeScript</strong> front end, offering a dynamic and modular
    interface with complex filtering, pagination, and data visualization features. The UI emphasizes clarity and speed,
    allowing users to browse and manage thousands of collaboration records efficiently. Each component follows clean
    architecture principles and is optimized for reusability and maintainability.
  </p>

  <p>
    The back end, powered by <strong>Node.js (Express)</strong>, integrates with multiple data sources and internal APIs
    to synchronize institutional data, projects, and user profiles. Database operations are handled via <strong>SQL</strong>
    with advanced indexing for performance and reliability.
    The system also supports background tasks, notifications, and secure access management based on user roles
    (academic, corporate, admin).
  </p>

  <p>
    The entire infrastructure is deployed on <strong>AWS</strong> using <strong>Terraform</strong> and
    <strong>Docker</strong>, providing reproducible environments, isolated services, and scalable deployments through
    automated <strong>CI/CD pipelines</strong>. Logs, metrics, and error tracing are centralized for continuous monitoring
    and stability.
  </p>

  <ul>
    <li>Project discovery and matchmaking between academia and industry</li>
    <li>Advanced search, filters, and analytics dashboards</li>
    <li>Integrated <strong>messaging system</strong> for cross-organization discussions</li>
    <li>Role-based permissions and secure data access</li>
    <li>Admin dashboard for content, metrics, and user management</li>
    <li>Scalable infrastructure (AWS + Terraform + Docker)</li>
  </ul>

  <p>
    <em>Connect</em> represents a comprehensive full-stack product that combines elegant UI design,
    robust back-end logic, and DevOps automation — built to empower scientific collaboration at scale.
  </p>
`
  },
  messenger: {
    title: '📨 InPart — Messenger',
    images: ['assets/img/portfolio/inpart-8.jpeg'],
    category: 'Realtime / Messaging',
    client: 'InPart',
    date: '2025-03-15',
    url: 'https://inpart.io/',
    description: `
    <p>
        Internal messaging module for the <strong>InPart</strong> platform enabling real-time communication between
        teams, departments, and external partners. Designed to streamline collaboration within the biopharma ecosystem
        through a secure, modular, and scalable chat system.
    </p>
    <p>
        <strong>Front end:</strong> built with <em>React</em>, <em>TailwindCSS</em>, and <em>TanStack Query</em> for a clean,
        responsive UI and optimized asynchronous data fetching.
    </p>
    <p>
        <strong>Back end:</strong> powered by <em>Express.js</em> (REST API, JWT authentication, role-based access) and a
        dedicated messaging database linked to InPart’s main data layer to maintain user, role, and permission consistency.
    </p>
    <ul>
        <li>Multi-group discussions and threaded conversations</li>
        <li>Real-time synchronization and notifications</li>
        <li>Edit, delete, and archive messages</li>
        <li>Search and filtering by users or content</li>
        <li>Secure and scalable architecture deployed on AWS</li>
    </ul>
    <p>
        This project demonstrates full-stack expertise combining modern front-end design with robust back-end engineering.
    </p>
    `
  },
  graines: {
    title: 'Les Graines du Cabo Verde',
    images: [
      'assets/img/portfolio/lesgraines-du-caboverde.png',
      'assets/img/portfolio/lesgraines-du-caboverde-2.png'
    ],
    category: 'Association',
    client: 'Les Graines du Cabo Verde',
    date: '2024-11-01',
    url: '#',
    description: `
  <p>
    <strong>Les Graines du Cabo Verde</strong> is a bilingual <strong>nonprofit showcase website</strong> created to support
    an association that helps children and families in Cape Verde through education, cultural initiatives, and community aid.
    The site’s main goal is to highlight the organization’s mission, projects, and donation opportunities while reinforcing
    its connection with the Cape Verdean diaspora in France.
  </p>

  <p>
    The platform was built as a <strong>static website</strong> using lightweight, optimized technologies to ensure
    <strong>speed, accessibility, and SEO performance</strong>. Its structure includes dedicated pages for the
    association’s actions, volunteering programs, and partnerships, as well as a fully functional <strong>contact
    and donation form</strong> to facilitate engagement and fundraising.
  </p>

  <p>
    The visual design combines warm colors, authentic imagery, and a clean layout to reflect the association’s
    positive, community-driven identity. Every section was carefully crafted to be responsive and intuitive,
    offering an engaging experience across devices.
  </p>

  <ul>
    <li>Responsive and SEO-friendly static website</li>
    <li>Optimized accessibility for all users</li>
    <li>Dedicated pages for missions, actions, and donation campaigns</li>
    <li>Integrated contact form for inquiries and partnerships</li>
    <li>Warm, human-centered visual identity aligned with the association’s values</li>
  </ul>

  <p>
    This project showcases the ability to design and develop a <strong>purpose-driven, user-friendly website</strong>
    that combines visual storytelling, performance, and simplicity — all in service of a meaningful cause.
  </p>
`
  },
  arcanan: {
    title: 'Arcanan Conseils',
    images: [
      'assets/img/portfolio/arcananconseil.png',
      'assets/img/portfolio/arcananconseil-2.png',
      'assets/img/portfolio/arcananconseil-3.png'
    ],
    category: 'Landing / Assurance',
    client: 'Arcanan Conseils',
    date: '2024-06-10',
    url: 'https://arcananconseils.fr',
    description: `
  <p>
    <strong>Arcanan Conseils</strong> is a complete <strong>insurance brokerage platform</strong> combining
    <strong>WordPress (PHP)</strong> for content management and <strong>React</strong> for a dynamic, modern user experience.
    The website was designed to present the company’s insurance services (health, life, professional) while generating
    qualified leads through clear navigation, persuasive copywriting, and interactive components.
  </p>

  <p>
    On the <strong>back end</strong>, the project uses a customized WordPress installation with PHP-based templates and
    a lightweight plugin system to manage content, contact forms, and SEO optimization. The WordPress REST API
    was leveraged to expose structured data and connect seamlessly with a <strong>React front end</strong> for dynamic rendering.
  </p>

  <p>
    On the <strong>front end</strong>, React provides a fast, responsive interface with reusable components, animations,
    and form validation logic. The UI, built with modern JavaScript tooling, ensures excellent performance and accessibility
    across desktop and mobile devices.
  </p>

  <ul>
    <li>Hybrid architecture: WordPress (PHP) + React front end</li>
    <li>Custom theme and REST API integration</li>
    <li>SEO and performance optimization for lead generation</li>
    <li>Dynamic contact/quote forms with validation and tracking</li>
    <li>Responsive, professional design aligned with brand identity</li>
    <li>Analytics integration (Google Tag Manager, Meta Pixel)</li>
  </ul>

  <p>
    This project demonstrates full-stack expertise — combining the flexibility of <strong>WordPress/PHP</strong> for content
    management with the interactivity of <strong>React</strong> for the front-end — to deliver a powerful, maintainable,
    and business-focused digital presence for a modern insurance broker.
  </p>
`
  },
  connectDash: {
    title: 'InPart — Dashboard',
    images: [
      'assets/img/portfolio/inpart-3.png',
      'assets/img/portfolio/inpart-4.png',
      'assets/img/portfolio/inpart-5.png',
      'assets/img/portfolio/inpart-6.png'
    ],
    category: 'Web App / B2B',
    client: 'InPart',
    date: '2025-05-01',
    url: 'https://inpart.io/',
    description: `
  <p>
    <strong>InPart — Dashboard</strong> is the administrative and analytical control center of the
    <strong>InPart Connect</strong> platform. It provides a unified interface for both
    <strong>corporate users</strong> and <strong>university administrators</strong> to manage partnerships,
    communication, and data-driven insights within the biopharma collaboration ecosystem.
  </p>

  <p>
    The system features two main environments:
  </p>

  <ul>
    <li>
      <strong>Company Dashboard:</strong> enables pharmaceutical and biotech companies to create and manage
      <strong>campaigns</strong> or <strong>calls for collaboration</strong>, explore academic profiles, review
      project proposals, and analyze engagement performance. Users can view messages and notifications directly
      through an integrated messaging interface connected to the platform’s mail system.
    </li>
    <li>
      <strong>University Dashboard:</strong> allows academic administrators to manage institutional profiles,
      submit and respond to calls for proposals, and monitor research visibility across departments. The dashboard
      provides an overview of communication exchanges, analytics, and collaborative opportunities with industrial partners.
    </li>
  </ul>

  <p>
    Both dashboards integrate advanced tools for <strong>profile management</strong>, <strong>campaign creation</strong>,
    and <strong>real-time analytics</strong>. Users can visualize key <strong>data insights</strong> such as
    response rates, partnership statistics, and communication metrics, displayed through interactive charts and dashboards.
  </p>

  <p>
    The front end is developed with <strong>React</strong>, <strong>TypeScript</strong>, and
    <strong>TailwindCSS</strong>, delivering a fast, responsive, and modular interface.
    Data synchronization and caching are handled via <strong>TanStack Query</strong>, ensuring
    optimal performance across sessions.
    On the back end, <strong>Node.js</strong> and <strong>Express</strong> power secure REST APIs,
    with JWT authentication, role-based permissions, and relational data storage via SQL.
  </p>

  <ul>
    <li>Dual dashboards for company and university administrators</li>
    <li>Creation and management of profiles, campaigns, and project calls</li>
    <li>Integrated mailbox for viewing and managing internal messages</li>
    <li>Real-time analytics and data insights visualization</li>
    <li>Secure REST API with JWT and role-based access control</li>
    <li>Developed with React, TypeScript, TailwindCSS, Node.js, and Express</li>
    <li>Deployed on AWS with Terraform, Docker, and CI/CD pipelines</li>
  </ul>

  <p>
    This project demonstrates advanced <strong>full-stack engineering</strong> — blending modern front-end architecture,
    robust API design, and DevOps best practices — to deliver a comprehensive, data-driven
    <strong>administration platform</strong> that empowers both academic and corporate collaboration.
  </p>
`
  }
}
