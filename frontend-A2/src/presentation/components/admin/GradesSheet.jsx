import { useState } from 'react';
import { IconSearch, IconDownload, IconSave, IconDoc } from './AdminIcons';

const INITIAL_ROWS = [
  { id: 1, name: 'Castro Rojas, Iván', cog: '4.5', pro: '4.8', act: '5.0' },
  { id: 2, name: 'Durán Ríos, Yoiner', cog: '4.2', pro: '4.0', act: '4.5' },
  { id: 3, name: 'Martínez López, Camila', cog: '3.5', pro: '3.8', act: '4.0' },
  { id: 4, name: 'Pérez Gómez, Santiago', cog: '2.8', pro: '2.5', act: '3.0' },
  { id: 5, name: 'Rodríguez Herrera, Valentina', cog: '4.0', pro: '4.2', act: '4.8' },
  { id: 6, name: 'Vargas Mendoza, Andrés', cog: '4.8', pro: '4.6', act: '5.0' },
];

const GRADE_RE = /^[0-9]?([.,][0-9]?)?$/;

function num(v) {
  const n = parseFloat(String(v).replace(',', '.'));
  return n >= 1 && n <= 5 ? n : null;
}

function levelClass(d) {
  if (d == null) return 'none';
  if (d >= 4.6) return 'sup';
  if (d >= 4) return 'alto';
  if (d >= 3) return 'bas';
  return 'bajo';
}

const LEVEL_LABEL = {
  sup: 'SUPERIOR',
  alto: 'ALTO',
  bas: 'BÁSICO',
  bajo: 'BAJO',
  none: 'Pendiente',
};

export default function GradesSheet({ readOnly = false }) {
  const [rows, setRows] = useState(INITIAL_ROWS);
  const [query, setQuery] = useState('');
  const [dirty, setDirty] = useState({});
  const [saved, setSaved] = useState(false);

  function setGrade(id, key, value) {
    if (!GRADE_RE.test(value)) return;
    setRows((prev) => prev.map((r) => (r.id === id ? { ...r, [key]: value } : r)));
    setDirty((prev) => ({ ...prev, [id]: true }));
    setSaved(false);
  }

  const all = rows.map((r, i) => {
    const c = num(r.cog);
    const p = num(r.pro);
    const a = num(r.act);
    const d =
      c != null && p != null && a != null
        ? Math.round((c * 0.4 + p * 0.4 + a * 0.2) * 10) / 10
        : null;
    return {
      ...r,
      n: i + 1,
      initials: r.name
        .split(', ')
        .reverse()
        .map((w) => w[0])
        .join(''),
      dNum: d,
      def: d == null ? '—' : d.toFixed(1),
      level: levelClass(d),
    };
  });

  const q = query.trim().toLowerCase();
  const visible = q ? all.filter((r) => r.name.toLowerCase().includes(q)) : all;
  const done = all.filter((r) => r.dNum != null);
  const avg = done.length
    ? (done.reduce((s, r) => s + r.dNum, 0) / done.length).toFixed(1)
    : '—';
  const nd = Object.keys(dirty).length;

  return (
    <section className="adm-sheet">
      <div className="adm-sheet-head">
        <h2 className="adm-sheet-title">
          Planilla de Calificaciones – Asignatura: Tecnología e Informática
          (Grado 1001)
        </h2>
        <p className="adm-sheet-desc">
          Ingrese las calificaciones según la escala del Sistema Institucional
          de Evaluación de Estudiantes (SIEE).
        </p>
      </div>

      <div className="adm-sheet-toolbar">
        <label className="adm-search">
          <IconSearch size={16} />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar estudiante..."
            aria-label="Buscar estudiante"
          />
        </label>

        <div className="adm-sheet-actions">
          {nd > 0 && (
            <span className="adm-status dirty">
              {nd} {nd === 1 ? 'cambio' : 'cambios'} sin guardar
            </span>
          )}
          {saved && nd === 0 && (
            <span className="adm-status saved">Cambios guardados</span>
          )}
          <button type="button" className="adm-btn">
            <IconDownload size={15} />
            Importar desde SIMAT (CSV)
          </button>
          <button
            type="button"
            className="adm-btn-primary"
            onClick={() => {
              setDirty({});
              setSaved(true);
            }}
          >
            <IconSave size={15} />
            Guardar Cambios
          </button>
          <button type="button" className="adm-btn-accent">
            <IconDoc size={15} />
            Generar Boletines (PDF)
          </button>
        </div>
      </div>

      <div className="adm-table-scroll">
        <div className="adm-table">
          <div className="adm-row head">
            <span>Nº</span>
            <span />
            <span>APELLIDOS Y NOMBRES</span>
            <span>COGNITIVO (40%)</span>
            <span>PROCEDIMENTAL (40%)</span>
            <span>ACTITUDINAL (20%)</span>
            <span>DEFINITIVA</span>
            <span>NIVEL SIEE</span>
          </div>
          {visible.map((r) => (
            <div className="adm-row body" key={r.id}>
              <span className="adm-num">{r.n}</span>
              <span className="adm-initials">{r.initials}</span>
              <span className="adm-student-name">{r.name}</span>
              {['cog', 'pro', 'act'].map((key) => (
                <input
                  key={key}
                  className="adm-grade"
                  value={r[key]}
                  readOnly={readOnly}
                  inputMode="decimal"
                  onChange={(e) => setGrade(r.id, key, e.target.value)}
                />
              ))}
              <span className="adm-def">{r.def}</span>
              <div className="adm-level">
                <span className={`adm-lvl ${r.level}`}>{LEVEL_LABEL[r.level]}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {visible.length === 0 && (
        <div className="adm-empty">
          Ningún estudiante coincide con la búsqueda.
        </div>
      )}

      <div className="adm-sheet-foot">
        <span>
          {visible.length} de {all.length} estudiantes · {done.length} con
          definitiva
        </span>
        <span>
          Promedio del curso: <b>{avg}</b>
        </span>
      </div>
    </section>
  );
}
