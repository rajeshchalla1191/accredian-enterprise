import { motion } from 'motion/react';

const partners = [
  { name: 'Google', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
  { name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg' },
  { name: 'Amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
  { name: 'IBM', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg' },
  { name: 'Accenture', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg' },
  { name: 'TCS', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Tata_Consultancy_Services_Logo.svg' },
];

export default function Partners() {
  return (
    <section className="py-12 border-y border-gray-100 bg-gray-50/30">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-sm font-semibold text-gray-400 mb-10 uppercase tracking-widest">
          Trusted by Industry Leaders
        </p>
        <div className="flex flex-wrap justify-center gap-12 lg:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all">
          {partners.map((partner) => (
            <motion.img
              key={partner.name}
              src={partner.logo}
              alt={partner.name}
              className="h-6 md:h-8 hover:opacity-100 transition-opacity"
              referrerPolicy="no-referrer"
              whileHover={{ scale: 1.05 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
