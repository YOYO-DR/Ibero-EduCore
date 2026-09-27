/* Iconos SVG del admin A2 (trazos de la plantilla EduCoreA2Admin.jsx).
   Todos heredan stroke="currentColor" para poder teñirlos por clase. */

function Icon({ children, size = 18, ...rest }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...rest}
    >
      {children}
    </svg>
  );
}

export function IconOrbit({ size = 18 }) {
  return (
    <Icon size={size} strokeWidth="2">
      <circle cx="12" cy="12" r="2" />
      <ellipse cx="12" cy="12" rx="9" ry="4" />
      <ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(120 12 12)" />
    </Icon>
  );
}

export function IconChart(props) {
  return (
    <Icon {...props}>
      <path d="M3 3v18h18" />
      <path d="M8 17V11" />
      <path d="M13 17V7" />
      <path d="M18 17v-4" />
    </Icon>
  );
}

export function IconSchool(props) {
  return (
    <Icon {...props}>
      <path d="M3 21h18" />
      <path d="M5 21V10l7-5 7 5v11" />
      <path d="M9 21v-5h6v5" />
    </Icon>
  );
}

export function IconUsers(props) {
  return (
    <Icon {...props}>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M2.5 20c.8-3.5 3.4-5.5 6.5-5.5s5.7 2 6.5 5.5" />
      <path d="M16 4.5a3.5 3.5 0 0 1 0 7" />
      <path d="M18 14.8c1.8.7 3 2.5 3.5 5.2" />
    </Icon>
  );
}

export function IconPencil(props) {
  return (
    <Icon {...props}>
      <path d="M4 20l1-4L16 5l3 3L8 19z" />
      <path d="M14 7l3 3" />
    </Icon>
  );
}

export function IconFile(props) {
  return (
    <Icon {...props}>
      <path d="M6 3h9l4 4v14H6z" />
      <path d="M9 11h7" />
      <path d="M9 15h7" />
    </Icon>
  );
}

export function IconGear(props) {
  return (
    <Icon {...props}>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1" />
    </Icon>
  );
}

export function IconChevron(props) {
  return (
    <Icon {...props} strokeWidth="2">
      <path d="M6 9l6 6 6-6" />
    </Icon>
  );
}

export function IconBook(props) {
  return (
    <Icon {...props} strokeWidth="1.6">
      <path d="M2 5h6a4 4 0 0 1 4 4v11a3 3 0 0 0-3-3H2z" />
      <path d="M22 5h-6a4 4 0 0 0-4 4v11a3 3 0 0 1 3-3h7z" />
    </Icon>
  );
}

export function IconClock(props) {
  return (
    <Icon {...props} strokeWidth="1.6">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 12l4-4" />
    </Icon>
  );
}

export function IconSearch(props) {
  return (
    <Icon {...props} strokeWidth="2">
      <circle cx="11" cy="11" r="7" />
      <path d="M20 20l-4-4" />
    </Icon>
  );
}

export function IconDownload(props) {
  return (
    <Icon {...props} strokeWidth="2">
      <path d="M12 4v11" />
      <path d="M7 10l5 5 5-5" />
      <path d="M4 20h16" />
    </Icon>
  );
}

export function IconSave(props) {
  return (
    <Icon {...props} strokeWidth="2">
      <path d="M5 3h11l3 3v15H5z" />
      <path d="M8 3v5h7V3" />
      <path d="M8 21v-7h8v7" />
    </Icon>
  );
}

export function IconDoc(props) {
  return (
    <Icon {...props} strokeWidth="2">
      <path d="M7 3h7l4 4v14H7z" />
      <path d="M10 12h5M10 16h5" />
    </Icon>
  );
}
