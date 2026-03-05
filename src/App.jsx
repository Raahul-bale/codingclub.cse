import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Github,
    ChevronRight,
    Calendar,
    Users,
    Code2,
    ArrowRight,
    Mail,
    ExternalLink,
    Menu,
    X,
    MapPin
} from 'lucide-react';

// --- Constants ---
const CLUBS_NAME = "Coding Club";

const NAV_LINKS = [
    { name: 'Events', href: '#events' },
    { name: 'About', href: '#about' },
];



const EVENTS = [
    {
        title: "Coding Challenge",
        date: "March 13, 2026",
        description: "3 Battles. One Champion. Team Size: 3. Prizes: Win exciting rewards. Registration Fee: ₹350.",
        type: "Competition",
        partnerText: "IN PARTNERSHIP WITH :",
        partnerLogo: "/namtech.png",
        highlights: [
            "3-months internship will be offered to the winners.",
            "Expert-led sessions and hands-on participation.",
            "Networking opportunities with industry mentors.",
            "Certificate of participation for all attendees."
        ]
    },
    {
        title: "Ideation-2K26",
        date: "March 14, 2026",
        description: "Where ideas become a startup. Win exciting prizes! Registration Fee: ₹200. Register by March 12.",
        type: "Ideathon",
        highlights: [
            "Expert-led sessions and hands-on participation.",
            "Networking opportunities with industry mentors.",
            "Certificate of participation for all attendees."
        ]
    }
];



// --- Components ---

