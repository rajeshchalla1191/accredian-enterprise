import { motion } from 'motion/react';
import { UserCheck, Star, Zap, Globe } from 'lucide-react';

const features = [
  {
    title: 'Expert Instructors',
    description: 'Learn from seasoned professionals working at Fortune 500 companies.',
    icon: UserCheck
  },
  {
    title: 'Outcome Focused',
    description: 'Our curriculum is designed around real-world applications and outcomes.',
    icon: Star
  },
  {
    title: 'High Engagement',
    description: 'Interactive sessions with live feedback and project-based learning.',
    icon: Zap
  },
  {
    title: 'Global Network',
    description: 'Gain access to an exclusive alumni network of 50,000+ professionals.',
    icon: Globe
  }
];

export default function WhyAccredian() {
  return (
    <section className="py-24 bg-blue-900 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-800/50 rounded-full blur-3xl -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-700/30 rounded-full blur-3xl -ml-48 -mb-48" />

      <div className="max-w-7xl mx-auto px-6 lg:px-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-3xl lg:text-5xl font-bold mb-8 leading-tight">
              Why top enterprises choose <span className="text-blue-400">Accredian</span>
            </h2>
            <p className="text-blue-100 text-lg mb-12 leading-relaxed">
              We bridge the gap between academic knowledge and industry requirements, 
              ensuring your teams are ready to tackle tomorrow's challenges today.
            </p>
            <div className="grid sm:grid-cols-2 gap-8">
              {features.map((f, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-800 rounded-xl flex items-center justify-center">
                    <f.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">{f.title}</h4>
                    <p className="text-sm text-blue-200">{f.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
             <motion.div
               animate={{ 
                 y: [0, -15, 0],
               }}
               transition={{ 
                 repeat: Infinity, 
                 duration: 6, 
                 ease: "easeInOut" 
               }}
               className="rounded-3xl border border-blue-700 p-8 bg-blue-950/50 backdrop-blur-sm"
             >
               <div className="flex items-center gap-4 mb-6">
                 <img
                   src="https://i.pravatar.cc/100?u=a"
                   alt="Exec"
                   className="w-16 h-16 rounded-full border-2 border-blue-500"
                   referrerPolicy="no-referrer"
                 />
                 <div>
                   <h5 className="font-bold text-xl">Sandeep Gupta</h5>
                   <p className="text-blue-400 text-sm">HR Director, Global Tech</p>
                 </div>
               </div>
               <p className="text-blue-50 italic text-lg leading-relaxed">
                 "Accredian's enterprise programs have fundamentally transformed our tech team's approach to AI. Their instructors are exceptional and the curriculum is incredibly relevant to our needs."
               </p>
               <div className="mt-6 flex text-yellow-400">
                {'★'.repeat(5)}
               </div>
             </motion.div>
             
             {/* Decorative element */}
             <div className="absolute -top-10 -right-10 w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center font-bold text-4xl opacity-20">
               "
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
