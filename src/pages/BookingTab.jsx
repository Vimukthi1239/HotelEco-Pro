import { useState } from "react";
import Input from "../components/Input";
import FormSelect from "../components/Select";

function BookingTab({ hotel }) {
    const [form, setForm] = useState({ name: "", email: "", phone: "", checkin: "", checkout: "", guests: 1, room: "Deluxe Room", special: "" });
    const [done, setDone] = useState(false);
    const nights = form.checkin && form.checkout
        ? Math.max(0, Math.round((new Date(form.checkout) - new Date(form.checkin)) / 86400000))
        : 0;

    if (done) return (
        <div style={{ textAlign: "center", padding: "60px 20px" }}>
            <div style={{ fontSize: "4rem", marginBottom: 16 }}>✅</div>
            <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "2rem", color: "#0f2030", marginBottom: 12 }}>Booking Confirmed!</h2>
            <p style={{ color: "#6b8999", fontSize: "1rem" }}>Your reservation at <strong>{hotel.name}</strong> has been confirmed. Details sent to {form.email}.</p>
            <button onClick={() => setDone(false)} style={{ marginTop: 24, background: "#0a7fa5", color: "#fff", border: "none", borderRadius: 10, padding: "11px 26px", cursor: "pointer", fontWeight: 700, fontFamily: "inherit" }}>New Booking</button>
        </div>
    );

    return (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: 36, maxWidth: 900 }}>
            <div>
                <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.6rem", color: "#0f2030", marginBottom: 24 }}>Book Your Stay</h2>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                    <Input label="Full Name" type="text" value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))} placeholder="Your full name" />
                    <Input label="Email" type="email" value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))} placeholder="your@email.com" />
                    <Input label="Phone" type="tel" value={form.phone} onChange={e => setForm(p => ({ ...p, phone: e.target.value }))} placeholder="+1 234 567 8900" />
                    <FormSelect label="Room Type" value={form.room} onChange={e => setForm(p => ({ ...p, room: e.target.value }))} options={["Deluxe Room", "Superior Room", "Junior Suite", "Suite", "Ocean View"]} />
                    <Input label="Check-in" type="date" value={form.checkin} onChange={e => setForm(p => ({ ...p, checkin: e.target.value }))} />
                    <Input label="Check-out" type="date" value={form.checkout} onChange={e => setForm(p => ({ ...p, checkout: e.target.value }))} />
                    <Input label="Guests" type="number" value={form.guests} onChange={e => setForm(p => ({ ...p, guests: e.target.value }))} />
                </div>
                <div style={{ marginTop: 14 }}>
                    <label style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", color: "#6b8999", display: "block", marginBottom: 6 }}>Special Requests</label>
                    <textarea value={form.special} onChange={e => setForm(p => ({ ...p, special: e.target.value }))} rows={3} placeholder="Any special requirements..." style={{ width: "100%", padding: "12px 14px", border: "1.5px solid #e2ecf0", borderRadius: 10, fontSize: "0.9rem", color: "#1e3a4a", outline: "none", resize: "vertical", fontFamily: "inherit" }} />
                </div>
                <button onClick={() => setDone(true)} style={{ marginTop: 20, background: "linear-gradient(135deg,#0a7fa5,#17c4b8)", color: "#fff", border: "none", padding: "14px 36px", borderRadius: 10, cursor: "pointer", fontWeight: 700, fontSize: "1rem", boxShadow: "0 6px 20px rgba(10,127,165,0.3)", fontFamily: "inherit" }}>
                    Confirm Booking →
                </button>
            </div>
            <div style={{ background: "#f0f8fc", borderRadius: 16, padding: 24, height: "fit-content", border: "1px solid #e2ecf0" }}>
                <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.2rem", color: "#0f2030", marginBottom: 16 }}>Summary</h3>
                <img src={hotel.img} alt={hotel.name} style={{ width: "100%", height: 130, objectFit: "cover", borderRadius: 10, marginBottom: 16 }} />
                <div style={{ fontWeight: 700, color: "#0f2030", marginBottom: 4 }}>{hotel.name}</div>
                <div style={{ fontSize: "0.82rem", color: "#6b8999", marginBottom: 16 }}>📍 {hotel.district}</div>
                <div style={{ borderTop: "1px solid #e2ecf0", paddingTop: 14 }}>
                    {[["Room", form.room], ["Nights", nights || "—"], ["Guests", form.guests], ["Per night", `$${hotel.price}`]].map(([l, v]) => (
                        <div key={l} style={{ display: "flex", justifyContent: "space-between", marginBottom: 10, fontSize: "0.88rem" }}>
                            <span style={{ color: "#6b8999" }}>{l}</span>
                            <span style={{ fontWeight: 600, color: "#0f2030" }}>{v}</span>
                        </div>
                    ))}
                    <div style={{ borderTop: "1px solid #e2ecf0", paddingTop: 12, display: "flex", justifyContent: "space-between", fontWeight: 800, fontSize: "1.1rem" }}>
                        <span>Total</span>
                        <span style={{ color: "#0a7fa5" }}>${nights ? hotel.price * nights : 0}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BookingTab;
