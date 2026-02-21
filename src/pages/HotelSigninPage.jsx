import { useState } from "react";
import Input from "../components/Input";
import FormSelect from "../components/Select";

function HotelSigninPage({ setPage }) {
    const [mode, setMode] = useState("login");
    const [form, setForm] = useState({ hotelName: "", email: "", password: "", contact: "", district: "", type: "" });
    const [done, setDone] = useState(false);

    if (done) return (
        <div style={{ paddingTop: 88, minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "linear-gradient(135deg,#f0f8fc,#fff)" }}>
            <div style={{ textAlign: "center", padding: "40px" }}>
                <div style={{ fontSize: "4rem", marginBottom: 16 }}>🏨</div>
                <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "2.2rem", color: "#0f2030", marginBottom: 10 }}>
                    {mode === "login" ? "Welcome Back!" : "Registration Submitted!"}
                </h2>
                <p style={{ color: "#6b8999", marginBottom: 28, maxWidth: 400 }}>
                    {mode === "login" ? "Redirecting you to your hotel admin dashboard..." : "Your hotel registration is under review. Our team will contact you within 48 hours."}
                </p>
                <button onClick={() => setPage("hotels")} style={{ background: "#0a7fa5", color: "#fff", border: "none", borderRadius: 10, padding: "12px 28px", cursor: "pointer", fontWeight: 700, fontFamily: "inherit" }}>
                    View Hotel Listings
                </button>
            </div>
        </div>
    );

    return (
        <div style={{ paddingTop: 88, minHeight: "100vh", background: "linear-gradient(135deg,#f0f8fc,#fff)", display: "flex", alignItems: "center", justifyContent: "center", padding: "120px 32px 60px" }}>
            <div style={{ background: "#fff", border: "1px solid #e2ecf0", borderRadius: 24, padding: "48px 44px", maxWidth: 520, width: "100%", boxShadow: "0 12px 56px rgba(10,127,165,0.12)" }}>
                <div style={{ textAlign: "center", marginBottom: 36 }}>
                    <div style={{ width: 60, height: 60, borderRadius: 16, background: "linear-gradient(135deg,#0a7fa5,#17c4b8)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px", fontSize: "1.6rem" }}>🏨</div>
                    <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.9rem", color: "#0f2030", marginBottom: 6 }}>
                        {mode === "login" ? "Hotel Sign In" : "Register Your Hotel"}
                    </h2>
                    <p style={{ fontSize: "0.88rem", color: "#6b8999" }}>HotelEco Pro Partner Portal</p>
                </div>
                <div style={{ display: "flex", gap: 0, background: "#f0f8fc", borderRadius: 12, padding: 4, marginBottom: 30 }}>
                    {["login", "register"].map(m => (
                        <button key={m} onClick={() => setMode(m)} style={{ flex: 1, background: mode === m ? "#fff" : "transparent", border: "none", borderRadius: 9, padding: "10px", cursor: "pointer", fontSize: "0.88rem", fontWeight: mode === m ? 700 : 400, color: mode === m ? "#0a7fa5" : "#6b8999", boxShadow: mode === m ? "0 2px 8px rgba(0,0,0,0.08)" : "none", transition: "all 0.2s", textTransform: "capitalize", fontFamily: "inherit" }}>
                            {m === "login" ? "Sign In" : "Register Hotel"}
                        </button>
                    ))}
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                    {mode === "register" && (
                        <Input label="Hotel Name" type="text" value={form.hotelName} onChange={e => setForm(p => ({ ...p, hotelName: e.target.value }))} placeholder="Your hotel name" />
                    )}
                    <Input label="Email Address" type="email" value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))} placeholder="hotel@email.com" />
                    <Input label="Password" type="password" value={form.password} onChange={e => setForm(p => ({ ...p, password: e.target.value }))} placeholder="••••••••" />
                    {mode === "register" && (
                        <>
                            <Input label="Contact Number" type="tel" value={form.contact} onChange={e => setForm(p => ({ ...p, contact: e.target.value }))} placeholder="+94 77 000 0000" />
                            <FormSelect label="District" value={form.district} onChange={e => setForm(p => ({ ...p, district: e.target.value }))} options={["Select district", "Colombo", "Kandy", "Galle", "Matara", "Hambantota", "Anuradhapura", "Matale", "Jaffna", "Trincomalee", "Nuwara Eliya"]} />
                            <FormSelect label="Hotel Type" value={form.type} onChange={e => setForm(p => ({ ...p, type: e.target.value }))} options={["Select type", "Boutique Hotel", "5-Star Resort", "Guest House", "Tourist Hotel", "Eco Resort", "Heritage Hotel", "Villa"]} />
                        </>
                    )}
                </div>
                <button onClick={() => setDone(true)} style={{ width: "100%", marginTop: 24, background: "linear-gradient(135deg,#0a7fa5,#17c4b8)", color: "#fff", border: "none", padding: "15px", borderRadius: 10, cursor: "pointer", fontWeight: 700, fontSize: "1rem", boxShadow: "0 6px 20px rgba(10,127,165,0.3)", fontFamily: "inherit" }}>
                    {mode === "login" ? "Sign In to Dashboard →" : "Submit Hotel Registration →"}
                </button>
            </div>
        </div>
    );
}

export default HotelSigninPage;
