import React from "react";

// Fuentes: agrega en el <head>:
// <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;1,6..72,400;1,6..72,500&family=IBM+Plex+Mono:wght@400;500;600&display=swap" rel="stylesheet">
const css = `*{margin:0;padding:0;box-sizing:border-box}
body{background:#FDF8F0;font-family:'Inter',sans-serif;color:#1E293B;-webkit-font-smoothing:antialiased}
a{color:#C2410C;text-decoration:underline}
a:hover{color:#9A3412}
.hv1{cursor:pointer;transition:background .15s,color .15s;white-space:nowrap}.hv1:hover{background:#9A3412 !important}
.hv2{cursor:pointer;transition:background .15s,color .15s;white-space:nowrap}.hv2:hover{background:#1E293B !important;color:#FDF8F0 !important}
.hv3{cursor:pointer;transition:background .15s,color .15s;white-space:nowrap}.hv3:hover{background:#fff !important}
.hv4{cursor:pointer;transition:background .15s,color .15s;white-space:nowrap}.hv4:hover{background:rgba(253,248,240,.12) !important}
.nav span{white-space:nowrap}
.cta,.hero-row>div:last-child{flex-wrap:wrap}
@media (max-width:1200px){
 .nav{display:none!important}
 .h-hero{font-size:80px!important;letter-spacing:-2.5px!important}
 .big{font-size:180px!important;letter-spacing:-8px!important}
 .split{grid-template-columns:1fr!important;gap:56px!important}
 .step{grid-template-columns:80px 1fr!important}
 .step>span:last-child{grid-column:2}
 .g4{grid-template-columns:repeat(2,1fr)!important}
 .cta{flex-direction:column!important;align-items:flex-start!important}
}
@media (max-width:900px){
 .hero-row,.band,.chap,.faq{grid-template-columns:1fr!important;gap:20px!important}
 .band{padding-bottom:32px!important}
 .tree{grid-template-columns:1fr!important}
 .tree>div{border-left:none!important;border-right:none!important}
 .h-sec{font-size:40px!important}
 .h-cta{font-size:52px!important}
 .total{font-size:60px!important}
 .photo{height:320px!important}
}
@media (max-width:600px){
 .px{padding-left:22px!important;padding-right:22px!important}
 .h-hero{font-size:52px!important;letter-spacing:-1.5px!important}
 .big{font-size:120px!important;letter-spacing:-5px!important}
 .g4,.g2s{grid-template-columns:1fr!important}
 .step{grid-template-columns:1fr!important;gap:8px!important}
 .step>span:last-child{grid-column:auto}
 .h-sec{font-size:34px!important}
 .h-cta{font-size:40px!important}
}`;

