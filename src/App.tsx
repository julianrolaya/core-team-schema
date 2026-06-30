import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { orgData } from './data';
import type { Role } from './data';
import { X, Battery, Sun, Zap, Briefcase, DollarSign, Brain, Link, Moon, Users, TrendingUp, Calculator, Filter } from 'lucide-react';
import './App.css';

// Minimalist colors for each vertical
const verticalColors: Record<string, string> = {
  'Andrés Herrera': '#3b82f6', // CEO
  'Sales Manager': '#ef4444',
  'Construction Manager': '#f59e0b',
  'Engineer Manager': '#10b981',
  'Supply Manager': '#8b5cf6',
  'Customer EXP. Manager': '#ec4899',
  'O&M Manager': '#14b8a6',
  'Marketing Manager': '#f43f5e',
  'Product Manager': '#84cc16',
  'Finance Manager': '#06b6d4',
  'Tech Manager': '#6366f1',
  'Cloud Manager': '#d946ef',
  'Talent & Culture Manager': '#eab308',
  'Legal Counsel': '#64748b',
  'Aliados Estratégicos': '#737373',
};

function getVerticalColor(role: Role): string {
  if (role.type === 'Leader' || role.id === 'andres-herrera' || role.id === 'ext-group') {
    return verticalColors[role.title] || '#737373';
  }
  return verticalColors[role.manager] || '#737373';
}

function parseSalary(salaryStr: string) {
  if (!salaryStr || salaryStr.includes('N/A')) return { min: 0, max: 0 };
  const matches = salaryStr.match(/(\d{1,3})\.(\d{3})\.(\d{3})/g);
  if (!matches) return { min: 0, max: 0 };
  const nums = matches.map(s => parseInt(s.replace(/\./g, ''), 10));
  if (nums.length === 1) return { min: nums[0], max: nums[0] };
  return { min: nums[0], max: nums[1] };
}

function formatCurrency(amount: number) {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    maximumFractionDigits: 0
  }).format(amount);
}

