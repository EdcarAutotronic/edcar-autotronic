function Mark({ onDark = false, className = '' }) {
  const frame = onDark ? '#FFFFFF' : '#123B70'
  const accent = onDark ? '#123B70' : '#EAF2FA'
  const glyph = onDark ? '#123B70' : '#FFFFFF'

  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <rect width="64" height="64" rx="6" fill={frame} />
      <path
        d="M10 8h8M8 10v8M54 8h-8M56 10v8M10 56h8M8 54v-8M54 56h-8M56 54v-8"
        stroke={accent}
        strokeWidth="1.5"
        strokeLinecap="square"
        opacity="0.55"
      />
      <path
        d="M20 18h24M20 18v28M20 32h16M20 46h24"
        fill="none"
        stroke={glyph}
        strokeWidth="4"
        strokeLinecap="square"
      />
      <circle cx="40" cy="32" r="2.4" fill={glyph} />
      <path
        d="M46 29.5 51 32l-5 2.5"
        fill="none"
        stroke={glyph}
        strokeWidth="2"
        strokeLinejoin="miter"
      />
    </svg>
  )
}

export default function Logo({
  variant = 'horizontal',
  onDark = false,
  className = '',
}) {
  const text = onDark ? 'text-white' : 'text-brand'
  const sub = onDark ? 'text-white/70' : 'text-brand-mid'

  if (variant === 'mark') {
    return <Mark onDark={onDark} className={className || 'h-9 w-9'} />
  }

  if (variant === 'compact') {
    return (
      <span className={`inline-flex items-center gap-2.5 ${className}`}>
        <Mark onDark={onDark} className="h-9 w-9 shrink-0" />
        <span className={`text-[1.05rem] font-extrabold leading-none tracking-tight ${text}`}>
          EDCAR
        </span>
      </span>
    )
  }

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <Mark onDark={onDark} className="h-10 w-10 shrink-0 sm:h-11 sm:w-11" />
      <span className="flex min-w-0 flex-col leading-none">
        <span className={`text-[1.05rem] font-extrabold tracking-tight sm:text-lg ${text}`}>
          EDCAR
        </span>
        <span className={`mt-1 text-[0.62rem] font-semibold tracking-[0.22em] ${sub}`}>
          AUTOTRONIC
        </span>
      </span>
    </span>
  )
}

export { Mark as LogoMark }
