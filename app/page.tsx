"use client";

import { useState } from "react";

const initialRules = [
  { keyword: "narx", reply: "Narxni Direct orqali yubordik! 💬", dm: "Assalomu alaykum! Mahsulot narxi: 150 000 so‘m. Batafsil ma’lumot uchun yozishingiz mumkin.", active: true },
  { keyword: "manzil", reply: "Manzilni Direct’ga yubordik 📍", dm: "Assalomu alaykum! Manzilimiz: bu yerga manzilni kiriting.", active: true },
  { keyword: "katalog", reply: "Katalogni Direct orqali yubordik ✨", dm: "Assalomu alaykum! Katalog: bu yerga havolani kiriting.", active: false },
];

export default function Home() {
  const [tab, setTab] = useState("overview");
  const [rules, setRules] = useState(initialRules);
  const [showNotice, setShowNotice] = useState(false);

  function toggleRule(index: number) {
    setRules((current) =>
      current.map((rule, i) => (i === index ? { ...rule, active: !rule.active } : rule))
    );
  }

  return (
    <main className="app-shell">
      <aside className="sidebar">
        <a className="brand" href="#" aria-label="AutoReply bosh sahifa">
          <span className="brand-mark">A<span>↗</span></span>
          <span>AutoReply<small>SMART SOCIAL TOOLS</small></span>
        </a>
        <div className="workspace-label">ISH MAYDONI</div>
        <nav className="nav-list" aria-label="Asosiy menyu">
          <button className={tab === "overview" ? "nav-item active" : "nav-item"} onClick={() => setTab("overview")}><span>▦</span> Umumiy ko‘rinish</button>
          <button className={tab === "rules" ? "nav-item active" : "nav-item"} onClick={() => setTab("rules")}><span>⌘</span> Javob qoidalari <b>{rules.length}</b></button>
          <button className={tab === "inbox" ? "nav-item active" : "nav-item"} onClick={() => setTab("inbox")}><span>↗</span> Direct xabarlar</button>
          <button className={tab === "analytics" ? "nav-item active" : "nav-item"} onClick={() => setTab("analytics")}><span>▥</span> Statistika</button>
        </nav>
        <div className="sidebar-bottom">
          <div className="plan-card">
            <div className="plan-icon">✦</div>
            <strong>Free tarif</strong>
            <p>Sinov rejimidagi ish maydoni</p>
            <button onClick={() => setShowNotice(true)}>Tariflarni ko‘rish <span>→</span></button>
          </div>
          <div className="profile-row"><div className="avatar">AR</div><div><strong>Demo foydalanuvchi</strong><small>Demo ish maydoni</small></div><span className="dots">•••</span></div>
        </div>
      </aside>

      <section className="main-panel">
        <header className="topbar">
          <div className="breadcrumbs">Ish maydoni <span>/</span> <strong>{tab === "overview" ? "Umumiy ko‘rinish" : tab === "rules" ? "Javob qoidalari" : tab === "inbox" ? "Direct xabarlar" : "Statistika"}</strong></div>
          <div className="topbar-right"><span className="demo-pill"><i /> DEMO REJIMI</span><button className="help-button" onClick={() => setShowNotice(true)}>Yordam ↗</button></div>
        </header>

        <div className="content">
          {showNotice && <div className="notice"><div><strong>Bu hozircha demo interfeys.</strong><p>Instagram ulanishi va haqiqiy xabar yuborish hali sozlanmagan. Keyingi bosqichda Meta rasmiy API integratsiyasi qo‘shiladi.</p></div><button aria-label="Bildirishnomani yopish" onClick={() => setShowNotice(false)}>×</button></div>}

          {tab === "overview" && <>
            <div className="page-heading"><div><div className="eyebrow">SHAXSIY ISH MAYDONINGIZ</div><h1>Umumiy ko‘rinish <span>✦</span></h1><p>Instagram muloqotlarini bitta joydan boshqarishga tayyormisiz?</p></div><button className="primary-button" onClick={() => setTab("rules")}>＋ Qoida yaratish</button></div>
            <div className="connect-banner"><div className="connect-symbol">◎</div><div className="connect-copy"><strong>Instagram akkauntingiz hali ulanmagan</strong><p>Rasmiy Meta ulanishini sozlaganimizdan keyin izohlar va xabarlar shu yerda ko‘rinadi.</p></div><span className="coming-soon">KEYINGI BOSQICH</span></div>
            <div className="section-title-row"><div><h2>Faollik ko‘rsatkichi</h2><p>Demo ish maydoni uchun namunaviy ko‘rsatkichlar</p></div><span className="period-select">Oxirgi 7 kun⌄</span></div>
            <div className="stats-grid">
              <article className="stat-card"><div className="stat-top"><span>Avtomatik javoblar</span><span className="stat-icon violet">↗</span></div><strong>0</strong><small><span className="muted-dot" /> Instagram ulanmagan</small></article>
              <article className="stat-card"><div className="stat-top"><span>Direct xabarlar</span><span className="stat-icon peach">✉</span></div><strong>0</strong><small><span className="muted-dot" /> Hozircha xabar yo‘q</small></article>
              <article className="stat-card"><div className="stat-top"><span>Faol qoidalar</span><span className="stat-icon mint">⌘</span></div><strong>{rules.filter((rule) => rule.active).length}</strong><small>Demo qoidalar ro‘yxatida</small></article>
            </div>
            <div className="lower-grid">
              <section className="panel-card"><div className="card-heading"><div><h2>Javob qoidalari</h2><p>Kalit so‘zlar va avtomatik harakatlar</p></div><button className="text-button" onClick={() => setTab("rules")}>Barchasi →</button></div><div className="rules-list">{rules.slice(0, 3).map((rule, i) => <div className="rule-row" key={rule.keyword}><div className="keyword-icon">⌘</div><div className="rule-info"><strong>{rule.keyword}</strong><small>{rule.dm}</small></div><button className={rule.active ? "toggle on" : "toggle"} onClick={() => toggleRule(i)} aria-label={rule.active ? rule.keyword + " qoidasini o‘chirish" : rule.keyword + " qoidasini yoqish"}><span /></button></div>)}</div></section>
              <section className="panel-card activity-card"><div className="card-heading"><div><h2>Oxirgi faollik</h2><p>Tizim hodisalari</p></div><span className="live-label"><i /> DEMO</span></div><div className="empty-state"><div className="empty-icon">⌁</div><strong>Hali faollik yo‘q</strong><p>Instagram akkauntingiz ulangandan keyin hodisalar shu yerda ko‘rinadi.</p></div></section>
            </div>
          </>}

          {tab === "rules" && <><div className="page-heading"><div><div className="eyebrow">AVTOMATLASHTIRISH</div><h1>Javob qoidalari <span>✦</span></h1><p>Kalit so‘zga mos izoh javobi va Direct matnini sozlang.</p></div><button className="primary-button" onClick={() => setShowNotice(true)}>＋ Yangi qoida</button></div><div className="panel-card rules-page"><div className="card-heading"><div><h2>Kalit so‘zlar</h2><p>Namunaviy qoidalar — faqat ushbu sahifada ishlaydi</p></div><span className="coming-soon">DEMO</span></div>{rules.map((rule, i) => <div className="rule-detail" key={rule.keyword}><div className="keyword-icon">⌘</div><div className="rule-detail-content"><div className="rule-detail-top"><strong>{rule.keyword}</strong><span className={rule.active ? "status active-status" : "status"}>{rule.active ? "Faol" : "O‘chiq"}</span></div><p><b>Izohga javob:</b> {rule.reply}</p><p><b>Direct matni:</b> {rule.dm}</p></div><button className={rule.active ? "toggle on" : "toggle"} onClick={() => toggleRule(i)} aria-label="Qoidani yoqish yoki o‘chirish"><span /></button></div>)}</div></>}

          {tab === "inbox" && <div className="empty-page"><div className="empty-icon">✉</div><div className="eyebrow">XABARLAR</div><h1>Direct xabarlar</h1><p>Instagram akkaunti ulanmagan. Meta rasmiy API integratsiyasi keyingi bosqichda qo‘shiladi.</p><button className="primary-button" onClick={() => setShowNotice(true)}>Ulanish haqida</button></div>}
          {tab === "analytics" && <div className="empty-page"><div className="empty-icon">▥</div><div className="eyebrow">HISOBOTLAR</div><h1>Statistika</h1><p>Haqiqiy ko‘rsatkichlar Instagram integratsiyasi ishga tushgach ko‘rsatiladi.</p></div>}
          <footer className="footer"><span>© 2026 AutoReply</span><span>Oddiyroq muloqot. Aqlliroq avtomatlashtirish.</span><span><i /> Tizim demo holatida</span></footer>
        </div>
      </section>
    </main>
  );
}
