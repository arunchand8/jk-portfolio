export default function Button({ children, href, variant = 'primary', className = '' }) {
  const base = 'inline-flex items-center justify-center gap-2 rounded-full text-sm font-semibold tracking-wide transition-opacity hover:opacity-90 no-underline'
  const variants = {
    primary: 'bg-gold text-dark px-6 py-3',
    ghost: 'border border-white/30 text-white/70 px-6 py-3',
  }
  return (
    <a href={href} className={`${className} ${base} ${variants[variant]}`}>
      {children}
    </a>
  )
}