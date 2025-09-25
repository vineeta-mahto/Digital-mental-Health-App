import { useTheme } from './ThemeProvider';

export function AnimatedBackground() {
  const { theme } = useTheme();
  
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden transition-all duration-500">
      {/* Gradient background */}
      <div className={`absolute inset-0 animate-gradient transition-all duration-500 ${
        theme === 'dark' 
          ? 'bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900' 
          : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'
      }`} />
      
      {/* Floating orbs */}
      <div className={`absolute top-1/4 left-1/4 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl animate-blob transition-all duration-500 ${
        theme === 'dark' 
          ? 'bg-purple-500 opacity-20' 
          : 'bg-purple-300 opacity-30'
      }`}></div>
      <div className={`absolute top-1/3 right-1/4 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000 transition-all duration-500 ${
        theme === 'dark' 
          ? 'bg-yellow-500 opacity-20' 
          : 'bg-yellow-300 opacity-30'
      }`}></div>
      <div className={`absolute bottom-1/4 left-1/3 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000 transition-all duration-500 ${
        theme === 'dark' 
          ? 'bg-pink-500 opacity-20' 
          : 'bg-pink-300 opacity-30'
      }`}></div>
      
      {/* Animated particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 rounded-full animate-pulse-slow transition-colors duration-500 ${
              theme === 'dark' 
                ? 'bg-white opacity-30' 
                : 'bg-slate-600 opacity-20'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>
      
      {/* Grid pattern overlay */}
      <div 
        className={`absolute inset-0 transition-opacity duration-500 ${
          theme === 'dark' ? 'opacity-10' : 'opacity-5'
        }`}
        style={{
          backgroundImage: theme === 'dark' 
            ? `
                linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
              `
            : `
                linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
              `,
          backgroundSize: '50px 50px'
        }}
      />
    </div>
  );
}