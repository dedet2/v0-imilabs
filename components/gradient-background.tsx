"use client"

export function GradientBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div
        className="absolute inset-0 bg-gradient-to-br from-purple-100 via-blue-50 to-cyan-100 opacity-60"
        aria-hidden="true"
      />
      <div
        className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-purple-200/40 to-transparent rounded-full blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-200/40 to-transparent rounded-full blur-3xl"
        aria-hidden="true"
      />
    </div>
  )
}