export default function EduCoreLanding() {
  return (
    <>
      <style>{css}</style>
      <div style={{maxWidth:"1440px",margin:"0 auto",backgroundColor:"#FDF8F0",backgroundImage:"radial-gradient(rgba(30,41,59,.05) 1px,transparent 1px)",backgroundSize:"4px 4px",color:"#1E293B",overflow:"hidden"}}>
      
      <div className="px" style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"22px 72px",borderBottom:"1px solid #1E293B"}}>
      <div style={{display:"flex",alignItems:"baseline",gap:"14px"}}><span style={{fontFamily:"'Newsreader',serif",fontSize:"26px",fontWeight:"600",letterSpacing:"-.5px"}}>EduCore</span><span style={{fontFamily:"'IBM Plex Mono',monospace",fontSize:"11px",letterSpacing:"2px",color:"#475569",textTransform:"uppercase"}}>Gestión académica · Colombia</span></div>
      <div className="nav" style={{display:"flex",gap:"28px",fontSize:"14px",color:"#1E293B"}}><span>01 Problema</span><span>02 Cómo funciona</span><span>03 Costos</span><span>04 Seguridad</span><span>05 Piloto</span></div>
      <div className="hv1" style={{background:"#C2410C",color:"#fff",fontSize:"14px",fontWeight:"600",padding:"10px 18px",cursor:"pointer"}}>Crear mi colegio</div>
      </div>
      
      <div className="px" style={{padding:"96px 72px 0",display:"flex",flexDirection:"column",gap:"32px"}}>
      <div style={{fontFamily:"'IBM Plex Mono',monospace",fontSize:"12px",letterSpacing:"2px",color:"#475569",textTransform:"uppercase"}}>Para colegios oficiales pequeños · Conforme al Decreto 1290 de 2009</div>
      <h1 className="h-hero" style={{fontFamily:"'Newsreader',serif",fontSize:"104px",fontWeight:"500",lineHeight:".95",letterSpacing:"-3.5px",maxWidth:"1040px",textWrap:"balance"}}>Del Excel al boletín, <em style={{fontStyle:"italic",color:"#C2410C"}}>sin pagar por estudiante.</em></h1>
      <div className="hero-row" style={{display:"grid",gridTemplateColumns:"1fr auto",gap:"48px",alignItems:"end"}}>
      <p style={{fontSize:"19px",lineHeight:"1.6",color:"#334155",maxWidth:"600px",textWrap:"pretty"}}>EduCore reúne la estructura académica, los docentes, los estudiantes y las calificaciones de cada periodo en una sola plataforma, pensada para el presupuesto de un colegio público.</p>
      <div style={{display:"flex",gap:"12px"}}>
      <div className="hv1" style={{background:"#C2410C",color:"#fff",fontSize:"15px",fontWeight:"600",padding:"16px 26px",cursor:"pointer"}}>Crear mi colegio</div>
      <div className="hv2" style={{border:"2px solid #1E293B",fontSize:"15px",fontWeight:"600",padding:"14px 24px",cursor:"pointer"}}>Ver comparación de costos</div>
      </div>
      </div>
      </div>
      <div className="band px" style={{marginTop:"88px",borderTop:"3px solid #000",borderBottom:"3px solid #000",display:"grid",gridTemplateColumns:"auto 1fr",alignItems:"center",gap:"56px",padding:"0 72px"}}>
      <span className="big" style={{fontFamily:"'Newsreader',serif",fontSize:"260px",fontWeight:"500",lineHeight:".9",letterSpacing:"-12px",color:"#C2410C",padding:"24px 0 12px",marginLeft:"-8px"}}>69,4%</span>
      <div style={{display:"flex",flexDirection:"column",gap:"14px",maxWidth:"380px"}}>
      <span style={{fontFamily:"'Newsreader',serif",fontSize:"30px",lineHeight:"1.2"}}>de las sedes educativas rurales del país carece de acceso a Internet.</span>
      <span style={{fontSize:"15px",color:"#475569",lineHeight:"1.6"}}>Por eso EduCore es una aplicación liviana, pensada para conexiones lentas.</span>
      </div>
      </div>
      
      <div className="px" style={{padding:"120px 72px",display:"flex",flexDirection:"column",gap:"56px"}}>
      <div className="chap" style={{display:"grid",gridTemplateColumns:"200px 1fr",gap:"40px",alignItems:"baseline"}}>
      <span style={{fontFamily:"'IBM Plex Mono',monospace",fontSize:"13px",letterSpacing:"2px",color:"#C2410C"}}>CAPÍTULO 01</span>
      <h2 className="h-sec" style={{fontFamily:"'Newsreader',serif",fontSize:"56px",fontWeight:"500",letterSpacing:"-1.5px",lineHeight:"1.05",maxWidth:"820px",textWrap:"balance"}}>Los colegios oficiales pequeños quedan entre dos sistemas que no les sirven.</h2>
      </div>
      <div className="tree" style={{display:"grid",gridTemplateColumns:"1fr 1.1fr 1fr",border:"2px solid #1E293B"}}>
      <div style={{padding:"32px",display:"flex",flexDirection:"column",gap:"20px",borderRight:"2px solid #1E293B"}}>
      <span style={{fontFamily:"'IBM Plex Mono',monospace",fontSize:"12px",letterSpacing:"2px",color:"#475569"}}>CAUSAS</span>
      <div style={{display:"flex",flexDirection:"column",gap:"14px",fontSize:"15px",lineHeight:"1.55"}}>
      <span style={{paddingBottom:"14px",borderBottom:"1px solid rgba(30,41,59,.2)"}}>Las plataformas comerciales cobran <b style={{fontFamily:"'IBM Plex Mono',monospace",fontWeight:"600"}}>$2.000–9.900 COP</b> por estudiante al año, con precios pensados para colegios privados.</span>
      <span style={{paddingBottom:"14px",borderBottom:"1px solid rgba(30,41,59,.2)"}}>El SIMAT cubre la matrícula oficial, pero no la asignación docente, las notas ni los boletines.</span>
      <span>Un servidor propio exige equipo, energía y soporte técnico local.</span>
      </div>
      </div>
      <div style={{padding:"32px",display:"flex",flexDirection:"column",justifyContent:"center",gap:"16px",background:"#1E293B",color:"#FDF8F0"}}>
      <span style={{fontFamily:"'IBM Plex Mono',monospace",fontSize:"12px",letterSpacing:"2px",color:"#FDBA74"}}>PROBLEMA</span>
      <span style={{fontFamily:"'Newsreader',serif",fontSize:"32px",lineHeight:"1.15"}}>Notas, carga académica y boletines se siguen gestionando en papel u hojas de Excel.</span>
      </div>
      <div style={{padding:"32px",display:"flex",flexDirection:"column",gap:"20px",borderLeft:"2px solid #1E293B"}}>
      <span style={{fontFamily:"'IBM Plex Mono',monospace",fontSize:"12px",letterSpacing:"2px",color:"#475569"}}>EFECTOS</span>
      <div style={{display:"flex",flexDirection:"column",gap:"14px",fontSize:"15px",lineHeight:"1.55"}}>
      <span style={{paddingBottom:"14px",borderBottom:"1px solid rgba(30,41,59,.2)"}}>Doble digitación de los estudiantes.</span>
      <span style={{paddingBottom:"14px",borderBottom:"1px solid rgba(30,41,59,.2)"}}>Boletines que llegan tarde.</span>
      <span>Sin seguimiento por sede ni por zona urbana o rural.</span>
      </div>
      </div>
      </div>
      </div>
      
      <div className="chap px" style={{padding:"120px 72px",borderTop:"1px solid #1E293B",display:"grid",gridTemplateColumns:"200px 1fr",gap:"40px"}}>
      <span style={{fontFamily:"'IBM Plex Mono',monospace",fontSize:"13px",letterSpacing:"2px",color:"#C2410C"}}>CAPÍTULO 02</span>
      <div style={{display:"flex",flexDirection:"column",gap:"56px"}}>
      <h2 className="h-sec" style={{fontFamily:"'Newsreader',serif",fontSize:"56px",fontWeight:"500",letterSpacing:"-1.5px",lineHeight:"1.05"}}>Un colegio nuevo, configurado en cinco pasos.</h2>
      <div style={{display:"flex",flexDirection:"column",borderTop:"2px solid #1E293B"}}>
      <div className="step" style={{display:"grid",gridTemplateColumns:"120px 320px 1fr",gap:"24px",padding:"28px 0",borderBottom:"1px solid rgba(30,41,59,.25)",alignItems:"baseline"}}><span style={{fontFamily:"'Newsreader',serif",fontSize:"56px",lineHeight:"1",color:"#C2410C"}}>01</span><span style={{fontFamily:"'Newsreader',serif",fontSize:"28px"}}>Crear el colegio</span><span style={{fontSize:"16px",color:"#475569",lineHeight:"1.6"}}>Subdominio, año lectivo, periodos y escala del SIEE.</span></div>
      <div className="step" style={{display:"grid",gridTemplateColumns:"120px 320px 1fr",gap:"24px",padding:"28px 0",borderBottom:"1px solid rgba(30,41,59,.25)",alignItems:"baseline"}}><span style={{fontFamily:"'Newsreader',serif",fontSize:"56px",lineHeight:"1",color:"#C2410C"}}>02</span><span style={{fontFamily:"'Newsreader',serif",fontSize:"28px"}}>Configurar la estructura</span><span style={{fontSize:"16px",color:"#475569",lineHeight:"1.6"}}>Sedes, zonas, jornadas, áreas, asignaturas y cursos.</span></div>
      <div className="step" style={{display:"grid",gridTemplateColumns:"120px 320px 1fr",gap:"24px",padding:"28px 0",borderBottom:"1px solid rgba(30,41,59,.25)",alignItems:"baseline"}}><span style={{fontFamily:"'Newsreader',serif",fontSize:"56px",lineHeight:"1",color:"#C2410C"}}>03</span><span style={{fontFamily:"'Newsreader',serif",fontSize:"28px"}}>Registrar personas</span><span style={{fontSize:"16px",color:"#475569",lineHeight:"1.6"}}>Docentes, coordinadores y estudiantes; importación CSV desde el SIMAT.</span></div>
      <div className="step" style={{display:"grid",gridTemplateColumns:"120px 320px 1fr",gap:"24px",padding:"28px 0",borderBottom:"1px solid rgba(30,41,59,.25)",alignItems:"baseline"}}><span style={{fontFamily:"'Newsreader',serif",fontSize:"56px",lineHeight:"1",color:"#C2410C"}}>04</span><span style={{fontFamily:"'Newsreader',serif",fontSize:"28px"}}>Cargar notas</span><span style={{fontSize:"16px",color:"#475569",lineHeight:"1.6"}}>Por asignatura y periodo, con valoración automática según la escala del SIEE.</span></div>
      <div className="step" style={{display:"grid",gridTemplateColumns:"120px 320px 1fr",gap:"24px",padding:"28px 0",borderBottom:"2px solid #1E293B",alignItems:"baseline"}}><span style={{fontFamily:"'Newsreader',serif",fontSize:"56px",lineHeight:"1",color:"#166534"}}>05</span><span style={{fontFamily:"'Newsreader',serif",fontSize:"28px"}}>Generar el boletín</span><span style={{fontSize:"16px",color:"#475569",lineHeight:"1.6"}}>PDF por estudiante y consolidados por curso, área, sede y zona.</span></div>
      </div>
      <div style={{display:"flex",flexDirection:"column",gap:"24px"}}>
      <span style={{fontFamily:"'IBM Plex Mono',monospace",fontSize:"12px",letterSpacing:"2px",color:"#475569"}}>QUIÉN HACE QUÉ</span>
      <div className="g4" style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"32px"}}>
      <div style={{display:"flex",flexDirection:"column",gap:"10px",borderTop:"3px solid #1E293B",paddingTop:"16px"}}><span style={{fontFamily:"'Newsreader',serif",fontSize:"22px",fontWeight:"600"}}>Rector</span><span style={{fontSize:"15px",color:"#475569",lineHeight:"1.6"}}>Configura la institución, los usuarios y la escala de valoración.</span></div>
      <div style={{display:"flex",flexDirection:"column",gap:"10px",borderTop:"3px solid #1E293B",paddingTop:"16px"}}><span style={{fontFamily:"'Newsreader',serif",fontSize:"22px",fontWeight:"600"}}>Coordinador</span><span style={{fontSize:"15px",color:"#475569",lineHeight:"1.6"}}>Hace seguimiento por sede o área y revisa los consolidados.</span></div>
      <div style={{display:"flex",flexDirection:"column",gap:"10px",borderTop:"3px solid #1E293B",paddingTop:"16px"}}><span style={{fontFamily:"'Newsreader',serif",fontSize:"22px",fontWeight:"600"}}>Docente</span><span style={{fontSize:"15px",color:"#475569",lineHeight:"1.6"}}>Registra las notas de sus asignaturas y cursos asignados.</span></div>
      <div style={{display:"flex",flexDirection:"column",gap:"10px",borderTop:"3px solid #1E293B",paddingTop:"16px"}}><span style={{fontFamily:"'Newsreader',serif",fontSize:"22px",fontWeight:"600"}}>Secretaría</span><span style={{fontSize:"15px",color:"#475569",lineHeight:"1.6"}}>Gestiona la matrícula y emite los boletines del periodo.</span></div>
      </div>
      </div>
      </div>
      </div>
      
      <div className="split px" style={{padding:"120px 72px",borderTop:"3px solid #000",background:"#F6EEDF",display:"grid",gridTemplateColumns:"1fr 620px",gap:"72px",alignItems:"start"}}>
      <div style={{display:"flex",flexDirection:"column",gap:"24px"}}>
      <span style={{fontFamily:"'IBM Plex Mono',monospace",fontSize:"13px",letterSpacing:"2px",color:"#C2410C"}}>CAPÍTULO 03</span>
      <h2 className="h-sec" style={{fontFamily:"'Newsreader',serif",fontSize:"56px",fontWeight:"500",letterSpacing:"-1.5px",lineHeight:"1.05",textWrap:"balance"}}>Diez colegios comparten un servidor. Cada uno paga una décima parte.</h2>
      <p style={{fontSize:"17px",color:"#334155",lineHeight:"1.7",textWrap:"pretty"}}>En un esquema SaaS multiinquilino una sola instancia de la aplicación atiende a varias instituciones, así que el costo de infraestructura se reparte entre ellas.</p>
      <div style={{marginTop:"16px",border:"3px solid #000",background:"#FDF8F0",padding:"24px 28px",display:"flex",alignItems:"baseline",gap:"16px",fontFamily:"'IBM Plex Mono',monospace",flexWrap:"wrap"}}>
      <span style={{fontSize:"32px",fontWeight:"600"}}>USD 96</span><span style={{fontSize:"24px",color:"#475569"}}>÷</span><span style={{fontSize:"32px",fontWeight:"600"}}>10</span><span style={{fontSize:"24px",color:"#475569"}}>=</span><span style={{fontSize:"32px",fontWeight:"600",color:"#166534"}}>≈ USD 10</span>
      <span style={{flexBasis:"100%",fontSize:"12px",color:"#475569",letterSpacing:"1px",marginTop:"6px"}}>VPS AL AÑO · COLEGIOS · POR COLEGIO</span>
      </div>
      </div>
      <div style={{background:"#FDF8F0",border:"3px solid #000",boxShadow:"12px 12px 0 #000",fontFamily:"'IBM Plex Mono',monospace",display:"flex",flexDirection:"column"}}>
      <div style={{padding:"24px 28px",borderBottom:"3px dashed #000",display:"flex",justifyContent:"space-between",fontSize:"12px",letterSpacing:"2px"}}><span>RECIBO ANUAL</span><span>COLEGIO · 300 ESTUDIANTES</span></div>
      <div style={{padding:"24px 28px",display:"flex",flexDirection:"column",gap:"22px",fontSize:"15px"}}>
      <div style={{display:"flex",flexDirection:"column",gap:"6px"}}><div style={{display:"flex",alignItems:"baseline",gap:"10px"}}><span>Plataforma B</span><span style={{flex:"1",borderBottom:"2px dotted #94a3b8"}}></span><span style={{fontSize:"26px",fontWeight:"600"}}>≈ USD 680</span></div><span style={{fontSize:"12px",color:"#475569"}}>≈ USD 340 por semestre</span></div>
      <div style={{display:"flex",flexDirection:"column",gap:"6px"}}><div style={{display:"flex",alignItems:"baseline",gap:"10px"}}><span>Plataforma A</span><span style={{flex:"1",borderBottom:"2px dotted #94a3b8"}}></span><span style={{fontSize:"26px",fontWeight:"600"}}>≈ $600.000 COP</span></div><span style={{fontSize:"12px",color:"#475569"}}>$2.000 COP por estudiante al año, plan básico</span></div>
      <div style={{display:"flex",flexDirection:"column",gap:"6px"}}><div style={{display:"flex",alignItems:"baseline",gap:"10px"}}><span>Servidor propio</span><span style={{flex:"1",borderBottom:"2px dotted #94a3b8"}}></span><span style={{fontSize:"26px",fontWeight:"600"}}>inversión alta</span></div><span style={{fontSize:"12px",color:"#475569"}}>Equipo, energía y soporte técnico local</span></div>
      </div>
      <div style={{padding:"28px",borderTop:"3px solid #000",background:"#000",color:"#FDF8F0",display:"flex",flexDirection:"column",gap:"6px"}}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"baseline"}}><span style={{fontSize:"13px",letterSpacing:"2px"}}>EDUCORE</span><span className="total" style={{fontFamily:"'Newsreader',serif",fontSize:"88px",lineHeight:"1",letterSpacing:"-3px",color:"#FBBF24"}}>≈ USD 10</span></div>
      <span style={{fontSize:"12px",color:"#CBD5E1",textAlign:"right"}}>Solo infraestructura. Soporte y mantenimiento aparte.</span>
      </div>
      </div>
      </div>
      
      <div className="split px" style={{padding:"120px 72px",background:"#0F172A",color:"#F1F5F9",display:"grid",gridTemplateColumns:"1fr 540px",gap:"80px",alignItems:"center"}}>
      <div style={{display:"flex",flexDirection:"column",gap:"28px"}}>
      <span style={{fontFamily:"'IBM Plex Mono',monospace",fontSize:"13px",letterSpacing:"2px",color:"#FDBA74"}}>CAPÍTULO 04</span>
      <h2 className="h-sec" style={{fontFamily:"'Newsreader',serif",fontSize:"56px",fontWeight:"500",letterSpacing:"-1.5px",lineHeight:"1.05"}}>Datos de menores, protegidos por diseño.</h2>
      <p style={{fontSize:"17px",color:"#CBD5E1",lineHeight:"1.7",maxWidth:"520px"}}>Tratamiento de datos personales conforme a la Ley 1581 de 2012, con aislamiento lógico entre instituciones.</p>
      <div className="g2s" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"28px 40px",marginTop:"8px"}}>
      <div style={{display:"flex",flexDirection:"column",gap:"6px",borderTop:"1px solid rgba(241,245,249,.25)",paddingTop:"14px"}}><span style={{fontWeight:"600",fontSize:"16px"}}>Esquema por colegio</span><span style={{fontSize:"14px",color:"#CBD5E1",lineHeight:"1.6"}}>Cada institución vive en su propio esquema de PostgreSQL.</span></div>
      <div style={{display:"flex",flexDirection:"column",gap:"6px",borderTop:"1px solid rgba(241,245,249,.25)",paddingTop:"14px"}}><span style={{fontWeight:"600",fontSize:"16px"}}>Control por roles</span><span style={{fontSize:"14px",color:"#CBD5E1",lineHeight:"1.6"}}>Cada usuario ve solo lo que su rol permite.</span></div>
      <div style={{display:"flex",flexDirection:"column",gap:"6px",borderTop:"1px solid rgba(241,245,249,.25)",paddingTop:"14px"}}><span style={{fontWeight:"600",fontSize:"16px"}}>Cifrado</span><span style={{fontSize:"14px",color:"#CBD5E1",lineHeight:"1.6"}}>Datos y respaldos cifrados.</span></div>
      <div style={{display:"flex",flexDirection:"column",gap:"6px",borderTop:"1px solid rgba(241,245,249,.25)",paddingTop:"14px"}}><span style={{fontWeight:"600",fontSize:"16px"}}>Respaldos diarios</span><span style={{fontSize:"14px",color:"#CBD5E1",lineHeight:"1.6"}}>Copias fuera del VPS y restauración probada.</span></div>
      </div>
      </div>
      <div style={{border:"2px solid rgba(241,245,249,.3)",padding:"28px",display:"flex",flexDirection:"column",gap:"12px",fontFamily:"'IBM Plex Mono',monospace",fontSize:"13px"}}>
      <div style={{display:"flex",justifyContent:"space-between",fontSize:"11px",letterSpacing:"2px",color:"#CBD5E1"}}><span>VPS · USD 5–8 / MES</span><span>1 INSTANCIA</span></div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"8px",fontSize:"11px",textAlign:"center"}}>
      <span style={{border:"1px solid #FDBA74",color:"#FDBA74",padding:"10px 4px"}}>incodelca.educore</span><span style={{border:"1px solid rgba(241,245,249,.3)",color:"#CBD5E1",padding:"10px 4px"}}>colegio-b.educore</span><span style={{border:"1px solid rgba(241,245,249,.3)",color:"#CBD5E1",padding:"10px 4px"}}>colegio-n.educore</span>
      </div>
      <span style={{textAlign:"center",color:"#64748B"}}>↓</span>
      <div style={{background:"#1E293B",padding:"12px 16px",display:"flex",justifyContent:"space-between"}}><span>Traefik</span><span style={{color:"#CBD5E1"}}>TLS · subdominios</span></div>
      <div style={{background:"#1E293B",padding:"12px 16px",display:"flex",justifyContent:"space-between"}}><span>Django + DRF</span><span style={{color:"#CBD5E1"}}>django-tenants</span></div>
      <span style={{textAlign:"center",color:"#64748B"}}>↓</span>
      <div style={{border:"2px solid #4ADE80",padding:"16px",display:"flex",flexDirection:"column",gap:"10px"}}>
      <span style={{color:"#4ADE80"}}>PostgreSQL compartido</span>
      <div style={{display:"flex",gap:"8px",flexWrap:"wrap",fontSize:"11px"}}><span style={{background:"#FDF8F0",color:"#0F172A",padding:"6px 10px"}}>schema: incodelca</span><span style={{border:"1px solid rgba(241,245,249,.3)",padding:"5px 10px",color:"#CBD5E1"}}>schema: colegio_b</span><span style={{border:"1px solid rgba(241,245,249,.3)",padding:"5px 10px",color:"#CBD5E1"}}>schema: colegio_n</span></div>
      </div>
      </div>
      </div>
      
      <div className="split px" style={{padding:"120px 72px",display:"grid",gridTemplateColumns:"1fr 1fr",gap:"72px",alignItems:"center"}}>
      <div className="photo" style={{height:"480px",border:"3px solid #000"}}>{/* Reemplazar por <img src="..." style={{width:"100%",height:"100%",objectFit:"cover"}} /> */}<div style={{width:"100%",height:"100%",background:"#E7DCC8",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"'IBM Plex Mono',monospace",fontSize:"13px",color:"#475569"}}>Foto de la I.E. INCODELCA</div></div>
      <div style={{display:"flex",flexDirection:"column",gap:"24px"}}>
      <span style={{fontFamily:"'IBM Plex Mono',monospace",fontSize:"13px",letterSpacing:"2px",color:"#C2410C"}}>CAPÍTULO 05 · PILOTO</span>
      <h2 className="h-sec" style={{fontFamily:"'Newsreader',serif",fontSize:"52px",fontWeight:"500",letterSpacing:"-1.5px",lineHeight:"1.05",textWrap:"balance"}}>Construido sprint a sprint con la I.E. INCODELCA, en Corinto, Cauca.</h2>
      <p style={{fontSize:"17px",color:"#334155",lineHeight:"1.7"}}>Sprints de dos semanas y una revisión con el colegio al final de cada uno, porque las reglas de evaluación de cada institución solo se precisan con el uso real.</p>
      </div>
      </div>
      
      <div className="chap px" style={{padding:"120px 72px",borderTop:"1px solid #1E293B",display:"grid",gridTemplateColumns:"200px 1fr",gap:"40px"}}>
      <span style={{fontFamily:"'IBM Plex Mono',monospace",fontSize:"13px",letterSpacing:"2px",color:"#C2410C"}}>PREGUNTAS</span>
      <div style={{display:"flex",flexDirection:"column",borderTop:"2px solid #1E293B"}}>
      <div className="faq" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"40px",padding:"28px 0",borderBottom:"1px solid rgba(30,41,59,.25)"}}><span style={{fontFamily:"'Newsreader',serif",fontSize:"26px"}}>¿Funciona con Internet lento?</span><span style={{fontSize:"16px",color:"#475569",lineHeight:"1.6"}}>Es una aplicación web progresiva (React PWA), liviana para conexiones lentas.</span></div>
      <div className="faq" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"40px",padding:"28px 0",borderBottom:"1px solid rgba(30,41,59,.25)"}}><span style={{fontFamily:"'Newsreader',serif",fontSize:"26px"}}>¿Cumple la Ley 1581 de 2012?</span><span style={{fontSize:"16px",color:"#475569",lineHeight:"1.6"}}>Sí. Los datos de cada colegio están aislados en su propio esquema, cifrados y con acceso por rol.</span></div>
      <div className="faq" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"40px",padding:"28px 0",borderBottom:"1px solid rgba(30,41,59,.25)"}}><span style={{fontFamily:"'Newsreader',serif",fontSize:"26px"}}>¿Tengo que digitar de nuevo a los estudiantes?</span><span style={{fontSize:"16px",color:"#475569",lineHeight:"1.6"}}>No. Se importan desde el archivo CSV del SIMAT.</span></div>
      <div className="faq" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"40px",padding:"28px 0",borderBottom:"2px solid #1E293B"}}><span style={{fontFamily:"'Newsreader',serif",fontSize:"26px"}}>¿Qué incluye el costo de ≈ USD 10?</span><span style={{fontSize:"16px",color:"#475569",lineHeight:"1.6"}}>Solo la infraestructura compartida. El soporte y el mantenimiento se cuentan aparte.</span></div>
      </div>
      </div>
      
      <div className="cta px" style={{padding:"112px 72px",background:"#C2410C",color:"#FDF8F0",display:"flex",justifyContent:"space-between",alignItems:"flex-end",gap:"48px"}}>
      <h2 className="h-cta" style={{fontFamily:"'Newsreader',serif",fontSize:"72px",fontWeight:"500",letterSpacing:"-2.5px",lineHeight:"1",maxWidth:"760px"}}>Sume su colegio al servidor compartido.</h2>
      <div style={{display:"flex",gap:"12px",flexShrink:"0"}}>
      <div className="hv3" style={{background:"#FDF8F0",color:"#1E293B",fontSize:"15px",fontWeight:"600",padding:"16px 26px",cursor:"pointer"}}>Crear mi colegio</div>
      <div className="hv4" style={{border:"2px solid #FDF8F0",fontSize:"15px",fontWeight:"600",padding:"14px 24px",cursor:"pointer"}}>Hablar con el equipo</div>
      </div>
      </div>
      <div className="px" style={{padding:"24px 72px",background:"#000",color:"#CBD5E1",display:"flex",justifyContent:"space-between",fontFamily:"'IBM Plex Mono',monospace",fontSize:"12px",gap:"24px",flexWrap:"wrap"}}><span>EDUCORE · 2026 · Yoiner Duran Rios, Ivan Ramiro Castro Rojas, Ronald Fabian Garcia Quicazaque</span><span>Política de tratamiento de datos · Ley 1581 de 2012</span></div>
      </div>
    </>
  );
}
