import { IMG_COASTAL } from "../constants";

const goals = [
    { icon: "🤖", title: "AI-Powered Intelligence", desc: "Dialogflow NLP, GPT automation and ML predictive models integrated into a single cohesive hospitality platform." },
    { icon: "🗺️", title: "Location-Based Services", desc: "Mapbox GL JS delivering personalised nearby destination suggestions and real-time navigation for every guest." },
    { icon: "📊", title: "Data-Driven Decisions", desc: "Analytics dashboards empowering hotel administrators with actionable demand forecasting and sentiment insights." },
    { icon: "🌏", title: "Global Accessibility", desc: "Multilingual support welcoming travellers from India, China, Japan, Russia, Europe and beyond with native language interfaces." },
    { icon: "♻️", title: "Sustainable Hospitality", desc: "Eco-conscious hotel management reducing administrative overhead and promoting sustainable Sri Lankan tourism practices." },
    { icon: "⭐", title: "Guest Experience First", desc: "Integrated review systems, automated messaging and AI concierge services to maximise guest satisfaction and loyalty." },
];

function VisionPage() {
    return (
        <div style={{ paddingTop: 88, minHeight: "100vh" }}>
            <div style={{ position: "relative", height: 360, overflow: "hidden" }}>
                <img src={IMG_COASTAL} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                <div style={{ position: "absolute", inset: 0, background: "rgba(10,32,48,0.68)" }} />
                <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", color: "#fff", padding: "0 32px" }}>
                    <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: "3rem", fontWeight: 700, marginBottom: 12 }}>Vision &amp; Mission</h1>
                    <p style={{ fontSize: "1.05rem", opacity: 0.85, maxWidth: 600 }}>Building the most intelligent and inclusive hotel management platform for Sri Lanka's tourism future</p>
                </div>
            </div>
            <div style={{ padding: "64px 48px" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, maxWidth: 1000, margin: "0 auto 64px" }}>
                    <div style={{ background: "linear-gradient(135deg,#0a7fa5,#0890b5)", borderRadius: 20, padding: "40px 36px", color: "#fff" }}>
                        <div style={{ fontSize: "2.5rem", marginBottom: 14 }}>🌟</div>
                        <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "2rem", marginBottom: 16 }}>Our Vision</h2>
                        <p style={{ fontSize: "0.97rem", lineHeight: 1.8, opacity: 0.92 }}>To become Sri Lanka's leading AI-powered hospitality platform — connecting global travellers with the island's finest hotels through intelligent technology, personalised experiences and sustainable practices that benefit local communities.</p>
                    </div>
                    <div style={{ background: "linear-gradient(135deg,#17c4b8,#0ea5a0)", borderRadius: 20, padding: "40px 36px", color: "#fff" }}>
                        <div style={{ fontSize: "2.5rem", marginBottom: 14 }}>🎯</div>
                        <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "2rem", marginBottom: 16 }}>Our Mission</h2>
                        <p style={{ fontSize: "0.97rem", lineHeight: 1.8, opacity: 0.92 }}>To design and develop an AI-driven web-based hotel management system integrating analytics, prediction models, automation workflows and AI assistance into a unified platform that enhances hotel operations and elevates guest satisfaction for hotels and travellers worldwide.</p>
                    </div>
                </div>
                <div style={{ textAlign: "center", marginBottom: 40 }}>
                    <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "2.2rem", color: "#0f2030" }}>Strategic Objectives</h2>
                    <p style={{ color: "#6b8999", marginTop: 10 }}>The six pillars that guide HotelEco Pro's development and impact</p>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20, maxWidth: 1000, margin: "0 auto" }}>
                    {goals.map(g => (
                        <div key={g.title} style={{ background: "#fff", border: "1px solid #e2ecf0", borderRadius: 16, padding: "30px 24px", transition: "all 0.3s" }}
                            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 8px 32px rgba(10,127,165,0.12)"; }}
                            onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}>
                            <div style={{ fontSize: "2.2rem", marginBottom: 14 }}>{g.icon}</div>
                            <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.1rem", color: "#0f2030", marginBottom: 10 }}>{g.title}</h3>
                            <p style={{ fontSize: "0.86rem", color: "#6b8999", lineHeight: 1.7 }}>{g.desc}</p>
                        </div>
                    ))}
                </div>
                <div style={{ maxWidth: 1000, margin: "60px auto 0", textAlign: "center" }}>
                    <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.6rem", color: "#0f2030", marginBottom: 28 }}>Technology Stack</h3>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center" }}>
                        {["React.js", "Node.js", "Python", "PostgreSQL", "MongoDB", "Dialogflow", "TensorFlow", "Scikit-learn", "Mapbox GL JS", "BeautifulSoup", "D3.js", "Chart.js", "GPT API", "AWS", "Google Cloud"].map(tech => (
                            <div key={tech} style={{ background: "#f0f8fc", border: "1px solid #e2ecf0", borderRadius: 8, padding: "8px 18px", fontSize: "0.83rem", color: "#0a7fa5", fontWeight: 500 }}>{tech}</div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VisionPage;
