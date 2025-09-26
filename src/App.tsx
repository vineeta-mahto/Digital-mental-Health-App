import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { Dashboard } from "./components/Dashboard";
import { Resources } from "./components/Resources";
import { CrisisSupport } from "./components/CrisisSupport";
import { Footer } from "./components/Footer";
import { AnimatedBackground } from "./components/AnimatedBackground";
import { ThemeProvider } from "./components/ThemeProvider";

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground relative overflow-hidden transition-colors duration-300">
        <AnimatedBackground />
        <div className="relative z-10">
          <Header />
          <main>
            <Hero />
            <Features />
            <Dashboard />
            <Resources />
            <CrisisSupport />
          </main>
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}
