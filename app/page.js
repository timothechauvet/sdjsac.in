"use client";

import { FaWhatsapp, FaInstagram, FaFacebookF, FaCopy } from "react-icons/fa";
import { QRCodeSVG } from "qrcode.react";
import { IoCheckmarkCircleSharp, IoHourglassOutline, IoLocationSharp, IoMail, IoQrCode, IoBusiness, IoCall } from "react-icons/io5";
import { useState } from "react";

export default function Home() {
  const marqueeDuration = Math.max(50, Math.round(MINOR_DONORS.length * 0.6));
  const [copiedText, setCopiedText] = useState("");

  const handleCopy = (text, label) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(""), 2000);
  };

  return (
    <>
      {/* ── Navigation ── */}
      <nav className="nav" id="top">
        <div className="nav__brand">
          <span className="nav__brand-kn">ಸುಮೇರು ದಿಗಂಬರ ಜೈನ ಸಭಾ</span>
          <span className="nav__brand-en">SUMERU DIGAMBARA JAIN SABHA</span>
        </div>

        <div className="nav__links">
          <a className="nav__link" href="#projects">
            ಯೋಜನೆಗಳು PROJECTS
          </a>
          <a className="nav__link" href="#donors">
            ದಾನಿಗಳು DONORS
          </a>
          <a className="nav__link" href="#contact">
            ಸಂಪರ್ಕ CONTACT
          </a>
        </div>

        <a className="nav__cta" href="#donate">
          ಈಗಲೇ ದಾನ ಮಾಡಿ DONATE NOW
        </a>
      </nav>

      {/* ── Main Content ── */}
      <main className="main container">
        {/* ── Header ── */}
        <header className="hero-section">
          <div className="hero-content">
            <h1 className="headline-lg-mobile" style={{ marginBottom: 4 }}>
              ಸುಮೇರು ದಿಗಂಬರಜೈನ ಸಭಾ, ಆಡಗಳಲೆ-ಚಂದೊಳ್ಳಿ
            </h1>
            <p className="bilingual-english-sub" style={{ marginBottom: 24 }}>
              Sumeru Digambara Jain Sabha, Adagalale-Chandolli
            </p>

            <div className="gold-border-box">
              <h2>
                ಭಗವಾನ್ ಶ್ರೀ 1008 ಮಲ್ಲಿನಾಥ ತೀರ್ಥಂಕರರ 11 ಅಡಿ ಎತ್ತರದ ಪ್ರತಿಮೆ
                ನಿರ್ಮಾಣ ಹಂತದಲ್ಲಿದೆ
              </h2>
              <p className="bilingual-english-sub">
                A Jain temple containing an 11-foot-tall statue of Bhagwan Shree 1008 Mallinath Tirthankara
                is currently under construction.
              </p>
            </div>
          </div>
          <div className="hero-images-container">
            <div className="hero-image-wrapper">
              <img
                src="/images/hero_image_hero.webp"
                alt="Sumeru Digambara Jain Sabha temple structure - ಸುಮೇರು ದಿಗಂಬರ ಜೈನ ಸಭಾ ದೇವಾಲಯ"
                width="600"
                height="600"
                fetchPriority="high"
              />
            </div>
            <div className="hero-image-wrapper">
              <img
                src="/images/hero_image_muni.webp"
                alt="Muni Shri 108 Vidith Sagar Presiding - ಪೂಜ್ಯ ಮುನಿ ಶ್ರೀ 108 ವಿದಿತ ಸಾಗರ ಮಹಾರಾಜರ ಮಾರ್ಗದರ್ಶನ"
                width="600"
                height="600"
                fetchPriority="high"
              />
            </div>
          </div>

          <div className="hero-info-grid">
            <div className="info-box">
              <h3>Jainism & Non-Violence</h3>
              <p>
                Non-violence (Ahimsa) is the supreme dharma and core tenet of Jainism, practicing absolute compassion toward all living beings. Constructing a new temple is crucial to preserve our spiritual heritage, enrich the community, and provide a sacred space for future generations.
              </p>
              <div className="committee-info">
                <p><strong>President:</strong> M.D. Jinadatta Jain</p>
                <p><strong>Secretary:</strong> Pavan C. Jain</p>
                <p style={{ marginTop: 8 }}><strong>Blessings & Guidance:</strong> Charya Shiromani Paramapujya Muni Shri 108 Vidithsagara Maharaj</p>
                <p><strong>Support & Guidance:</strong> Ba.Bra. Mahaveera Bayyaji</p>
                <p><strong>Planning & Engineering Drawings:</strong> <a href="https://goldenvillage.in" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline" }}>Santhosh. D</a> (Engineer)</p>
              </div>
            </div>

            <div className="info-box">
              <h3>ಜೈನ ಧರ್ಮ ಮತ್ತು ಅಹಿಂಸೆ</h3>
              <p>
                ಅಹಿಂಸೆಯೇ ಜೈನ ಧರ್ಮದ ಪರಮ ಧರ್ಮ ಮತ್ತು ಮೂಲ ತತ್ವವಾಗಿದೆ. ಎಲ್ಲಾ ಜೀವಿಗಳೆಡೆಗೆ ದಯೆ, ಕರುಣೆ ಮತ್ತು ಗೌರವವನ್ನು ತೋರುವುದು ಇದರ ಮೂಲ ಸಾರವಾಗಿದೆ. ನಮ್ಮ ಸಂಸ್ಕೃತಿ ಮತ್ತು ಆಧ್ಯಾತ್ಮಿಕ ಪರಂಪರೆಯನ್ನು ಸಂರಕ್ಷಿಸಲು ಈ ಪುಣ್ಯಸ್ಥಳದಲ್ಲಿ ನೂತನ ಜಿನಾಲಯದ ನಿರ್ಮಾಣ ಅತ್ಯಂತ ಮಹತ್ವದ್ದಾಗಿದೆ.
              </p>
              <div className="committee-info">
                <p><strong>ಅಧ್ಯಕ್ಷರು (President):</strong> ಎಂ.ಡಿ. ಜಿನದತ್ತ ಜೈನ್ (M.D. Jinadatta Jain)</p>
                <p><strong>ಕಾರ್ಯದರ್ಶಿ (Secretary):</strong> ಪವನ್ ಸಿ. ಜೈನ್ (Pavan C. Jain)</p>
                <p style={{ marginTop: 8 }}><strong>ಆಶೀರ್ವಾದ ಮತ್ತು ಮಾರ್ಗದರ್ಶನ:</strong> ಚರ್ಯಾ ಶಿರೋಮಣಿ ಪರಮಪೂಜ್ಯ ಮುನಿ ಶ್ರೀ 108 ವಿದಿತಸಾಗರ ಮಹಾರಾಜರು</p>
                <p><strong>ಬೆಂಬಲ ಮತ್ತು ಮಾರ್ಗದರ್ಶನ:</strong> ಬಾ.ಬ್ರ. ಮಹಾವೀರ ಬಯ್ಯಾಜಿಯವರು</p>
                <p><strong>ಯೋಜನೆ ಮತ್ತು ಎಂಜಿನಿಯರಿಂಗ್ ರೇಖಾಚಿತ್ರಗಳು:</strong> <a href="https://goldenvillage.in" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline" }}>ಸಂತೋಷ್. ಡಿ</a> (ಎಂಜಿನಿಯರ್)</p>
              </div>
            </div>
          </div>
        </header>

        {/* ── Project Status ── */}
        <section id="projects">
          <div className="section-heading">
            <h3>ಯೋಜನೆಯ ಸ್ಥಿತಿ (Project Status)</h3>
          </div>

          <div className="status-grid" style={{ marginBottom: 24 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              <StatusItem complete title="ವಿಗ್ರಹ ಸ್ಥಾಪನೆ (Statue Installation)" sub="Complete" />
              <StatusItem title="ಸಭಾ ಭವನ (Sabha Bhavana)" sub="In Progress" />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              <StatusItem title="ಗ್ರಂಥಾಲಯ (Library)" sub="In Progress" />
              <StatusItem title="ತ್ಯಾಗಿ ನಿವಾಸ (Tyagi Nivas)" sub="In Progress" />
            </div>
          </div>

          <div className="milestone-banner">
            <p className="milestone-banner__title">
              ಮೈಲಿಗಲ್ಲು: ಭವ್ಯ ಉದ್ಘಾಟನೆ 2027 ರ ಕೊನೆಯಲ್ಲಿ
            </p>
            <p className="bilingual-english-sub">
              Milestone: Grand Inauguration Late 2027
            </p>
          </div>
        </section>

        {/* ── Inaugural Milestone ── */}
        <section>
          <div className="inaugural-card">
            <div style={{ position: "relative", zIndex: 1 }}>
              <h3>ಶ್ರೀ ಜಿನಬಿಂಬ ಸ್ಥಾಪನಾ ಮಹೋತ್ಸವ</h3>
              <p
                className="bilingual-english-sub"
                style={{ fontWeight: 700, marginBottom: 24 }}
              >
                Inaugural Jinabimba Installation Ceremony (04-05-2026)
              </p>

              <div className="inaugural-card__body">
                <p>
                  ಪರಮ ಪೂಜ್ಯ ಆಚಾರ್ಯ ಶ್ರೀ 108 ವಿದ್ಯಾಸಾಗರ ಮಹಾರಾಜರ ಆಶೀರ್ವಾದ
                  ಮತ್ತು ಮುನಿ ಶ್ರೀ 108 ವಿದಿತ ಸಾಗರ ಮಹಾರಾಜರ ಮಾರ್ಗದರ್ಶನದಲ್ಲಿ
                  ಜೈಪುರದಿಂದ 11 ಅಡಿ ಖಡ್ಗಾಸನ ಜಿನಬಿಂಬದ ಆಗಮನ.
                </p>
                <p className="bilingual-english-sub">
                  Arrival of the 11ft Khadgasana Jinabimba from Jaipur under the
                  divine blessings of Acharya Shri 108 Vidyasagar Maharaj and
                  the spiritual guidance of Muni Shri 108 Vidith Sagar Maharaj.
                </p>
              </div>

              <img
                src="/images/inaugural_ceremony.webp"
                alt="Inaugural Jinabimba Installation Ceremony rituals - ಶ್ರೀ ಜಿನಬಿಂಬ ಸ್ಥಾಪನಾ ಮಹೋತ್ಸವದ ವಿಧಿವಿಧಾನಗಳು"
                className="inaugural-image"
                width="700"
                height="700"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* ── Financial Remittance / Donate ── */}
        <section id="donate">
          <div className="section-heading">
            <h3>ಹಣಕಾಸು ಪಾವತಿ (Financial Remittance)</h3>
          </div>

          <div className="donate-grid">
            {/* UPI QR Card */}
            <div className="qr-card">
              <div className="qr-card__header">
                <IoQrCode style={{ color: "var(--accent-gold)", fontSize: 20 }} />
                <h4>ಯುಪಿಐ ಪಾವತಿ (UPI QR)</h4>
              </div>
              <div className="qr-card__qr-wrapper">
                <QRCodeSVG
                  value="upi://pay?pa=QR919483056445-0815@unionbankofindia&pn=SUMERU%20DIGAMBARA%20JAINA%20SABHA%20ADAGALALE%20CHANDOLLI&cu=INR&tr=FINACLE_QRCODE&mc=0000&mode=02&purpose=00&sign=MEUCIQDJwgDf14ufFFtm7RcPLVAPB4x2hmFQlCMFQjYkPpU4FwIgOxqxWlECPPDGH2gir8vUsepTFH4PMf77D68RHYtOfiw="
                  title="UPI QR Code - SUMERU DIGAMBARA JAINA SABHA"
                  size={240}
                  level="M"
                  includeMargin={true}
                  className="qr-card__qr-image"
                />
              </div>
              <p className="body-sm" style={{ color: "var(--text-secondary)", marginTop: 12, textAlign: "center", width: "100%" }}>
                ಸ್ಕ್ಯಾನ್ ಮಾಡಿ ಮತ್ತು ದಾನ ಮಾಡಿ
                <br />
                Scan and Donate
              </p>
              <div style={{ marginTop: 8, textAlign: "left", width: "100%", display: "flex", flexDirection: "column", gap: 16 }}>
                <div>
                  <p className="bank-field__label">ಖಾತೆ ಹೆಸರು / ACCOUNT NAME</p>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 }}>
                    <span className="bank-field__value" style={{ fontSize: 16 }}>SUMERU DIGAMBARA JAINA SABHA ADAGALALE CHANDOLLI</span>
                    <button 
                      onClick={() => handleCopy("SUMERU DIGAMBARA JAINA SABHA ADAGALALE CHANDOLLI", "name")}
                      style={{ background: "none", border: "none", cursor: "pointer", color: "var(--accent-gold)", padding: 4, display: "flex", alignItems: "center", gap: 4, fontSize: 12, fontWeight: 700 }}
                    >
                      <FaCopy size={14} />
                      {copiedText === "name" ? "Copied!" : "Copy"}
                    </button>
                  </div>
                </div>
                <div>
                  <p className="bank-field__label">UPI ID</p>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 }}>
                    <span className="bank-field__value" style={{ fontSize: 16, wordBreak: "break-all" }}>QR919483056445-0815@unionbankofindia</span>
                    <button 
                      onClick={() => handleCopy("QR919483056445-0815@unionbankofindia", "upi")}
                      style={{ background: "none", border: "none", cursor: "pointer", color: "var(--accent-gold)", padding: 4, display: "flex", alignItems: "center", gap: 4, fontSize: 12, fontWeight: 700 }}
                    >
                      <FaCopy size={14} />
                      {copiedText === "upi" ? "Copied!" : "Copy"}
                    </button>
                  </div>
                </div>
              </div>
              <div className="qr-card__bhim-container">
                <img
                  src="/images/bhim_upi.webp"
                  alt="BHIM UPI Logo"
                  className="qr-card__bhim-logo"
                  width="120"
                  height="16"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Bank Card (Wire Transfer) */}
            <div className="bank-card">
              <div className="bank-card__header">
                <IoBusiness style={{ color: "var(--accent-gold)", fontSize: 20 }} />
                <h4>ಬ್ಯಾಂಕ್ ವಿವರಗಳು (Bank Details)</h4>
              </div>
              <div className="bank-card__logo-container">
                <img
                  src="/images/union_bank.webp"
                  alt="Union Bank of India"
                  className="bank-card__bank-logo"
                  width="180"
                  height="55"
                  loading="lazy"
                />
              </div>
              <div className="bank-grid">
                <div>
                  <p className="bank-field__label">ಖಾತೆ ಹೆಸರು / ACCOUNT NAME</p>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 }}>
                    <span className="bank-field__value" style={{ fontSize: 16 }}>M/S SUMERU DIGAMBARA JAINA SABHA ADAGALALE CHANDOLLI</span>
                    <button 
                      onClick={() => handleCopy("M/S SUMERU DIGAMBARA JAINA SABHA ADAGALALE CHANDOLLI", "bank-name")}
                      style={{ background: "none", border: "none", cursor: "pointer", color: "var(--accent-gold)", padding: 4, display: "flex", alignItems: "center", gap: 4, fontSize: 12, fontWeight: 700 }}
                    >
                      <FaCopy size={14} />
                      {copiedText === "bank-name" ? "Copied!" : "Copy"}
                    </button>
                  </div>
                </div>

                <div>
                  <p className="bank-field__label">ಬ್ಯಾಂಕ್ / BANK</p>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 }}>
                    <span className="bank-field__value" style={{ fontSize: 16 }}>UNION BANK OF INDIA</span>
                    <button 
                      onClick={() => handleCopy("UNION BANK OF INDIA", "bank")}
                      style={{ background: "none", border: "none", cursor: "pointer", color: "var(--accent-gold)", padding: 4, display: "flex", alignItems: "center", gap: 4, fontSize: 12, fontWeight: 700 }}
                    >
                      <FaCopy size={14} />
                      {copiedText === "bank" ? "Copied!" : "Copy"}
                    </button>
                  </div>
                </div>

                <div>
                  <p className="bank-field__label">ಖಾತೆ ಸಂಖ್ಯೆ / ACCOUNT NUMBER</p>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 }}>
                    <span className="bank-field__value" style={{ fontSize: 16 }}>328422010000615</span>
                    <button 
                      onClick={() => handleCopy("328422010000615", "acc")}
                      style={{ background: "none", border: "none", cursor: "pointer", color: "var(--accent-gold)", padding: 4, display: "flex", alignItems: "center", gap: 4, fontSize: 12, fontWeight: 700 }}
                    >
                      <FaCopy size={14} />
                      {copiedText === "acc" ? "Copied!" : "Copy"}
                    </button>
                  </div>
                </div>

                <div>
                  <p className="bank-field__label">ಐಎಫ್‌ಎಸ್‌ಸಿ ಕೋಡ್ / IFSC CODE</p>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 }}>
                    <span className="bank-field__value" style={{ fontSize: 16 }}>UBIN0932841</span>
                    <button 
                      onClick={() => handleCopy("UBIN0932841", "ifsc")}
                      style={{ background: "none", border: "none", cursor: "pointer", color: "var(--accent-gold)", padding: 4, display: "flex", alignItems: "center", gap: 4, fontSize: 12, fontWeight: 700 }}
                    >
                      <FaCopy size={14} />
                      {copiedText === "ifsc" ? "Copied!" : "Copy"}
                    </button>
                  </div>
                </div>

                <div style={{ gridColumn: "1 / -1" }}>
                  <p className="bank-field__label">ಶಾಖೆ ವಿವರಗಳು / BRANCH ADDRESS</p>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 }}>
                    <span className="bank-field__value" style={{ fontSize: 16 }}>Adagalale Chandolli, Sagar Taluk, Shivamogga, Karnataka, Pin: 577401, India</span>
                    <button 
                      onClick={() => handleCopy("Adagalale Chandolli, Sagar Taluk, Shivamogga, Karnataka, Pin: 577401, India", "branch")}
                      style={{ background: "none", border: "none", cursor: "pointer", color: "var(--accent-gold)", padding: 4, display: "flex", alignItems: "center", gap: 4, fontSize: 12, fontWeight: 700 }}
                    >
                      <FaCopy size={14} />
                      {copiedText === "branch" ? "Copied!" : "Copy"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Donor Board ── */}
        <section id="donors">
          {/* Major Donors */}
          <div style={{ marginBottom: 48 }}>
            <p className="donor-category-label">
              ಉದಾರ ದಾನಿಗಳು / Generous Donors (&gt; 1 Lakh)
            </p>
            <div className="donor-major-grid">
              <DonorMajor nameKn="ರೇವತಿ ಜಿನದತ್ತ ಎಂ. ಡಿ., ಮಡದೂರು, ಆಡಗಳಲೆ" nameEn="Revathi Jinadatta M.D., Madadur, Adagalale" amount="₹ 5,00,000" />
              <DonorMajor nameKn="Timothé CHAUVET" nameEn="Paris, France" amount="₹ 2,20,000" link="https://timothechau.vet" />
              <DonorMajor nameKn="ಡಾ. ಆದರ್ಶ್ ಜೈನ್, ಡುಯಿಸ್ಬರ್ಗ್, ಜರ್ಮನಿ" nameEn="Dr. Adarsh Jain, Duisburg, Germany" amount="₹ 2,00,000" link="https://adarshjain.de" />
            </div>
          </div>

          {/* Minor Donors */}
          <div>
            <p className="donor-category-label">
              ದಾನಿಗಳು / Donors (&lt; 1 Lakh)
            </p>
            <div className="donor-marquee-container">
              <div className="donor-marquee-content" style={{ animationDuration: `${marqueeDuration}s` }}>
                <div className="donor-minor-grid">
                  {MINOR_DONORS.map((donor, idx) => (
                    <DonorMinor key={idx} {...donor} />
                  ))}
                </div>
                <div className="donor-minor-grid" aria-hidden="true">
                  {MINOR_DONORS.map((donor, idx) => (
                    <DonorMinor key={`dup-${idx}`} {...donor} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Gallery ── */}
        <section id="gallery">
          <div className="section-heading">
            <h3>ನಮ್ಮ ಗ್ಯಾಲರಿ (Our Gallery)</h3>
          </div>

          <div className="gallery-wrapper">
            <div className="gallery-grid">
              {GALLERY_IMAGES.map((img, i) => (
                <div key={i} className="gallery-item">
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    width="600"
                    height="600"
                  />
                </div>
              ))}
            </div>
            <div className="gallery-fade">
              <a
                className="btn-outline"
                href="https://www.instagram.com/sumeru_digambara_jain_sabha/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram style={{ fontSize: 20 }} />
                ಇನ್‌ಸ್ಟಾಗ್ರಾಮ್‌ನಲ್ಲಿ ನಮ್ಮನ್ನು ಅನುಸರಿಸಿ / FOLLOW US ON INSTAGRAM
              </a>
            </div>
          </div>
        </section>

        {/* ── Committee / ಸಮಿತಿ ── */}
        <section id="committee">
          <div className="section-heading">
            <h3>ಸಮಿತಿ ಸದಸ್ಯರು (Committee Members)</h3>
          </div>

          <div className="committee-cards-grid">
            {/* President */}
            <div className="committee-member-card">
              <div className="committee-member-photo" aria-label="President photo placeholder" />
              <div className="committee-member-details">
                <p className="label-caps" style={{ color: "var(--accent-gold)", marginBottom: 4 }}>
                  ಅಧ್ಯಕ್ಷರು / PRESIDENT
                </p>
                <h4 className="committee-member-name">ಎಂ.ಡಿ. ಜಿನದತ್ತ ಜೈನ್</h4>
                <p className="bilingual-english-sub" style={{ marginBottom: 12 }}>M.D. Jinadatta Jain</p>
                <div className="committee-member-info">
                  <div className="committee-member-info-row">
                    <IoCall size={14} style={{ flexShrink: 0, marginTop: 2 }} />
                    <span>+91 XXXXX XXXXX</span>
                  </div>
                  <div className="committee-member-info-row">
                    <IoLocationSharp size={14} style={{ flexShrink: 0, marginTop: 2 }} />
                    <span>Adagalale, Shivamogga, Karnataka</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Secretary */}
            <div className="committee-member-card">
              <div className="committee-member-photo" aria-label="Secretary photo placeholder" />
              <div className="committee-member-details">
                <p className="label-caps" style={{ color: "var(--accent-gold)", marginBottom: 4 }}>
                  ಕಾರ್ಯದರ್ಶಿ / SECRETARY
                </p>
                <h4 className="committee-member-name">ಪವನ್ ಸಿ. ಜೈನ್</h4>
                <p className="bilingual-english-sub" style={{ marginBottom: 12 }}>Pavan C. Jain</p>
                <div className="committee-member-info">
                  <div className="committee-member-info-row">
                    <IoCall size={14} style={{ flexShrink: 0, marginTop: 2 }} />
                    <span>+91 XXXXX XXXXX</span>
                  </div>
                  <div className="committee-member-info-row">
                    <IoLocationSharp size={14} style={{ flexShrink: 0, marginTop: 2 }} />
                    <span>Adagalale, Shivamogga, Karnataka</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* ── Location ── */}
        <section>
          <div className="section-heading">
            <h3>ಸ್ಥಳ ಮತ್ತು ನಿರ್ದೇಶಾಂಕಗಳು (Visit / Location)</h3>
          </div>

          <div className="location-grid">
            <div className="location-info">
              <div>
                <p className="location-info__address">
                  ಆಡಗಳಲೆ-ಚಂದೊಳ್ಳಿ, ಶಿವಮೊಗ್ಗ ಜಿಲ್ಲೆ, ಕರ್ನಾಟಕ
                </p>
                <p className="bilingual-english-sub">
                  Adagalale-Chandolli, Shivamogga District, Karnataka
                </p>
              </div>
              <a
                className="btn-full"
                href="https://maps.app.goo.gl/TjaUHYm6Lo3em7sr6"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoLocationSharp size={20} />
                <span>
                  ಗೂಗಲ್ ಮ್ಯಾಪ್ಸ್‌ನಲ್ಲಿ ವೀಕ್ಷಿಸಿ (Open in Google Maps)
                </span>
              </a>
            </div>
            <div className="location-map">
              <iframe
                title="Google Maps location of Sumeru Digambara Jain Sabha"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1936.013362740682!2d74.8117103!3d13.9570144!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbc7b0043fe370d%3A0x70049cc10bd865e5!2sSumeru%20Digambara%20Jain%20Sabha%2C%20Adagalale-Chandolli!5e0!3m2!1sen!2sfr!4v1781599626649!5m2!1sen!2sfr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="footer" id="contact">
        <div className="footer__inner">
          <div style={{ flex: 1 }}>
            <div className="footer__brand">
              <h2>ಸುಮೇರು ದಿಗಂಬರ ಜೈನ ಸಭಾ</h2>
              <p className="label-caps" style={{ color: "var(--text-secondary)", letterSpacing: "0.1em" }}>
                SUMERU DIGAMBARA JAIN SABHA
              </p>
            </div>

            <div className="social-grid">
              <a href="mailto:contact@sdjsac.in" className="social-button">
                <div className="social-button__icon">
                  <IoMail />
                </div>
                <span className="social-button__label">ಇಮೇಲ್</span>
                <span className="social-button__value">contact@sdjsac.in</span>
              </a>

              <a href="https://wa.me/33604491758" className="social-button" target="_blank" rel="noopener noreferrer">
                <div className="social-button__icon">
                  <FaWhatsapp />
                </div>
                <span className="social-button__label">ವಾಟ್ಸಾಪ್</span>
                <span className="social-button__value">+33 60XXX XXXXX</span>
              </a>

              <a href="https://www.instagram.com/sumeru_digambara_jain_sabha/" className="social-button" target="_blank" rel="noopener noreferrer">
                <div className="social-button__icon">
                  <FaInstagram />
                </div>
                <span className="social-button__label">ಇನ್ಸ್ಟಾಗ್ರಾಮ್</span>
                <span className="social-button__value">@sumeru_digambara...</span>
              </a>

              <a href="https://www.facebook.com/profile.php?id=61590645158390" className="social-button" target="_blank" rel="noopener noreferrer">
                <div className="social-button__icon">
                  <FaFacebookF />
                </div>
                <span className="social-button__label">ಫೇಸ್ಬುಕ್</span>
                <span className="social-button__value">Profile</span>
              </a>
            </div>
          </div>

          <div className="footer__copyright">
            <p>
              © 2026 ಸುಮೇರು ದಿಗಂಬರ ಜೈನ ಸಭಾ. ಎಲ್ಲಾ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.
            </p>
            <p className="footer__copyright-en">All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

