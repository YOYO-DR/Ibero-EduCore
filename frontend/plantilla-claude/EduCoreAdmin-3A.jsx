import React from "react";

// Fuentes: agrega en el <head>:
// <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;1,6..72,400&family=IBM+Plex+Mono:wght@400;500;600&display=swap" rel="stylesheet">
// Prop opcional: <EduCoreAdmin readOnly /> bloquea la planilla.
const css = `*{margin:0;padding:0;box-sizing:border-box}
body{background:#FDF8F0;font-family:'Inter',sans-serif;color:#1E293B;-webkit-font-smoothing:antialiased}
a{color:#C2410C;text-decoration:underline}
a:hover{color:#9A3412}
input{font:inherit;color:inherit}
input:focus{outline:2px solid #C2410C;outline-offset:-2px}
.hv1{transition:background .15s,color .15s}.hv1:hover{background:rgba(253,248,240,.07) !important}
.hv2{transition:background .15s,color .15s}.hv2:hover{background:#F6EEDF !important}
.hv3{transition:background .15s,color .15s}.hv3:hover{background:#1E293B !important;color:#FDF8F0 !important}
.hv4{transition:background .15s,color .15s}.hv4:hover{background:#9A3412 !important;border-color:#9A3412 !important}`;

export default class EduCoreAdmin extends React.Component {
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
    const done = all.filter(r => r.dNum != null);
    const avg = done.length ? (done.reduce((s, r) => s + r.dNum, 0) / done.length).toFixed(1) : '—';
    const nd = Object.keys(this.state.dirty).length;
    return {
      rows, readOnly, avg, query: this.state.query,
      noRows: rows.length === 0,
      countLabel: `${rows.length} de ${all.length} estudiantes · ${done.length} con definitiva`,
      hasDirty: nd > 0, dirtyLabel: `${nd} ${nd === 1 ? 'estudiante' : 'estudiantes'} con cambios sin guardar`,
      savedShown: this.state.saved && nd === 0,
      onQuery: e => this.setState({ query: e.target.value }),
      save: () => this.setState({ dirty: {}, saved: true }),
    };
  }
  render() {
    const { rows, readOnly, avg, query, noRows, countLabel, hasDirty, dirtyLabel, savedShown, onQuery, save } = this.renderVals();
    return (
      <>
        <style>{css}</style>
        <div style={{display:"grid",gridTemplateColumns:"clamp(200px,18vw,248px) minmax(0,1fr)",minHeight:"100vh",backgroundColor:"#FDF8F0",backgroundImage:"radial-gradient(rgba(30,41,59,.05) 1px,transparent 1px)",backgroundSize:"4px 4px"}}>
        
        <aside style={{background:"#1E293B",color:"#FDF8F0",display:"flex",flexDirection:"column",padding:"28px 0"}}>
        <div style={{display:"flex",flexDirection:"column",gap:"4px",padding:"0 24px 32px",borderBottom:"1px solid rgba(253,248,240,.15)"}}>
        <span style={{fontFamily:"'Newsreader',serif",fontSize:"30px",fontWeight:"600",letterSpacing:"-.5px"}}>EduCore</span>
        <span style={{fontFamily:"'IBM Plex Mono',monospace",fontSize:"10px",letterSpacing:"2px",color:"#CBD5E1",textTransform:"uppercase"}}>Gestión académica</span>
        </div>
        <nav style={{display:"flex",flexDirection:"column",padding:"20px 0"}}>
        <div style={{display:"grid",gridTemplateColumns:"32px 1fr",alignItems:"baseline",padding:"13px 20px",background:"#FDF8F0",color:"#1E293B",borderLeft:"4px solid #C2410C",cursor:"pointer"}}><span style={{fontFamily:"'IBM Plex Mono',monospace",fontSize:"11px",color:"#C2410C"}}>01</span><span style={{fontSize:"15px",fontWeight:"600"}}>Dashboard</span></div>
        <div className="hv1" style={{display:"grid",gridTemplateColumns:"32px 1fr",alignItems:"baseline",padding:"13px 20px",borderLeft:"4px solid transparent",cursor:"pointer"}}><span style={{fontFamily:"'IBM Plex Mono',monospace",fontSize:"11px",color:"#94A3B8"}}>02</span><span style={{fontSize:"15px"}}>Estructura institucional</span></div>
        <div className="hv1" style={{display:"grid",gridTemplateColumns:"32px 1fr",alignItems:"baseline",padding:"13px 20px",borderLeft:"4px solid transparent",cursor:"pointer"}}><span style={{fontFamily:"'IBM Plex Mono',monospace",fontSize:"11px",color:"#94A3B8"}}>03</span><span style={{fontSize:"15px"}}>Estudiantes / SIMAT</span></div>
        <div className="hv1" style={{display:"grid",gridTemplateColumns:"32px 1fr",alignItems:"baseline",padding:"13px 20px",borderLeft:"4px solid transparent",cursor:"pointer"}}><span style={{fontFamily:"'IBM Plex Mono',monospace",fontSize:"11px",color:"#94A3B8"}}>04</span><span style={{fontSize:"15px"}}>Calificaciones SIEE</span></div>
        <div className="hv1" style={{display:"grid",gridTemplateColumns:"32px 1fr",alignItems:"baseline",padding:"13px 20px",borderLeft:"4px solid transparent",cursor:"pointer"}}><span style={{fontFamily:"'IBM Plex Mono',monospace",fontSize:"11px",color:"#94A3B8"}}>05</span><span style={{fontSize:"15px"}}>Generador de boletines</span></div>
        <div className="hv1" style={{display:"grid",gridTemplateColumns:"32px 1fr",alignItems:"baseline",padding:"13px 20px",borderLeft:"4px solid transparent",cursor:"pointer"}}><span style={{fontFamily:"'IBM Plex Mono',monospace",fontSize:"11px",color:"#94A3B8"}}>06</span><span style={{fontSize:"15px"}}>Configuración del colegio</span></div>
        </nav>
        <div style={{marginTop:"auto",padding:"20px 28px 0",borderTop:"1px solid rgba(253,248,240,.15)",display:"flex",flexDirection:"column",gap:"6px",fontFamily:"'IBM Plex Mono',monospace",fontSize:"11px",color:"#CBD5E1",lineHeight:"1.5"}}>
        <span style={{letterSpacing:"2px",color:"#FDBA74"}}>ESQUEMA ACTIVO</span>
        <span>tenant_incodelca</span>
        </div>
        </aside>
        
        <div style={{display:"flex",flexDirection:"column",minWidth:"0",overflowX:"clip"}}>
        <header style={{display:"flex",justifyContent:"space-between",alignItems:"center",gap:"24px",padding:"18px clamp(20px,3.5vw,48px)",borderBottom:"2px solid #1E293B",flexWrap:"wrap"}}>
        <div className="hv2" style={{display:"flex",alignItems:"center",gap:"12px",border:"2px solid #1E293B",padding:"8px 14px",minWidth:"0",maxWidth:"100%",cursor:"pointer",background:"#FDF8F0"}}>
        <span style={{fontSize:"14px",fontWeight:"600",whiteSpace:"nowrap"}}>IE INCODELCA · Sede principal</span>
        <span style={{fontFamily:"'IBM Plex Mono',monospace",fontSize:"12px",color:"#475569",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",minWidth:"0"}}>incodelca.educore.co</span>
        <span style={{fontSize:"11px",color:"#475569"}}>▾</span>
        </div>
        <div style={{display:"flex",alignItems:"center",gap:"20px 28px",flexWrap:"wrap",marginLeft:"auto"}}>
        <div style={{display:"flex",alignItems:"center",gap:"8px",fontFamily:"'IBM Plex Mono',monospace",fontSize:"11px",letterSpacing:"1px",color:"#166534",whiteSpace:"nowrap"}}><span style={{width:"8px",height:"8px",background:"#166534"}}></span>PWA ACTIVA · MODO OPTIMIZADO</div>
        <div style={{display:"flex",alignItems:"center",gap:"12px"}}>
        <div style={{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:"2px"}}><span style={{fontSize:"14px",fontWeight:"600",whiteSpace:"nowrap"}}>Ronald García</span><span style={{fontFamily:"'IBM Plex Mono',monospace",fontSize:"11px",color:"#475569",whiteSpace:"nowrap"}}>Rector · Administrador</span></div>
        <span style={{width:"40px",height:"40px",background:"#C2410C",color:"#FDF8F0",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"'Newsreader',serif",fontSize:"18px",fontWeight:"600"}}>RG</span>
        </div>
        </div>
        </header>
        
        <main style={{padding:"48px calc(clamp(20px,3.5vw,48px) + 10px) 64px clamp(20px,3.5vw,48px)",display:"flex",flexDirection:"column",gap:"40px"}}>
        <div style={{display:"flex",flexDirection:"column",gap:"10px"}}>
        <span style={{fontFamily:"'IBM Plex Mono',monospace",fontSize:"12px",letterSpacing:"2px",color:"#C2410C"}}>PERIODO LECTIVO 3 · 2026</span>
        <h1 style={{fontFamily:"'Newsreader',serif",fontSize:"52px",fontWeight:"500",letterSpacing:"-1.5px",lineHeight:"1.05"}}>Bienvenido, <em style={{fontStyle:"italic",color:"#C2410C"}}>Ronald García.</em></h1>
        <p style={{fontSize:"16px",color:"#475569"}}>Panel de control académico unificado y planilla SIEE.</p>
        </div>
        
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,minmax(0,1fr))",gap:"2px",border:"2px solid #1E293B",background:"#1E293B"}}>
        <div style={{padding:"clamp(18px,2vw,28px)",display:"flex",flexDirection:"column",gap:"12px",background:"#FDF8F0",minWidth:"0"}}>
        <span style={{fontFamily:"'IBM Plex Mono',monospace",fontSize:"11px",letterSpacing:"2px",color:"#475569"}}>CURSOS ASIGNADOS</span>
        <span style={{fontFamily:"'Newsreader',serif",fontSize:"clamp(44px,4.6vw,72px)",lineHeight:".9",letterSpacing:"-2px"}}>4</span>
        <span style={{fontFamily:"'IBM Plex Mono',monospace",fontSize:"12px",color:"#475569"}}>Grados 1001 · 1002 · 1101 · 1102</span>
        </div>
        <div style={{padding:"clamp(18px,2vw,28px)",display:"flex",flexDirection:"column",gap:"12px",background:"#FDF8F0",minWidth:"0"}}>
        <span style={{fontFamily:"'IBM Plex Mono',monospace",fontSize:"11px",letterSpacing:"2px",color:"#475569"}}>ESTUDIANTES TOTALES</span>
        <span style={{fontFamily:"'Newsreader',serif",fontSize:"clamp(44px,4.6vw,72px)",lineHeight:".9",letterSpacing:"-2px"}}>118</span>
        <span style={{fontFamily:"'IBM Plex Mono',monospace",fontSize:"12px",color:"#475569"}}>Matriculados activos en SIMAT</span>
        </div>
        <div style={{padding:"clamp(18px,2vw,28px)",display:"flex",flexDirection:"column",gap:"12px",background:"#1E293B",color:"#FDF8F0",minWidth:"0"}}>
        <span style={{fontFamily:"'IBM Plex Mono',monospace",fontSize:"11px",letterSpacing:"2px",color:"#CBD5E1"}}>ESTADO DE CALIFICACIONES</span>
        <div style={{display:"flex",alignItems:"baseline",gap:"8px 14px",flexWrap:"wrap"}}><span style={{fontFamily:"'Newsreader',serif",fontSize:"clamp(44px,4.6vw,72px)",lineHeight:".9",letterSpacing:"-2px",color:"#FBBF24"}}>75%</span><span style={{fontFamily:"'IBM Plex Mono',monospace",fontSize:"11px",letterSpacing:"1px",border:"1.5px solid #4ADE80",color:"#4ADE80",padding:"3px 8px"}}>COMPLETADO</span></div>
        <div style={{height:"6px",background:"rgba(253,248,240,.15)"}}><div style={{width:"75%",height:"100%",background:"#FBBF24"}}></div></div>
        <span style={{fontFamily:"'IBM Plex Mono',monospace",fontSize:"12px",color:"#CBD5E1"}}>Carga de notas del periodo 3</span>
        </div>
        </div>
        
        <section style={{border:"3px solid #000",background:"#FDF8F0",boxShadow:"10px 10px 0 #000",display:"flex",flexDirection:"column",minWidth:"0"}}>
        <div style={{padding:"28px 32px",borderBottom:"3px dashed #000",display:"flex",justifyContent:"space-between",alignItems:"flex-end",gap:"24px",flexWrap:"wrap"}}>
        <div style={{display:"flex",flexDirection:"column",gap:"8px"}}>
        <span style={{fontFamily:"'IBM Plex Mono',monospace",fontSize:"11px",letterSpacing:"2px",color:"#C2410C"}}>PLANILLA DE CALIFICACIONES · GRADO 1001</span>
        <h2 style={{fontFamily:"'Newsreader',serif",fontSize:"34px",fontWeight:"500",letterSpacing:"-.8px",lineHeight:"1.1"}}>Tecnología e Informática</h2>
        <p style={{fontSize:"14px",color:"#475569"}}>Ingrese las calificaciones según la escala del Sistema Institucional de Evaluación de Estudiantes (SIEE).</p>
        </div>
        <div style={{display:"flex",gap:"10px",flexWrap:"wrap"}}>
        <div className="hv3" style={{border:"2px solid #1E293B",fontSize:"14px",fontWeight:"600",padding:"10px 16px",cursor:"pointer",whiteSpace:"nowrap"}}>Importar desde SIMAT (CSV)</div>
        <div className="hv3" style={{border:"2px solid #1E293B",fontSize:"14px",fontWeight:"600",padding:"10px 16px",cursor:"pointer",whiteSpace:"nowrap"}}>Generar boletines (PDF)</div>
        <div onClick={save} className="hv4" style={{background:"#C2410C",border:"2px solid #C2410C",color:"#fff",fontSize:"14px",fontWeight:"600",padding:"10px 18px",cursor:"pointer",whiteSpace:"nowrap"}}>Guardar cambios</div>
        </div>
        </div>
        <div style={{padding:"18px 32px",display:"flex",justifyContent:"space-between",alignItems:"center",gap:"24px",borderBottom:"2px solid #1E293B",flexWrap:"wrap"}}>
        <input value={query} onChange={onQuery} placeholder="Buscar estudiante…" style={{width:"320px",maxWidth:"100%",border:"2px solid #1E293B",background:"#fff",padding:"10px 14px",fontSize:"14px"}} />
        <div style={{display:"flex",gap:"8px 20px",alignItems:"center",flexWrap:"wrap",fontFamily:"'IBM Plex Mono',monospace",fontSize:"12px",color:"#475569"}}>
        {hasDirty && (<><span style={{color:"#C2410C"}}>● {dirtyLabel}</span></>)}
        {savedShown && (<><span style={{color:"#166534"}}>✓ Cambios guardados</span></>)}
        <span style={{whiteSpace:"normal"}}>Escala 1.0–5.0 · Bajo &lt; 3.0 · Básico 3.0–3.9 · Alto 4.0–4.5 · Superior 4.6–5.0</span>
        </div>
        </div>
        <div style={{overflowX:"auto"}}><div style={{minWidth:"940px"}}><div style={{display:"grid",gridTemplateColumns:"48px minmax(200px,1fr) 124px 124px 124px 96px 120px",gap:"12px",padding:"14px 32px",borderBottom:"2px solid #1E293B",fontFamily:"'IBM Plex Mono',monospace",fontSize:"11px",letterSpacing:"1px",color:"#475569",alignItems:"end"}}>
        <span>Nº</span><span>APELLIDOS Y NOMBRES</span><span>COGNITIVO 40%</span><span>PROCEDIM. 40%</span><span>ACTITUD. 20%</span><span>DEFINITIVA</span><span>NIVEL SIEE</span>
        </div>
        {rows.map(r => (<React.Fragment key={r.id}>
        <div className="hv2" style={{display:"grid",gridTemplateColumns:"48px minmax(200px,1fr) 124px 124px 124px 96px 120px",gap:"12px",padding:"12px 32px",borderBottom:"1px solid rgba(30,41,59,.2)",alignItems:"center"}}>
        <span style={{fontFamily:"'IBM Plex Mono',monospace",fontSize:"13px",color:"#475569"}}>{r.n}</span>
        <div style={{display:"flex",alignItems:"center",gap:"12px",minWidth:"0"}}><span style={{width:"32px",height:"32px",flexShrink:"0",border:"1.5px solid #1E293B",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"'IBM Plex Mono',monospace",fontSize:"11px",fontWeight:"600"}}>{r.initials}</span><span style={{fontSize:"15px",fontWeight:"500",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}}>{r.name}</span></div>
        <input value={r.cog} onChange={r.onCog} readOnly={readOnly} inputMode="decimal" style={{width:"88px",border:"1.5px solid #1E293B",background:"#fff",padding:"8px 0",textAlign:"center",fontFamily:"'IBM Plex Mono',monospace",fontSize:"14px"}} />
        <input value={r.pro} onChange={r.onPro} readOnly={readOnly} inputMode="decimal" style={{width:"88px",border:"1.5px solid #1E293B",background:"#fff",padding:"8px 0",textAlign:"center",fontFamily:"'IBM Plex Mono',monospace",fontSize:"14px"}} />
        <input value={r.act} onChange={r.onAct} readOnly={readOnly} inputMode="decimal" style={{width:"88px",border:"1.5px solid #1E293B",background:"#fff",padding:"8px 0",textAlign:"center",fontFamily:"'IBM Plex Mono',monospace",fontSize:"14px"}} />
        <span style={{fontFamily:"'Newsreader',serif",fontSize:"26px",fontWeight:"600"}}>{r.def}</span>
        <div style={{display:"flex"}}>
        {r.isSup && (<><span style={{fontFamily:"'IBM Plex Mono',monospace",fontSize:"11px",fontWeight:"600",letterSpacing:"1px",background:"#166534",color:"#fff",padding:"4px 8px"}}>SUPERIOR</span></>)}
        {r.isAlto && (<><span style={{fontFamily:"'IBM Plex Mono',monospace",fontSize:"11px",fontWeight:"600",letterSpacing:"1px",border:"1.5px solid #1E293B",padding:"3px 8px"}}>ALTO</span></>)}
        {r.isBas && (<><span style={{fontFamily:"'IBM Plex Mono',monospace",fontSize:"11px",fontWeight:"600",letterSpacing:"1px",border:"1.5px solid #B45309",color:"#B45309",padding:"3px 8px"}}>BÁSICO</span></>)}
        {r.isBajo && (<><span style={{fontFamily:"'IBM Plex Mono',monospace",fontSize:"11px",fontWeight:"600",letterSpacing:"1px",background:"#C2410C",color:"#fff",padding:"4px 8px"}}>BAJO</span></>)}
        {r.isNone && (<><span style={{fontFamily:"'IBM Plex Mono',monospace",fontSize:"11px",color:"#475569"}}>Pendiente</span></>)}
        </div>
        </div>
        </React.Fragment>))}
        </div></div>
        {noRows && (<><div style={{padding:"32px",fontSize:"15px",color:"#475569"}}>Ningún estudiante coincide con la búsqueda.</div></>)}
        <div style={{padding:"18px 32px",display:"flex",justifyContent:"space-between",gap:"24px",fontFamily:"'IBM Plex Mono',monospace",fontSize:"12px",color:"#475569",flexWrap:"wrap"}}>
        <span>{countLabel}</span>
        <span>Promedio del curso: <b style={{color:"#1E293B",fontWeight:"600"}}>{avg}</b></span>
        </div>
        </section>
        </main>
        
        <footer style={{marginTop:"auto",padding:"16px 48px",background:"#000",color:"#CBD5E1",display:"flex",justifyContent:"space-between",gap:"24px",fontFamily:"'IBM Plex Mono',monospace",fontSize:"11px",letterSpacing:".5px",flexWrap:"wrap"}}>
        <span>Aislamiento multi-tenant: esquema PostgreSQL activo (tenant_incodelca)</span>
        <span>EduCore SaaS v1.0</span>
        </footer>
        </div>
        </div>
      </>
    );
  }
}
