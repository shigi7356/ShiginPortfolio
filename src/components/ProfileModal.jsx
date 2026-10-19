import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { PERSONAL } from '../config/portfolio';

export default function ProfileModal({ open, onClose }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="profile-modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}
          onKeyDown={(event) => { if (event.key === 'Escape') onClose(); }}
        >
          <motion.section
            className="profile-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="profile-modal-name"
            initial={{ opacity: 0, y: 18, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.97 }}
            transition={{ duration: 0.22 }}
          >
            <button className="profile-modal-close" onClick={onClose} aria-label="Close profile">
              <X size={20} />
            </button>
            <img className="profile-modal-photo" src="/images/profile.jpg" alt={`${PERSONAL.name} profile`} />
            <h2 id="profile-modal-name">{PERSONAL.name}</h2>
            <p>{PERSONAL.title}</p>
          </motion.section>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
