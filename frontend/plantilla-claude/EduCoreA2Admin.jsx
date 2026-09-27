import React from "react";

// Fuente: agrega en el <head>:
// <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
// Prop opcional: <EduCoreA2Admin readOnly /> bloquea la planilla.
const css = `*{margin:0;padding:0;box-sizing:border-box}
body{background:#0F172A;font-family:'Inter',sans-serif;color:#F1F5F9;-webkit-font-smoothing:antialiased}
a{color:#38BDF8;text-decoration:none}
a:hover{color:#7DD3FC}
input{font:inherit;color:inherit}
input::placeholder{color:#64748B}
input:focus{outline:1px solid #0EA5E9;outline-offset:0}
.hv1{transition:background .15s,border-color .15s}.hv1:hover{background:#131D31 !important}
.hv2{transition:background .15s,border-color .15s}.hv2:hover{border-color:#3B4A66 !important}
.hv3{transition:background .15s,border-color .15s}.hv3:hover{background:#1E293B !important}
.hv4{transition:background .15s,border-color .15s}.hv4:hover{background:#0284C7 !important}
.hv5{transition:background .15s,border-color .15s}.hv5:hover{background:rgba(14,165,233,.1) !important}
.hv6{transition:background .15s,border-color .15s}.hv6:hover{background:#1A2539 !important}`;

