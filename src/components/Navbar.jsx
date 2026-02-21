import { useState } from "react";
import { LANGUAGES } from "../data/languages";

const navItems = [
    { key: "home", label: "Home" },
    { key: "destinations", label: "Destinations" },
    { key: "hotels", label: "Hotels" },
    { key: "map", label: "Map" },
    { key: "team", label: "Our Team" },
    { key: "vision", label: "Vision" },
    { key: "booking", label: "Booking" },
    { key: "contact", label: "Contact" },
];

function Navbar({ page, setPage, lang, setLang }) {
    const [langOpen, setLangOpen] = useState(false);
    const [authOpen, setAuthOpen] = useState(false);
    const cur = LANGUAGES.find(l => l.code === lang);

    return (
        <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000, background: "rgba(255,255,255,0.97)", backdropFilter: "blur(20px)", borderBottom: "1px solid #e2ecf0", height: 66, display: "flex", alignItems: "center", padding: "0 28px", gap: 12, boxShadow: "0 2px 20px rgba(10,127,165,0.08)" }}>
            {/* Logo */}
            <div onClick={() => setPage("home")} style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }}>
                <div style={{ width: 38, height: 38, borderRadius: 10, background: "linear-gradient(135deg,#0a7fa5,#17c4b8)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 800, fontSize: "1.1rem" }}>H</div>
                <span style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, fontSize: "1.2rem", color: "#0a7fa5" }}>HotelEco<span style={{ color: "#17c4b8" }}>Pro</span></span>
            </div>

            {/* Nav Links */}
            <div style={{ display: "flex", gap: 2, flex: 1, justifyContent: "center" }}>
                {navItems.map(n => (
                    <button key={n.key} onClick={() => setPage(n.key)} style={{
                        background: page === n.key ? "#e6f4f9" : "transparent",
                        color: page === n.key ? "#0a7fa5" : "#4a6374",
                        border: "none", padding: "7px 12px", borderRadius: 8,
                        cursor: "pointer", fontWeight: page === n.key ? 600 : 400,
                        fontSize: "0.82rem", transition: "all 0.2s", fontFamily: "inherit"
                    }}>{n.label}</button>
                ))}
            </div>

            {/* Language Picker */}
            <div style={{ position: "relative" }}>
                <button onClick={() => setLangOpen(o => !o)} style={{ background: "#f0f8fc", border: "1px solid #e2ecf0", borderRadius: 8, padding: "6px 12px", cursor: "pointer", fontSize: "0.82rem", color: "#1e3a4a", display: "flex", alignItems: "center", gap: 5, fontFamily: "inherit" }}>
                    {cur?.flag} {cur?.label} ▾
                </button>
                {langOpen && (
                    <div style={{ position: "absolute", right: 0, top: "calc(100% + 6px)", background: "#fff", border: "1px solid #e2ecf0", borderRadius: 12, boxShadow: "0 8px 32px rgba(0,0,0,0.12)", minWidth: 160, zIndex: 999 }}>
                        {LANGUAGES.map(l => (
                            <button key={l.code} onClick={() => { setLang(l.code); setLangOpen(false); }} style={{ display: "flex", alignItems: "center", gap: 10, width: "100%", background: lang === l.code ? "#e6f4f9" : "transparent", border: "none", padding: "10px 16px", cursor: "pointer", fontSize: "0.85rem", color: "#1e3a4a", textAlign: "left", fontFamily: "inherit" }}>
                                {l.flag} {l.label}
                            </button>
                        ))}
                    </div>
                )}
            </div>

            {/* Auth */}
            <div style={{ position: "relative" }}>
                <button onClick={() => setAuthOpen(o => !o)} style={{ background: "#0a7fa5", color: "#fff", border: "none", padding: "8px 16px", borderRadius: 8, cursor: "pointer", fontSize: "0.82rem", fontWeight: 600, fontFamily: "inherit" }}>
                    Sign In ▾
                </button>
                {authOpen && (
                    <div style={{ position: "absolute", right: 0, top: "calc(100% + 6px)", background: "#fff", border: "1px solid #e2ecf0", borderRadius: 12, boxShadow: "0 8px 32px rgba(0,0,0,0.12)", minWidth: 190, zIndex: 999 }}>
                        <button onClick={() => setAuthOpen(false)} style={{ display: "block", width: "100%", background: "transparent", border: "none", padding: "12px 18px", cursor: "pointer", fontSize: "0.85rem", color: "#1e3a4a", textAlign: "left", borderBottom: "1px solid #f0f4f6", fontFamily: "inherit" }}>
                            👤 Customer Sign In
                        </button>
                        <button onClick={() => { setPage("hotelSignin"); setAuthOpen(false); }} style={{ display: "block", width: "100%", background: "transparent", border: "none", padding: "12px 18px", cursor: "pointer", fontSize: "0.85rem", color: "#1e3a4a", textAlign: "left", fontFamily: "inherit" }}>
                            🏨 Hotel Login
                        </button>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default Navbar;