const Navbar = ({ onNavigate, currentPage }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLinkClick = (e, href) => {
        if (href === '#events') {
            e.preventDefault();
            onNavigate('events');
        } else if (href === '#about') {
            // Keep as hash for now or handle as needed
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled || currentPage !== 'home' ? 'bg-white/70 backdrop-blur-md border-b border-slate-100 py-4' : 'bg-transparent py-6'
            }`}>
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-1.5 cursor-pointer"
                    onClick={() => onNavigate('home')}
                >
                    <img src="/logo.png" alt={CLUBS_NAME} className="h-10 w-auto" />
                    <span className="text-xl font-bold tracking-tight text-slate-900 hidden sm:inline-block">
                        {CLUBS_NAME}
                    </span>
                </motion.div>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {NAV_LINKS.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => handleLinkClick(e, link.href)}
                            className={`text-sm font-medium transition-colors ${currentPage === 'events' && link.name === 'Events' ? 'text-accent' : 'text-slate-600 hover:text-accent'}`}
                        >
                            {link.name}
                        </a>
                    ))}
                    <button className="bg-slate-900 text-white text-sm px-6 py-2.5 rounded-full font-medium hover:bg-slate-800 transition-all">
                        Join Club
                    </button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-slate-900"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 w-full bg-white border-b border-slate-100 py-8 px-6 md:hidden flex flex-col gap-6 shadow-xl"
                    >
                        {NAV_LINKS.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleLinkClick(e, link.href)}
                                className="text-lg font-medium text-slate-600"
                            >
                                {link.name}
                            </a>
                        ))}
                        <button className="bg-slate-900 text-white w-full py-4 rounded-xl font-medium">
                            Join Club
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

const Hero = ({ onNavigate }) => {
    return (
        <section className="section-padding pt-40 md:pt-48 flex flex-col items-center text-center">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <span className="inline-block px-4 py-1.5 mb-2 text-xs md:text-sm font-bold tracking-[0.1em] text-slate-400 uppercase">
                    A flagship initiative of the <span className="text-dept">Department of Computer Science and Engineering</span>
                </span>
                <div className="flex justify-center mb-6">
                    <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-widest text-accent uppercase bg-accent/10 rounded-full">
                        Est. 2024 • Coding Excellence
                    </span>
                </div>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 tracking-tight leading-[1.1] max-w-4xl mx-auto">
                    Building the <br className="hidden md:block" /> Future, One Byte at a Time.
                </h1>
                <p className="mt-8 text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
                    Built by Coders. Driven by Passion.
                </p>
                <div className="mt-12 flex justify-center">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => onNavigate('events')}
                        className="bg-slate-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-slate-800 transition-all duration-300 flex items-center gap-2 group"
                    >
                        <span>Register Now</span>
                        <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                    </motion.button>
                </div>
            </motion.div>
        </section>
    );
};

const EventCard = ({ event, index, onClick }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        whileHover={{ y: -5 }}
        onClick={() => onClick(event)}
        className="glass-card p-8 group cursor-pointer"
    >
        <div className="flex justify-between items-start mb-6">
            <div className="p-3 bg-slate-50 rounded-xl group-hover:bg-accent/10 transition-colors">
                <Calendar size={20} className="text-slate-400 group-hover:text-accent transition-colors" />
            </div>
            <span className="text-[10px] font-bold tracking-widest uppercase text-slate-400">
                {event.type}
            </span>
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-3">{event.title}</h3>
        <p className="text-slate-500 text-sm leading-relaxed mb-6">
            {event.description}
        </p>
        <div className="flex items-center justify-between mt-auto">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
                <Calendar size={14} />
                {event.date}
            </div>
            <div className="text-accent text-xs font-bold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                Details <ArrowRight size={14} />
            </div>
        </div>
    </motion.div>
);


const Footer = ({ onNavigate }) => {
    return (
        <footer className="relative w-full overflow-hidden bg-white">
            {/* Footer Content */}
            <div className="section-padding border-t border-slate-100 bg-white relative z-10">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-3 mb-6 cursor-pointer" onClick={() => onNavigate('home')}>
                            <img src="/logo.png" alt={CLUBS_NAME} className="h-12 w-auto" />
                            <div className="text-2xl font-black text-slate-900 italic tracking-tight">
                                {CLUBS_NAME}
                            </div>
                        </div>
                        <p className="text-slate-400 max-w-sm mb-2 leading-relaxed">
                            Built by Coders. Driven by Passion.
                        </p>
                        <p className="text-[10px] font-bold text-slate-300 uppercase tracking-widest mb-8">
                            A flagship initiative of the <span className="text-dept">Department of CSE</span>
                        </p>
                        <div className="flex gap-6">
                            <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors"><Github size={20} /></a>
                            <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors">Twitter</a>
                            <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors">Discord</a>
                        </div>
                    </div>

                    <div>
                        <h5 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">Navigation</h5>
                        <ul className="space-y-4">
                            {NAV_LINKS.map(link => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        onClick={(e) => {
                                            if (link.name === 'Events') { e.preventDefault(); onNavigate('events'); }
                                            if (link.name === 'About') { /* handle */ }
                                        }}
                                        className="text-slate-400 hover:text-slate-900 transition-colors text-sm font-medium"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h5 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">Contact Us</h5>
                        <ul className="space-y-4">
                            <li className="flex gap-3 text-sm text-slate-400">
                                <MapPin size={18} className="text-accent shrink-0" />
                                <span>Maisammaguda, Dulapally, Hyderabad, Telangana 500100</span>
                            </li>
                            <li className="flex gap-3 text-sm text-slate-400">
                                <Mail size={18} className="text-accent shrink-0" />
                                <a href="mailto:codingclub.cse@gmail.com" className="hover:text-slate-900 transition-colors">
                                    codingclub.cse@gmail.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-24 pt-8 border-t border-slate-50 text-center text-[10px] font-bold text-slate-300 uppercase tracking-widest">
                    © 2026 {CLUBS_NAME}. All rights reserved. Built with precision.
                </div>
            </div>

            {/* Reveal Image - Appears to stay fixed at bottom while page content covers/uncovers it */}
            <div className="h-[170px] md:h-[230px] relative overflow-hidden bg-slate-50/50">
                <motion.div
                    className="sticky bottom-0 left-0 w-full h-full flex items-center justify-center p-8"
                    style={{ zIndex: 0 }}
                >
                    <img
                        src="/footer.png"
                        alt="University Logo"
                        className="max-w-full h-full object-contain"
                    />
                </motion.div>
            </div>
        </footer>
    );
};

const LandingPage = ({ onNavigate, onEventClick }) => (
    <>
        <Hero onNavigate={onNavigate} />
        <section id="events-preview" className="section-padding max-w-7xl mx-auto">
            <div className="mb-16 flex justify-between items-end">
                <div>
                    <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-4 italic">
                        Upcoming Events
                    </h2>
                    <div className="h-1 w-20 bg-accent rounded-full"></div>
                </div>
                <motion.button
                    whileHover={{ x: 5 }}
                    onClick={() => onNavigate('events')}
                    className="text-accent font-bold text-sm flex items-center gap-2 mb-2"
                >
                    View All Events <ChevronRight size={16} />
                </motion.button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {EVENTS.map((event, idx) => (
                    <EventCard key={idx} event={event} index={idx} onClick={onEventClick} />
                ))}
            </div>
        </section>
    </>
);

const EventsPage = ({ onEventClick }) => (
    <div className="pt-32 pb-24">
        <section className="section-padding max-w-7xl mx-auto">
            <div className="mb-24 text-center">
                <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-[10px] font-black tracking-[0.2em] text-accent uppercase bg-accent/10 px-4 py-1.5 rounded-full"
                >
                    Official Calendar
                </motion.span>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-5xl md:text-7xl font-black text-slate-900 mt-8 mb-6 italic tracking-tight"
                >
                    All Events.
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-slate-500 max-w-xl mx-auto text-lg"
                >
                    Join our flagship workshops, competitions, and hackathons designed to push your limits.
                </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {EVENTS.map((event, idx) => (
                    <EventCard key={idx} event={event} index={idx} onClick={onEventClick} />
                ))}
                {/* Placeholder for more events if needed */}
                <div className="glass-card p-8 border-dashed border-2 border-slate-200 flex flex-col items-center justify-center text-center opacity-60">
                    <Code2 size={40} className="text-slate-300 mb-4" />
                    <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">More exciting events <br /> announced soon</p>
                </div>
            </div>
        </section>
    </div>
);

const EventDetailsPage = ({ event, onBack }) => (
    <div className="pt-32 pb-24">
        <section className="section-padding max-w-5xl mx-auto">
            <motion.button
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                onClick={onBack}
                className="flex items-center gap-2 text-slate-400 hover:text-slate-900 transition-colors font-bold text-xs uppercase tracking-widest mb-12"
            >
                <ArrowRight size={16} className="rotate-180" /> Back to Events
            </motion.button>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                <div className="lg:col-span-2">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-[10px] font-black tracking-[0.2em] text-accent uppercase bg-accent/10 px-4 py-1.5 rounded-full"
                    >
                        {event.type}
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-black text-slate-900 mt-8 mb-8 tracking-tight"
                    >
                        {event.title}
                    </motion.h1>

                    {event.partnerLogo && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="mb-12 p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 flex flex-col sm:flex-row items-center gap-8"
                        >
                            <span className="text-[11px] font-black text-accent uppercase tracking-[0.2em] whitespace-nowrap">
                                {event.partnerText}
                            </span>
                            <img
                                src={event.partnerLogo}
                                alt="Partner Logo"
                                className="h-20 md:h-24 w-auto object-contain transition-all duration-500"
                            />
                        </motion.div>
                    )}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-500 text-lg md:text-xl leading-relaxed mb-12"
                    >
                        {event.description}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="p-8 bg-slate-50 rounded-3xl border border-slate-100"
                    >
                        <h3 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">Key Highlights</h3>
                        <div className="space-y-4">
                            {event.highlights ? event.highlights.map((highlight, index) => (
                                <div key={index} className="flex gap-4">
                                    <div className="h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center shrink-0 mt-1">
                                        <div className="h-2 w-2 rounded-full bg-accent"></div>
                                    </div>
                                    <p className="text-slate-600">{highlight}</p>
                                </div>
                            )) : (
                                <>
                                    <div className="flex gap-4">
                                        <div className="h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center shrink-0 mt-1">
                                            <div className="h-2 w-2 rounded-full bg-accent"></div>
                                        </div>
                                        <p className="text-slate-600">Expert-led sessions and hands-on participation.</p>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center shrink-0 mt-1">
                                            <div className="h-2 w-2 rounded-full bg-accent"></div>
                                        </div>
                                        <p className="text-slate-600">Networking opportunities with industry mentors.</p>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center shrink-0 mt-1">
                                            <div className="h-2 w-2 rounded-full bg-accent"></div>
                                        </div>
                                        <p className="text-slate-600">Certificate of participation for all attendees.</p>
                                    </div>
                                </>
                            )}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8"
                    >
                        <div className="p-8 border border-slate-100 rounded-3xl">
                            <h3 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">Faculty Coordinators</h3>
                            <div className="space-y-4">
                                <div>
                                    <p className="text-sm font-bold text-slate-900">Dr. Jose Moses</p>
                                    <p className="text-xs text-slate-500 font-medium tracking-wide mt-1">9701329977</p>
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-slate-900">Mr B.Hari</p>
                                    <p className="text-xs text-slate-500 font-medium tracking-wide mt-1">6302107707</p>
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-slate-900">Dr. K.Asish Vardhan</p>
                                    <p className="text-xs text-slate-500 font-medium tracking-wide mt-1">7799335593</p>
                                </div>
                            </div>
                        </div>

                        <div className="p-8 border border-slate-100 rounded-3xl">
                            <h3 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">Student Coordinators</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                                <div>
                                    <div className="flex items-baseline gap-2">
                                        <p className="text-sm font-bold text-slate-900">B.RAAHUL</p>
                                        <span className="text-[10px] text-accent italic whitespace-nowrap">(3rd yr)</span>
                                    </div>
                                    <p className="text-xs text-slate-500 font-medium tracking-wide mt-1">9121438920</p>
                                </div>
                                <div>
                                    <div className="flex items-baseline gap-2">
                                        <p className="text-sm font-bold text-slate-900">A.HARSHITHA</p>
                                        <span className="text-[10px] text-accent italic whitespace-nowrap">(3rd yr)</span>
                                    </div>
                                    <p className="text-xs text-slate-500 font-medium tracking-wide mt-1">9346168608</p>
                                </div>
                                <div>
                                    <div className="flex items-baseline gap-2">
                                        <p className="text-sm font-bold text-slate-900">B.VAISHNAVI</p>
                                        <span className="text-[10px] text-accent italic whitespace-nowrap">(2nd yr)</span>
                                    </div>
                                    <p className="text-xs text-slate-500 font-medium tracking-wide mt-1">8142960060</p>
                                </div>
                                <div>
                                    <div className="flex items-baseline gap-2">
                                        <p className="text-sm font-bold text-slate-900">N.Nithin</p>
                                        <span className="text-[10px] text-accent italic whitespace-nowrap">(2nd yr)</span>
                                    </div>
                                    <p className="text-xs text-slate-500 font-medium tracking-wide mt-1">9618154410</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <div className="space-y-8">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 }}
                        className="glass-card p-10 sticky top-32"
                    >
                        <div className="space-y-8 mb-10">
                            <div>
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Date & Time</p>
                                <p className="text-slate-900 font-bold flex items-center gap-2">
                                    <Calendar size={18} className="text-accent" />
                                    {event.date}
                                </p>
                            </div>
                            <div>
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Venue</p>
                                <p className="text-slate-900 font-bold">Main CSE Seminar Hall</p>
                            </div>
                            <div>
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Status</p>
                                <p className="text-green-500 font-bold flex items-center gap-2">
                                    <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                                    Open for Registration
                                </p>
                            </div>
                        </div>
                        <button className="w-full bg-slate-900 text-white py-4 rounded-2xl font-bold hover:bg-slate-800 transition-all flex items-center justify-center gap-2">
                            Register Seat <ExternalLink size={18} />
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    </div>
);

export default function App() {
    const [currentPage, setCurrentPage] = useState('home');
    const [selectedEvent, setSelectedEvent] = useState(null);

    // Scroll to top on page change
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [currentPage, selectedEvent]);

    const navigateToEvent = (event) => {
        setSelectedEvent(event);
        setCurrentPage('event-details');
    };

    const handleBack = () => {
        if (currentPage === 'event-details') {
            setCurrentPage('events');
            setSelectedEvent(null);
        }
    };

    return (
        <div className="min-h-screen bg-white selection:bg-accent selection:text-white">
            <Navbar onNavigate={setCurrentPage} currentPage={currentPage} />

            <main>
                {currentPage === 'home' && (
                    <LandingPage onNavigate={setCurrentPage} onEventClick={navigateToEvent} />
                )}
                {currentPage === 'events' && (
                    <EventsPage onEventClick={navigateToEvent} />
                )}
                {currentPage === 'event-details' && (
                    <EventDetailsPage event={selectedEvent} onBack={handleBack} />
                )}
            </main>

            <Footer onNavigate={setCurrentPage} />
        </div>
    );
}