function App() {
  const [view, setView] = useState<'B2C' | 'B2B'>('B2C');
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(true);
  
  // Filters State
  const [selectedRegion, setSelectedRegion] = useState<string>('All');
  const [selectedRoleType, setSelectedRoleType] = useState<string>('All');
  const [highlightCategory, setHighlightCategory] = useState<'B2C' | 'B2B' | null>(null);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
    }
  }, [isDarkMode]);

  // Metrics Calculation
  const metrics = useMemo(() => {
    const coreTeam = orgData.filter(r => r.type !== 'External');
    const b2cTeam = coreTeam.filter(r => r.category === 'B2C');
    const b2bTeam = coreTeam.filter(r => r.category === 'B2B');
    const transversalTeam = coreTeam.filter(r => r.category === 'Transversal');

    const calcPayroll = (team: Role[]) => {
      return team.reduce((acc, role) => {
        const { min, max } = parseSalary(role.salary);
        return { min: acc.min + min, max: acc.max + max };
      }, { min: 0, max: 0 });
    };

    const total = calcPayroll(coreTeam);
    const b2c = calcPayroll(b2cTeam);
    const b2b = calcPayroll(b2bTeam);
    const transversal = calcPayroll(transversalTeam);

    return {
      coreCount: coreTeam.length,
      b2cCount: b2cTeam.length,
      b2bCount: b2bTeam.length,
      transversalCount: transversalTeam.length,
      totalPayroll: total,
      b2cPayroll: b2c,
      b2bPayroll: b2b,
      transversalPayroll: transversal
    };
  }, []);

  // Filter logic (combines Tab View + Region + Role Type)
  const filteredData = useMemo(() => {
    return orgData.filter((r) => {
      const matchView = r.category === 'Transversal' || r.category === view;
      const matchRegion = selectedRegion === 'All' || r.region === selectedRegion;
      const matchType = selectedRoleType === 'All' || r.type === selectedRoleType;
      
      return matchView && matchRegion && matchType;
    });
  }, [view, selectedRegion, selectedRoleType]);

  // Re-build hierarchy based on filtered results
  const hierarchy = useMemo(() => {
    const managers = orgData.filter((r) => r.type === 'Leader' || r.id === 'andres-herrera');
    
    const rows = managers.map((manager) => {
      const reports = filteredData.filter((r) => (r.manager === manager.title || r.manager === manager.id) && r.type !== 'Leader');
      return { manager, reports };
    });
    
    const externals = filteredData.filter((r) => r.type === 'External');
    if (externals.length > 0) {
      rows.push({
        manager: {
          id: 'ext-group',
          title: 'Aliados Estratégicos',
          manager: '',
          scope: 'Stakeholders y proveedores externos al equipo Core.',
          salary: '',
          skills: [],
          connectsWith: [],
          category: 'Transversal',
          type: 'Leader'
        },
        reports: externals
      });
    }

    return rows.filter(row => {
      const managerMatched = filteredData.some(f => f.id === row.manager.id);
      return row.reports.length > 0 || managerMatched;
    });
  }, [filteredData]);

  const regions = ['All', ...Array.from(new Set(orgData.map(r => r.region).filter(Boolean)))];

  const getRoleState = (role: Role) => {
    if (!highlightCategory) return { highlighted: false, dimmed: false };
    if (role.category === highlightCategory) return { highlighted: true, dimmed: false };
    return { highlighted: false, dimmed: true };
  };

  return (
    <div className="app-container">
      <button 
        className="theme-toggle" 
        onClick={() => setIsDarkMode(!isDarkMode)}
        title="Cambiar Tema"
      >
        {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
      </button>

      <header className="header">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Sunny Energy Tech
        </motion.h1>
        <p>Estructura Organizacional y Servicios Tecnológicos</p>
      </header>

      {/* Metrics Dashboard */}
      <section className="metrics-dashboard">
        <div className="metric-card highlight-main">
          <div className="metric-header">
            <Calculator size={18} />
            <span>Nómina Base (Mensual Total)</span>
          </div>
          <div className="metric-value">
            {formatCurrency(metrics.totalPayroll.min)} - {formatCurrency(metrics.totalPayroll.max)}
          </div>
          <div className="metric-sub">Equipo Core: {metrics.coreCount} integrantes</div>
        </div>

        <div className="metric-card">
          <div className="metric-header">
            <Users size={18} />
            <span>Core Transversal</span>
          </div>
          <div className="metric-value">{metrics.transversalCount} personas</div>
          <div className="metric-sub">
            Costo: {formatCurrency(metrics.transversalPayroll.min)}
          </div>
        </div>

        <div 
          className={`metric-card clickable ${highlightCategory === 'B2C' ? 'active' : ''}`}
          onClick={() => setHighlightCategory(prev => prev === 'B2C' ? null : 'B2C')}
          title="Haz clic para resaltar roles B2C"
        >
          <div className="metric-header">
            <TrendingUp size={18} />
            <span>Proyecto B2C</span>
          </div>
          <div className="metric-value">{metrics.b2cCount} personas</div>
          <div className="metric-sub">
            Costo: {formatCurrency(metrics.b2cPayroll.min)}
          </div>
        </div>

        <div 
          className={`metric-card clickable ${highlightCategory === 'B2B' ? 'active' : ''}`}
          onClick={() => setHighlightCategory(prev => prev === 'B2B' ? null : 'B2B')}
          title="Haz clic para resaltar roles B2B"
        >
          <div className="metric-header">
            <Briefcase size={18} />
            <span>Proyecto B2B</span>
          </div>
          <div className="metric-value">{metrics.b2bCount} personas</div>
          <div className="metric-sub">
            Costo: {formatCurrency(metrics.b2bPayroll.min)}
          </div>
        </div>
      </section>

      {/* Main Controls (Tabs + Upfront Filters aligned) */}
      <div className="controls-container">
        <div className="view-toggle">
          <button 
            className={`toggle-btn ${view === 'B2C' ? 'active' : ''}`}
            onClick={() => setView('B2C')}
          >
            Residencial (B2C)
          </button>
          <button 
            className={`toggle-btn ${view === 'B2B' ? 'active' : ''}`}
            onClick={() => setView('B2B')}
          >
            Corporativo (B2B)
          </button>
        </div>

        <div className="filters-bar">
          <div className="filter-icon">
            <Filter size={18} />
          </div>
          
          <div className="filter-group">
            <select value={selectedRegion} onChange={(e) => setSelectedRegion(e.target.value)}>
              {regions.map(r => <option key={r} value={r}>{r === 'All' ? 'Todas las Regiones' : r}</option>)}
            </select>
          </div>
          
          <div className="filter-group">
            <select value={selectedRoleType} onChange={(e) => setSelectedRoleType(e.target.value)}>
              <option value="All">Todos los Roles</option>
              <option value="Leader">Manager / Liderazgo</option>
              <option value="Role">Rol Operativo</option>
              <option value="External">Aliados Externos</option>
            </select>
          </div>
          
          {(selectedRegion !== 'All' || selectedRoleType !== 'All') && (
            <button 
              className="clear-filters-btn"
              onClick={() => { setSelectedRegion('All'); setSelectedRoleType('All'); }}
              title="Limpiar Filtros"
            >
              <X size={16} />
            </button>
          )}
        </div>
      </div>

      <motion.div 
        className="org-chart"
        layout
      >
        {hierarchy.length === 0 && (
          <div className="empty-state">No hay roles que coincidan con los filtros seleccionados.</div>
        )}
        {hierarchy.map((row, idx) => (
          <motion.div 
            key={row.manager.id} 
            className="org-row"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.05 }}
          >
            <div className={`org-manager-col ${!filteredData.some(f => f.id === row.manager.id) ? 'filtered-out' : ''}`}>
              <RoleCard 
                role={row.manager} 
                onClick={() => setSelectedRole(row.manager)} 
                state={getRoleState(row.manager)}
              />
            </div>
            
            {row.reports.length > 0 && (
              <div className="org-roles-col">
                {row.reports.map((role) => (
                  <div className="role-wrapper" key={role.id}>
                    <RoleCard 
                      role={role} 
                      onClick={() => setSelectedRole(role)} 
                      state={getRoleState(role)}
                    />
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>

      <AnimatePresence>
        {selectedRole && (
          <SidePanel role={selectedRole} onClose={() => setSelectedRole(null)} />
        )}
      </AnimatePresence>
    </div>
  );
}

function RoleCard({ role, onClick, state }: { role: Role; onClick: () => void, state: { highlighted: boolean, dimmed: boolean } }) {
  const shortScope = role.scope.length > 60 ? role.scope.substring(0, 57) + '...' : role.scope;
  const verticalColor = getVerticalColor(role);

  let extraClass = '';
  if (state.highlighted) extraClass = 'highlighted';
  if (state.dimmed) extraClass = 'dimmed';

  return (
    <motion.div 
      className={`role-node ${role.type.toLowerCase()} ${extraClass}`}
      onClick={onClick}
      layoutId={`role-card-${role.id}`}
      whileHover={{ y: -2 }}
    >
      <div className="vertical-indicator" style={{ backgroundColor: verticalColor }} />
      
      <div className="role-header">
        <div className="role-title">{role.title}</div>
        {role.region && <div className="role-region">{role.region}</div>}
      </div>
      
      <div className="role-meta">
        <div className="role-meta-item">
          <Users size={14} /> <span>{role.manager || 'C-Level'}</span>
        </div>
        {role.salary && !role.salary.includes('N/A') && (
          <div className="role-meta-item">
            <DollarSign size={14} /> <span>{role.salary.split(' ')[0]} - {role.salary.split(' ')[2]}</span>
          </div>
        )}
        <div className="role-meta-item" style={{ marginTop: '0.25rem', opacity: 0.8 }}>
          {shortScope}
        </div>
      </div>
    </motion.div>
  );
}

function SidePanel({ role, onClose }: { role: Role; onClose: () => void }) {
  const verticalColor = getVerticalColor(role);

  return (
    <>
      <motion.div 
        className="side-panel-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />
      <motion.div 
        className="side-panel"
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
      >
        <button className="close-btn" onClick={onClose}><X size={20} /></button>
        <div className="panel-content">
          <div className="panel-header-flex">
            <div className="vertical-indicator large" style={{ backgroundColor: verticalColor }} />
            <motion.h2 layoutId={`role-card-${role.id}`}>{role.title}</motion.h2>
          </div>
          <div className="subtitle">
            {role.manager || 'Directorio'} • {role.category} {role.region && `• ${role.region}`}
          </div>
          
          <div className="detail-section">
            <h4><Briefcase size={16} /> Alcance y Responsabilidades</h4>
            <p>{role.scope}</p>
          </div>

          {role.salary && (
            <div className="detail-section">
              <h4><DollarSign size={16} /> Rango Salarial (COP)</h4>
              <p>{role.salary}</p>
              <small className="muted">*Estimación base de mercado para perfil Mid/Senior.</small>
            </div>
          )}

          {role.skills.length > 0 && (
            <div className="detail-section">
              <h4><Brain size={16} /> Habilidades Clave</h4>
              <div className="skills-list">
                {role.skills.map(s => <span key={s} className="skill-tag" style={{ borderLeft: `3px solid ${verticalColor}` }}>{s}</span>)}
              </div>
            </div>
          )}

          {role.connectsWith.length > 0 && (
            <div className="detail-section">
              <h4><Link size={16} /> Conectores (Interacciones Diarias)</h4>
              <div className="connects-list">
                {role.connectsWith.map(c => <span key={c} className="connect-tag">{c}</span>)}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </>
  );
}

export default App;
