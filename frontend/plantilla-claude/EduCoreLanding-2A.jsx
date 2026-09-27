import React from "react";

// Requiere las fuentes Inter y Roboto Mono (Google Fonts) en el <head>.
const css = `*{margin:0;padding:0;box-sizing:border-box}
body{background:#0a0e1a;font-family:'Inter',sans-serif;color:#f1f5f9;-webkit-font-smoothing:antialiased}
a{color:#3b82f6;text-decoration:none}
a:hover{color:#93c5fd}
.h1,.h2,.h3,.h4{transition:background .15s,color .15s}
.h1:hover{background:#1d4ed8 !important}
.h2:hover{background:#fff !important}
.h3:hover{color:#93c5fd !important}

.h1,.h2,.h3{white-space:nowrap}
.nav-links span{white-space:nowrap}
.wrap-row{flex-wrap:wrap;gap:16px 40px}
.foot{flex-wrap:wrap;gap:8px 24px}
@media (max-width:1100px){
 .nav-links{gap:20px!important}
 .hero-h1{font-size:64px!important;letter-spacing:-2.5px!important}
 .g5{grid-template-columns:repeat(3,1fr)!important;row-gap:40px!important}
 .g4{grid-template-columns:repeat(2,1fr)!important}
 .g2{grid-template-columns:1fr!important;gap:48px!important}
}
@media (max-width:860px){
 .nav-links{display:none!important}
 .g3{grid-template-columns:1fr!important}
 .g3>*{border-right:none!important;border-bottom:1px solid rgba(255,255,255,.08)}
 .g3>*:last-child{border-bottom:none}
 .g5{grid-template-columns:repeat(2,1fr)!important}
 .h-sec{font-size:36px!important;letter-spacing:-1.2px!important}
}
@media (max-width:640px){
 .px{padding-left:24px!important;padding-right:24px!important}
 .hero-h1{font-size:44px!important;letter-spacing:-1.5px!important}
 .g4,.g5{grid-template-columns:1fr!important}
 .g5>*{padding-right:0!important}
 .h-sec{font-size:30px!important}
}`;

