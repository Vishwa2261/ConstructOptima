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
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background relative selection:bg-primary/30 dark font-sans">
      {/* Background Ornaments */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[20%] right-[-10%] w-[30%] h-[50%] bg-accent/10 blur-[120px] rounded-full" />
      </div>

      {/* Navbar */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-md border-b border-white/5 shadow-sm' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
              <Layers className="text-primary-foreground w-5 h-5" />
            </div>
            <span className="font-bold text-xl tracking-tight hidden sm:block">
              Construct<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Optima</span>
            </span>
          </div>
          <nav className="flex items-center gap-4">
            <Button variant="ghost" className="text-sm hidden md:inline-flex">Methodology</Button>
            <Button onClick={() => document.getElementById('calculator').scrollIntoView({ behavior: 'smooth' })} className="shadow-lg shadow-primary/20">
              Start Optimizing
            </Button>
          </nav>
        </div>
      </header>

      <main className="relative z-10 w-full max-w-[100vw] overflow-hidden">
        {/* Hero Section */}
        <section className="min-h-[90vh] flex flex-col items-center justify-center px-4 pt-24 pb-12 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto space-y-8"
          >
            <div className="mx-auto inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-2 shadow-[0_0_15px_rgba(16,185,129,0.15)]">
              <Leaf className="w-4 h-4" /> Sustainable Construction Intelligence
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-foreground leading-[1.15]">
              Optimizing Materials, <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-emerald-400 to-accent">Minimizing Waste.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground/90 max-w-2xl mx-auto leading-relaxed">
              Empower your projects with predictive material estimation, precise waste analytics, and eco-friendly structural alternatives.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
              <Button size="lg" className="h-14 px-8 text-lg font-medium shadow-xl shadow-primary/25 w-full sm:w-auto" onClick={() => document.getElementById('calculator').scrollIntoView({ behavior: 'smooth' })}>
                Launch Calculator <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 text-lg bg-background/50 backdrop-blur border-border/50 hover:bg-muted w-full sm:w-auto" onClick={() => document.getElementById('calculator').scrollIntoView({ behavior: 'smooth' })}>
                View Demo
              </Button>
            </div>
          </motion.div>
        </section>

        {/* Calculator Section */}
        <section id="calculator" className="py-24 px-4 bg-secondary/20 border-y border-white/5 relative">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Core Calculation Engine</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Input your foundational architectural parameters to generate a highly optimized material matrix.</p>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
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
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              className="py-24 px-4 container mx-auto"
            >
              <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-border pb-8">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-3 tracking-tight">
                    <Activity className="text-primary w-8 h-8" />
                    Optimization Dashboard
                  </h2>
                  <p className="text-muted-foreground mt-3 text-lg">
                    Comprehensive material mapping for a <span className="text-foreground font-semibold px-2 py-0.5 bg-muted rounded">{buildingType}</span> structure over <span className="text-foreground font-semibold px-2 py-0.5 bg-muted rounded">{areaSqFt.toLocaleString()} sq.ft</span>
                  </p>
                </div>
              </div>

              {/* Grid 1: Materials */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 mb-16">
                {results.map((res, i) => (
                  <MaterialCard key={i} {...res} />
                ))}
              </div>

              {/* Grid 2: Analytics & Techniques */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                <div className="lg:col-span-1 h-[450px]">
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

      <footer className="py-10 text-center text-muted-foreground border-t border-white/5 mt-12 bg-card/10">
        <p className="text-sm">© 2026 ConstructOptima SaaS. Engineering for Sustainability.</p>
      </footer>
    </div>
  );
}
