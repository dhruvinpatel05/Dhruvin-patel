/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Copy, Check, Sparkles, SendHorizontal, Terminal, Mail, Compass } from 'lucide-react';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [category, setCategory] = useState('Logo Design');
  const [budget, setBudget] = useState(1500);
  const [message, setMessage] = useState('');
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState<'idle' | 'sending' | 'success'>('idle');
  const [consoleLogs, setConsoleLogs] = useState<string[]>([]);

  const emailAddress = 'dvagadiya097@rku.ac.in';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const simulateLogs = () => {
    const logs = [
      'INITIALIZING SECURE PROTOCOL...',
      'ESTABLISHING ENCRYPTED CONNECTION...',
      'VALIDATING PROPOSAL METRICS...',
      'ROUTING CORRESPONDENCE TO: dvagadiya097@rku.ac.in',
      'TRANSMITTING SYSTEM DATA PANELS...',
    ];

    logs.forEach((log, index) => {
      setTimeout(() => {
        setConsoleLogs((prev) => [...prev, log]);
      }, (index + 1) * 350);
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setFormState('sending');
    simulateLogs();

    setTimeout(() => {
      setFormState('success');
      setConsoleLogs((prev) => [...prev, 'TRANSMISSION COMPLETE. DISPATCH SUCCESSFUL ✓']);
    }, 2800);
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setCategory('Logo Design');
    setBudget(1500);
    setMessage('');
    setConsoleLogs([]);
    setFormState('idle');
  };

  return (
    <section id="contact" className="relative py-24 px-4 md:px-8 max-w-7xl mx-auto z-10">
      <div className="text-center mb-16">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-mono text-xs uppercase tracking-widest text-violet-400 mb-3"
        >
          Let\'s Collaborate
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold tracking-tight text-white mb-6"
        >
          Hire Me
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-24 h-1 bg-gradient-to-r from-violet-500 to-pink-500 mx-auto rounded-full mb-8"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start max-w-6xl mx-auto">
        {/* Left column: Direct Contacts & Console Panel */}
        <div className="lg:col-span-5 space-y-8">
          <div className="bg-neutral-900/40 border border-white/5 p-8 rounded-3xl backdrop-blur-xl">
            <h3 className="text-2xl font-bold font-sans text-white mb-3">
              Ready to create something legendary?
            </h3>
            <p className="text-sm text-neutral-400 leading-relaxed font-sans mb-8">
              Whether you are launching a startup, rebranding an established firm, or need premium packaging, my focus is bringing raw imagination and clean structure together to define your brand.
            </p>

            {/* Email copying widget */}
            <div className="space-y-2">
              <span className="font-mono text-[10px] text-neutral-500 uppercase block">DIRECT EMAIL CORRESPONDENCE</span>
              <div className="flex items-center justify-between bg-black/60 border border-white/15 p-4 rounded-2xl">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-violet-400" />
                  <span className="font-mono text-xs text-white truncate max-w-[180px] md:max-w-none">
                    {emailAddress}
                  </span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  data-cursor="pointer"
                  className="p-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-white/10 text-neutral-400 hover:text-white transition-all cursor-pointer flex items-center gap-1.5 font-mono text-[10px]"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-pink-500" />
                      COPIED
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      COPY
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Simulated developer visual logs console */}
          <div className="bg-black/90 border border-white/10 p-6 rounded-3xl font-mono text-[10px] text-neutral-400 space-y-4 shadow-inner">
            <div className="flex items-center justify-between border-b border-white/10 pb-2.5 text-[9px] text-neutral-500">
              <span className="flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-violet-500" />
                DHRUVIN SYSTEM TRANSMITTER LOGS
              </span>
              <span>PORT: 3000 // SSH</span>
            </div>

            <div className="space-y-1.5 min-h-[110px] max-h-[150px] overflow-y-auto no-scrollbar">
              {consoleLogs.length === 0 ? (
                <span className="text-neutral-600 block italic">System console idling. Fill out and submit the proposal form to initialize secure transmission.</span>
              ) : (
                consoleLogs.map((log, idx) => {
                  const isDone = log.includes('DISPATCH SUCCESSFUL');
                  return (
                    <div key={idx} className="flex items-start gap-1">
                      <span className="text-violet-500 font-bold">»</span>
                      <span className={isDone ? 'text-pink-400 font-semibold' : 'text-neutral-300'}>{log}</span>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>

        {/* Right column: Interactive Premium proposal Form */}
        <div className="lg:col-span-7 bg-neutral-900/35 border border-white/5 p-8 md:p-12 rounded-3xl backdrop-blur-xl relative">
          {/* Top light glow decoration */}
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent" />

          <AnimatePresence mode="wait">
            {formState !== 'success' ? (
              <motion.form
                key="form-fields"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                {/* Name */}
                <div className="space-y-2">
                  <label className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest block">YOUR NAME / ORGANIZATION</label>
                  <input
                    type="text"
                    required
                    disabled={formState === 'sending'}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Eleanor Sterling / Aura Co."
                    className="w-full bg-black/40 border border-white/10 focus:border-violet-500 focus:outline-none rounded-2xl px-5 py-3 text-sm text-white placeholder-neutral-600 transition-colors"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest block">EMAIL ADDRESS</label>
                  <input
                    type="email"
                    required
                    disabled={formState === 'sending'}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. eleanor@auracoffee.com"
                    className="w-full bg-black/40 border border-white/10 focus:border-violet-500 focus:outline-none rounded-2xl px-5 py-3 text-sm text-white placeholder-neutral-600 transition-colors"
                  />
                </div>

                {/* Category Dropdown */}
                <div className="space-y-2">
                  <label className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest block">INTERESTED SPECIALIZATION</label>
                  <select
                    disabled={formState === 'sending'}
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full bg-black/40 border border-white/10 focus:border-violet-500 focus:outline-none rounded-2xl px-5 py-3 text-sm text-neutral-300 transition-colors cursor-pointer appearance-none"
                    style={{
                      backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 1.25rem center',
                      backgroundSize: '1rem',
                    }}
                  >
                    <option value="Logo Design" className="bg-neutral-900 text-white">Logo Design</option>
                    <option value="Brand Identity" className="bg-neutral-900 text-white">Brand Identity System</option>
                    <option value="Packaging Design" className="bg-neutral-900 text-white">Packaging Design</option>
                    <option value="Social Media Layouts" className="bg-neutral-900 text-white">Social Media Layouts</option>
                    <option value="Posters & Typography" className="bg-neutral-900 text-white">Posters & Typography</option>
                    <option value="Premium Stationery" className="bg-neutral-900 text-white">Premium Stationery</option>
                  </select>
                </div>

                {/* Budget Slider */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <label className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest block">ESTIMATED PROJECT BUDGET</label>
                    <span className="font-mono text-xs font-bold text-pink-400 bg-pink-500/10 border border-pink-500/20 px-3 py-0.5 rounded-full">
                      ${budget.toLocaleString()} USD
                    </span>
                  </div>
                  <input
                    type="range"
                    min="500"
                    max="10000"
                    step="500"
                    disabled={formState === 'sending'}
                    value={budget}
                    onChange={(e) => setBudget(Number(e.target.value))}
                    className="w-full h-1.5 bg-black/80 rounded-full appearance-none cursor-pointer accent-violet-500"
                  />
                  <div className="flex justify-between text-[9px] font-mono text-neutral-600">
                    <span>$500</span>
                    <span>$5,000</span>
                    <span>$10,000+</span>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest block">PROJECT BRIEF / MISSION DESCRIPTION</label>
                  <textarea
                    required
                    rows={4}
                    disabled={formState === 'sending'}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe your brand values, physical products, and what you aim to achieve with this design..."
                    className="w-full bg-black/40 border border-white/10 focus:border-violet-500 focus:outline-none rounded-2xl px-5 py-3 text-sm text-white placeholder-neutral-600 transition-colors resize-none"
                  />
                </div>

                {/* Submit Trigger */}
                <button
                  type="submit"
                  disabled={formState === 'sending'}
                  data-cursor="pointer"
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-violet-600 via-pink-600 to-blue-600 hover:brightness-110 font-mono text-xs font-bold uppercase tracking-widest text-white flex items-center justify-center gap-2 transition-all shadow-[0_5px_20px_rgba(168,85,247,0.4)] cursor-pointer"
                >
                  {formState === 'sending' ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      DISPATCHING SECURE DATA PACKETS...
                    </>
                  ) : (
                    <>
                      <SendHorizontal className="w-4 h-4 text-white" />
                      SUBMIT PROPOSAL REQ
                    </>
                  )}
                </button>
              </motion.form>
            ) : (
              <motion.div
                key="form-success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 space-y-6 flex flex-col items-center"
              >
                <div className="w-16 h-16 rounded-full bg-pink-500/10 border-2 border-pink-500 flex items-center justify-center text-pink-400 shadow-[0_0_20px_rgba(236,72,153,0.4)] animate-pulse">
                  <Sparkles className="w-8 h-8" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-3xl font-bold font-sans text-white">Transmission Successful</h3>
                  <p className="text-sm text-neutral-400 max-w-sm leading-relaxed mx-auto font-sans">
                    Thank you, <span className="text-pink-400 font-semibold">{name}</span>. Your {category} project specification of <span className="text-violet-400 font-semibold">${budget.toLocaleString()} USD</span> has been successfully logged. Dhruvin will respond within 12 standard business hours.
                  </p>
                </div>

                <button
                  onClick={resetForm}
                  data-cursor="pointer"
                  className="px-6 py-2.5 rounded-full bg-neutral-900 hover:bg-neutral-850 border border-white/10 hover:border-violet-500 text-xs font-mono font-bold text-neutral-300 hover:text-white transition-all cursor-pointer"
                >
                  SEND ANOTHER MESSAGE
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
