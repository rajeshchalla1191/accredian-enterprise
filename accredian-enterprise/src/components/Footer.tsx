import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 text-gray-400 py-20 px-6 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div>
          {/* Logo */}
          <div className="flex items-center gap-2 mb-8">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">A</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-white">
              accredian<span className="text-blue-500 font-medium text-sm ml-1 uppercase">enterprise</span>
            </span>
          </div>
          <p className="text-sm leading-relaxed mb-8 pr-4">
            Transforming the enterprise workforce through industry-aligned education in Data Science, AI, and Product Management.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all"><Facebook className="w-5 h-5" /></a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all"><Linkedin className="w-5 h-5" /></a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all"><Instagram className="w-5 h-5" /></a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-8 uppercase text-xs tracking-[0.2em]">Programs</h4>
          <ul className="flex flex-col gap-4 text-sm">
            <li><a href="#" className="hover:text-blue-500 transition-colors">Data Science & AI</a></li>
            <li><a href="#" className="hover:text-blue-500 transition-colors">Product Management</a></li>
            <li><a href="#" className="hover:text-blue-500 transition-colors">Business Analytics</a></li>
            <li><a href="#" className="hover:text-blue-500 transition-colors">Digital Transformation</a></li>
            <li><a href="#" className="hover:text-blue-500 transition-colors">Tech Leadership</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-8 uppercase text-xs tracking-[0.2em]">Company</h4>
          <ul className="flex flex-col gap-4 text-sm">
            <li><a href="#" className="hover:text-blue-500 transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-blue-500 transition-colors">Success Stories</a></li>
            <li><a href="#" className="hover:text-blue-500 transition-colors">Partners</a></li>
            <li><a href="#" className="hover:text-blue-500 transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-blue-500 transition-colors">Contact Us</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-8 uppercase text-xs tracking-[0.2em]">Contact</h4>
          <ul className="flex flex-col gap-6 text-sm">
            <li className="flex gap-3">
              <Mail className="w-5 h-5 text-blue-500 shrink-0" />
              <span>enterprise@accredian.com</span>
            </li>
            <li className="flex gap-3">
              <Phone className="w-5 h-5 text-blue-500 shrink-0" />
              <span>+91 98765 43210</span>
            </li>
            <li className="flex gap-3">
              <MapPin className="w-5 h-5 text-blue-500 shrink-0" />
              <span>123 Tech Park, Sector 44, Gurgaon, India</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium uppercase tracking-widest text-gray-600">
        <p>© {currentYear} Accredian. All Rights Reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-blue-500 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-blue-500 transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
