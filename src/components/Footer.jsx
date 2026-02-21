function Footer({ setPage }) {
    return (
        <footer style={{ background: "#0a1825", padding: "48px 48px 28px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
            <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 40, maxWidth: 1100, margin: "0 auto 36px" }}>
                <div>
                    <div style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.5rem", fontWeight: 700, color: "#17c4b8", marginBottom: 14 }}>HotelEco Pro</div>
                    <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.75, maxWidth: 280 }}>
                        AI-powered sustainable hotel management system for Sri Lanka's tourism industry. Built by the Fantastic 4 team at SLTC Research University.
                    </p>
                </div>
                {[
                    { title: "Platform", links: [["home", "Home"], ["destinations", "Destinations"], ["hotels", "Hotels"], ["booking", "Booking"]] },
                    { title: "Company", links: [["team", "Our Team"], ["vision", "Vision & Mission"], ["contact", "Contact Us"]] },
                    { title: "Connect", links: null, social: [["📘 Facebook", "https://facebook.com"], ["📸 Instagram", "https://instagram.com"], ["💼 LinkedIn", "https://linkedin.com"]] },
                ].map(sec => (
                    <div key={sec.title}>
                        <div style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginBottom: 16 }}>{sec.title}</div>
                        {sec.links && sec.links.map(([key, label]) => (
                            <div key={key} onClick={() => setPage(key)} style={{ fontSize: "0.87rem", color: "rgba(255,255,255,0.5)", marginBottom: 10, cursor: "pointer" }}>{label}</div>
                        ))}
                        {sec.social && sec.social.map(([label, url]) => (
                            <a key={label} href={url} target="_blank" rel="noreferrer" style={{ display: "block", fontSize: "0.87rem", color: "rgba(255,255,255,0.5)", marginBottom: 10, textDecoration: "none" }}>{label}</a>
                        ))}
                    </div>
                ))}
            </div>
            <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: 24, textAlign: "center", fontSize: "0.78rem", color: "rgba(255,255,255,0.25)" }}>
                © 2025 HotelEco Pro · Fantastic 4 · Group No. 1 · Department of Data Science · School of Computing &amp; IT · SLTC Research University
            </div>
        </footer>
    );
}

export default Footer;
