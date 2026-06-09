import { FaEnvelope, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa'

const socials = [
  {
    icon: FaYoutube,
    href: 'https://www.youtube.com/@im_jayakrishna',
    label: 'YouTube',
    color: '#FF0000',
  },
  {
    icon: FaInstagram,
    href: 'https://www.instagram.com/im_jayakrishna/',
    label: 'Instagram',
    color: '#E4405F',
  },
  {
    icon: FaLinkedin,
    href: 'https://www.linkedin.com/in/imjayakrishna',
    label: 'LinkedIn',
    color: '#0A66C2',
  },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/30 mt-16">
      {/* CTA Section */}
      <section className="max-w-6xl mx-auto px-6 md:px-10 py-20 text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-gold mb-3">
          Get In Touch
        </p>

        <h2 className="font-bebas text-5xl text-white tracking-wide mb-4">
          Let's Create Together
        </h2>

        <p className="text-sm text-white/60 font-dm mb-8">
          Available for game trailer projects, cinematic sequences, and
          collaborations.
        </p>

        <a
          href="mailto:kovelakuntla333@gmail.com"
          className="inline-flex items-center gap-3 bg-gold text-dark px-8 py-4 rounded-full font-semibold text-sm tracking-wide no-underline hover:opacity-90 transition-opacity"
        >
          <FaEnvelope size={16} />
          Send a Message
        </a>
      </section>

      {/* Footer Bottom */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-xs text-white/500 font-dm">
          © Jayakrishna · Unreal Engine · Cinematic Artist
        </p>

        <nav aria-label="Social links">
          <ul className="flex items-center gap-4 list-none">
            {socials.map(({ icon: Icon, label, href, color }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:scale-110 transition-all duration-300"
                >
                  <Icon
                    size={22}
                    style={{ color }}
                    className="drop-shadow-sm"
                  />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  )
}