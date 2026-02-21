import { useState } from "react";
import { HOTELS } from "../data/hotels";
import Star from "../components/Star";
import Pill from "../components/Pill";
import HotelProfile from "./HotelProfile";

function HotelsPage() {
    const [sel, setSel] = useState(null);
    const [filter, setFilter] = useState("All");
    const types = ["All", "Boutique Hotel", "Heritage Hotel", "5-Star Resort", "Eco Resort", "Wildlife Resort", "Boutique Villa"];
    const filtered = filter === "All" ? HOTELS : HOTELS.filter(h => h.type === filter);

    if (sel) return <HotelProfile hotel={sel} onBack={() => setSel(null)} />;

    return (
        <div style={{ paddingTop: 88, minHeight: "100vh", background: "#fafcfd" }}>
            <div style={{ padding: "48px 48px 32px", background: "linear-gradient(135deg,#f0f8fc,#fff)", borderBottom: "1px solid #e2ecf0" }}>
                <div style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: "#17c4b8", marginBottom: 8 }}>Registered Properties</div>
                <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: "2.5rem", color: "#0f2030", marginBottom: 8 }}>Featured Hotels</h1>
                <p style={{ fontSize: "0.95rem", color: "#6b8999", marginBottom: 24 }}>Click any hotel to view its full profile, amenities and book your stay</p>
                <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                    {types.map(t => <Pill key={t} active={filter === t} onClick={() => setFilter(t)}>{t}</Pill>)}
                </div>
            </div>
            <div style={{ padding: "40px 48px", display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(320px,1fr))", gap: 24 }}>
                {filtered.map(h => (
                    <div key={h.id} onClick={() => setSel(h)}
                        style={{ background: "#fff", borderRadius: 20, overflow: "hidden", border: "1px solid #e2ecf0", cursor: "pointer", boxShadow: "0 4px 20px rgba(10,127,165,0.07)", transition: "all 0.3s" }}
                        onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = "0 12px 40px rgba(10,127,165,0.15)"; }}
                        onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(10,127,165,0.07)"; }}>
                        <div style={{ position: "relative", height: 210 }}>
                            <img src={h.img} alt={h.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top,rgba(10,32,48,0.55),transparent)" }} />
                            <div style={{ position: "absolute", top: 12, left: 12, background: "linear-gradient(135deg,#0a7fa5,#17c4b8)", color: "#fff", borderRadius: 8, padding: "4px 10px", fontSize: "0.72rem", fontWeight: 700 }}>{h.type}</div>
                            <div style={{ position: "absolute", top: 12, right: 12, background: "rgba(255,255,255,0.95)", borderRadius: 8, padding: "4px 12px", fontSize: "0.82rem", fontWeight: 700, color: "#0f2030" }}>{h.rating}★</div>
                        </div>
                        <div style={{ padding: "20px 22px" }}>
                            <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.2rem", color: "#0f2030", marginBottom: 6 }}>{h.name}</h3>
                            <div style={{ fontSize: "0.82rem", color: "#6b8999", marginBottom: 12 }}>📍 {h.district} · {h.rooms} Rooms</div>
                            <p style={{ fontSize: "0.83rem", color: "#4a6374", lineHeight: 1.6, marginBottom: 14 }}>{h.desc}</p>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <Star v={h.rating} />
                                <span style={{ fontWeight: 800, color: "#0a7fa5", fontSize: "1.15rem" }}>${h.price}<span style={{ fontWeight: 400, fontSize: "0.78rem", color: "#6b8999" }}>/night</span></span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HotelsPage;