/* ── Tiny inline components ── */

function StatusItem({ complete, title, sub }) {
  return (
    <div className="status-item">
      {complete ? (
        <IoCheckmarkCircleSharp className="status-item__icon status-item__icon--complete" size={24} />
      ) : (
        <IoHourglassOutline className="status-item__icon status-item__icon--pending" size={24} />
      )}
      <div>
        <p className="status-item__title">{title}</p>
        <p className="bilingual-english-sub">{sub}</p>
      </div>
    </div>
  );
}

function BankField({ label, value }) {
  return (
    <div>
      <p className="bank-field__label">{label}</p>
      <p className="bank-field__value">{value}</p>
    </div>
  );
}

function DonorMajor({ nameKn, nameEn, amount, link }) {
  return (
    <div className="donor-major-item">
      <div>
        <p className="donor-major-item__name">
          {link ? (
            <a href={link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline" }}>
              {nameKn}
            </a>
          ) : (
            nameKn
          )}
        </p>
        <p className="donor-major-item__sub">{nameEn}</p>
      </div>
      <p className="donor-major-item__amount">{amount}</p>
    </div>
  );
}

function DonorMinor({ nameKn, nameEn, amount }) {
  return (
    <div className="donor-minor-item">
      <p className="donor-minor-item__name">
        {nameKn} <span className="donor-minor-item__amount" style={{ marginLeft: 6 }}>{amount}</span>
      </p>
      <p className="donor-minor-item__sub">{nameEn}</p>
    </div>
  );
}

const MINOR_DONORS = [
  { nameKn: "ಯಶೋಧಾ ಭರತ್‌ರಾಜ್ ಮತ್ತು ಕುಟುಂಬದವರು, ಸಂಸೆ, ಕಳಸ", nameEn: "Yashodha Bharathraj and family, Samse, Kalasa", amount: "₹ 34,224" },
  { nameKn: "ಪ್ರಾರ್ಥನಾ, ಸ್ವಪ್ನಾ ವೀರೇಂದ್ರಕುಮಾರ್, ಬೆಂಗಳೂರು", nameEn: "Prarthana, Swapna Virendrakumar, Bengaluru", amount: "₹ 28,225" },
  { nameKn: "ಸುಮಿತ್ರಾ ಡಾಕಪ್ಪ ಜೈನ್ ಮತ್ತು ಕುಟುಂಬದವರು, ಮಡದೂರು, ಆಡಗಳಲೆ", nameEn: "Sumithra Dakappa Jain and family, Madadur, Adagalale", amount: "₹ 15,663" },
  { nameKn: "ಕವಿತಾ ಪದ್ಮಯ್ಯ (ರವಿ) ಜೈನ್, ಆಡಗಳಲೆ", nameEn: "Kavitha Padmayya (Ravi) Jain, Adagalale", amount: "₹ 15,116" },
  { nameKn: "ಲತಾ ಶಿಶುಪಾಲ್ ಜೈನ್, ಆಡಗಳಲೆ", nameEn: "Latha Shishupal Jain, Adagalale", amount: "₹ 11,108" },
  { nameKn: "ಸುಗುಣ ಪ್ರೇಮ್‌ಕುಮಾರ್ ಜೈನ್, ಮೇಲ್ಮಂಜಿ, ಕೋಗರ್", nameEn: "Suguna Premkumar Jain, Melmanji, Kogar", amount: "₹ 11,000" },
  { nameKn: "ವಸಂತಿ ದೇವರಾಜ್ ಜೈನ್, ಯಡ್ಡೊಳ್ಳಿ, ಕಾರ್ಗಲ್", nameEn: "Vasanthi Devaraj Jain, Yeddolli, Kargal", amount: "₹ 11,000" },
  { nameKn: "ಸುನಂದಾ ಗುಣಧರ್ ಮನಗಾವೆ, ಐನಾಪುರ, ಬೆಳಗಾವಿ", nameEn: "Sunandha Gunadhar Managave, Ainapur, Belagavi", amount: "₹ 11,000" },
  { nameKn: "ಜ್ಯೋತಿ ಅಶೋಕ್ ಎ ಬಿ, ಬಂಗ್ಲಿ, ಆಡಗಳಲೆ", nameEn: "Jyothi Ashok A B, Bangli, Adagalale", amount: "₹ 9,100" },
  { nameKn: "ಪದ್ಮಾವತಿ ನೀಲಕುಮಾರ್ ಜೈನ್, ಆಡಗಳಲೆ", nameEn: "Padmavathi Neelkumar Jain, Adagalale", amount: "₹ 9,050" },
  { nameKn: "ನವೀನ್, ಪವನ್, ಭಾರತಿ ಚಂದಯ್ಯ ಜೈನ್, ಆಡಗಳಲೆ", nameEn: "Naveen, Pavan, Bharathi Chandayya Jain, Adagalale", amount: "₹ 8,500" },
  { nameKn: "ಜ್ಯೋತಿ ವಿನೋದ್ ಜೈನ್, ಆಡಗಳಲೆ", nameEn: "Jyothi Vinodh Jain, Adagalale", amount: "₹ 8,010" },
  { nameKn: "ಯೆಗಾವತಿ ಜಿನದತ್ತ ಜೈನ್, ಆಡಗಳಲೆ", nameEn: "Yogavathi Jinadatta Jain, Adagalale", amount: "₹ 8,000" },
  { nameKn: "ಜಟ್ಟಯ್ಯ ಜೈನ್ ಮತ್ತು ಕುಟುಂಬದವರು, ಆಡಗಳಲೆ", nameEn: "Jattayya Jain and family, Adagalale", amount: "₹ 7,000" },
  { nameKn: "ಸವಿತಾ ವೃಷಭರಾಜ್ ಜೈನ್, ಬಂಗ್ಲಿ, ಆಡಗಳಲೆ", nameEn: "Savitha Vrushabharaj Jain, Bangli, Adagalale", amount: "₹ 6,508" },
  { nameKn: "ವೀಣಾ ಪುಟ್ಟಸ್ವಾಮಿ ಜೈನ್, ಆಡಗಳಲೆ", nameEn: "Veena Puttaswami Jain, Adagalale", amount: "₹ 6,000" },
  { nameKn: "ವಿಜಯಕುಮಾರ್ ಜೈನ್, ಕೋಡನಹಳ್ಳಿ", nameEn: "Vijaykumar Jain, Kodanahalli", amount: "₹ 5,108" },
  { nameKn: "ವಿಜಯೇಂದ್ರ ಜೈನ್, ಚಕ್ಕೋಡು", nameEn: "Vijayendra Jain, Chakkodu", amount: "₹ 5,108" },
  { nameKn: "ದ್ಯಾವಮ್ಮ ಪದ್ಮಯ್ಯ ಜೈನ್, ಮೆತ್ತಲಗೋಡು, ಹಾಲಸಸಿ", nameEn: "Dyavamma Padmayya Jain, Mettalagodu, Halasasi", amount: "₹ 5,108" },
  { nameKn: "ಆರತಿ ಉದಯಕುಮಾರ್ ಜೈನ್, ಕೋಗಾರು", nameEn: "Arathi Udayakumar Jain, Kogaru", amount: "₹ 5,108" },
  { nameKn: "ವಿಮಲ್‌ಕುಮಾರ್ ಜೈನ್, ಮರಾಠಿ", nameEn: "Vimalkumar Jain, Marati", amount: "₹ 5,108" },
  { nameKn: "ಮಾಲತಿ ಸಂತೋಷ್ ಜೈನ್, (ಮಡದೂರು, ಆಡಗಳಲೆ) ಬೆಂಗಳೂರು", nameEn: "Malathi Santhosh Jain, (Madadur, Adagalale) Bengaluru", amount: "₹ 5,008" },
  { nameKn: "ನಾಗರತ್ನ ಧನಪಾಲ್ ಜೈನ್, ಮಡದೂರು, ಆಡಗಳಲೆ", nameEn: "Nagarathna Dhanapal Jain, Madadur, Adagalale", amount: "₹ 5,000" },
  { nameKn: "ಸುಮತಿ ಪದ್ಮರಾಜ್ ಎ. ಎನ್., ಆಡಗಳಲೆ", nameEn: "Sumathi Padmaraj A. N., Adagalale", amount: "₹ 5,000" },
  { nameKn: "ಯಶೋಧಾ ಸುರೇಶ್ ಜೈನ್, ಬಂಗ್ಲಿ, ಆಡಗಳಲೆ", nameEn: "Yashodha Suresh Jain, Bangli, Adagalale", amount: "₹ 5,000" },
  { nameKn: "ಪದ್ಮಾವತಿ ನ್ಯಾಮಯ್ಯ ಜೈನ್, ಬಂಗ್ಲಿ, ಆಡಗಳಲೆ", nameEn: "Padmavathi Nyamayya Jain, Bangli, Adagalale", amount: "₹ 5,000" },
  { nameKn: "ಮಮತಾ ಮಹಾವೀರ್ ಜೈನ್, ಆಡಗಳಲೆ", nameEn: "Mamatha Mahaveer Jain, Adagalale", amount: "₹ 5,000" },
  { nameKn: "ಸುಹಸ್ತಿ ಜೈನ್ ಮಿಲನ್, ಬೆಂಗಳೂರು", nameEn: "Suhasti Jain Milan, Bengaluru", amount: "₹ 5,000" },
  { nameKn: "ಜಿನೇಂದ್ರ ಜೈನ್, ಹಳ್ಳಿ", nameEn: "Jinendra Jain, Halli", amount: "₹ 5,000" },
  { nameKn: "ರೂಪಲತಾ ಧರಣೇಂದ್ರ ಜೈನ್, ಬೆಂಗಳೂರು", nameEn: "Roopaltha Dharanendra Jain, Bengaluru", amount: "₹ 5,000" },
  { nameKn: "ಅನಿಲಾ ಧರಣೇಂದ್ರ ಜೈನ್, ಬೆಂಗಳೂರು", nameEn: "Anila Dharanendra Jain, Bengaluru", amount: "₹ 5,000" },
  { nameKn: "ಎಂ. ಆರ್ ಗಣಪತಿ ಭಟ್, ಹೊಸಕೊಪ್ಪ", nameEn: "M. R Ganapathi Bhat, Hosakoppa", amount: "₹ 5,000" },
  { nameKn: "ಆಶಾ ದೀದಿ, ಚೆನ್ನರಾಯಪಟ್ಟಣ", nameEn: "Aasha Didi, Channarayapattana", amount: "₹ 5,000" },
  { nameKn: "ಶಾಂತಿನಾಥ್ ಚೇತನ್, ಮಧುಗಿರಿ", nameEn: "Shantinath Chethan, Madhugiri", amount: "₹ 5,000" },
  { nameKn: "ಸುನಂದಾ ನರೇಂದ್ರ ಜೈನ್, ಆಡಗಳಲೆ", nameEn: "Sunandha Narendra Jain, Adagalale", amount: "₹ 4,000" },
  { nameKn: "ಮಂಜಯ್ಯ ಎ. ಪಿ., ಆಡಗಳಲೆ", nameEn: "Manjayya A. P., Adagalale", amount: "₹ 3,000" },
  { nameKn: "ಪದ್ಮಲತಾ ಪ್ರಸಿದ್ಧ ಜೈನ್, (ಸಂಸೆ) ಬೆಂಗಳೂರು", nameEn: "Padmalatha Prasidda Jain, (Samse) Bengaluru", amount: "₹ 3,000" },
  { nameKn: "ವಿನುತಾ, ದಿವ್ಯಾ, ಭವ್ಯಾ ಜೈನ್, ಆಡಗಳಲೆ", nameEn: "Vinutha, Divya, Bhavya Jain, Adagalale", amount: "₹ 3,000" },
  { nameKn: "ಚೂಡರತ್ನ ಎ. ಜೆ., ಆಡಗಳಲೆ", nameEn: "Chudarathna A. J., Adagalale", amount: "₹ 2,500" },
  { nameKn: "ಸ್ಫೂರ್ತಿ, ಕೀರ್ತಿ ಜೈನ್, ಆಡಗಳಲೆ", nameEn: "Spurthi, Keerthi Jain, Adagalale", amount: "₹ 2,030" },
  { nameKn: "ಉದಂಕ, ಉಲ್ಲಾಸ್ ಜೈನ್, ಆಡಗಳಲೆ", nameEn: "Udanka, Ullas Jain, Adagalale", amount: "₹ 2,020" },
  { nameKn: "ಆರ್ವಿ, ಪ್ರೀತಮ್ ಜೈನ್, ಆಡಗಳಲೆ", nameEn: "Arvi, Preetham Jain, Adagalale", amount: "₹ 2,016" },
  { nameKn: "ಚೂಡರತ್ನ ಎ. ಎನ್., ಆಡಗಳಲೆ", nameEn: "Chudarathna A. N., Adagalale", amount: "₹ 2,000" },
  { nameKn: "ಸುಧಾ ಸೋಮರಾಜ್ ಜೈನ್, ಬಂಗ್ಲಿ, ಆಡಗಳಲೆ", nameEn: "Sudha Somaraj Jain, Bangli, Adagalale", amount: "₹ 2,000" },
  { nameKn: "ನಾಗಮ್ಮ ದ್ಯಾವಪ್ಪ ಜೈನ್, ಆಡಗಳಲೆ", nameEn: "Nagamma Dhyavappa Jain, Adagalale", amount: "₹ 2,000" },
  { nameKn: "ಕಿರಣ ಪುಟ್ಟಸ್ವಾಮಿ ಜೈನ್, ಚಂದೊಳ್ಳಿ", nameEn: "Kirana Puttaswami Jain, Chandoli", amount: "₹ 2,000" },
  { nameKn: "ಶಾಂತಿರಾಜ್ ಜೈನ್, ಯಲದಮಕ್ಕಿ", nameEn: "Shanthiraj Jain, Yaladamakki", amount: "₹ 2,000" },
  { nameKn: "ಅನಿತಾ ಮಹಾವೀರ್ ಜೈನ್, ಮುತ್ತತ್ತಿ", nameEn: "Aneetha Mahaveer Jain, Muttatti", amount: "₹ 1,010" },
  { nameKn: "ಶ್ರುತಾ, ಧನ್ವಿತಾ ಪಿ ಜೈನ್, (ಸಂಸೆ) ಮಂಗಳೂರು", nameEn: "Shrutha, Dhanwitha P Jain, (Samse) Mangaluru", amount: "₹ 1,010" },
  { nameKn: "ಅರ್ಚನಾ ಶಿಶುಪಾಲ್ ಜೈನ್, ಆಡಗಳಲೆ", nameEn: "Archana Shishupal Jain, Adagalale", amount: "₹ 1,008" },
  { nameKn: "ಅರ್ಪಿತಾ ಜೈನ್, ಹಳ್ಳಿ", nameEn: "Arpitha Jain, Halli", amount: "₹ 1,008" },
  { nameKn: "ಕಲ್ಪಿತ್ ಜೈನ್, (ಮಡದೂರು, ಆಡಗಳಲೆ) ಬೆಂಗಳೂರು", nameEn: "Kalpith Jain, (Madadur, Adagalale) Bengaluru", amount: "₹ 1,008" },
  { nameKn: "ಆದಿರಾಜ್ ಜೈನ್, ದೀಟೆಕೊಪ್ಪ", nameEn: "Adiraj jain, Deetekoppa", amount: "₹ 1,008" },
  { nameKn: "ಚೈತ್ರಾ ಮಂಜಯ್ಯ ಜೈನ್, ನಲ್ಲಿಬೀಡು", nameEn: "Chaitra Manjayya Jain, Nallibidu", amount: "₹ 1,008" },
  { nameKn: "ನಾಗರತ್ನ ನೀಲಕುಮಾರ್ ಜೈನ್, ನಲ್ಲಿಬೀಡು", nameEn: "Nagarathna Neelkumar Jain, Nallibidu", amount: "₹ 1,008" },
  { nameKn: "ರಶ್ಮಿ ರವಿ ಜೈನ್, ಬಂಗ್ಲಿ, ಆಡಗಳಲೆ", nameEn: "Rashmi Ravi Jain, Bangli, Adagalale", amount: "₹ 1,008" },
  { nameKn: "ಪದ್ಮರಾಜ್ ಜೈನ್, ಆಡಗಳಲೆ", nameEn: "Padmaraj Jain, Adagalale", amount: "₹ 1,000" },
  { nameKn: "ರತ್ನಮ್ಮ, ಬಂಗ್ಲಿ, ಆಡಗಳಲೆ", nameEn: "Rathnamma, Bangli, Adagalale", amount: "₹ 1,000" },
  { nameKn: "ನಿರ್ಮಲಾ ಕಾಂತರಾಜ ಜೈನ್, ಚಂದೊಳ್ಳಿ", nameEn: "Nirmala Kantharaj Jain, Chandoli", amount: "₹ 1,000" },
  { nameKn: "ದೀವ್ಯಾ ಅಶೋಕ್ ಜೈನ್, ಬಂಗ್ಲಿ, ಆಡಗಳಲೆ", nameEn: "Divya Ashok Jain, Bangli, Adagalale", amount: "₹ 1,000" },
  { nameKn: "ಕಾವ್ಯಾ ಅಶೋಕ್ ಜೈನ್, ಆಡಗಳಲೆ", nameEn: "Kavya Ashok Jain, Adagalale", amount: "₹ 1,000" },
  { nameKn: "ಶ್ರಾವ್ಯಾ ಅಶೋಕ್ ಜೈನ್, ಆಡಗಳಲೆ", nameEn: "Shravya Ashok Jain, Adagalale", amount: "₹ 1,000" },
  { nameKn: "ಸುಲೋಚನಾ ದೀದಿ, ಮರುಬಿಡಿ", nameEn: "Sulochana Didi, Marubidi", amount: "₹ 1,000" },
  { nameKn: "ಮೇಘರಾಜ್ ಜೈನ್, ಮಂಡವಳ್ಳಿ", nameEn: "Megharaj Jain, Mandavalli", amount: "₹ 1,000" },
  { nameKn: "ಸುಜಾತಾ ಪದ್ಮರಾಜ್ ಜೈನ್, ಸುಳ್ಳಳ್ಳಿ", nameEn: "Sujatha Padmaraj Jain, Sullalli", amount: "₹ 1,000" },
  { nameKn: "ಸುಮಾ ನಾಗಕುಮಾರ್ ಜೈನ್, ಕಾರಣಿ", nameEn: "Suma Nagakumar Jain, Karani", amount: "₹ 1,000" },
  { nameKn: "ರತ್ನಮ್ಮ, ಬ್ಯಾಕೋಡು", nameEn: "Rathnamma, Byakodu", amount: "₹ 1,000" },
  { nameKn: "ಸುಧಾ, ಬಂಗ್ಲಿ, ಆಡಗಳಲೆ", nameEn: "Sudha, Bangli, Adagalale", amount: "₹ 500" },
  { nameKn: "ಜಯಕುಮಾರ್ ಜೈನ್, ಹೊಸಳ್ಳಿ, ಇರಂದೂರು", nameEn: "Jayakumar Jain, Hosalli, Iranduru", amount: "₹ 100" },
];

const GALLERY_IMAGES = [
  {
    src: "/images/grid_construction_plan_temporary.webp",
    alt: "Temple construction plan layout - ದೇವಸ್ಥಾನದ ತಾತ್ಕಾಲಿಕ ನಿರ್ಮಾಣ ಯೋಜನೆ"
  },
  {
    src: "/images/grid_statue_carrying.webp",
    alt: "Transporting the 11-foot Bhagwan Mallinath statue - ವಿಗ್ರಹದ ಆಗಮನ ಮತ್ತು ಸಾಗಣೆ"
  },
  {
    src: "/images/grid_statue_sunlight.webp",
    alt: "Bhagwan Mallinath statue under natural sunlight - ಸೂರ್ಯನ ಬೆಳಕಿನಲ್ಲಿ ಭಗವಾನ್ ಮಲ್ಲಿನಾಥರ ಪ್ರತಿಮೆ"
  },
  {
    src: "/images/grid_muni.webp",
    alt: "Muni Shri 108 Vidith Sagar Presiding - ಪೂಜ್ಯ ಮುನಿ ಶ್ರೀ 108 ವಿದಿತ ಸಾಗರ ಮಹಾರಾಜರ ಮಾರ್ಗದರ್ಶನ"
  },
  {
    src: "/images/grid_lifting_statue_support.webp",
    alt: "Lifting the heavy statue with support - ವಿಗ್ರಹದ ಪ್ರತಿಷ್ಠಾಪನೆ ಮತ್ತು ಜೋಡಣೆ"
  },
  {
    src: "/images/grid_flag_raised.webp",
    alt: "Jain flag hosted atop the temple - ದೇಗುಲದ ಮೇಲೆ ಪವಿತ್ರ ಧರ್ಮಧ್ವಜಾರೋಹಣ"
  }
];

