import React, { useState } from 'react';

// Iconos SVG personalizados
const ShieldIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const LockIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
  </svg>
);

const CheckShieldIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const ServerIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
  </svg>
);

const TerminalIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const GithubIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [simulatorStep, setSimulatorStep] = useState(0);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState(null);
  const [completedSim, setCompletedSim] = useState(false);

  const scenarios = [
    {
      id: 1,
      title: "Caso 1: Filtración de Correos Corporativos",
      description: "Un atacante externo logra robar credenciales y descarga toda la base de datos de correos electrónicos privados de la directiva y clientes.",
      question: "¿Qué pilar fundamental de la Tríada CIA se ha visto principalmente comprometido?",
      options: [
        { key: 'C', label: 'Confidencialidad', correct: true, explanation: '¡Correcto! La confidencialidad se rompió porque información sensible fue expuesta a personas no autorizadas.' },
        { key: 'I', label: 'Integridad', correct: false, explanation: 'Incorrecto. Los datos no fueron alterados, sino leídos sin autorización.' },
        { key: 'A', label: 'Disponibilidad', correct: false, explanation: 'Incorrecto. El sistema sigue operativo y accesible.' }
      ]
    },
    {
      id: 2,
      title: "Caso 2: Alteración de Precios en E-commerce",
      description: "Un ciberdelincuente vulnera la plataforma web y cambia los precios de todos los productos tecnológicos a $1 dólar sin permiso.",
      question: "¿Qué pilar fundamental de la Tríada CIA se ha visto principalmente comprometido?",
      options: [
        { key: 'C', label: 'Confidencialidad', correct: false, explanation: 'Incorrecto. No se trata de robo de información confidencial.' },
        { key: 'I', label: 'Integridad', correct: true, explanation: '¡Correcto! La integridad asegura que los datos sean correctos, auténticos y confiables. Al modificar los precios, se destruyó la confiabilidad.' },
        { key: 'A', label: 'Disponibilidad', correct: false, explanation: 'Incorrecto. La tienda sigue funcionando, pero con información falsa.' }
      ]
    },
    {
      id: 3,
      title: "Caso 3: Ataque de Denegación de Servicio (DDoS)",
      description: "Millones de bots inundan el servidor web principal de un banco, colapsando el sistema y dejando la aplicación móvil inaccesible.",
      question: "¿Qué pilar fundamental de la Tríada CIA se ha visto principalmente comprometido?",
      options: [
        { key: 'C', label: 'Confidencialidad', correct: false, explanation: 'Incorrecto. No hubo acceso a información secreta.' },
        { key: 'I', label: 'Integridad', correct: false, explanation: 'Incorrecto. Los datos en el servidor no fueron alterados.' },
        { key: 'A', label: 'Disponibilidad', correct: true, explanation: '¡Correcto! La disponibilidad garantiza que los datos y servicios sean accesibles a los usuarios autorizados cuando lo necesiten.' }
      ]
    }
  ];

  const handleAnswer = (option) => {
    if (option.correct) {
      setScore(prev => prev + 1);
      setFeedback({ success: true, text: option.explanation });
    } else {
      setFeedback({ success: false, text: option.explanation });
    }
  };

  const nextScenario = () => {
    setFeedback(null);
    if (simulatorStep < scenarios.length - 1) {
      setSimulatorStep(prev => prev + 1);
    } else {
      setCompletedSim(true);
    }
  };

  const restartSimulator = () => {
    setSimulatorStep(0);
    setScore(0);
    setFeedback(null);
    setCompletedSim(false);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950 relative overflow-hidden">
      {/* Efectos de luz decorativos de fondo */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-1/3 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Barra de Navegación */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setActiveTab('home')}>
            <div className="p-2 rounded-xl bg-gradient-to-tr from-cyan-500 to-emerald-500 text-slate-950 shadow-lg shadow-cyan-500/20">
              <ShieldIcon className="w-6 h-6" />
            </div>
            <div>
              <span className="font-extrabold text-lg tracking-wider bg-gradient-to-r from-cyan-400 via-emerald-400 to-purple-400 bg-clip-text text-transparent">
                TRÍADA CIA
              </span>
              <span className="block text-xs text-slate-400 font-mono">Ciberseguridad INACAP</span>
            </div>
          </div>

          <nav className="hidden md:flex space-x-1">
            <button 
              onClick={() => setActiveTab('home')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeTab === 'home' ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 shadow-inner' : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'}`}
            >
              Inicio & Tríada
            </button>
            <button 
              onClick={() => setActiveTab('pillars')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeTab === 'pillars' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 shadow-inner' : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'}`}
            >
              Los 3 Pilares
            </button>
            <button 
              onClick={() => setActiveTab('simulator')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeTab === 'simulator' ? 'bg-purple-500/10 text-purple-400 border border-purple-500/30 shadow-inner' : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'}`}
            >
              Simulador de Casos
            </button>
          </nav>

          <div className="flex items-center space-x-2">
            <a 
              href="https://github.com/FirestoneuniCL/info_faghan" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-medium text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 transition-all shadow-sm"
            >
              <GithubIcon className="w-4 h-4" />
              <span className="hidden sm:inline">GitHub Repo</span>
            </a>
          </div>
        </div>
        
        {/* Navegación Móvil */}
        <div className="flex md:hidden border-t border-slate-900 px-4 py-2 justify-around bg-slate-950/90">
          <button onClick={() => setActiveTab('home')} className={`text-xs py-1 px-3 rounded ${activeTab === 'home' ? 'text-cyan-400 bg-cyan-500/10 font-bold' : 'text-slate-400'}`}>Inicio</button>
          <button onClick={() => setActiveTab('pillars')} className={`text-xs py-1 px-3 rounded ${activeTab === 'pillars' ? 'text-emerald-400 bg-emerald-500/10 font-bold' : 'text-slate-400'}`}>Pilares</button>
          <button onClick={() => setActiveTab('simulator')} className={`text-xs py-1 px-3 rounded ${activeTab === 'simulator' ? 'text-purple-400 bg-purple-500/10 font-bold' : 'text-slate-400'}`}>Simulador</button>
        </div>
      </header>

      {/* Contenido Principal */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 relative z-10">
        
        {/* INICIO / HERO */}
        {activeTab === 'home' && (
          <div className="space-y-16 animate-fadeIn">
            <div className="text-center max-w-3xl mx-auto pt-6 space-y-6">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold tracking-wide uppercase">
                <TerminalIcon className="w-4 h-4" />
                <span>Glosario Oficial Google Ciberseguridad</span>
              </div>
              <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight">
                La Tríada de <span className="bg-gradient-to-r from-cyan-400 via-emerald-400 to-purple-400 bg-clip-text text-transparent">Ciberseguridad</span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-light">
                Un modelo que ayuda a orientar la forma en que las organizaciones consideran el riesgo al momento de configurar sus sistemas y establecer políticas de seguridad.
              </p>
              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <button 
                  onClick={() => setActiveTab('pillars')}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 font-bold hover:opacity-90 transition-all shadow-lg shadow-cyan-500/25 flex items-center space-x-2 cursor-pointer"
                >
                  <span>Explorar Pilares (CIA)</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                </button>
                <button 
                  onClick={() => setActiveTab('simulator')}
                  className="px-6 py-3 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 font-bold hover:bg-slate-800 transition-all shadow-lg flex items-center space-x-2 cursor-pointer"
                >
                  <span>Probar Simulador</span>
                </button>
              </div>
            </div>

            {/* Tarjetas de Resumen */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
              <div 
                onClick={() => setActiveTab('pillars')} 
                className="group cursor-pointer p-8 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-900/50 border border-cyan-500/30 hover:border-cyan-400 transition-all duration-300 shadow-xl relative overflow-hidden"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-6 border border-cyan-500/20 group-hover:scale-110 transition-transform">
                  <LockIcon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">Confidencialidad</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  La idea de que solo los usuarios autorizados pueden acceder a activos o datos específicos.
                </p>
                <div className="mt-6 flex items-center text-xs font-semibold text-cyan-400">
                  <span>Ver ejemplos y detalles</span>
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>

              <div 
                onClick={() => setActiveTab('pillars')} 
                className="group cursor-pointer p-8 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-900/50 border border-emerald-500/30 hover:border-emerald-400 transition-all duration-300 shadow-xl relative overflow-hidden"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-6 border border-emerald-500/20 group-hover:scale-110 transition-transform">
                  <CheckShieldIcon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">Integridad</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  La idea de que los datos son correctos, auténticos y confiables.
                </p>
                <div className="mt-6 flex items-center text-xs font-semibold text-emerald-400">
                  <span>Ver ejemplos y detalles</span>
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>

              <div 
                onClick={() => setActiveTab('pillars')} 
                className="group cursor-pointer p-8 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-900/50 border border-purple-500/30 hover:border-purple-400 transition-all duration-300 shadow-xl relative overflow-hidden"
              >
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center mb-6 border border-purple-500/20 group-hover:scale-110 transition-transform">
                  <ServerIcon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">Disponibilidad</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  La idea de que los datos son accesibles para quienes están autorizados para acceder a ellos.
                </p>
                <div className="mt-6 flex items-center text-xs font-semibold text-purple-400">
                  <span>Ver ejemplos y detalles</span>
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* PESTAÑA DE PILARES */}
        {activeTab === 'pillars' && (
          <div className="space-y-12 animate-fadeIn">
            <div className="text-center max-w-2xl mx-auto space-y-4">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Los Tres Pilares de la Tríada CIA</h2>
              <p className="text-slate-400 text-sm sm:text-base">
                Cada pilar representa una faceta fundamental para proteger la información en cualquier organización moderna.
              </p>
            </div>

            <div className="space-y-8">
              {/* Confidencialidad */}
              <div className="p-8 rounded-2xl bg-slate-900/80 border border-cyan-500/30 shadow-xl relative overflow-hidden">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="p-4 rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shrink-0">
                    <LockIcon className="w-10 h-10" />
                  </div>
                  <div className="space-y-4 flex-1">
                    <div className="flex items-center space-x-3">
                      <span className="px-2.5 py-1 rounded bg-cyan-500/20 text-cyan-300 font-mono text-xs uppercase tracking-wider font-bold">Pilar C</span>
                      <h3 className="text-2xl font-bold text-white">Confidencialidad</h3>
                    </div>
                    <p className="text-cyan-200/90 text-base italic bg-cyan-950/40 p-4 rounded-xl border border-cyan-500/20">
                      "La idea de que solo los usuarios autorizados pueden acceder a activos o datos específicos."
                    </p>
                    <div>
                      <h4 className="text-sm font-bold text-slate-300 uppercase tracking-wider mb-2">Ejemplos Prácticos:</h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-400">
                        <li className="flex items-center space-x-2 bg-slate-950/50 p-2.5 rounded-lg border border-slate-800">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                          <span>Cifrado de extremo a extremo.</span>
                        </li>
                        <li className="flex items-center space-x-2 bg-slate-950/50 p-2.5 rounded-lg border border-slate-800">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                          <span>Autenticación multifactor (MFA).</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Integridad */}
              <div className="p-8 rounded-2xl bg-slate-900/80 border border-emerald-500/30 shadow-xl relative overflow-hidden">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="p-4 rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0">
                    <CheckShieldIcon className="w-10 h-10" />
                  </div>
                  <div className="space-y-4 flex-1">
                    <div className="flex items-center space-x-3">
                      <span className="px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-300 font-mono text-xs uppercase tracking-wider font-bold">Pilar I</span>
                      <h3 className="text-2xl font-bold text-white">Integridad</h3>
                    </div>
                    <p className="text-emerald-200/90 text-base italic bg-emerald-950/40 p-4 rounded-xl border border-emerald-500/20">
                      "La idea de que los datos son correctos, auténticos y confiables."
                    </p>
                    <div>
                      <h4 className="text-sm font-bold text-slate-300 uppercase tracking-wider mb-2">Ejemplos Prácticos:</h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-400">
                        <li className="flex items-center space-x-2 bg-slate-950/50 p-2.5 rounded-lg border border-slate-800">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                          <span>Funciones Hash (SHA-256).</span>
                        </li>
                        <li className="flex items-center space-x-2 bg-slate-950/50 p-2.5 rounded-lg border border-slate-800">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                          <span>Firmas digitales y certificados SSL.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Disponibilidad */}
              <div className="p-8 rounded-2xl bg-slate-900/80 border border-purple-500/30 shadow-xl relative overflow-hidden">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="p-4 rounded-2xl bg-purple-500/10 text-purple-400 border border-purple-500/20 shrink-0">
                    <ServerIcon className="w-10 h-10" />
                  </div>
                  <div className="space-y-4 flex-1">
                    <div className="flex items-center space-x-3">
                      <span className="px-2.5 py-1 rounded bg-purple-500/20 text-purple-300 font-mono text-xs uppercase tracking-wider font-bold">Pilar A</span>
                      <h3 className="text-2xl font-bold text-white">Disponibilidad</h3>
                    </div>
                    <p className="text-purple-200/90 text-base italic bg-purple-950/40 p-4 rounded-xl border border-purple-500/20">
                      "La idea de que los datos son accesibles para quienes están autorizados para acceder a ellos."
                    </p>
                    <div>
                      <h4 className="text-sm font-bold text-slate-300 uppercase tracking-wider mb-2">Ejemplos Prácticos:</h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-400">
                        <li className="flex items-center space-x-2 bg-slate-950/50 p-2.5 rounded-lg border border-slate-800">
                          <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                          <span>Respaldos (Backups) automatizados.</span>
                        </li>
                        <li className="flex items-center space-x-2 bg-slate-950/50 p-2.5 rounded-lg border border-slate-800">
                          <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                          <span>Protección contra ataques DDoS.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* PESTAÑA DE SIMULADOR */}
        {activeTab === 'simulator' && (
          <div className="max-w-3xl mx-auto space-y-8 animate-fadeIn">
            <div className="text-center space-y-3">
              <h2 className="text-3xl font-extrabold text-white">Simulador de Casos</h2>
              <p className="text-slate-400 text-sm">
                Evalúa los incidentes e identifica qué pilar de la Tríada CIA fue vulnerado.
              </p>
            </div>

            {!completedSim ? (
              <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl space-y-6">
                <div className="flex justify-between items-center text-xs font-mono text-slate-400 border-b border-slate-800 pb-4">
                  <span>CASO {simulatorStep + 1} DE {scenarios.length}</span>
                  <span className="px-2 py-0.5 rounded bg-purple-500/10 text-purple-400 border border-purple-500/30">Puntaje: {score}</span>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-white">{scenarios[simulatorStep].title}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed bg-slate-950/60 p-4 rounded-xl border border-slate-800/80">
                    {scenarios[simulatorStep].description}
                  </p>
                  <p className="font-semibold text-purple-300 pt-2">
                    {scenarios[simulatorStep].question}
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-3 pt-2">
                  {scenarios[simulatorStep].options.map((option, idx) => (
                    <button
                      key={idx}
                      disabled={feedback !== null}
                      onClick={() => handleAnswer(option)}
                      className={`w-full text-left p-4 rounded-xl border font-medium text-sm transition-all flex items-center justify-between cursor-pointer ${
                        feedback === null 
                          ? 'bg-slate-950/40 border-slate-800 text-slate-200 hover:border-purple-500/50 hover:bg-purple-500/5' 
                          : option.correct 
                            ? 'bg-emerald-500/10 border-emerald-500 text-emerald-200 shadow-lg shadow-emerald-500/10' 
                            : 'bg-slate-950/40 border-slate-800/50 text-slate-500 opacity-60'
                      }`}
                    >
                      <span>{option.label}</span>
                      <span className="font-mono text-xs uppercase px-2 py-1 rounded bg-slate-900 border border-slate-800">
                        {option.key === 'C' ? 'Confidencialidad' : option.key === 'I' ? 'Integridad' : 'Disponibilidad'}
                      </span>
                    </button>
                  ))}
                </div>

                {feedback && (
                  <div className={`p-4 rounded-xl border space-y-4 ${feedback.success ? 'bg-emerald-950/30 border-emerald-500/40 text-emerald-200' : 'bg-red-950/30 border-red-500/40 text-red-200'}`}>
                    <p className="text-sm leading-relaxed font-medium">{feedback.text}</p>
                    <button
                      onClick={nextScenario}
                      className="px-5 py-2 rounded-lg bg-slate-900 border border-slate-700 text-white font-semibold text-xs uppercase tracking-wider hover:bg-slate-800 transition-all shadow cursor-pointer"
                    >
                      {simulatorStep < scenarios.length - 1 ? 'Siguiente Caso →' : 'Ver Resultados Finales'}
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="p-8 rounded-2xl bg-slate-900 border border-purple-500/30 shadow-2xl text-center space-y-6">
                <div className="w-16 h-16 bg-purple-500/10 text-purple-400 rounded-2xl mx-auto flex items-center justify-center border border-purple-500/30">
                  <ShieldIcon className="w-8 h-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-white">¡Simulación Completada!</h3>
                  <p className="text-slate-300 text-sm">
                    Has respondido correctamente <span className="font-bold text-purple-400">{score}</span> de <span className="font-bold">{scenarios.length}</span> casos propuestos.
                  </p>
                </div>
                <button
                  onClick={restartSimulator}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-cyan-500 text-slate-950 font-bold text-sm hover:opacity-90 transition-all shadow-lg cursor-pointer"
                >
                  Reiniciar Simulador
                </button>
              </div>
            )}
          </div>
        )}

      </main>

      {/* Pie de Página */}
      <footer className="mt-20 border-t border-slate-900 bg-slate-950/80 py-8 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-slate-400 font-medium">Listo para despliegue en Vercel</span>
          </div>
          <div>
            <a 
              href="https://github.com/FirestoneuniCL/info_faghan" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-cyan-400 hover:underline font-mono"
            >
              FirestoneuniCL/info_faghan en GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}