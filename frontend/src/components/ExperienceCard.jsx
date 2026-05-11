import { motion } from 'framer-motion';

const ExperienceCard = ({ logo, name, grade, address, startDate, endDate = "present" }) => {
    return (
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-slate-900/60 to-slate-950/60 p-6 rounded-3xl border border-white/10 shadow-xl shadow-slate-950/20 backdrop-blur-xl text-white w-full max-w-4xl mx-auto flex flex-col sm:flex-row sm:justify-between sm:items-start hover:border-cyan-400/30 transition-all duration-300 my-6"
        >
            {/* Left Section */}
            <div className="flex items-start gap-4 flex-1">
                <img
                    src={logo}
                    alt={name}
                    className="h-12 w-12 object-contain rounded-lg border border-white/10 flex-shrink-0"
                />
                <div className="flex-1">
                    <h3 className="text-lg font-bold text-white">{name}</h3>
                    <p className="text-cyan-300 font-semibold text-sm mt-1">{grade}</p>
                    <p className="text-slate-400 text-sm mt-1">{address}</p>
                </div>
            </div>

            {/* Right Section - Dates */}
            <div className="text-sm text-slate-400 mt-4 sm:mt-0 sm:text-right font-medium whitespace-nowrap">
                <span className="bg-white/5 px-3 py-1 rounded-full border border-white/10">{startDate} — {endDate}</span>
            </div>
        </motion.div>
    );
};

export default ExperienceCard;
