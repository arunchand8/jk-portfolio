export default function SectionHeader({ label, title }) {
  return (
    <div className="mb-10">
      <p className="text-[0.65rem] uppercase tracking-[0.2em] text-gold mb-2">{label}</p>
      <h2 className="font-bebas text-5xl text-white tracking-wide">{title}</h2>
    </div>
  )
}