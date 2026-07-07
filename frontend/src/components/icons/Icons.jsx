// Small inline SVG icon set used across the app.
// Kept as plain hand-written SVGs (no icon library) so no extra
// dependency has to be installed.

const defaultProps = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export function MenuIcon(props) {
  return (
    <svg {...defaultProps} {...props}>
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  )
}

export function BellIcon(props) {
  return (
    <svg {...defaultProps} {...props}>
      <path d="M6 8a6 6 0 0 1 12 0c0 4 1.5 5.5 2 6H4c.5-.5 2-2 2-6Z" />
      <path d="M10 20a2 2 0 0 0 4 0" />
    </svg>
  )
}

export function HomeIcon(props) {
  return (
    <svg {...defaultProps} {...props}>
      <rect x="3.5" y="3.5" width="7" height="7" rx="1.5" />
      <rect x="13.5" y="3.5" width="7" height="7" rx="1.5" />
      <rect x="3.5" y="13.5" width="7" height="7" rx="1.5" />
      <rect x="13.5" y="13.5" width="7" height="7" rx="1.5" />
    </svg>
  )
}

export function PredictIcon(props) {
  return (
    <svg {...defaultProps} {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5 15.5 10l-1.3 4h-4.4L8.5 10 12 7.5Z" />
    </svg>
  )
}

export function LeaderboardIcon(props) {
  return (
    <svg {...defaultProps} {...props}>
      <line x1="5" y1="20" x2="5" y2="12" />
      <line x1="12" y1="20" x2="12" y2="6" />
      <line x1="19" y1="20" x2="19" y2="15" />
    </svg>
  )
}

export function FriendsIcon(props) {
  return (
    <svg {...defaultProps} {...props}>
      <circle cx="8.5" cy="8" r="3" />
      <path d="M2.5 19c0-3.3 2.7-5.5 6-5.5s6 2.2 6 5.5" />
      <circle cx="17" cy="8.5" r="2.4" />
      <path d="M15.5 13.8c2.5.3 4 2.3 4 5.2" />
    </svg>
  )
}

export function ProfileIcon(props) {
  return (
    <svg {...defaultProps} {...props}>
      <circle cx="12" cy="8" r="3.5" />
      <path d="M4.5 20c0-4.1 3.4-6.5 7.5-6.5s7.5 2.4 7.5 6.5" />
    </svg>
  )
}
