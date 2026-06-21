import React, { useState, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import "./contact.css";
import { Loader2, Send, MessageSquare, Clock, MapPin } from 'lucide-react';
import ContactHeader from './ContactHeader';
import { motion, useInView } from 'framer-motion';


const Field = ({ label, optional, children }) => (
  <div className="flex flex-col gap-1.5">
    <label className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
      {label}{optional && <span className="normal-case tracking-normal text-neutral-700 ml-1 font-normal">— optional</span>}
    </label>
    {children}
  </div>
);

const inputCls = `w-full px-4 py-3 rounded-xl border border-neutral-800 bg-neutral-900/80 text-neutral-100 text-sm
  placeholder:text-neutral-700
  focus:outline-none focus:ring-2 focus:ring-fuchsia-500/30 focus:border-fuchsia-500/50 focus:bg-neutral-900
  disabled:cursor-not-allowed disabled:opacity-50
  transition-all duration-200`;

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState('');
  const [reviews, setReviews] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: '-60px' });


  const Status = { SUCCESS: 1, ERROR: 3, WARNING: 2, DEFAULT: 0 };

  const notify = (message, status) => {
    const toastMap = {
      [Status.SUCCESS]: toast.success,
      [Status.WARNING]: toast.warning,
      [Status.ERROR]: toast.error,
      [Status.DEFAULT]: toast,
    };
    (toastMap[status] || toast)(message);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim()) { notify('Please enter your name!', Status.WARNING); return; }
    if (!email.trim()) { notify('Please enter your email!', Status.WARNING); return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { notify('Please enter a valid email address!', Status.WARNING); return; }
    if (!phone.trim()) { notify('Please enter your phone number!', Status.WARNING); return; }
    if (!reviews.trim()) { notify('Please enter a message!', Status.WARNING); return; }
    setIsLoading(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone, reviews }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error);
      setName(''); setReviews(''); setEmail(''); setPhone('');
      notify(json.message, Status.SUCCESS);
    } catch (err) {
      notify(err.message || 'Something went wrong!', Status.ERROR);
    }
    setIsLoading(false);
  };

  return (
    <div className="relative flex flex-col items-center justify-start px-5 sm:px-14 pb-24 scrollbar-hide overflow-x-hidden">
      <ContactHeader />

      <motion.div
        ref={sectionRef}
        initial={{ y: 40, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="w-full max-w-5xl mt-60 sm:mt-56 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"
      >

        {/* ── Left info panel ── */}
        <div className="flex flex-col gap-7 justify-center">

          {/* Decorative large quote */}
          <div className="text-[7rem] sm:text-[9rem] leading-[0.7] text-fuchsia-500/10 font-serif select-none">
            ✉
          </div>

          <div className="flex flex-col gap-3 -mt-4">
            <p className="text-2xl sm:text-3xl font-bold text-white leading-tight">
              Let's build something{' '}
              <span className="bg-gradient-to-r from-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
                great together
              </span>
            </p>
            <p className="text-neutral-400 text-sm sm:text-base leading-7">
              Whether it's a collaboration, freelance opportunity, or just some feedback —
              I'd love to hear from you. Drop me a message and I'll get back when I can.
            </p>
          </div>

          {/* Response time badge */}
          <div className="flex items-center gap-2 text-xs text-neutral-500">
            <Clock className="w-3.5 h-3.5 text-fuchsia-500/70" />
            <span>Usually responds within a few days</span>
          </div>

          {/* Location */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-fuchsia-600/20 flex items-center justify-center flex-shrink-0">
              <MapPin className="w-4 h-4 text-fuchsia-400" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-neutral-600 font-semibold">Based in</p>
              <p className="text-sm text-neutral-300 mt-0.5">Hyderabad, India</p>
            </div>
          </div>

          {/* Decorative glow */}
          <div className="hidden lg:block absolute left-0 w-64 h-64 bg-fuchsia-600/5 rounded-full blur-3xl pointer-events-none" />
        </div>

        {/* ── Right form card ── */}
        <div className="relative">
          {/* Glow behind card */}
          <div className="absolute -inset-1 bg-gradient-to-br from-fuchsia-600/15 via-fuchsia-950/0 to-purple-600/10 rounded-3xl blur-xl" />

          <form
            onSubmit={handleSubmit}
            className="relative flex flex-col gap-5 bg-neutral-950/80 border border-neutral-800/80 rounded-2xl p-6 sm:p-8 backdrop-blur-sm shadow-2xl"
          >
            {/* Card header */}
            <div className="flex items-center gap-2 mb-1">
              <div className="w-8 h-8 rounded-lg bg-fuchsia-600/20 flex items-center justify-center">
                <MessageSquare className="w-4 h-4 text-fuchsia-400" />
              </div>
              <p className="text-white font-semibold text-sm">Send a message</p>
            </div>

            {/* Name + Email row on sm+ */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field label="Name">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your full name"
                  className={inputCls}
                  disabled={isLoading}
                />
              </Field>
              <Field label="Email">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className={inputCls}
                  disabled={isLoading}
                />
              </Field>
            </div>

            <Field label="Phone">
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+1 (555) 000-0000"
                className={inputCls}
                disabled={isLoading}
              />
            </Field>

            <Field label="Message">
              <textarea
                value={reviews}
                onChange={(e) => setReviews(e.target.value)}
                placeholder="Tell me about your project, feedback, or just say hi…"
                rows={5}
                className={`${inputCls} resize-none`}
                disabled={isLoading}
              />
            </Field>

            {/* Divider */}
            <div className="border-t border-neutral-800/60" />

            {/* Submit */}
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full flex items-center justify-center gap-2.5 py-3 rounded-xl font-semibold text-sm text-white transition-all duration-300 ${
                isLoading
                  ? 'bg-fuchsia-800/50 cursor-not-allowed opacity-70'
                  : 'bg-gradient-to-r from-fuchsia-600 to-purple-600 hover:from-fuchsia-500 hover:to-purple-500 hover:shadow-[0_0_24px_rgba(217,70,239,0.35)] hover:scale-[1.02] active:scale-[0.98]'
              }`}
            >
              {isLoading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Send Message
                </>
              )}
            </button>

            <p className="text-center text-neutral-700 text-xs">
              No spam, ever. Your info stays private.
            </p>

            <ToastContainer
              toastClassName="bg-stone-900 relative flex p-5 min-h-10 w-auto rounded-md justify-between items-center overflow-hidden cursor-pointer"
              position="top-center"
              style={{ width: "min(400px, 90vw)" }}
              theme="dark"
              pauseOnHover
              closeOnClick={false}
              rtl={false}
              pauseOnFocusLoss
              draggable
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
            />
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
