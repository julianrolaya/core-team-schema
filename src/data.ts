export type Role = {
  id: string;
  title: string;
  manager: string; // The vertical it belongs to
  scope: string;
  salary: string;
  skills: string[];
  connectsWith: string[];
  category: 'B2C' | 'B2B' | 'Transversal';
  region?: 'Norte' | 'Interior' | 'Sur' | 'Transversal';
  type: 'Leader' | 'Role' | 'External';
};

export const orgData: Role[] = [
  // Liderazgo
  {
    id: 'andres-herrera',
    title: 'Andrés Herrera',
    manager: 'CEO',
    scope: 'Liderazgo estratégico, levantamiento de capital, y P&L de B2B y B2C.',
    salary: '$25.000.000 - $35.000.000 COP',
    skills: ['Estrategia', 'Fundraising', 'Liderazgo', 'Visión Energética'],
    connectsWith: ['Todos los Managers'],
    category: 'Transversal',
    region: 'Transversal',
    type: 'Leader'
  },
  // Sales Manager
  {
    id: 'sales-manager',
    title: 'Sales Manager',
    manager: 'Sales',
    scope: 'Lidera la estrategia de expansión y ventas para B2C y B2B.',
    salary: '$15.000.000 - $22.000.000 COP',
    skills: ['Estrategia Comercial', 'Negociación PPA', 'Gestión de Equipos'],
    connectsWith: ['Marketing Manager', 'Product Manager', 'Construction Manager'],
    category: 'Transversal',
    region: 'Transversal',
    type: 'Leader'
  },
  {
    id: 'kam-b2c-norte',
    title: 'KAM B2C',
    manager: 'Sales Manager',
    scope: 'Generación de leads, visitas técnicas y cierre rápido de ventas residenciales (Solar/BESS).',
    salary: '$5.000.000 - $9.000.000 + Comisiones',
    skills: ['Ventas B2C', 'Negociación', 'Conocimiento Técnico Básico'],
    connectsWith: ['Construction Coordinator', 'Marketing'],
    category: 'B2C',
    region: 'Norte',
    type: 'Role'
  },
  {
    id: 'kam-b2c-interior',
    title: 'KAM B2C',
    manager: 'Sales Manager',
    scope: 'Generación de leads, visitas técnicas y cierre rápido de ventas residenciales (Solar/BESS).',
    salary: '$5.000.000 - $9.000.000 + Comisiones',
    skills: ['Ventas B2C', 'Negociación', 'Conocimiento Técnico Básico'],
    connectsWith: ['Construction Coordinator', 'Marketing'],
    category: 'B2C',
    region: 'Interior',
    type: 'Role'
  },
  {
    id: 'kam-b2c-sur',
    title: 'KAM B2C',
    manager: 'Sales Manager',
    scope: 'Generación de leads, visitas técnicas y cierre rápido de ventas residenciales (Solar/BESS).',
    salary: '$5.000.000 - $9.000.000 + Comisiones',
    skills: ['Ventas B2C', 'Negociación', 'Conocimiento Técnico Básico'],
    connectsWith: ['Construction Coordinator', 'Marketing'],
    category: 'B2C',
    region: 'Sur',
    type: 'Role'
  },
  {
    id: 'kam-b2b-norte',
    title: 'KAM B2B',
    manager: 'Sales Manager',
    scope: 'Ventas consultivas corporativas, licitaciones y contratos de largo plazo (PPA).',
    salary: '$7.000.000 - $12.000.000 + Comisiones',
    skills: ['Ventas B2B', 'Regulación Eléctrica', 'Negociación B2B'],
    connectsWith: ['Engineer', 'Construction Coordinator'],
    category: 'B2B',
    region: 'Norte',
    type: 'Role'
  },
  {
    id: 'kam-b2b-interior',
    title: 'KAM B2B',
    manager: 'Sales Manager',
    scope: 'Ventas consultivas corporativas, licitaciones y contratos de largo plazo (PPA).',
    salary: '$7.000.000 - $12.000.000 + Comisiones',
    skills: ['Ventas B2B', 'Regulación Eléctrica', 'Negociación B2B'],
    connectsWith: ['Engineer', 'Construction Coordinator'],
    category: 'B2B',
    region: 'Interior',
    type: 'Role'
  },
  {
    id: 'kam-b2b-sur',
    title: 'KAM B2B',
    manager: 'Sales Manager',
    scope: 'Ventas consultivas corporativas, licitaciones y contratos de largo plazo (PPA).',
    salary: '$7.000.000 - $12.000.000 + Comisiones',
    skills: ['Ventas B2B', 'Regulación Eléctrica', 'Negociación B2B'],
    connectsWith: ['Engineer', 'Construction Coordinator'],
    category: 'B2B',
    region: 'Sur',
    type: 'Role'
  },
  // Construction Manager
  {
    id: 'construction-manager',
    title: 'Construction Manager',
    manager: 'Construction',
    scope: 'Lidera la ejecución técnica y logística de proyectos solares, BESS y RVE.',
    salary: '$15.000.000 - $22.000.000 COP',
    skills: ['Gestión de Proyectos', 'RETIE/RETILAP', 'Operaciones EPC'],
    connectsWith: ['Sales Manager', 'Supply Manager', 'Engineer Manager'],
    category: 'Transversal',
    region: 'Transversal',
    type: 'Leader'
  },
  {
    id: 'coord-b2c-norte',
    title: 'Coordinator',
    manager: 'Construction Manager',
    scope: 'Logística en sitio y supervisión de instalaciones residenciales.',
    salary: '$6.000.000 - $9.000.000 COP',
    skills: ['Supervisión', 'Logística', 'Instalación Eléctrica'],
    connectsWith: ['Subcontratista B2C', 'Supply', 'KAM B2C'],
    category: 'B2C',
    region: 'Norte',
    type: 'Role'
  },
  {
    id: 'coord-b2c-interior',
    title: 'Coordinator',
    manager: 'Construction Manager',
    scope: 'Logística en sitio y supervisión de instalaciones residenciales.',
    salary: '$6.000.000 - $9.000.000 COP',
    skills: ['Supervisión', 'Logística', 'Instalación Eléctrica'],
    connectsWith: ['Subcontratista B2C', 'Supply', 'KAM B2C'],
    category: 'B2C',
    region: 'Interior',
    type: 'Role'
  },
  {
    id: 'coord-b2c-sur',
    title: 'Coordinator',
    manager: 'Construction Manager',
    scope: 'Logística en sitio y supervisión de instalaciones residenciales.',
    salary: '$6.000.000 - $9.000.000 COP',
    skills: ['Supervisión', 'Logística', 'Instalación Eléctrica'],
    connectsWith: ['Subcontratista B2C', 'Supply', 'KAM B2C'],
    category: 'B2C',
    region: 'Sur',
    type: 'Role'
  },
  {
    id: 'coord-b2b-norte',
    title: 'Coordinator',
    manager: 'Construction Manager',
    scope: 'Gestión end-to-end de grandes proyectos corporativos, BESS y RVE electrolineras.',
    salary: '$7.000.000 - $11.000.000 COP',
    skills: ['Project Management EPC', 'Certificaciones RETIE', 'Seguridad Ocupacional'],
    connectsWith: ['Subcontratista B2B', 'Sub Autopista - Redes', 'KAM B2B'],
    category: 'B2B',
    region: 'Norte',
    type: 'Role'
  },
  {
    id: 'coord-b2b-interior',
    title: 'Coordinator',
    manager: 'Construction Manager',
    scope: 'Gestión end-to-end de grandes proyectos corporativos, BESS y RVE electrolineras.',
    salary: '$7.000.000 - $11.000.000 COP',
    skills: ['Project Management EPC', 'Certificaciones RETIE', 'Seguridad Ocupacional'],
    connectsWith: ['Subcontratista B2B', 'Sub Autopista - Redes', 'KAM B2B'],
    category: 'B2B',
    region: 'Interior',
    type: 'Role'
  },
  {
    id: 'coord-b2b-sur',
    title: 'Coordinator',
    manager: 'Construction Manager',
    scope: 'Gestión end-to-end de grandes proyectos corporativos, BESS y RVE electrolineras.',
    salary: '$7.000.000 - $11.000.000 COP',
    skills: ['Project Management EPC', 'Certificaciones RETIE', 'Seguridad Ocupacional'],
    connectsWith: ['Subcontratista B2B', 'Sub Autopista - Redes', 'KAM B2B'],
    category: 'B2B',
    region: 'Sur',
    type: 'Role'
  },
  // Engineer Manager
  {
    id: 'engineer-manager',
    title: 'Engineer Manager',
    manager: 'Engineering',
    scope: 'Supervisión técnica de diseños, firmas profesionales y estudios de prefactibilidad.',
    salary: '$14.000.000 - $18.000.000 COP',
    skills: ['Ingeniería Eléctrica', 'Diseño PV/BESS', 'Gestión Técnica'],
    connectsWith: ['Construction Manager', 'Sales Manager'],
    category: 'Transversal',
    region: 'Transversal',
    type: 'Leader'
  },
  {
    id: 'eng-1',
    title: 'Engineer',
    manager: 'Engineer Manager',
    scope: 'Planos unifilares, dimensionamiento de potencia (Solar/BESS/RVE).',
    salary: '$6.000.000 - $8.500.000 COP',
    skills: ['AutoCAD/PVsyst', 'Cálculos de Tensión', 'Análisis de Red'],
    connectsWith: ['KAM B2B', 'Coordinator'],
    category: 'Transversal',
    region: 'Transversal',
    type: 'Role'
  },
  {
    id: 'eng-2',
    title: 'Engineer',
    manager: 'Engineer Manager',
    scope: 'Planos unifilares, dimensionamiento de potencia (Solar/BESS/RVE).',
    salary: '$6.000.000 - $8.500.000 COP',
    skills: ['AutoCAD/PVsyst', 'Cálculos de Tensión', 'Análisis de Red'],
    connectsWith: ['KAM B2B', 'Coordinator'],
    category: 'Transversal',
    region: 'Transversal',
    type: 'Role'
  },
  {
    id: 'eng-3',
    title: 'Engineer',
    manager: 'Engineer Manager',
    scope: 'Planos unifilares, dimensionamiento de potencia (Solar/BESS/RVE).',
    salary: '$6.000.000 - $8.500.000 COP',
    skills: ['AutoCAD/PVsyst', 'Cálculos de Tensión', 'Análisis de Red'],
    connectsWith: ['KAM B2B', 'Coordinator'],
    category: 'Transversal',
    region: 'Transversal',
    type: 'Role'
  },
  // Supply
  {
    id: 'supply-manager',
    title: 'Supply Manager',
    manager: 'Supply Chain',
    scope: 'Lidera importaciones, negociación con fabricantes globales y logística.',
    salary: '$12.000.000 - $16.000.000 COP',
    skills: ['Comercio Exterior', 'Logística', 'Negociación Internacional'],
    connectsWith: ['Construction Manager', 'Finance Manager'],
    category: 'Transversal',
    region: 'Transversal',
    type: 'Leader'
  },
  {
    id: 'supply-1',
    title: 'Supply',
    manager: 'Supply Manager',
    scope: 'Compras nacionales, control de inventario y bodega.',
    salary: '$5.000.000 - $7.500.000 COP',
    skills: ['Inventario', 'Logística Nacional', 'Gestión de Proveedores'],
    connectsWith: ['Proveedor Solar', 'Proveedor Tableros', 'Coordinator'],
    category: 'Transversal',
    region: 'Transversal',
    type: 'Role'
  },
  {
    id: 'supply-2',
    title: 'Supply',
    manager: 'Supply Manager',
    scope: 'Compras nacionales, control de inventario y bodega.',
    salary: '$5.000.000 - $7.500.000 COP',
    skills: ['Inventario', 'Logística Nacional', 'Gestión de Proveedores'],
    connectsWith: ['Proveedor Solar', 'Proveedor Tableros', 'Coordinator'],
    category: 'Transversal',
    region: 'Transversal',
    type: 'Role'
  },
  // Customer Exp
  {
    id: 'cx-manager',
    title: 'Customer EXP. Manager',
    manager: 'Customer Experience',
    scope: 'Fidelización, medición de satisfacción (NPS) y retención.',
    salary: '$10.000.000 - $14.000.000 COP',
    skills: ['Gestión de Clientes', 'CX Strategy', 'Resolución de Conflictos'],
    connectsWith: ['O&M Manager', 'Sales Manager'],
    category: 'Transversal',
    region: 'Transversal',
    type: 'Leader'
  },
  {
    id: 'concierge-norte',
    title: 'Concierge',
    manager: 'Customer EXP. Manager',
    scope: 'Acompañamiento VIP del cliente en su zona, PQR y gestión de expectativas.',
    salary: '$3.500.000 - $5.500.000 COP',
    skills: ['Empatía', 'Servicio al Cliente', 'Comunicación Asertiva'],
    connectsWith: ['Cliente', 'Coordinator', 'O&M'],
    category: 'Transversal',
    region: 'Norte',
    type: 'Role'
  },
  {
    id: 'concierge-interior',
    title: 'Concierge',
    manager: 'Customer EXP. Manager',
    scope: 'Acompañamiento VIP del cliente en su zona, PQR y gestión de expectativas.',
    salary: '$3.500.000 - $5.500.000 COP',
    skills: ['Empatía', 'Servicio al Cliente', 'Comunicación Asertiva'],
    connectsWith: ['Cliente', 'Coordinator', 'O&M'],
    category: 'Transversal',
    region: 'Interior',
    type: 'Role'
  },
  {
    id: 'concierge-sur',
    title: 'Concierge',
    manager: 'Customer EXP. Manager',
    scope: 'Acompañamiento VIP del cliente en su zona, PQR y gestión de expectativas.',
    salary: '$3.500.000 - $5.500.000 COP',
    skills: ['Empatía', 'Servicio al Cliente', 'Comunicación Asertiva'],
    connectsWith: ['Cliente', 'Coordinator', 'O&M'],
    category: 'Transversal',
    region: 'Sur',
    type: 'Role'
  },
  // O&M
  {
    id: 'om-manager',
    title: 'O&M Manager',
    manager: 'Operations & Maintenance',
    scope: 'Garantizar el rendimiento energético de los sistemas instalados.',
    salary: '$12.000.000 - $16.000.000 COP',
    skills: ['Mantenimiento Industrial', 'Telemetría', 'Gestión de Activos'],
    connectsWith: ['Customer EXP. Manager', 'Cloud Manager'],
    category: 'Transversal',
    region: 'Transversal',
    type: 'Leader'
  },
  {
    id: 'cgm-1',
    title: 'CGM (Centro de Gestión)',
    manager: 'O&M Manager',
    scope: 'Monitoreo NOC, alarmas de inversores y gestión de correctivos.',
    salary: '$4.000.000 - $6.500.000 COP',
    skills: ['SCADA/Monitoreo', 'Análisis de Fallas', 'Electricidad'],
    connectsWith: ['Concierge', 'Cloud Data OUT'],
    category: 'Transversal',
    region: 'Transversal',
    type: 'Role'
  },
  {
    id: 'cgm-2',
    title: 'CGM (Centro de Gestión)',
    manager: 'O&M Manager',
    scope: 'Monitoreo NOC, alarmas de inversores y gestión de correctivos.',
    salary: '$4.000.000 - $6.500.000 COP',
    skills: ['SCADA/Monitoreo', 'Análisis de Fallas', 'Electricidad'],
    connectsWith: ['Concierge', 'Cloud Data OUT'],
    category: 'Transversal',
    region: 'Transversal',
    type: 'Role'
  },
  // Marketing
  {
    id: 'marketing-manager',
    title: 'Marketing Manager',
    manager: 'Marketing',
    scope: 'Posicionamiento, pauta digital y generación de leads B2C/B2B.',
    salary: '$10.000.000 - $15.000.000 COP',
    skills: ['Growth Hacking', 'Brand Strategy', 'Performance Marketing'],
    connectsWith: ['Sales Manager', 'Product Manager'],
    category: 'Transversal',
    region: 'Transversal',
    type: 'Leader'
  },
  {
    id: 'mkt-diseno',
    title: 'Diseño',
    manager: 'Marketing Manager',
    scope: 'Identidad visual, UI básica, y assets publicitarios.',
    salary: '$3.500.000 - $5.500.000 COP',
    skills: ['Diseño Gráfico', 'Figma', 'Creatividad'],
    connectsWith: ['Marketing Manager', 'Product Manager'],
    category: 'Transversal',
    region: 'Transversal',
    type: 'Role'
  },
  {
    id: 'mkt-audio',
    title: 'Audiovisual',
    manager: 'Marketing Manager',
    scope: 'Casos de éxito en video, tomas de dron en plantas solares.',
    salary: '$3.500.000 - $5.500.000 COP',
    skills: ['Edición de Video', 'Piloto Dron', 'Storytelling'],
    connectsWith: ['Marketing Manager'],
    category: 'Transversal',
    region: 'Transversal',
    type: 'Role'
  },
  {
    id: 'mkt-pro',
    title: 'Profesional Marketing',
    manager: 'Marketing Manager',
    scope: 'Campañas de ads, SEO/SEM y redes sociales.',
    salary: '$4.500.000 - $6.000.000 COP',
    skills: ['SEO/SEM', 'Google Ads', 'HubSpot'],
    connectsWith: ['Marketing Manager', 'Sales Manager'],
    category: 'Transversal',
    region: 'Transversal',
    type: 'Role'
  },
  // Product Manager
  {
    id: 'product-manager',
    title: 'Product Manager',
    manager: 'Product',
    scope: 'Roadmap de servicios, apps de clientes y plataformas internas.',
    salary: '$14.000.000 - $20.000.000 COP',
    skills: ['Product Strategy', 'Agile', 'Customer Discovery'],
    connectsWith: ['Tech Manager', 'Marketing Manager'],
    category: 'Transversal',
    region: 'Transversal',
    type: 'Leader'
  },
  {
    id: 'prod-inbound',
    title: 'InBound',
    manager: 'Product Manager',
    scope: 'Gestión de flujos de leads y embudos de conversión.',
    salary: '$8.000.000 - $11.000.000 COP',
    skills: ['Marketing Automation', 'CRO', 'Analítica Web'],
    connectsWith: ['Marketing Manager'],
    category: 'Transversal',
    region: 'Transversal',
    type: 'Role'
  },
  {
    id: 'prod-outbound',
    title: 'OutBound',
    manager: 'Product Manager',
    scope: 'Mejora de flujos de prospección B2B.',
    salary: '$8.000.000 - $11.000.000 COP',
    skills: ['Sales Ops', 'Outreach', 'B2B Strategy'],
    connectsWith: ['Sales Manager'],
    category: 'Transversal',
    region: 'Transversal',
    type: 'Role'
  },
  {
    id: 'prod-ia-1',
    title: 'IA Builder',
    manager: 'Product Manager',
    scope: 'Integración de flujos de IA (LLMs) para optimización de energía.',
    salary: '$9.000.000 - $13.000.000 COP',
    skills: ['IA Prompting', 'Automatización', 'Desarrollo Low-Code'],
    connectsWith: ['Tech Manager', 'Cloud Manager'],
    category: 'Transversal',
    region: 'Transversal',
    type: 'Role'
  },
  {
    id: 'prod-ia-2',
    title: 'IA Builder',
    manager: 'Product Manager',
    scope: 'Integración de flujos de IA (LLMs) para optimización de energía.',
    salary: '$9.000.000 - $13.000.000 COP',
    skills: ['IA Prompting', 'Automatización', 'Desarrollo Low-Code'],
    connectsWith: ['Tech Manager', 'Cloud Manager'],
    category: 'Transversal',
    region: 'Transversal',
    type: 'Role'
  },
  {
    id: 'prod-innov-1',
    title: 'Innovación 1',
    manager: 'Product Manager',
    scope: 'Investigación de nuevas tecnologías (V2G, microrredes).',
    salary: '$8.000.000 - $12.000.000 COP',
    skills: ['R&D', 'Tendencias de Mercado', 'Prototipado'],
    connectsWith: ['Engineer Manager'],
    category: 'Transversal',
    region: 'Transversal',
    type: 'Role'
  },
  {
    id: 'prod-innov-2',
    title: 'Innovación 2',
    manager: 'Product Manager',
    scope: 'Investigación de nuevas tecnologías (V2G, microrredes).',
    salary: '$8.000.000 - $12.000.000 COP',
    skills: ['R&D', 'Tendencias de Mercado', 'Prototipado'],
    connectsWith: ['Engineer Manager'],
    category: 'Transversal',
    region: 'Transversal',
    type: 'Role'
  },
  // Finance
  {
    id: 'finance-manager',
    title: 'Finance Manager',
    manager: 'Finance',
    scope: 'Estrategia financiera, levantamiento de deuda y estructuración de proyectos.',
    salary: '$15.000.000 - $22.000.000 COP',
    skills: ['Estructuración Financiera', 'M&A', 'Corporate Finance'],
    connectsWith: ['CEO', 'Sales Manager', 'Supply Manager'],
    category: 'Transversal',
    region: 'Transversal',
    type: 'Leader'
  },
  {
    id: 'fin-fpa',
    title: 'FP&A',
    manager: 'Finance Manager',
    scope: 'Planeación y análisis financiero, proyecciones de rentabilidad.',
    salary: '$6.000.000 - $9.000.000 COP',
    skills: ['Modelado Financiero', 'Excel Avanzado', 'Análisis de Datos'],
    connectsWith: ['Sales Manager'],
    category: 'Transversal',
    region: 'Transversal',
    type: 'Role'
  },
  {
    id: 'fin-1',
    title: 'Finance 1',
    manager: 'Finance Manager',
    scope: 'Operaciones financieras y flujos diarios.',
    salary: '$4.000.000 - $6.500.000 COP',
    skills: ['Finanzas Corporativas', 'Auditoría'],
    connectsWith: ['Supply'],
    category: 'Transversal',
    region: 'Transversal',
    type: 'Role'
  },
  {
    id: 'fin-2',
    title: 'Finance 2',
    manager: 'Finance Manager',
    scope: 'Operaciones financieras y flujos diarios.',
    salary: '$4.000.000 - $6.500.000 COP',
    skills: ['Finanzas Corporativas', 'Auditoría'],
    connectsWith: ['Supply'],
    category: 'Transversal',
    region: 'Transversal',
    type: 'Role'
  },
  {
    id: 'fin-acc',
    title: 'Accounting',
    manager: 'Finance Manager',
    scope: 'Contabilidad, NIIF y reportes fiscales.',
    salary: '$4.500.000 - $7.000.000 COP',
    skills: ['Contabilidad', 'Impuestos', 'NIIF'],
    connectsWith: ['Treasury'],
    category: 'Transversal',
    region: 'Transversal',
    type: 'Role'
  },
  {
    id: 'fin-treasury',
    title: 'Treasury',
    manager: 'Finance Manager',
    scope: 'Tesorería, pagos a proveedores y nómina.',
    salary: '$4.500.000 - $7.000.000 COP',
    skills: ['Gestión de Bancos', 'Flujo de Caja'],
    connectsWith: ['Accounting', 'Supply'],
    category: 'Transversal',
    region: 'Transversal',
    type: 'Role'
  },
  // Tech
  {
    id: 'tech-manager',
    title: 'Tech Manager',
    manager: 'Technology',
    scope: 'Lidera la ingeniería de software y las plataformas tecnológicas de Sunny.',
    salary: '$16.000.000 - $22.000.000 COP',
    skills: ['Arquitectura de Software', 'Liderazgo Técnico', 'Agile'],
    connectsWith: ['Product Manager', 'Cloud Manager'],
    category: 'Transversal',
    region: 'Transversal',
    type: 'Leader'
  },
  {
    id: 'tech-back-1',
    title: 'Back 1',
    manager: 'Tech Manager',
    scope: 'Desarrollo de microservicios y APIs.',
    salary: '$8.000.000 - $12.000.000 COP',
    skills: ['Node.js/Python', 'Bases de Datos', 'API Rest'],
    connectsWith: ['Front', 'Cloud Data IN'],
    category: 'Transversal',
    region: 'Transversal',
    type: 'Role'
  },
  {
    id: 'tech-back-2',
    title: 'Back 2',
    manager: 'Tech Manager',
    scope: 'Desarrollo de microservicios y APIs.',
    salary: '$8.000.000 - $12.000.000 COP',
    skills: ['Node.js/Python', 'Bases de Datos', 'API Rest'],
    connectsWith: ['Front', 'Cloud Data IN'],
    category: 'Transversal',
    region: 'Transversal',
    type: 'Role'
  },
  {
    id: 'tech-front',
    title: 'Front',
    manager: 'Tech Manager',
    scope: 'Desarrollo de interfaces de usuario (web).',
    salary: '$7.000.000 - $11.000.000 COP',
    skills: ['React/Vue', 'CSS/UX', 'Web Performance'],
    connectsWith: ['Back 1', 'FullStack/Designer'],
    category: 'Transversal',
    region: 'Transversal',
    type: 'Role'
  },
  {
    id: 'tech-fullstack',
    title: 'FullStack/Designer',
    manager: 'Tech Manager',
    scope: 'Desarrollo E2E y apoyo en UX/UI.',
    salary: '$8.000.000 - $13.000.000 COP',
    skills: ['TS/React/Node', 'Figma', 'UI Design'],
    connectsWith: ['Front', 'QA'],
    category: 'Transversal',
    region: 'Transversal',
    type: 'Role'
  },
  {
    id: 'tech-qa',
    title: 'QA',
    manager: 'Tech Manager',
    scope: 'Aseguramiento de calidad, pruebas manuales y automatizadas.',
    salary: '$5.000.000 - $8.000.000 COP',
    skills: ['Cypress/Jest', 'Testing Manual', 'QA Automation'],
    connectsWith: ['APP Developer', 'Front', 'Back 1'],
    category: 'Transversal',
    region: 'Transversal',
    type: 'Role'
  },
  {
    id: 'tech-app',
    title: 'APP Developer',
    manager: 'Tech Manager',
    scope: 'Desarrollo de la app móvil para usuarios B2C.',
    salary: '$8.000.000 - $12.000.000 COP',
    skills: ['React Native / Flutter', 'Mobile UX', 'App Store/Play Store'],
    connectsWith: ['Back 1', 'Product Manager'],
    category: 'Transversal',
    region: 'Transversal',
    type: 'Role'
  },
  // Cloud
  {
    id: 'cloud-manager',
    title: 'Cloud Manager',
    manager: 'Cloud & Data',
    scope: 'Arquitectura cloud (AWS/GCP), pipelines de datos y seguridad perimetral.',
    salary: '$16.000.000 - $22.000.000 COP',
    skills: ['Cloud Architecture', 'DevOps', 'Data Engineering'],
    connectsWith: ['Tech Manager', 'O&M Manager'],
    category: 'Transversal',
    region: 'Transversal',
    type: 'Leader'
  },
  {
    id: 'cloud-data-in',
    title: 'Data 1 IN',
    manager: 'Cloud Manager',
    scope: 'Ingesta masiva de datos (telemetría de inversores/BESS).',
    salary: '$9.000.000 - $14.000.000 COP',
    skills: ['Kafka/Kinesis', 'ETL', 'IoT Hub'],
    connectsWith: ['Tech Back', 'Cloud Data OUT'],
    category: 'Transversal',
    region: 'Transversal',
    type: 'Role'
  },
  {
    id: 'cloud-data-out',
    title: 'Data 2 OUT',
    manager: 'Cloud Manager',
    scope: 'Procesamiento de datos y analítica en tiempo real para Dashboards.',
    salary: '$9.000.000 - $14.000.000 COP',
    skills: ['BigQuery/Redshift', 'SQL Avanzado', 'BI Tools'],
    connectsWith: ['O&M CGM', 'Product Manager'],
    category: 'Transversal',
    region: 'Transversal',
    type: 'Role'
  },
  {
    id: 'cloud-cyber',
    title: 'CiberSecurity',
    manager: 'Cloud Manager',
    scope: 'Proteger infraestructura energética y datos de clientes de ataques.',
    salary: '$10.000.000 - $15.000.000 COP',
    skills: ['Ethical Hacking', 'Cloud Security', 'Normativas ISO'],
    connectsWith: ['Tech Manager', 'Cloud Developer'],
    category: 'Transversal',
    region: 'Transversal',
    type: 'Role'
  },
  {
    id: 'cloud-dev',
    title: 'Cloud Developer',
    manager: 'Cloud Manager',
    scope: 'Infraestructura como código y pipelines CI/CD.',
    salary: '$8.000.000 - $13.000.000 COP',
    skills: ['Terraform', 'Docker/Kubernetes', 'AWS/GCP'],
    connectsWith: ['Tech Manager', 'CiberSecurity'],
    category: 'Transversal',
    region: 'Transversal',
    type: 'Role'
  },
  
  // NUEVOS ROLES (Propuestos)
  {
    id: 'hr-manager',
    title: 'Talent & Culture Manager',
    manager: 'Human Resources',
    scope: 'Reclutamiento, retención de talento tech/energía, nómina y cultura.',
    salary: '$10.000.000 - $14.000.000 COP',
    skills: ['Talent Acquisition', 'Cultura StartUp', 'Gestión de Nómina'],
    connectsWith: ['CEO', 'Todos los Managers'],
    category: 'Transversal',
    region: 'Transversal',
    type: 'Leader'
  },
  {
    id: 'legal-counsel',
    title: 'Legal Counsel',
    manager: 'Legal & Compliance',
    scope: 'Estructuración de PPA B2B, regulación energética, permisos CREG y contratos.',
    salary: '$12.000.000 - $16.000.000 COP',
    skills: ['Derecho Energético', 'Contratos Corporativos', 'Regulación CREG'],
    connectsWith: ['Sales Manager', 'Construction Manager', 'CEO'],
    category: 'Transversal',
    region: 'Transversal',
    type: 'Leader'
  },
  // Externals
  {
    id: 'ext-sub-redes',
    title: 'Sub Autopista - Redes',
    manager: 'External',
    scope: 'Entidad externa encargada de habilitar redes.',
    salary: 'N/A (Contratista)',
    skills: ['Operador de Red'],
    connectsWith: ['Construction Coordinator B2B'],
    category: 'Transversal',
    type: 'External'
  },
  {
    id: 'ext-sub-network',
    title: 'Sub Autopista - Network',
    manager: 'External',
    scope: 'Conexión a la red nacional y aprobación.',
    salary: 'N/A (Contratista)',
    skills: ['Operador de Red'],
    connectsWith: ['Construction Coordinator B2B'],
    category: 'Transversal',
    type: 'External'
  },
  {
    id: 'ext-sub-b2c',
    title: 'Subcontratista B2C',
    manager: 'External',
    scope: 'Cuadrillas externas de instalación de paneles.',
    salary: 'N/A (Contratista)',
    skills: ['Instalación Solar'],
    connectsWith: ['Construction Coordinator B2C'],
    category: 'B2C',
    type: 'External'
  },
  {
    id: 'ext-sub-b2b',
    title: 'Subcontratista B2B',
    manager: 'External',
    scope: 'Cuadrillas especializadas en granjas solares y BESS grandes.',
    salary: 'N/A (Contratista)',
    skills: ['Instalación Media Tensión', 'Obra Civil'],
    connectsWith: ['Construction Coordinator B2B'],
    category: 'B2B',
    type: 'External'
  },
  {
    id: 'ext-prov-solar',
    title: 'Proveedor Solar',
    manager: 'External',
    scope: 'Fabricante de paneles e inversores.',
    salary: 'N/A (Proveedor)',
    skills: ['Logística Global'],
    connectsWith: ['Supply'],
    category: 'Transversal',
    type: 'External'
  },
  {
    id: 'ext-prov-tableros',
    title: 'Proveedor Tableros',
    manager: 'External',
    scope: 'Fabricante de tableros eléctricos.',
    salary: 'N/A (Proveedor)',
    skills: ['Manufactura Eléctrica'],
    connectsWith: ['Supply'],
    category: 'Transversal',
    type: 'External'
  }
];
