import { motion } from 'motion/react';
import { Database, BrainCircuit, Layout, BarChart, ShieldAlert, GraduationCap } from 'lucide-react';

const offerings = [
  {
    title: 'Data Science',
    description: 'Master data analysis, visualization, and statistical modeling with real-world projects.',
    icon: Database,
    color: 'bg-blue-50 text-blue-600',
    tag: 'Advanced'
  },
  {
    title: 'Artificial Intelligence',
    description: 'Build robust AI models and deep learning solutions using modern frameworks.',
    icon: BrainCircuit,
    color: 'bg-purple-50 text-purple-600',
    tag: 'Trending'
  },
  {
    title: 'Product Management',
    description: 'Learn the core principles of product lifecycle, strategy, and user experience.',
    icon: Layout,
    color: 'bg-orange-50 text-orange-600',
    tag: 'Business'
  },
  {
    title: 'Business Analytics',
    description: 'Turn data into actionable insights and strategic business decisions.',
    icon: BarChart,
    color: 'bg-green-50 text-green-600',
    tag: 'Essential'
  },
  {
    title: 'Cyber Security',
    description: 'Protect enterprise infrastructure with advanced threat detection and response.',
    icon: ShieldAlert,
    color: 'bg-red-50 text-red-600',
    tag: 'Security'
  },
  {
    title: 'Executive Leadership',
    description: 'Strategy and leadership programs for senior management and decision makers.',
    icon: GraduationCap,
    color: 'bg-teal-50 text-teal-600',
    tag: 'Management'
  }
];

export default function Offerings() {
  return (
    <section id="programs" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-20 text-center mb-16">
        <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
          Our Enterprise Offerings
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Specialized programs designed to tackle organizational challenges and drive innovation at scale.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-20 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {offerings.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group p-8 rounded-3xl border border-gray-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 bg-white"
          >
            <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
              <item.icon className="w-8 h-8" />
            </div>
            <div className="flex items-center gap-3 mb-4">
              <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-gray-100 text-gray-500 rounded-full">
                {item.tag}
              </span>
            </div>
            <p className="text-gray-600 mb-8 leading-relaxed">
              {item.description}
            </p>
            <button className="text-sm font-bold text-blue-600 flex items-center gap-2 group-hover:gap-3 transition-all">
              Learn More
              <span className="text-lg">→</span>
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
