import { Database, ShieldCheck, Zap, Code2, Layers, CheckCircle2 } from 'lucide-react';

export default function Home() {
  const techStack = [
    { name: 'Next.js 16', desc: 'App Router y Server Components', icon: Zap, status: 'Listo' },
    { name: 'React 19', desc: 'Biblioteca UI moderna', icon: Layers, status: 'Listo' },
    {
      name: 'Tailwind CSS v4',
      desc: 'Diseño ultra rápido e intuitivo',
      icon: Code2,
      status: 'Listo',
    },
    { name: 'TypeScript', desc: 'Tipado estático seguro', icon: ShieldCheck, status: 'Listo' },
    {
      name: 'Supabase',
      desc: 'Cliente SSR y Browser preconfigurados',
      icon: Database,
      status: 'Listo',
    },
  ];

  return (
    <main className='relative flex min-h-screen flex-col items-center justify-center overflow-hidden p-6 md:p-12'>
      {/* Background Subtle Gradient Blobs */}
      <div className='pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 transform rounded-full bg-linear-to-tr from-cyan-500/20 via-blue-600/10 to-emerald-500/20 blur-3xl' />

      <div className='relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center'>
        {/* Status Pill */}
        <div className='mb-6 flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/40 px-4 py-1.5 text-xs font-medium text-cyan-300 shadow-lg shadow-cyan-950/50 backdrop-blur-md'>
          <span className='h-2 w-2 animate-pulse rounded-full bg-emerald-400' />
          Proyecto en blanco listo para comenzar
        </div>

        {/* Hero Title */}
        <h1 className='text-4xl font-extrabold tracking-tight text-slate-100 sm:text-6xl'>
          Next.js +{' '}
          <span className='bg-linear-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent'>
            Supabase
          </span>{' '}
          Starter
        </h1>

        <p className='mt-4 max-w-2xl text-base text-slate-400 sm:text-lg'>
          Todo configurado con <span className='font-semibold text-cyan-300'>TypeScript</span>,{' '}
          <span className='font-semibold text-cyan-300'>Tailwind CSS</span>,{' '}
          <span className='font-semibold text-emerald-300'>Supabase SSR</span> y reglas estrictas de{' '}
          <code className='rounded border border-slate-700/60 bg-slate-800/80 px-2 py-0.5 font-mono text-xs text-cyan-300'>
            comillas simples (&apos;)
          </code>
          .
        </p>

        {/* Tech Badges Grid */}
        <div className='mt-10 grid w-full grid-cols-1 gap-4 text-left sm:grid-cols-2 lg:grid-cols-3'>
          {techStack.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.name}
                className='group relative rounded-xl border border-slate-800/80 bg-slate-900/60 p-5 backdrop-blur-sm transition-all duration-300 hover:border-cyan-500/40 hover:bg-slate-900/90 hover:shadow-xl hover:shadow-cyan-950/30'
              >
                <div className='mb-3 flex items-center justify-between'>
                  <div className='flex h-10 w-10 items-center justify-center rounded-lg border border-cyan-500/20 bg-cyan-950/40 text-cyan-400 transition-transform group-hover:scale-105'>
                    <Icon className='h-5 w-5' />
                  </div>
                  <span className='flex items-center gap-1 rounded-full border border-emerald-800/40 bg-emerald-950/40 px-2 py-0.5 text-xs font-medium text-emerald-400'>
                    <CheckCircle2 className='h-3 w-3' />
                    {item.status}
                  </span>
                </div>
                <h3 className='text-sm font-semibold text-slate-200 transition-colors group-hover:text-cyan-300'>
                  {item.name}
                </h3>
                <p className='mt-1 text-xs text-slate-400'>{item.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Direct Instructions */}
        <div className='mt-10 w-full rounded-2xl border border-slate-800/80 bg-slate-900/40 p-6 text-left backdrop-blur-md'>
          <h2 className='mb-3 font-mono text-xs tracking-wider text-slate-400 uppercase'>
            Rutas y Utilidades Preconfiguradas
          </h2>
          <ul className='space-y-2 font-mono text-xs text-slate-300'>
            <li className='flex items-center gap-2'>
              <span className='text-cyan-400'>➜</span>
              <span className='text-slate-400'>Cliente Browser Supabase:</span>
              <code className='rounded border border-slate-800 bg-slate-950/60 px-2 py-0.5 text-cyan-300'>
                src/lib/supabase/client.ts
              </code>
            </li>
            <li className='flex items-center gap-2'>
              <span className='text-cyan-400'>➜</span>
              <span className='text-slate-400'>Cliente Server Supabase:</span>
              <code className='rounded border border-slate-800 bg-slate-950/60 px-2 py-0.5 text-cyan-300'>
                src/lib/supabase/server.ts
              </code>
            </li>
            <li className='flex items-center gap-2'>
              <span className='text-cyan-400'>➜</span>
              <span className='text-slate-400'>Middleware de sesión:</span>
              <code className='rounded border border-slate-800 bg-slate-950/60 px-2 py-0.5 text-cyan-300'>
                src/middleware.ts
              </code>
            </li>
            <li className='flex items-center gap-2'>
              <span className='text-cyan-400'>➜</span>
              <span className='text-slate-400'>Variables de entorno:</span>
              <code className='rounded border border-slate-800 bg-slate-950/60 px-2 py-0.5 text-cyan-300'>
                .env.local
              </code>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
