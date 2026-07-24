import { FormEvent, useState } from 'react'

type IconProps = { size?: number }

const ArrowUpRight = ({ size = 16 }: IconProps) => (
  <svg aria-hidden="true" width={size} height={size} viewBox="0 0 16 16" fill="none">
    <path d="M4.5 11.5 11.5 4.5M5 4.5h6.5V11" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const ArrowRight = ({ size = 16 }: IconProps) => (
  <svg aria-hidden="true" width={size} height={size} viewBox="0 0 16 16" fill="none">
    <path d="M3 8h9.5M8.5 3.5 13 8l-4.5 4.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const Sparkle = ({ size = 16 }: IconProps) => (
  <svg aria-hidden="true" width={size} height={size} viewBox="0 0 16 16" fill="none">
    <path d="M8 1.5 9.25 6.75 14.5 8 9.25 9.25 8 14.5 6.75 9.25 1.5 8l5.25-1.25L8 1.5Z" stroke="currentColor" strokeWidth="1.1" strokeLinejoin="round" />
  </svg>
)

const Check = ({ size = 15 }: IconProps) => (
  <svg aria-hidden="true" width={size} height={size} viewBox="0 0 16 16" fill="none">
    <path d="m3 8.25 3.1 3.1L13 4.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const ClosetMark = () => (
  <span className="closet-mark" aria-hidden="true">
    <span />
    <span />
    <span />
  </span>
)

const outfits = [
  {
    label: '01',
    name: 'Soft structure',
    meta: 'Coffee / 68°',
    tag: 'Most like you',
    colors: ['cream', 'olive', 'ink', 'stone'],
  },
  {
    label: '02',
    name: 'Quiet confidence',
    meta: 'Dinner / 72°',
    tag: 'Try something new',
    colors: ['rust', 'ink', 'sand', 'cream'],
  },
  {
    label: '03',
    name: 'Easy layer',
    meta: 'Commute / 64°',
    tag: 'Ready in 2 min',
    colors: ['denim', 'cream', 'olive', 'ink'],
  },
]

const filters = ['All outfits', 'On the move', 'Easy layers']

function App() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [activeFilter, setActiveFilter] = useState('All outfits')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (email.trim()) setSubmitted(true)
  }

  const visibleOutfits = activeFilter === 'All outfits'
    ? outfits
    : activeFilter === 'On the move'
      ? outfits.slice(1)
      : outfits.slice(0, 2)

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Dresscode home">
          <ClosetMark />
          <span>dresscode</span>
        </a>
        <nav className="main-nav" aria-label="Primary navigation">
          <a href="#how-it-works">How it works</a>
          <a href="#principles">Why Dresscode</a>
          <a href="#early-access">Early access</a>
        </nav>
        <a className="header-link" href="#early-access">
          Get started <ArrowUpRight size={15} />
        </a>
      </header>

      <main>
        <section className="hero" id="top">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-line" />Clothing intelligence / 01</p>
            <h1>Better outfits.<br /><em>Less guesswork.</em></h1>
            <p className="hero-lede">
              Dresscode turns the clothes you already own into a closet that thinks with you — so getting dressed feels like the easy part.
            </p>
            <form className="signup-form" onSubmit={handleSubmit}>
              <label className="sr-only" htmlFor="hero-email">Your email address</label>
              <input
                id="hero-email"
                type="email"
                placeholder="you@email.com"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value)
                  setSubmitted(false)
                }}
                required
              />
              <button type="submit" className="button button-dark">
                {submitted ? 'You’re on the list' : 'Get early access'}
                {submitted ? <Check /> : <ArrowUpRight />}
              </button>
            </form>
            <p className="form-note">No styling rules. No shopping list. Just more from what you have.</p>
            <a className="text-link" href="#how-it-works">See the thinking <ArrowRight size={15} /></a>
          </div>

          <div className="hero-visual" aria-label="A preview of the Dresscode closet dashboard">
            <div className="visual-glow" />
            <div className="closet-window">
              <div className="window-topbar">
                <div className="window-dots"><span /><span /><span /></div>
                <span className="window-title">my closet / monday, 8:14 am</span>
                <span className="window-status"><span />live</span>
              </div>
              <div className="window-body">
                <aside className="window-sidebar">
                  <span className="side-logo"><ClosetMark /></span>
                  <span className="side-icon active">✦</span>
                  <span className="side-icon">⌘</span>
                  <span className="side-icon">◌</span>
                  <span className="side-icon">□</span>
                  <span className="side-icon side-bottom">◒</span>
                </aside>
                <div className="closet-content">
                  <div className="content-heading">
                    <div>
                      <p className="micro-label">Tuesday, April 23</p>
                      <h2>Good morning, Alex.</h2>
                    </div>
                    <span className="avatar">A</span>
                  </div>
                  <div className="suggestion-card">
                    <div className="suggestion-topline"><span><Sparkle size={13} />Dresscode suggests</span><span className="suggestion-time">for right now</span></div>
                    <div className="suggestion-main">
                      <div className="mini-outfit" aria-hidden="true">
                        <span className="mini-piece mini-shirt" />
                        <span className="mini-piece mini-jacket" />
                        <span className="mini-piece mini-pants" />
                      </div>
                      <div className="suggestion-copy">
                        <strong>Soft structure</strong>
                        <span>Easy layers for a cool start.</span>
                      </div>
                      <span className="confidence">94% match</span>
                    </div>
                  </div>
                  <div className="closet-heading"><span>In your closet</span><span>48 pieces / <b>all yours</b></span></div>
                  <div className="clothing-grid">
                    <div className="clothing-card clothing-card-large"><span className="piece piece-jacket" /><span className="piece-name">The daily blazer</span><span className="piece-meta">Outerwear</span></div>
                    <div className="clothing-card card-sage"><span className="piece piece-knit" /><span className="piece-name">Sunday knit</span><span className="piece-meta">Tops</span></div>
                    <div className="clothing-card card-rust"><span className="piece piece-shirt" /><span className="piece-name">Good shirt</span><span className="piece-meta">Tops</span></div>
                    <div className="clothing-card card-denim"><span className="piece piece-jeans" /><span className="piece-name">Everyday denim</span><span className="piece-meta">Bottoms</span></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="floating-note floating-note-top"><span className="note-icon">✦</span><span>your closet,<br /><b>made useful</b></span></div>
            <div className="floating-note floating-note-bottom"><span className="note-number">04</span><span>pieces styled<br /><b>this week</b></span></div>
          </div>
        </section>

        <div className="signal-row" aria-label="Dresscode features">
          <span>Real clothes</span><span className="signal-dot" /><span>Your patterns</span><span className="signal-dot" /><span>Better mornings</span><span className="signal-dot" /><span>Zero overthinking</span>
        </div>

        <section className="how-section" id="how-it-works">
          <div className="section-intro">
            <p className="eyebrow"><span className="eyebrow-line" />The point / 02</p>
            <h2>Your closet has<br /><em>more to say.</em></h2>
          </div>
          <div className="section-statement">
            <p>Dresscode learns your clothes, your calendar, and your way of putting things together. Then it gets out of the way.</p>
            <a className="text-link" href="#workspace">Explore the closet <ArrowUpRight size={15} /></a>
          </div>
          <div className="process-grid">
            <article className="process-card process-card-dark">
              <span className="process-number">01</span>
              <span className="process-icon process-scan">⌁</span>
              <h3>Bring it in.</h3>
              <p>Snap the pieces already in your closet. Dresscode takes care of the organizing.</p>
              <span className="process-arrow"><ArrowUpRight /></span>
            </article>
            <article className="process-card process-card-olive">
              <span className="process-number">02</span>
              <span className="process-icon">✦</span>
              <h3>See the pattern.</h3>
              <p>Get a clear view of what works together, what you reach for, and what you forget.</p>
              <span className="process-arrow"><ArrowUpRight /></span>
            </article>
            <article className="process-card process-card-sand">
              <span className="process-number">03</span>
              <span className="process-icon">◒</span>
              <h3>Get dressed.</h3>
              <p>Start with a thoughtful suggestion that still leaves room for your own point of view.</p>
              <span className="process-arrow"><ArrowUpRight /></span>
            </article>
          </div>
        </section>

        <section className="workspace-section" id="workspace">
          <div className="workspace-label">
            <p className="eyebrow"><span className="eyebrow-line" />A better default / 03</p>
            <p className="workspace-aside">The best version of your wardrobe is the one you can actually use.</p>
          </div>
          <div className="workspace-panel">
            <div className="workspace-heading">
              <div>
                <p className="micro-label light-label">Your morning, edited</p>
                <h2>One less decision<br /><em>before 9 am.</em></h2>
              </div>
              <span className="workspace-count">03 / 48<br /><small>saved looks / pieces</small></span>
            </div>
            <div className="filter-row" role="tablist" aria-label="Outfit filters">
              {filters.map((filter) => (
                <button
                  className={activeFilter === filter ? 'filter-button active' : 'filter-button'}
                  key={filter}
                  type="button"
                  role="tab"
                  aria-selected={activeFilter === filter}
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>
            <div className="outfit-list">
              {visibleOutfits.map((outfit) => (
                <article className="outfit-row" key={outfit.label}>
                  <span className="outfit-label">{outfit.label}</span>
                  <div className="outfit-figure" aria-hidden="true">
                    {outfit.colors.map((color, index) => <span className={`outfit-piece outfit-${color}`} key={`${outfit.label}-${index}`} />)}
                  </div>
                  <div className="outfit-name"><strong>{outfit.name}</strong><span>{outfit.meta}</span></div>
                  <span className="outfit-tag">{outfit.tag}</span>
                  <button className="row-arrow" type="button" aria-label={`View ${outfit.name}`}><ArrowUpRight size={16} /></button>
                </article>
              ))}
            </div>
            <div className="workspace-footer"><span><span className="online-dot" />Updated from your closet 4 min ago</span><a href="#early-access">See all looks <ArrowRight size={14} /></a></div>
          </div>
        </section>

        <section className="principles-section" id="principles">
          <div className="principles-heading">
            <p className="eyebrow"><span className="eyebrow-line" />The dresscode / 04</p>
            <h2>Style is personal.<br /><em>The tools should be too.</em></h2>
          </div>
          <div className="principles-grid">
            <article><span className="principle-index">01</span><h3>Start with enough.</h3><p>Less buying. More noticing. We make what is already yours easier to see.</p></article>
            <article><span className="principle-index">02</span><h3>Keep your point of view.</h3><p>Suggestions should sound like you — not a trend report or someone else's closet.</p></article>
            <article><span className="principle-index">03</span><h3>Make mornings lighter.</h3><p>Good design gives you a little time back. Getting dressed should do the same.</p></article>
          </div>
        </section>

        <section className="final-cta" id="early-access">
          <div className="cta-mark"><ClosetMark /></div>
          <p className="eyebrow eyebrow-light"><span className="eyebrow-line" />The next good outfit is already here / 05</p>
          <h2>Make your closet<br /><em>feel bigger.</em></h2>
          <p>Dresscode is opening its doors soon. Leave your email and be first in line.</p>
          <form className="signup-form signup-form-light" onSubmit={handleSubmit}>
            <label className="sr-only" htmlFor="cta-email">Your email address</label>
            <input id="cta-email" type="email" placeholder="you@email.com" value={email} onChange={(event) => { setEmail(event.target.value); setSubmitted(false) }} required />
            <button type="submit" className="button button-light">{submitted ? 'You’re on the list' : 'Get early access'} {submitted ? <Check /> : <ArrowUpRight />}</button>
          </form>
        </section>
      </main>

      <footer className="site-footer">
        <a className="brand" href="#top"><ClosetMark /><span>dresscode</span></a>
        <span>Clothing intelligence for real life.</span>
        <span>© 2024 Dresscode, Inc.</span>
      </footer>
    </div>
  )
}

export default App