export default class EduCoreA2Admin extends React.Component {
  state = {
    query: '', dirty: {}, saved: false,
    rows: [
      { id: 1, name: 'Castro Rojas, Iván', cog: '4.5', pro: '4.8', act: '5.0' },
      { id: 2, name: 'Durán Ríos, Yoiner', cog: '4.2', pro: '4.0', act: '4.5' },
      { id: 3, name: 'Martínez López, Camila', cog: '3.5', pro: '3.8', act: '4.0' },
      { id: 4, name: 'Pérez Gómez, Santiago', cog: '2.8', pro: '2.5', act: '3.0' },
      { id: 5, name: 'Rodríguez Herrera, Valentina', cog: '4.0', pro: '4.2', act: '4.8' },
      { id: 6, name: 'Vargas Mendoza, Andrés', cog: '4.8', pro: '4.6', act: '5.0' },
    ],
  };
  num(v) { const n = parseFloat(String(v).replace(',', '.')); return n >= 1 && n <= 5 ? n : null; }
  setGrade(id, key, value) {
    if (!/^[0-9]?([.,][0-9]?)?$/.test(value)) return;
    this.setState(s => ({
      rows: s.rows.map(r => r.id === id ? { ...r, [key]: value } : r),
      dirty: { ...s.dirty, [id]: true }, saved: false,
    }));
  }
  renderVals() {
    const readOnly = this.props.readOnly ?? false;
    const q = this.state.query.trim().toLowerCase();
    const all = this.state.rows.map((r, i) => {
      const c = this.num(r.cog), p = this.num(r.pro), a = this.num(r.act);
      const d = c != null && p != null && a != null ? Math.round((c * .4 + p * .4 + a * .2) * 10) / 10 : null;
      const initials = r.name.split(', ').reverse().map(w => w[0]).join('');
      return {
        ...r, n: i + 1, initials, dNum: d, def: d == null ? '—' : d.toFixed(1),
        isSup: d != null && d >= 4.6, isAlto: d != null && d >= 4 && d < 4.6,
        isBas: d != null && d >= 3 && d < 4, isBajo: d != null && d < 3, isNone: d == null,
        onCog: e => this.setGrade(r.id, 'cog', e.target.value),
        onPro: e => this.setGrade(r.id, 'pro', e.target.value),
        onAct: e => this.setGrade(r.id, 'act', e.target.value),
      };
    });
    const rows = q ? all.filter(r => r.name.toLowerCase().includes(q)) : all;
    const nd = Object.keys(this.state.dirty).length;
    return {
      rows, readOnly, query: this.state.query,
      noRows: rows.length === 0,
      hasDirty: nd > 0, dirtyLabel: `${nd} ${nd === 1 ? 'cambio' : 'cambios'} sin guardar`,
      savedShown: this.state.saved && nd === 0,
      onQuery: e => this.setState({ query: e.target.value }),
      save: () => this.setState({ dirty: {}, saved: true }),
    };
  }
  render() {
    const { rows, readOnly, query, noRows, hasDirty, dirtyLabel, savedShown, onQuery, save } = this.renderVals();
    return (
      <>
        <style>{css}</style>
        <div style={{display:"grid",gridTemplateColumns:"clamp(210px,18vw,260px) minmax(0,1fr)",minHeight:"100vh",background:"#0F172A"}}>
        
        <aside style={{background:"#0B1222",borderRight:"1px solid #1E293B",display:"flex",flexDirection:"column",padding:"24px 12px"}}>
        <div style={{display:"flex",alignItems:"center",gap:"12px",padding:"0 16px 10px"}}>
        <span style={{width:"32px",height:"32px",borderRadius:"8px",background:"#0EA5E9",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:"0"}}><svg width="18" height="18" viewBox="0 0 24 24" style={{fill:"none",stroke:"#fff",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}}><circle cx="12" cy="12" r="2"></circle><ellipse cx="12" cy="12" rx="9" ry="4"></ellipse><ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(60 12 12)"></ellipse><ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(120 12 12)"></ellipse></svg></span>
        <span style={{fontSize:"20px",fontWeight:"700",letterSpacing:"-.3px"}}>EduCore</span>
        </div>
        <div style={{padding:"0 16px 20px 60px"}}><span style={{fontSize:"10px",fontWeight:"700",letterSpacing:"1.5px",color:"#38BDF8",border:"1px solid rgba(14,165,233,.45)",background:"rgba(14,165,233,.1)",borderRadius:"4px",padding:"3px 7px"}}>A2-ADMIN</span></div>
        <nav style={{display:"flex",flexDirection:"column",gap:"4px"}}>
        <div style={{display:"flex",alignItems:"center",gap:"14px",padding:"11px 16px",borderRadius:"6px",background:"#15233B",borderLeft:"3px solid #0EA5E9",fontSize:"14px",fontWeight:"600",cursor:"pointer"}}><svg width="18" height="18" viewBox="0 0 24 24" style={{fill:"none",stroke:"#38BDF8",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",flexShrink:"0"}}><path d="M3 3v18h18"></path><path d="M8 17V11"></path><path d="M13 17V7"></path><path d="M18 17v-4"></path></svg>Dashboard</div>
        <div className="hv1" style={{display:"flex",alignItems:"center",gap:"14px",padding:"11px 16px 11px 19px",borderRadius:"6px",fontSize:"14px",color:"#CBD5E1",cursor:"pointer"}}><svg width="18" height="18" viewBox="0 0 24 24" style={{fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",flexShrink:"0"}}><path d="M3 21h18"></path><path d="M5 21V10l7-5 7 5v11"></path><path d="M9 21v-5h6v5"></path></svg>Estructura Institucional</div>
        <div className="hv1" style={{display:"flex",alignItems:"center",gap:"14px",padding:"11px 16px 11px 19px",borderRadius:"6px",fontSize:"14px",color:"#CBD5E1",cursor:"pointer"}}><svg width="18" height="18" viewBox="0 0 24 24" style={{fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",flexShrink:"0"}}><circle cx="9" cy="8" r="3.5"></circle><path d="M2.5 20c.8-3.5 3.4-5.5 6.5-5.5s5.7 2 6.5 5.5"></path><path d="M16 4.5a3.5 3.5 0 0 1 0 7"></path><path d="M18 14.8c1.8.7 3 2.5 3.5 5.2"></path></svg>Estudiantes / SIMAT</div>
        <div className="hv1" style={{display:"flex",alignItems:"center",gap:"14px",padding:"11px 16px 11px 19px",borderRadius:"6px",fontSize:"14px",color:"#CBD5E1",cursor:"pointer"}}><svg width="18" height="18" viewBox="0 0 24 24" style={{fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",flexShrink:"0"}}><path d="M4 20l1-4L16 5l3 3L8 19z"></path><path d="M14 7l3 3"></path></svg>Calificaciones SIEE</div>
        <div className="hv1" style={{display:"flex",alignItems:"center",gap:"14px",padding:"11px 16px 11px 19px",borderRadius:"6px",fontSize:"14px",color:"#CBD5E1",cursor:"pointer"}}><svg width="18" height="18" viewBox="0 0 24 24" style={{fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",flexShrink:"0"}}><path d="M6 3h9l4 4v14H6z"></path><path d="M9 11h7"></path><path d="M9 15h7"></path></svg>Generador de Boletines</div>
        <div className="hv1" style={{display:"flex",alignItems:"center",gap:"14px",padding:"11px 16px 11px 19px",borderRadius:"6px",fontSize:"14px",color:"#CBD5E1",cursor:"pointer"}}><svg width="18" height="18" viewBox="0 0 24 24" style={{fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",flexShrink:"0"}}><circle cx="12" cy="12" r="3"></circle><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1"></path></svg>Configuración Tenant</div>
        </nav>
        </aside>
        
        <div style={{display:"flex",flexDirection:"column",minWidth:"0",overflowX:"clip"}}>
        <header style={{display:"flex",justifyContent:"space-between",alignItems:"center",gap:"16px",padding:"14px clamp(20px,2.3vw,32px)",borderBottom:"1px solid #1E293B",flexWrap:"wrap"}}>
        <div className="hv2" style={{display:"flex",alignItems:"center",gap:"10px",background:"#141E31",border:"1px solid #2A3650",borderRadius:"6px",padding:"7px 12px",cursor:"pointer",minWidth:"0",maxWidth:"100%"}}>
        <svg width="16" height="16" viewBox="0 0 24 24" style={{fill:"none",stroke:"#CBD5E1",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",flexShrink:"0"}}><path d="M3 21h18"></path><path d="M5 21V10l7-5 7 5v11"></path><path d="M9 21v-5h6v5"></path></svg>
        <span style={{fontSize:"13px",fontWeight:"500",whiteSpace:"nowrap"}}>IE INCODELCA – Sede Principal</span>
        <span style={{fontSize:"12px",color:"#64748B",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",minWidth:"0"}}>incodelca.educore.co</span>
        <svg width="14" height="14" viewBox="0 0 24 24" style={{fill:"none",stroke:"#CBD5E1",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",flexShrink:"0"}}><path d="M6 9l6 6 6-6"></path></svg>
        </div>
        <div style={{display:"flex",alignItems:"center",gap:"16px 24px",flexWrap:"wrap",marginLeft:"auto"}}>
        <span style={{display:"flex",alignItems:"center",gap:"6px",fontSize:"11px",fontWeight:"500",color:"#CBD5E1",background:"#122033",border:"1px solid #1F3B3A",borderRadius:"999px",padding:"4px 10px",whiteSpace:"nowrap"}}><span style={{width:"6px",height:"6px",borderRadius:"50%",background:"#22C55E"}}></span>PWA Activa / Modo Optimizado</span>
        <div style={{display:"flex",alignItems:"center",gap:"12px"}}>
        <div style={{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:"2px"}}><span style={{fontSize:"14px",fontWeight:"600",whiteSpace:"nowrap"}}>Ronald García</span><span style={{fontSize:"11px",color:"#94A3B8",whiteSpace:"nowrap"}}>Docente / Scrum Developer</span></div>
        <span style={{width:"36px",height:"36px",borderRadius:"50%",background:"#334155",border:"2px solid #475569",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"13px",fontWeight:"600",flexShrink:"0"}}>RG</span>
        </div>
        </div>
        </header>
        
        <main style={{padding:"36px clamp(20px,2.3vw,32px) 48px",display:"flex",flexDirection:"column",gap:"24px"}}>
        <div style={{display:"flex",flexDirection:"column",gap:"8px"}}>
        <h1 style={{fontSize:"clamp(22px,2vw,26px)",fontWeight:"700",letterSpacing:"-.3px",lineHeight:"1.25"}}>Bienvenido, Ronald García — Periodo Lectivo 3 (2026)</h1>
        <p style={{fontSize:"14px",color:"#CBD5E1"}}>Panel de control académico unificado y planilla SIEE.</p>
        </div>
        
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,minmax(0,1fr))",gap:"16px"}}>
        <div style={{background:"#162033",border:"1px solid #2A3650",borderRadius:"8px",padding:"clamp(18px,1.8vw,24px)",display:"flex",flexDirection:"column",gap:"18px",minWidth:"0"}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",gap:"8px"}}><span style={{fontSize:"14px",color:"#CBD5E1"}}>Cursos Asignados</span><svg width="20" height="20" viewBox="0 0 24 24" style={{fill:"none",stroke:"#94A3B8",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round",flexShrink:"0"}}><path d="M2 5h6a4 4 0 0 1 4 4v11a3 3 0 0 0-3-3H2z"></path><path d="M22 5h-6a4 4 0 0 0-4 4v11a3 3 0 0 1 3-3h7z"></path></svg></div>
        <span style={{fontSize:"28px",fontWeight:"700"}}>4</span>
        <span style={{fontSize:"11px",color:"#64748B",paddingTop:"6px"}}>Grados: 1001, 1002, 1101, 1102</span>
        </div>
        <div style={{background:"#162033",border:"1px solid #2A3650",borderRadius:"8px",padding:"clamp(18px,1.8vw,24px)",display:"flex",flexDirection:"column",gap:"18px",minWidth:"0"}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",gap:"8px"}}><span style={{fontSize:"14px",color:"#CBD5E1"}}>Estudiantes Totales</span><svg width="20" height="20" viewBox="0 0 24 24" style={{fill:"none",stroke:"#94A3B8",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round",flexShrink:"0"}}><circle cx="9" cy="8" r="3.5"></circle><path d="M2.5 20c.8-3.5 3.4-5.5 6.5-5.5s5.7 2 6.5 5.5"></path><path d="M16 4.5a3.5 3.5 0 0 1 0 7"></path><path d="M18 14.8c1.8.7 3 2.5 3.5 5.2"></path></svg></div>
        <span style={{fontSize:"28px",fontWeight:"700"}}>118</span>
        <span style={{fontSize:"11px",color:"#64748B",paddingTop:"6px"}}>Estudiantes matriculados activos en SIMAT</span>
        </div>
        <div style={{background:"#162033",border:"1px solid #2A3650",borderRadius:"8px",padding:"clamp(18px,1.8vw,24px)",display:"flex",flexDirection:"column",gap:"18px",minWidth:"0"}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",gap:"8px"}}><span style={{fontSize:"14px",color:"#CBD5E1"}}>Estado de Calificaciones</span><svg width="20" height="20" viewBox="0 0 24 24" style={{fill:"none",stroke:"#94A3B8",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round",flexShrink:"0"}}><circle cx="12" cy="12" r="9"></circle><path d="M12 12l4-4"></path></svg></div>
        <div style={{display:"flex",alignItems:"center",gap:"8px 16px",flexWrap:"wrap"}}><span style={{fontSize:"28px",fontWeight:"700"}}>75%</span><span style={{fontSize:"11px",fontWeight:"600",color:"#4ADE80",border:"1px solid #22C55E",borderRadius:"3px",padding:"1px 8px"}}>Completado</span></div>
        <span style={{fontSize:"11px",color:"#64748B",paddingTop:"6px"}}>Carga de notas Periodo 3 finalizada</span>
        </div>
        </div>
        
        <section style={{background:"#162033",border:"1px solid #2A3650",borderRadius:"10px",padding:"clamp(18px,1.8vw,24px)",display:"flex",flexDirection:"column",gap:"20px",minWidth:"0"}}>
        <div style={{display:"flex",flexDirection:"column",gap:"6px"}}>
        <h2 style={{fontSize:"16px",fontWeight:"600"}}>Planilla de Calificaciones – Asignatura: Tecnología e Informática (Grado 1001)</h2>
        <p style={{fontSize:"13px",color:"#CBD5E1"}}>Ingrese las calificaciones según la escala del Sistema Institucional de Evaluación de Estudiantes (SIEE).</p>
        </div>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",gap:"12px",flexWrap:"wrap"}}>
        <div style={{display:"flex",alignItems:"center",gap:"8px",width:"280px",maxWidth:"100%",background:"#0F172A",border:"1px solid #2A3650",borderRadius:"4px",padding:"0 12px"}}><svg width="16" height="16" viewBox="0 0 24 24" style={{fill:"none",stroke:"#94A3B8",strokeWidth:"2",strokeLinecap:"round",flexShrink:"0"}}><circle cx="11" cy="11" r="7"></circle><path d="M20 20l-4-4"></path></svg><input value={query} onChange={onQuery} placeholder="Buscar estudiante..." style={{flex:"1",minWidth:"0",background:"transparent",border:"none",padding:"8px 0",fontSize:"13px",outline:"none"}} /></div>
        <div style={{display:"flex",gap:"10px",flexWrap:"wrap",alignItems:"center"}}>
        {hasDirty && (<><span style={{fontSize:"12px",color:"#FBBF24"}}>{dirtyLabel}</span></>)}
        {savedShown && (<><span style={{fontSize:"12px",color:"#4ADE80"}}>Cambios guardados</span></>)}
        <div className="hv3" style={{display:"flex",alignItems:"center",gap:"8px",border:"1px solid #334155",borderRadius:"4px",padding:"8px 16px",fontSize:"13px",fontWeight:"500",cursor:"pointer",whiteSpace:"nowrap"}}><svg width="15" height="15" viewBox="0 0 24 24" style={{fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}}><path d="M12 4v11"></path><path d="M7 10l5 5 5-5"></path><path d="M4 20h16"></path></svg>Importar desde SIMAT (CSV)</div>
        <div onClick={save} className="hv4" style={{display:"flex",alignItems:"center",gap:"8px",background:"#0EA5E9",border:"1px solid #0EA5E9",borderRadius:"4px",padding:"8px 16px",fontSize:"13px",fontWeight:"600",color:"#fff",cursor:"pointer",whiteSpace:"nowrap"}}><svg width="15" height="15" viewBox="0 0 24 24" style={{fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}}><path d="M5 3h11l3 3v15H5z"></path><path d="M8 3v5h7V3"></path><path d="M8 21v-7h8v7"></path></svg>Guardar Cambios</div>
        <div className="hv5" style={{display:"flex",alignItems:"center",gap:"8px",border:"1px solid #0EA5E9",borderRadius:"4px",padding:"8px 16px",fontSize:"13px",fontWeight:"600",color:"#38BDF8",cursor:"pointer",whiteSpace:"nowrap"}}><svg width="15" height="15" viewBox="0 0 24 24" style={{fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}}><path d="M7 3h7l4 4v14H7z"></path><path d="M10 12h5M10 16h5"></path></svg>Generar Boletines (PDF)</div>
        </div>
        </div>
        <div style={{overflowX:"auto",borderRadius:"6px"}}><div style={{minWidth:"900px"}}>
        <div style={{display:"grid",gridTemplateColumns:"40px 32px minmax(180px,1fr) 110px 110px 110px 90px 110px",gap:"14px",padding:"14px 16px",background:"#1C2840",fontSize:"11px",fontWeight:"500",letterSpacing:".3px",color:"#CBD5E1",alignItems:"center"}}>
        <span>Nº</span><span></span><span>APELLIDOS Y NOMBRES</span><span>COGNITIVO (40%)</span><span>PROCEDIMENTAL (40%)</span><span>ACTITUDINAL (20%)</span><span>DEFINITIVA</span><span>NIVEL SIEE</span>
        </div>
        {rows.map(r => (<React.Fragment key={r.id}>
        <div className="hv6" style={{display:"grid",gridTemplateColumns:"40px 32px minmax(180px,1fr) 110px 110px 110px 90px 110px",gap:"14px",padding:"8px 16px",background:"#162033",borderBottom:"1px solid #26324A",alignItems:"center"}}>
        <span style={{fontSize:"12px",color:"#64748B"}}>{r.n}</span>
        <span style={{width:"26px",height:"26px",borderRadius:"50%",background:"#334155",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"10px",fontWeight:"600",color:"#E2E8F0"}}>{r.initials}</span>
        <span style={{fontSize:"14px",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}}>{r.name}</span>
        <input value={r.cog} onChange={r.onCog} readOnly={readOnly} inputMode="decimal" style={{width:"72px",background:"#0F172A",border:"1px solid #334155",borderRadius:"3px",padding:"6px 0",textAlign:"center",fontSize:"13px"}} />
        <input value={r.pro} onChange={r.onPro} readOnly={readOnly} inputMode="decimal" style={{width:"72px",background:"#0F172A",border:"1px solid #334155",borderRadius:"3px",padding:"6px 0",textAlign:"center",fontSize:"13px"}} />
        <input value={r.act} onChange={r.onAct} readOnly={readOnly} inputMode="decimal" style={{width:"72px",background:"#0F172A",border:"1px solid #334155",borderRadius:"3px",padding:"6px 0",textAlign:"center",fontSize:"13px"}} />
        <span style={{fontSize:"14px",fontWeight:"700"}}>{r.def}</span>
        <div style={{display:"flex"}}>
        {r.isSup && (<><span style={{fontSize:"10px",fontWeight:"700",letterSpacing:".3px",color:"#4ADE80",border:"1px solid #22C55E",borderRadius:"999px",padding:"3px 9px"}}>SUPERIOR</span></>)}
        {r.isAlto && (<><span style={{fontSize:"10px",fontWeight:"700",letterSpacing:".3px",color:"#60A5FA",border:"1px solid #3B82F6",borderRadius:"999px",padding:"3px 9px"}}>ALTO</span></>)}
        {r.isBas && (<><span style={{fontSize:"10px",fontWeight:"700",letterSpacing:".3px",color:"#FBBF24",border:"1px solid #F59E0B",borderRadius:"999px",padding:"3px 9px"}}>BÁSICO</span></>)}
        {r.isBajo && (<><span style={{fontSize:"10px",fontWeight:"700",letterSpacing:".3px",color:"#F87171",background:"#2A1A22",borderRadius:"999px",padding:"4px 10px"}}>BAJO</span></>)}
        {r.isNone && (<><span style={{fontSize:"11px",color:"#64748B"}}>Pendiente</span></>)}
        </div>
        </div>
        </React.Fragment>))}
        </div></div>
        {noRows && (<><div style={{padding:"16px",fontSize:"13px",color:"#94A3B8"}}>Ningún estudiante coincide con la búsqueda.</div></>)}
        </section>
        </main>
        
        <footer style={{marginTop:"auto",padding:"14px clamp(20px,2.3vw,32px)",borderTop:"1px solid #1E293B",display:"flex",justifyContent:"space-between",gap:"16px",fontSize:"10px",color:"#64748B",flexWrap:"wrap"}}>
        <span>Aislamiento Multi-tenant: Esquema PostgreSQL Activo (tenant_incodelca)</span>
        <span>EduCore SaaS v1.0 · A2-Admin</span>
        </footer>
        </div>
        </div>
      </>
    );
  }
}
