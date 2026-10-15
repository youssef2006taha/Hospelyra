import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

function PageView({ title }) {
  const headingRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.35, ease: 'power2.out' },
    )
  }, [title])

  return (
    <section className="mx-auto w-full max-w-5xl">
      <div ref={headingRef}>
        <p className="text-sm font-medium text-teal-700">Hospelyra workspace</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">{title}</h1>
        <p className="mt-2 text-slate-500">This page is ready for your content.</p>
      </div>
      <div className="mt-8 min-h-64 rounded-2xl border border-dashed border-slate-300 bg-white p-6" />
    </section>
  )
}

export default PageView
