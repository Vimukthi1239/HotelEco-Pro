import { useState } from "react";
import { HOTELS } from "../data/hotels";
import Input from "../components/Input";
import FormSelect from "../components/Select";

function BookingPage() {
    const [selHotel, setSelHotel] = useState(HOTELS[0]);
    const [form, setForm] = useState({ name: "", email: "", phone: "", checkin: "", checkout: "", guests: 1, room: "Deluxe Room", nationality: "", special: "" });
    const [done, setDone] = useState(false);
    const nights = form.checkin && form.checkout
        ? Math.max(0, Math.round((new Date(form.checkout) - new Date(form.checkin)) / 86400000))
        : 0;

    const nationalities = ["Indian", "Chinese", "Japanese", "Russian", "German", "French", "British", "American", "Australian", "Korean", "Other"];

    if (done) return (
        <div style={{ paddingTop: 88, minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "linear-gradient(135deg,#f0f8fc,#fff)" }}>
            <div style={{ textAlign: "center", maxWidth: 520, padding: "40px 20px" }}>
                <div style={{ fontSize: "5rem", marginBottom: 20 }}>🎉</div>
                <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: "2.5rem", color: "#0f2030", marginBottom: 14 }}>Booking Confirmed!</h1>
                <p style={{ color: "#6b8999", fontSize: "1rem", marginBottom: 8 }}>Thank you, <strong>{form.name}</strong>!</p>
                <p style={{ color: "#6b8999", marginBottom: 28 }}>Your <strong>{nights}-night</strong> stay at <strong style={{ color: "#0a7fa5" }}>{selHotel.name}</strong> is confirmed. Confirmation will be sent to <strong>{form.email}</strong>.</p>
                <div style={{ background: "#f0f8fc", border: "1px solid #e2ecf0", borderRadius: 16, padding: 22, textAlign: "left", marginBottom: 28 }}>
                    {[["Hotel", selHotel.name], ["Check-in", form.checkin], ["Check-out", form.checkout], ["Room", form.room], ["Guests", form.guests], ["Total", `$${selHotel.price * nights}`]].map(([l, v]) => (
                        <div key={l} style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: "1px solid #e2ecf0", fontSize: "0.9rem" }}>
                            <span style={{ color: "#6b8999" }}>{l}</span><strong style={{ color: "#0f2030" }}>{v}</strong>
                        </div>
                    ))}
                </div>
                <button onClick={() => setDone(false)} style={{ background: "#0a7fa5", color: "#fff", border: "none", borderRadius: 10, padding: "13px 30px", cursor: "pointer", fontWeight: 700, fontFamily: "inherit" }}>New Booking</button>
            </div>
        </div>
    );

    return (
        <div style={{ paddingTop: 88, minHeight: "100vh", background: "#fafcfd" }}>
            <div style={{ padding: "48px 48px 32px", background: "linear-gradient(135deg,#f0f8fc,#fff)", borderBottom: "1px solid #e2ecf0" }}>
                <div style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: "#17c4b8", marginBottom: 8 }}>Reserve Your Stay</div>
                <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: "2.5rem", color: "#0f2030" }}>Hotel Booking System</h1>
                <p style={{ color: "#6b8999", marginTop: 8, fontSize: "0.95rem" }}>Select your hotel and complete your reservation in minutes</p>
            </div>
            <div style={{ padding: "40px 48px", display: "grid", gridTemplateColumns: "1fr 380px", gap: 36 }}>
                <div>
                    <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.4rem", color: "#0f2030", marginBottom: 18 }}>Select Hotel</h3>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 12, marginBottom: 36 }}>
                        {HOTELS.map(h => (
                            <div key={h.id} onClick={() => setSelHotel(h)}
                                style={{ background: selHotel.id === h.id ? "#e6f4f9" : "#fff", border: `2px solid ${selHotel.id === h.id ? "#0a7fa5" : "#e2ecf0"}`, borderRadius: 12, padding: "14px 16px", cursor: "pointer", display: "flex", gap: 12, alignItems: "center", transition: "all 0.2s" }}>
                                <img src={h.img} alt={h.name} style={{ width: 52, height: 52, borderRadius: 8, objectFit: "cover", flexShrink: 0 }} />
                                <div>
                                    <div style={{ fontWeight: 700, fontSize: "0.88rem", color: "#0f2030" }}>{h.name}</div>
                                    <div style={{ fontSize: "0.75rem", color: "#6b8999" }}>{h.district} · ${h.price}/night</div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.4rem", color: "#0f2030", marginBottom: 18 }}>Guest Details</h3>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                        <Input label="Full Name" type="text" value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))} placeholder="Enter full name" />
                        <FormSelect label="Nationality" value={form.nationality} onChange={e => setForm(p => ({ ...p, nationality: e.target.value }))} options={["Select nationality", ...nationalities]} />
                        <Input label="Email Address" type="email" value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))} placeholder="your@email.com" />
                        <Input label="Phone Number" type="tel" value={form.phone} onChange={e => setForm(p => ({ ...p, phone: e.target.value }))} placeholder="+1 234 567 8900" />
                        <Input label="Check-in Date" type="date" value={form.checkin} onChange={e => setForm(p => ({ ...p, checkin: e.target.value }))} />
                        <Input label="Check-out Date" type="date" value={form.checkout} onChange={e => setForm(p => ({ ...p, checkout: e.target.value }))} />
                        <Input label="Number of Guests" type="number" value={form.guests} onChange={e => setForm(p => ({ ...p, guests: e.target.value }))} />
                        <FormSelect label="Room Type" value={form.room} onChange={e => setForm(p => ({ ...p, room: e.target.value }))} options={["Deluxe Room", "Superior Room", "Junior Suite", "Suite", "Ocean View Room"]} />
                    </div>
                    <div style={{ marginTop: 14 }}>
                        <label style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", color: "#6b8999", display: "block", marginBottom: 6 }}>Special Requests</label>
                        <textarea value={form.special} onChange={e => setForm(p => ({ ...p, special: e.target.value }))} rows={3} placeholder="Dietary requirements, accessibility needs, early check-in..." style={{ width: "100%", padding: "12px 14px", border: "1.5px solid #e2ecf0", borderRadius: 10, fontSize: "0.9rem", color: "#1e3a4a", outline: "none", resize: "vertical", fontFamily: "inherit" }} />
                    </div>
                    <button onClick={() => { if (form.name && form.email && form.checkin && form.checkout) setDone(true); }} style={{ marginTop: 24, background: "linear-gradient(135deg,#0a7fa5,#17c4b8)", color: "#fff", border: "none", padding: "15px 44px", borderRadius: 10, cursor: "pointer", fontWeight: 700, fontSize: "1rem", boxShadow: "0 6px 20px rgba(10,127,165,0.3)", fontFamily: "inherit" }}>
                        Confirm Booking →
                    </button>
                </div>

                {/* Summary */}
                <div style={{ position: "sticky", top: 90 }}>
                    <div style={{ background: "#fff", border: "1px solid #e2ecf0", borderRadius: 20, padding: 28, boxShadow: "0 4px 24px rgba(10,127,165,0.08)" }}>
                        <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.3rem", color: "#0f2030", marginBottom: 18 }}>Reservation Summary</h3>
                        <img src={selHotel.img} alt={selHotel.name} style={{ width: "100%", height: 160, objectFit: "cover", borderRadius: 12, marginBottom: 18 }} />
                        <div style={{ fontWeight: 700, color: "#0f2030", fontSize: "1.05rem", marginBottom: 4 }}>{selHotel.name}</div>
                        <div style={{ fontSize: "0.82rem", color: "#6b8999", marginBottom: 18 }}>📍 {selHotel.district} · {selHotel.type}</div>
                        <div style={{ borderTop: "1px solid #e2ecf0", paddingTop: 18 }}>
                            {[["Room", form.room], ["Check-in", form.checkin || "—"], ["Check-out", form.checkout || "—"], ["Nights", nights || "—"], ["Guests", form.guests], ["Rate", `$${selHotel.price}/night`]].map(([l, v]) => (
                                <div key={l} style={{ display: "flex", justifyContent: "space-between", marginBottom: 11, fontSize: "0.88rem" }}>
                                    <span style={{ color: "#6b8999" }}>{l}</span><span style={{ fontWeight: 600, color: "#0f2030" }}>{v}</span>
                                </div>
                            ))}
                            <div style={{ borderTop: "2px solid #e2ecf0", paddingTop: 14, display: "flex", justifyContent: "space-between", fontWeight: 800, fontSize: "1.2rem" }}>
                                <span>Total</span><span style={{ color: "#0a7fa5" }}>${nights ? selHotel.price * nights : 0}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BookingPage;