export default function EduCoreLanding() {
  return (
    <>
      <style>{css}</style>
      <div style={{maxWidth:"1280px",margin:"0 auto",background:"#0a0e1a",overflow:"hidden"}}>
      <div className="px" style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"24px 64px"}}>
      <span style={{fontSize:"18px",fontWeight:"800",letterSpacing:"-.5px"}}>Edu<span style={{color:"#3b82f6"}}>Core</span></span>
      <div className="nav-links" style={{display:"flex",gap:"32px",alignItems:"center",fontSize:"14px",color:"#94a3b8"}}><span>El problema</span><span>Costos</span><span>Cómo funciona</span><span>Roles</span><span>Seguridad</span></div>
      <div className="h1" style={{background:"#3b82f6",color:"#fff",fontSize:"14px",fontWeight:"600",padding:"10px 18px",borderRadius:"2px",cursor:"pointer"}}>Hablar con el equipo</div>
      </div>
      <div className="px" style={{padding:"120px 64px 96px",display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center",gap:"28px"}}>
      <div style={{fontFamily:"'Roboto Mono',monospace",fontSize:"12px",letterSpacing:"3px",color:"#94a3b8",textTransform:"uppercase"}}>Gestión académica para colegios oficiales pequeños</div>
      <h1 className="hero-h1" style={{fontSize:"84px",fontWeight:"800",lineHeight:"1",letterSpacing:"-4px",maxWidth:"1000px",textWrap:"balance"}}>Del Excel al boletín, <span style={{color:"#3b82f6"}}>sin pagar por estudiante.</span></h1>
      <p style={{fontSize:"20px",fontWeight:"300",color:"#94a3b8",lineHeight:"1.6",maxWidth:"680px",textWrap:"pretty"}}>EduCore reúne la estructura académica, los docentes, los estudiantes y las calificaciones de cada periodo en una sola plataforma, pensada para el presupuesto de un colegio público.</p>
      <div style={{display:"flex",gap:"12px",marginTop:"8px"}}>
      <div className="h2" style={{background:"#f1f5f9",color:"#0a0e1a",fontSize:"15px",fontWeight:"600",padding:"14px 26px",borderRadius:"2px",cursor:"pointer"}}>Crear mi colegio</div>
      <div className="h3" style={{color:"#f1f5f9",fontSize:"15px",fontWeight:"500",padding:"14px 16px",cursor:"pointer"}}>Ver comparación de costos →</div>
      </div>
      </div>
      <div className="g3" style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",borderTop:"1px solid rgba(255,255,255,.08)",borderBottom:"1px solid rgba(255,255,255,.08)"}}>
      <div className="px" style={{padding:"48px 40px 48px 64px",display:"flex",flexDirection:"column",gap:"14px",borderRight:"1px solid rgba(255,255,255,.08)"}}><span style={{fontFamily:"'Roboto Mono',monospace",fontSize:"40px",fontWeight:"600",color:"#f59e0b",letterSpacing:"-1px"}}>$2.000–9.900</span><span style={{fontSize:"15px",color:"#94a3b8",lineHeight:"1.6"}}>COP por estudiante al año cobran las plataformas comerciales, pensadas para colegios privados.</span></div>
      <div style={{padding:"48px 40px",display:"flex",flexDirection:"column",gap:"14px",borderRight:"1px solid rgba(255,255,255,.08)"}}><span style={{fontFamily:"'Roboto Mono',monospace",fontSize:"40px",fontWeight:"600",color:"#a78bfa",letterSpacing:"-1px"}}>SIMAT</span><span style={{fontSize:"15px",color:"#94a3b8",lineHeight:"1.6"}}>cubre la matrícula oficial, pero no la asignación docente, las notas ni los boletines.</span></div>
      <div className="px" style={{padding:"48px 64px 48px 40px",display:"flex",flexDirection:"column",gap:"14px"}}><span style={{fontFamily:"'Roboto Mono',monospace",fontSize:"40px",fontWeight:"600",color:"#ef4444",letterSpacing:"-1px"}}>69,4 %</span><span style={{fontSize:"15px",color:"#94a3b8",lineHeight:"1.6"}}>de las sedes educativas rurales del país carece de acceso a Internet.</span></div>
      </div>
      <div className="g2 px" style={{padding:"112px 64px",display:"grid",gridTemplateColumns:"1fr 1fr",gap:"80px",alignItems:"start"}}>
      <div style={{display:"flex",flexDirection:"column",gap:"20px"}}>
      <div style={{fontFamily:"'Roboto Mono',monospace",fontSize:"12px",letterSpacing:"3px",color:"#3b82f6",textTransform:"uppercase"}}>Costo anual · colegio de 300 estudiantes</div>
      <h2 className="h-sec" style={{fontSize:"48px",fontWeight:"800",letterSpacing:"-2px",lineHeight:"1.05",textWrap:"balance"}}>Diez colegios comparten un servidor. Cada uno paga una décima parte.</h2>
      <p style={{fontSize:"17px",color:"#94a3b8",lineHeight:"1.7",textWrap:"pretty"}}>En un esquema SaaS multiinquilino una sola instancia de la aplicación atiende a varias instituciones, así que el costo de infraestructura se reparte entre ellas.</p>
      </div>
      <div style={{display:"flex",flexDirection:"column",gap:"28px"}}>
      <div style={{display:"flex",flexDirection:"column",gap:"10px"}}><div style={{display:"flex",justifyContent:"space-between",fontSize:"15px"}}><span style={{fontWeight:"600"}}>Plataforma B</span><span style={{fontFamily:"'Roboto Mono',monospace",color:"#94a3b8"}}>≈ USD 680</span></div><div style={{height:"12px",background:"#1a2235",borderRadius:"2px"}}><div style={{width:"100%",height:"100%",background:"#475569",borderRadius:"2px"}}></div></div><span style={{fontSize:"13px",color:"#94a3b8"}}>≈ USD 340 por semestre</span></div>
      <div style={{display:"flex",flexDirection:"column",gap:"10px"}}><div style={{display:"flex",justifyContent:"space-between",fontSize:"15px"}}><span style={{fontWeight:"600"}}>Plataforma A</span><span style={{fontFamily:"'Roboto Mono',monospace",color:"#94a3b8"}}>≈ $600.000 COP</span></div><div style={{height:"12px",background:"#1a2235",borderRadius:"2px"}}><div style={{width:"22%",height:"100%",background:"#475569",borderRadius:"2px"}}></div></div><span style={{fontSize:"13px",color:"#94a3b8"}}>$2.000 COP por estudiante al año, plan básico</span></div>
      <div style={{display:"flex",flexDirection:"column",gap:"10px"}}><div style={{display:"flex",justifyContent:"space-between",fontSize:"15px"}}><span style={{fontWeight:"600"}}>Servidor propio</span><span style={{fontFamily:"'Roboto Mono',monospace",color:"#94a3b8"}}>inversión alta</span></div><div style={{height:"12px",background:"repeating-linear-gradient(90deg,#1a2235 0 8px,#243049 8px 16px)",borderRadius:"2px"}}></div><span style={{fontSize:"13px",color:"#94a3b8"}}>Equipo, energía y soporte técnico local</span></div>
      <div style={{display:"flex",flexDirection:"column",gap:"10px",padding:"24px",background:"rgba(59,130,246,.08)",border:"1px solid rgba(59,130,246,.35)",borderRadius:"2px"}}><div style={{display:"flex",justifyContent:"space-between",fontSize:"15px"}}><span style={{fontWeight:"700"}}>EduCore</span><span style={{fontFamily:"'Roboto Mono',monospace",color:"#3b82f6",fontWeight:"600"}}>≈ USD 10</span></div><div style={{height:"12px",background:"#1a2235",borderRadius:"2px"}}><div style={{width:"1.5%",minWidth:"6px",height:"100%",background:"#3b82f6",borderRadius:"2px"}}></div></div><span style={{fontSize:"13px",color:"#94a3b8"}}>VPS compartido de ≈ USD 96 al año entre 10 colegios. Solo infraestructura.</span></div>
      </div>
      </div>
      <div className="px" style={{padding:"96px 64px",background:"#111827",display:"flex",flexDirection:"column",gap:"48px"}}>
      <div style={{display:"flex",flexDirection:"column",gap:"12px"}}><div style={{fontFamily:"'Roboto Mono',monospace",fontSize:"12px",letterSpacing:"3px",color:"#3b82f6",textTransform:"uppercase"}}>Cómo funciona</div><h2 className="h-sec" style={{fontSize:"40px",fontWeight:"800",letterSpacing:"-1.5px"}}>Un colegio nuevo, configurado en cinco pasos.</h2></div>
      <div className="g5" style={{display:"grid",gridTemplateColumns:"repeat(5,1fr)",gap:"0"}}>
      <div style={{display:"flex",flexDirection:"column",gap:"14px",paddingRight:"24px"}}><div style={{display:"flex",alignItems:"center",gap:"10px"}}><span style={{width:"32px",height:"32px",borderRadius:"50%",background:"#3b82f6",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"'Roboto Mono',monospace",fontSize:"13px",fontWeight:"600",flexShrink:"0"}}>1</span><span style={{flex:"1",height:"1px",background:"rgba(59,130,246,.4)"}}></span></div><span style={{fontWeight:"700",fontSize:"16px"}}>Crear el colegio</span><span style={{fontSize:"14px",color:"#94a3b8",lineHeight:"1.6"}}>Subdominio, año lectivo, periodos y escala del SIEE.</span></div>
      <div style={{display:"flex",flexDirection:"column",gap:"14px",paddingRight:"24px"}}><div style={{display:"flex",alignItems:"center",gap:"10px"}}><span style={{width:"32px",height:"32px",borderRadius:"50%",background:"#1e2d44",border:"1px solid #3b82f6",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"'Roboto Mono',monospace",fontSize:"13px",fontWeight:"600",flexShrink:"0"}}>2</span><span style={{flex:"1",height:"1px",background:"rgba(59,130,246,.4)"}}></span></div><span style={{fontWeight:"700",fontSize:"16px"}}>Configurar la estructura</span><span style={{fontSize:"14px",color:"#94a3b8",lineHeight:"1.6"}}>Sedes, zonas, jornadas, áreas, asignaturas y cursos.</span></div>
      <div style={{display:"flex",flexDirection:"column",gap:"14px",paddingRight:"24px"}}><div style={{display:"flex",alignItems:"center",gap:"10px"}}><span style={{width:"32px",height:"32px",borderRadius:"50%",background:"#1e2d44",border:"1px solid #3b82f6",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"'Roboto Mono',monospace",fontSize:"13px",fontWeight:"600",flexShrink:"0"}}>3</span><span style={{flex:"1",height:"1px",background:"rgba(59,130,246,.4)"}}></span></div><span style={{fontWeight:"700",fontSize:"16px"}}>Registrar personas</span><span style={{fontSize:"14px",color:"#94a3b8",lineHeight:"1.6"}}>Docentes, coordinadores y estudiantes; CSV del SIMAT.</span></div>
      <div style={{display:"flex",flexDirection:"column",gap:"14px",paddingRight:"24px"}}><div style={{display:"flex",alignItems:"center",gap:"10px"}}><span style={{width:"32px",height:"32px",borderRadius:"50%",background:"#1e2d44",border:"1px solid #3b82f6",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"'Roboto Mono',monospace",fontSize:"13px",fontWeight:"600",flexShrink:"0"}}>4</span><span style={{flex:"1",height:"1px",background:"rgba(59,130,246,.4)"}}></span></div><span style={{fontWeight:"700",fontSize:"16px"}}>Cargar notas</span><span style={{fontSize:"14px",color:"#94a3b8",lineHeight:"1.6"}}>Por asignatura y periodo, con valoración automática.</span></div>
      <div style={{display:"flex",flexDirection:"column",gap:"14px"}}><div style={{display:"flex",alignItems:"center",gap:"10px"}}><span style={{width:"32px",height:"32px",borderRadius:"50%",background:"#10b981",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"'Roboto Mono',monospace",fontSize:"13px",fontWeight:"600",flexShrink:"0",color:"#0a0e1a"}}>5</span></div><span style={{fontWeight:"700",fontSize:"16px"}}>Generar el boletín</span><span style={{fontSize:"14px",color:"#94a3b8",lineHeight:"1.6"}}>PDF por estudiante y consolidados por sede y zona.</span></div>
      </div>
      </div>
      <div className="px" style={{padding:"96px 64px",display:"flex",flexDirection:"column",gap:"40px"}}>
      <div className="wrap-row" style={{display:"flex",justifyContent:"space-between",alignItems:"flex-end"}}><h2 className="h-sec" style={{fontSize:"40px",fontWeight:"800",letterSpacing:"-1.5px",maxWidth:"560px",lineHeight:"1.1"}}>Cada rol ve lo que necesita.</h2><span style={{fontSize:"15px",color:"#94a3b8"}}>Permisos por rol en cada colegio</span></div>
      <div className="g4" style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"16px"}}>
      <div style={{background:"#1a2235",border:"1px solid rgba(255,255,255,.08)",borderRadius:"2px",padding:"28px",display:"flex",flexDirection:"column",gap:"16px"}}><span style={{fontFamily:"'Roboto Mono',monospace",fontSize:"11px",letterSpacing:"2px",color:"#a78bfa"}}>RECTOR · ADMIN</span><span style={{fontSize:"15px",lineHeight:"1.6",color:"#f1f5f9"}}>Configura la institución, los usuarios y la escala de valoración.</span></div>
      <div style={{background:"#1a2235",border:"1px solid rgba(255,255,255,.08)",borderRadius:"2px",padding:"28px",display:"flex",flexDirection:"column",gap:"16px"}}><span style={{fontFamily:"'Roboto Mono',monospace",fontSize:"11px",letterSpacing:"2px",color:"#f59e0b"}}>COORDINADOR</span><span style={{fontSize:"15px",lineHeight:"1.6",color:"#f1f5f9"}}>Hace seguimiento por sede o área y revisa los consolidados.</span></div>
      <div style={{background:"#1a2235",border:"1px solid rgba(255,255,255,.08)",borderRadius:"2px",padding:"28px",display:"flex",flexDirection:"column",gap:"16px"}}><span style={{fontFamily:"'Roboto Mono',monospace",fontSize:"11px",letterSpacing:"2px",color:"#3b82f6"}}>DOCENTE</span><span style={{fontSize:"15px",lineHeight:"1.6",color:"#f1f5f9"}}>Registra las notas de sus asignaturas y cursos asignados.</span></div>
      <div style={{background:"#1a2235",border:"1px solid rgba(255,255,255,.08)",borderRadius:"2px",padding:"28px",display:"flex",flexDirection:"column",gap:"16px"}}><span style={{fontFamily:"'Roboto Mono',monospace",fontSize:"11px",letterSpacing:"2px",color:"#10b981"}}>SECRETARÍA</span><span style={{fontSize:"15px",lineHeight:"1.6",color:"#f1f5f9"}}>Gestiona la matrícula y emite los boletines del periodo.</span></div>
      </div>
      </div>
      <div className="px" style={{padding:"96px 64px",background:"#111827",display:"flex",flexDirection:"column",gap:"40px"}}>
      <div className="wrap-row" style={{display:"flex",justifyContent:"space-between",alignItems:"flex-end",gap:"40px"}}>
      <div style={{display:"flex",flexDirection:"column",gap:"12px"}}><div style={{fontFamily:"'Roboto Mono',monospace",fontSize:"12px",letterSpacing:"3px",color:"#10b981",textTransform:"uppercase"}}>Seguridad</div><h2 className="h-sec" style={{fontSize:"40px",fontWeight:"800",letterSpacing:"-1.5px",lineHeight:"1.08",maxWidth:"560px"}}>Datos de menores, protegidos por diseño.</h2></div>
      <p style={{fontSize:"16px",color:"#94a3b8",lineHeight:"1.6",maxWidth:"440px"}}>Tratamiento de datos personales conforme a la Ley 1581 de 2012, con aislamiento lógico entre instituciones.</p>
      </div>
      <div className="g4" style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"16px"}}>
      <div style={{background:"#1a2235",border:"1px solid rgba(255,255,255,.08)",padding:"28px",borderRadius:"2px",display:"flex",flexDirection:"column",gap:"12px"}}><span style={{fontFamily:"'Roboto Mono',monospace",fontSize:"12px",color:"#10b981",letterSpacing:"2px"}}>01</span><span style={{fontWeight:"700",fontSize:"17px"}}>Esquema por colegio</span><span style={{color:"#94a3b8",fontSize:"14px",lineHeight:"1.6"}}>Cada institución vive en su propio esquema de PostgreSQL.</span></div>
      <div style={{background:"#1a2235",border:"1px solid rgba(255,255,255,.08)",padding:"28px",borderRadius:"2px",display:"flex",flexDirection:"column",gap:"12px"}}><span style={{fontFamily:"'Roboto Mono',monospace",fontSize:"12px",color:"#10b981",letterSpacing:"2px"}}>02</span><span style={{fontWeight:"700",fontSize:"17px"}}>Control por roles</span><span style={{color:"#94a3b8",fontSize:"14px",lineHeight:"1.6"}}>Cada usuario ve solo lo que su rol permite.</span></div>
      <div style={{background:"#1a2235",border:"1px solid rgba(255,255,255,.08)",padding:"28px",borderRadius:"2px",display:"flex",flexDirection:"column",gap:"12px"}}><span style={{fontFamily:"'Roboto Mono',monospace",fontSize:"12px",color:"#10b981",letterSpacing:"2px"}}>03</span><span style={{fontWeight:"700",fontSize:"17px"}}>Cifrado</span><span style={{color:"#94a3b8",fontSize:"14px",lineHeight:"1.6"}}>Datos y respaldos cifrados.</span></div>
      <div style={{background:"#1a2235",border:"1px solid rgba(255,255,255,.08)",padding:"28px",borderRadius:"2px",display:"flex",flexDirection:"column",gap:"12px"}}><span style={{fontFamily:"'Roboto Mono',monospace",fontSize:"12px",color:"#10b981",letterSpacing:"2px"}}>04</span><span style={{fontWeight:"700",fontSize:"17px"}}>Respaldos diarios</span><span style={{color:"#94a3b8",fontSize:"14px",lineHeight:"1.6"}}>Copias fuera del VPS y restauración probada.</span></div>
      </div>
      </div>
      <div className="px" style={{padding:"112px 64px",display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center",gap:"24px"}}>
      <div style={{fontFamily:"'Roboto Mono',monospace",fontSize:"12px",letterSpacing:"3px",color:"#10b981",textTransform:"uppercase"}}>Colegio piloto</div>
      <h2 className="h-sec" style={{fontSize:"52px",fontWeight:"800",letterSpacing:"-2px",lineHeight:"1.05",maxWidth:"880px",textWrap:"balance"}}>Construido sprint a sprint con la I.E. INCODELCA, en Corinto, Cauca.</h2>
      <p style={{fontSize:"17px",color:"#94a3b8",lineHeight:"1.7",maxWidth:"620px"}}>Sprints de dos semanas y una revisión con el colegio al final de cada uno, porque las reglas de evaluación de cada institución solo se precisan con el uso real.</p>
      <div className="h1" style={{background:"#3b82f6",color:"#fff",fontSize:"15px",fontWeight:"600",padding:"14px 26px",borderRadius:"2px",marginTop:"12px",cursor:"pointer"}}>Sumar mi colegio</div>
      </div>
      <div className="px foot" style={{padding:"28px 64px",borderTop:"1px solid rgba(255,255,255,.08)",display:"flex",justifyContent:"space-between",fontSize:"13px",color:"#94a3b8"}}><span>EduCore · Yoiner Duran Rios, Ivan Ramiro Castro Rojas, Ronald Fabian Garcia Quicazaque</span><span>Política de tratamiento de datos · Ley 1581 de 2012</span></div>
      </div>
    </>
  );
}
