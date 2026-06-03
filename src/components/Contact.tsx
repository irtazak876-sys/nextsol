import { motion } from 'framer-motion';
import { Mail, Phone, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-white relative overflow-hidden border-t border-slate-100">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-sky-50 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-label text-sky-600 mb-6 flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              Consultation Terminal
            </motion.div>
            <h2 className="text-section-h2 text-slate-900 font-outfit leading-[0.95] tracking-tight font-black mb-10 uppercase">
              Start Your <br/><span className="text-sky-500">Legacy.</span>
            </h2>
            <p className="text-slate-500 text-body-lg mb-12 max-w-md font-medium">
              Whether you're scaling a startup or digitizing an empire, our engineering team is ready to deploy.
            </p>
            
            <div className="space-y-10">
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center text-sky-600 group-hover:bg-sky-600 group-hover:text-white transition-all shadow-lg">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="text-micro font-black text-slate-400 mb-1 uppercase">Electronic Mail</div>
                  <div className="text-section-h3 text-slate-900 font-outfit lowercase tracking-tighter">partners@nextsol.pk</div>
                </div>
              </div>
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center text-sky-600 group-hover:bg-sky-600 group-hover:text-white transition-all shadow-lg">
                  <Phone size={24} />
                </div>
                <div>
                  <div className="text-micro font-black text-slate-400 mb-1 uppercase">Voice Communication</div>
                  <div className="text-section-h3 text-slate-900 font-outfit tracking-tighter">+92 51 6040314</div>
                </div>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white p-10 md:p-16 rounded-[48px] border border-slate-200 shadow-2xl shadow-blue-900/5"
          >
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-micro font-black text-slate-400 ml-1 uppercase">Identity</label>
                  <input 
                    type="text" 
                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-slate-900 focus:outline-none focus:border-sky-500 transition-all placeholder:text-slate-400 text-body-md font-medium"
                    placeholder="Your Name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-micro font-black text-slate-400 ml-1 uppercase">Digital Address</label>
                  <input 
                    type="email" 
                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-slate-900 focus:outline-none focus:border-sky-500 transition-all placeholder:text-slate-400 text-body-md font-medium"
                    placeholder="you@company.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-micro font-black text-slate-400 ml-1 uppercase">Strategic Need</label>
                <select className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-slate-900 focus:outline-none focus:border-sky-500 transition-all appearance-none text-body-md font-medium cursor-pointer">
                  <option>Digital Transformation</option>
                  <option>Custom Infrastructure</option>
                  <option>AI/ML Integration</option>
                  <option>Enterprise Software</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-micro font-black text-slate-400 ml-1 uppercase">Message Brief</label>
                <textarea 
                  rows={4}
                  className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-slate-900 focus:outline-none focus:border-sky-500 transition-all placeholder:text-slate-400 text-body-md font-medium"
                  placeholder="Tell us about your vision..."
                ></textarea>
              </div>

              <button className="w-full group overflow-hidden py-6 bg-sky-600 text-white rounded-2xl font-black text-micro hover:bg-sky-700 transition-all shadow-xl shadow-sky-600/20 active:scale-95 flex items-center justify-center gap-3 uppercase tracking-widest">
                Send Transmission
                <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
