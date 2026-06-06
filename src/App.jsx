import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Skills from './components/Skills'
import Experience from './components/Experience'
import About from './components/About'
import { LanguageProvider } from './i18n.jsx'
function App() {
  return (
    <LanguageProvider>
      <div className="relative min-h-screen overflow-hidden bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 font-sans text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.06)_1px,transparent_0)] bg-[size24px_24px] opacity-[0.06]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.04),transparent_60%)] opacity-60"
        />

        <Header />

        <main className="mx-auto max-w-6xl space-y-20 px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
        </main>

        <Footer />
      </div>
    </LanguageProvider>
  )
}

export default App
