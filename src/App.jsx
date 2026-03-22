import React, { useState, useEffect } from 'react';
import { CalculatorForm } from './components/CalculatorForm';
import { MaterialCard } from './components/MaterialCard';
import { WasteChart } from './components/WasteChart';
import { TechniqueAccordion } from './components/TechniqueAccordion';
import { AlternativesTabs } from './components/AlternativesTabs';
import { useAppStore } from './store/useAppStore';
import { motion, AnimatePresence } from 'framer-motion';
import { Leaf, Activity, Layers, ArrowRight } from 'lucide-react';
import { Button } from './components/ui/button';

export default function App() {
  const { results, areaSqFt, buildingType } = useAppStore();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground relative selection:bg-primary/20 selection:text-primary font-sans bg-grid-pattern">
      
      {/* Navbar */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-200 ${isScrolled ? 'bg-white/90 backdrop-blur-sm border-b border-slate-200 shadow-sm' : 'bg-transparent'}`}>
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded bg-primary flex items-center justify-center shadow-sm">
              <Layers className="text-white w-4 h-4" />
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-900 hidden sm:block">
              Construct<span className="text-primary">Optima</span>
            </span>
          </div>
          <nav className="flex items-center gap-4">
            <Button variant="ghost" onClick={() => document.getElementById('methodology').scrollIntoView({ behavior: 'smooth' })} className="text-sm font-medium text-slate-600 hover:text-slate-900 hidden md:inline-flex">Methodology</Button>
            <Button onClick={() => document.getElementById('calculator').scrollIntoView({ behavior: 'smooth' })} className="shadow-sm font-medium">
              Start Optimizing
            </Button>
          </nav>
        </div>
      </header>

      <main className="relative z-10 w-full max-w-[100vw] overflow-hidden">
        {/* Hero Section */}
        <section className="min-h-[85vh] flex flex-col items-center justify-center px-4 pt-32 pb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-4xl mx-auto space-y-8"
          >
            <div className="mx-auto inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-600 text-sm font-medium mb-4">
              <Leaf className="w-3.5 h-3.5 text-primary" /> Sustainable Construction Intelligence
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
              Optimizing Materials, <br />
              <span className="text-primary">Minimizing Waste.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Empower your projects with predictive material estimation, precise waste analytics, and eco-friendly structural alternatives.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <Button size="lg" className="h-12 px-8 text-base font-medium shadow-sm w-full sm:w-auto" onClick={() => document.getElementById('calculator').scrollIntoView({ behavior: 'smooth' })}>
                Launch Calculator
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-8 text-base bg-white border-slate-200 text-slate-700 hover:bg-slate-50 w-full sm:w-auto shadow-sm" onClick={() => document.getElementById('calculator').scrollIntoView({ behavior: 'smooth' })}>
                View Demo
              </Button>
            </div>
          </motion.div>
        </section>

        {/* Methodology Section */}
        <section id="methodology" className="py-24 px-4 bg-white border-t border-slate-100">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-4">Calculation Methodology</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                We utilize industry-standard baseline consumption metrics combined with advanced predictive waste matrices to provide surgical precision for your structural material needs.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mx-auto mb-4">
                  <Activity className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Base Aggregation</h3>
                <p className="text-slate-600 text-[14.5px] leading-relaxed">Calculations are strictly bound by localized building codes and empirical density constants spanning 7 distinct facility types.</p>
              </div>
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mx-auto mb-4">
                  <Layers className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Waste Anticipation</h3>
                <p className="text-slate-600 text-[14.5px] leading-relaxed">Integrated 2D arrays isolate logistical and trimming losses specific to the intersection of material type and building class.</p>
              </div>
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mx-auto mb-4">
                  <Leaf className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Sustainable Alternatives</h3>
                <p className="text-slate-600 text-[14.5px] leading-relaxed">A proprietary mapping engine identifies green structural equivalencies to minimize carbon footprints and drive down expenditures.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Calculator Section */}
        <section id="calculator" className="py-24 px-4 bg-slate-50 border-y border-slate-200">
          <div className="container mx-auto">
            <div className="text-center mb-16 max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-4">Core Calculation Engine</h2>
              <p className="text-lg text-slate-600">Input your foundational architectural parameters to generate a highly optimized material matrix.</p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <CalculatorForm />
            </motion.div>
          </div>
        </section>

        {/* Results Dashboard */}
        <AnimatePresence>
          {results.length > 0 && (
            <motion.section
              id="results-dashboard"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="py-24 px-4 container mx-auto bg-white"
            >
              <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200 pb-8">
                <div>
                  <h2 className="text-3xl font-bold flex items-center gap-2.5 tracking-tight text-slate-900">
                    <Activity className="text-primary w-7 h-7" />
                    Optimization Dashboard
                  </h2>
                  <p className="text-slate-600 mt-2 text-lg">
                    Comprehensive material mapping for a <span className="text-slate-900 font-semibold">{buildingType}</span> structure over <span className="text-slate-900 font-semibold">{areaSqFt.toLocaleString()} sq.ft</span>
                  </p>
                </div>
              </div>

              {/* Grid 1: Materials */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 mb-16">
                {results.map((res, i) => (
                  <MaterialCard key={i} {...res} />
                ))}
              </div>

              {/* Grid 2: Analytics & Techniques */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16 items-start">
                <div className="lg:col-span-1 sticky top-24 z-10">
                  <WasteChart data={results} />
                </div>
                <div className="lg:col-span-2">
                  <TechniqueAccordion />
                </div>
              </div>

              {/* Grid 3: Alternatives */}
              <div className="w-full">
                <AlternativesTabs />
              </div>
            </motion.section>
          )}
        </AnimatePresence>
      </main>

      <footer className="py-12 text-center text-slate-500 border-t border-slate-200 bg-white mt-12 w-full">
        <p className="text-sm font-medium">© 2026 ConstructOptima SaaS. Engineering for Sustainability.</p>
      </footer>
    </div>
  );
}
