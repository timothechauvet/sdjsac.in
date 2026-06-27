"use client";

import { FaWhatsapp, FaInstagram, FaFacebookF, FaCopy } from "react-icons/fa";
import { QRCodeSVG } from "qrcode.react";
import { IoCheckmarkCircleSharp, IoHourglassOutline, IoLocationSharp, IoMail, IoQrCode, IoBusiness } from "react-icons/io5";
import { useState } from "react";

const UPI_LINK = "upi://pay?pa=QR919483056445-0815@unionbankofindia&pn=SUMERU%20DIGAMBARA%20JAINA%20SABHA%20ADAGALALE%20CHANDOLLI&cu=INR&tr=FINACLE_QRCODE&mc=0000&mode=02&purpose=00&sign=MEUCIQDJwgDf14ufFFtm7RcPLVAPB4x2hmFQlCMFQjYkPpU4FwIgOxqxWlECPPDGH2gir8vUsepTFH4PMf77D68RHYtOfiw=";
const TEZ_LINK = "tez://upi/pay?pa=QR919483056445-0815@unionbankofindia&pn=SUMERU%20DIGAMBARA%20JAINA%20SABHA%20ADAGALALE%20CHANDOLLI&cu=INR&tr=FINACLE_QRCODE&mc=0000&mode=02&purpose=00&sign=MEUCIQDJwgDf14ufFFtm7RcPLVAPB4x2hmFQlCMFQjYkPpU4FwIgOxqxWlECPPDGH2gir8vUsepTFH4PMf77D68RHYtOfiw=";
const PHONEPE_LINK = "phonepe://pay?pa=QR919483056445-0815@unionbankofindia&pn=SUMERU%20DIGAMBARA%20JAINA%20SABHA%20ADAGALALE%20CHANDOLLI&cu=INR&tr=FINACLE_QRCODE&mc=0000&mode=02&purpose=00&sign=MEUCIQDJwgDf14ufFFtm7RcPLVAPB4x2hmFQlCMFQjYkPpU4FwIgOxqxWlECPPDGH2gir8vUsepTFH4PMf77D68RHYtOfiw=";
const PAYTM_LINK = "paytmmp://pay?pa=QR919483056445-0815@unionbankofindia&pn=SUMERU%20DIGAMBARA%20JAINA%20SABHA%20ADAGALALE%20CHANDOLLI&cu=INR&tr=FINACLE_QRCODE&mc=0000&mode=02&purpose=00&sign=MEUCIQDJwgDf14ufFFtm7RcPLVAPB4x2hmFQlCMFQjYkPpU4FwIgOxqxWlECPPDGH2gir8vUsepTFH4PMf77D68RHYtOfiw=";
const BHIM_LINK = "bhim://upi/pay?pa=QR919483056445-0815@unionbankofindia&pn=SUMERU%20DIGAMBARA%20JAINA%20SABHA%20ADAGALALE%20CHANDOLLI&cu=INR&tr=FINACLE_QRCODE&mc=0000&mode=02&purpose=00&sign=MEUCIQDJwgDf14ufFFtm7RcPLVAPB4x2hmFQlCMFQjYkPpU4FwIgOxqxWlECPPDGH2gir8vUsepTFH4PMf77D68RHYtOfiw=";


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
        <a className="nav__brand" href="/" aria-label="Back to top and home">
          <span className="nav__brand-kn">ಸುಮೇರು ದಿಗಂಬರ ಜೈನ ಸಭಾ</span>
          <span className="nav__brand-en">SUMERU DIGAMBARA JAIN SABHA</span>
        </a>

        <div className="nav__links">
          <a className="nav__link" href="#projects">
            PROJECTS
          </a>
          <a className="nav__link" href="#donors">
            DONORS
          </a>
          <a className="nav__link" href="#contact">
            CONTACT
          </a>
        </div>

        <a className="nav__cta" href="#donate">
          <span className="nav__cta-line">ಈಗಲೇ ದಾನ ಮಾಡಿ</span>
          <span className="nav__cta-line">DONATE NOW</span>
          <span className="nav__cta-line">अभी दान करें</span>
        </a>
      </nav>

      {/* ── Main Content ── */}
      <main className="main container">
        {/* ── Header ── */}
        <header className="hero-section">
          <div className="hero-content">
            <a className="hero-title-row" href="/#top" aria-label="Back to top and home">
              <img
                src="/favicon-96x96.png"
                alt="Sumeru Digambara Jain Sabha favicon"
                className="hero-favicon"
                width="96"
                height="96"
              />
              <div className="hero-title-copy">
                <h1 className="headline-lg-mobile hero-title-main" style={{ marginBottom: 4 }}>
                  ಸುಮೇರು ದಿಗಂಬರ ಜೈನ ಸಭಾ, ಆಡಗಳಲೆ-ಚಂದೊಳ್ಳಿ
                </h1>
                <p className="bilingual-english-sub" style={{ marginBottom: 8 }}>
                  SUMERU DIGAMBARA JAIN SABHA, Adagalale-Sullalli
                </p>
                <p className="bilingual-english-sub" style={{ marginBottom: 24 }}>
                  सुमेरु दिगंबर जैन सभा, अडगळले-चंदोल्ली
                </p>
              </div>
            </a>

            <div className="gold-border-box">
              <p className="bilingual-english-sub" style={{ marginBottom: 8 }}>
                ಮಲೆನಾಡಿನ ಹಸಿರು ಮಡಿಲಲ್ಲಿ, ಪ್ರಸಿದ್ಧ ಕೊಡಚಾದ್ರಿ ಮತ್ತು ಅಂಬರಗುಡ್ಡದ ತಪೋಭೂಮಿಯ ತಪ್ಪಲಿನ ಸನಿಹದಲ್ಲಿ, ಐತಿಹಾಸಿಕ ಸವಳನಾಡು ಸೀಮೆಯ ಒಡಲಿನಲ್ಲಿ ಈ ಪುಣ್ಯಕ್ಷೇತ್ರವಿದೆ. ಜೀವನಾಡಿ ಶರಾವತಿ ಕಣಿವೆಯ ಸುಂದರ ಪರಿಸರದಲ್ಲಿ, ಜಗತ್ಪ್ರಸಿದ್ಧ ಜೋಗ ಜಲಪಾತದ ಸಮೀಪದಲ್ಲೇ ನೆಲೆಗೊಂಡಿರುವ ಈ ಪವಿತ್ರ ಸ್ಥಳದಲ್ಲಿ, ಭಗವಾನ್ ಶ್ರೀ 1008 ಮಲ್ಲಿನಾಥ ತೀರ್ಥಂಕರರ 11 ಅಡಿ ಎತ್ತರದ ಭವ್ಯ ಪ್ರತಿಮೆ ಹಾಗೂ ಜೈನ ಮಂದಿರವು ಪ್ರಸ್ತುತ ನಿರ್ಮಾಣ ಹಂತದಲ್ಲಿದೆ.
              </p>
              <p className="bilingual-english-sub" style={{ marginBottom: 8 }}>
                Nestled in lush heart of Malenadu, at foothills of majestic Kodachadri and Ambaragudda peaks, this sacred destination lies within historic Savalanadu region. Situated in scenic Sharavathi Valley and close to world-famous Jog Falls, magnificent Jain temple housing 11-foot-tall idol of Bhagwan Shri 1008 Mallinath Tirthankara is currently under construction at this serene location.
              </p>
              <p className="bilingual-english-sub">
                मलनाडु के हरे-भरे हृदय में, भव्य कोडाचाद्रि और अम्बारगुड्डा शिखरों की तलहटी में स्थित यह पवित्र स्थान ऐतिहासिक सावलनाडु क्षेत्र के अंतर्गत आता है। रमणीय शरावती घाटी में, विश्वप्रसिद्ध जोग फॉल्स के निकट स्थित इस शांत स्थल पर भगवान श्री 1008 मल्लिनाथ तीर्थंकर की 11 फुट ऊँची प्रतिमा सहित एक भव्य जैन मंदिर वर्तमान में निर्माणाधीन है।
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
                <p style={{ marginTop: 8 }}><strong>Blessings & Guidance:</strong> Charya Shiromani Paramapujya Muni Shri 108 Vidith Sagar Maharaj</p>
                <p><strong>Support & Guidance:</strong> Pratishthacharya Pratimadhari Shri Manik Shripal Chandagade Bayyaji and Ba.Bra. Mahaveera Bayyaji</p>
                <p><strong>Planning & Engineering Drawings:</strong> Santhosh. D Jain (Engineer), <a href="https://goldenvillage.in" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline" }}>Golden Village For Image</a></p>
              </div>
            </div>

            <div className="info-box">
              <h3>ಜೈನ ಧರ್ಮ ಮತ್ತು ಅಹಿಂಸೆ</h3>
              <p>
                ಅಹಿಂಸೆಯೇ ಜೈನ ಧರ್ಮದ ಪರಮ ಧರ್ಮ ಮತ್ತು ಮೂಲ ತತ್ವವಾಗಿದೆ. ಎಲ್ಲಾ ಜೀವಿಗಳೆಡೆಗೆ ದಯೆ, ಕರುಣೆ ಮತ್ತು ಗೌರವವನ್ನು ತೋರುವುದು ಇದರ ಮೂಲ ಸಾರವಾಗಿದೆ. ನಮ್ಮ ಸಂಸ್ಕೃತಿ ಮತ್ತು ಆಧ್ಯಾತ್ಮಿಕ ಪರಂಪರೆಯನ್ನು ಸಂರಕ್ಷಿಸಲು ಈ ಪುಣ್ಯಸ್ಥಳದಲ್ಲಿ ನೂತನ ಜಿನಾಲಯದ ನಿರ್ಮಾಣ ಅತ್ಯಂತ ಮಹತ್ವದ್ದಾಗಿದೆ.
              </p>
              <div className="committee-info">
                <p style={{ marginTop: 8 }}><strong>ಆಶೀರ್ವಾದ ಮತ್ತು ಮಾರ್ಗದರ್ಶನ:</strong> ಚರ್ಯಾ ಶಿರೋಮಣಿ ಪರಮಪೂಜ್ಯ ಮುನಿ ಶ್ರೀ 108 ವಿದಿತಸಾಗರ ಮಹಾರಾಜರು</p>
                <p><strong>ಬೆಂಬಲ ಮತ್ತು ಮಾರ್ಗದರ್ಶನ:</strong> ಪ್ರತಿಷ್ಠಾಚಾರ್ಯ ಪ್ರತಿಮಾಧಾರಿ ಶ್ರೀ ಮಾಣಿಕ ಶ್ರೀಪಾಲ ಚಂದಗಡೆ ಬಯ್ಯಾಜಿ ಮತ್ತು ಬಾ.ಬ್ರ. ಮಹಾವೀರ ಬಯ್ಯಾಜಿಯವರು</p>
                <p><strong>ಯೋಜನೆ ಮತ್ತು ಎಂಜಿನಿಯರಿಂಗ್ ರೇಖಾಚಿತ್ರಗಳು:</strong> ಸಂತೋಷ್. ಡಿ ಜೈನ್ (ಎಂಜಿನಿಯರ್), <a href="https://goldenvillage.in" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline" }}>ಗೋಲ್ಡನ್ ವಿಲೇಜ್ ಫಾರ್ ಇಮೇಜ್</a></p>
              </div>
            </div>

            <div className="info-box">
              <h3>जैन धर्म और अहिंसा</h3>
              <p>
                अहिंसा जैन धर्म का परम धर्म और मूल सिद्धांत है। सभी जीवों के प्रति दया, करुणा और सम्मान रखना इसका मूल सार है। हमारी संस्कृति और आध्यात्मिक परंपरा को संरक्षित करने, समाज को समृद्ध बनाने और आने वाली पीढ़ियों के लिए एक पवित्र स्थान प्रदान करने हेतु नया जिनालय का निर्माण अत्यंत महत्वपूर्ण है।
              </p>
              <div className="committee-info">
                <p style={{ marginTop: 8 }}><strong>आशीर्वाद और मार्गदर्शन:</strong> चर्या शिरोमणि परमपूज्य मुनि श्री 108 विदितसागर महाराज</p>
                <p><strong>समर्थन और मार्गदर्शन:</strong> प्रतिष्ठाचार्य प्रतिमाधारी श्री माणिक श्रीपाल चंदगड़े बय्याजी और बा.ब्रा. महावीर बय्याजी</p>
                <p><strong>योजना और इंजीनियरिंग रेखाचित्र:</strong> संतोष डी. जैन (इंजीनियर), <a href="https://goldenvillage.in" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline" }}>गोल्डन विलेज फॉर इमेज</a></p>
              </div>
            </div>
          </div>
        </header>

        {/* ── Project Status ── */}
        <section id="projects">
          <div className="section-heading">
            <h3>ಯೋಜನೆಯ ಸ್ಥಿತಿ (Project Status / परियोजना की स्थिति)</h3>
          </div>

          <div className="status-grid" style={{ marginBottom: 24 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              <StatusItem complete title="ವಿಗ್ರಹ ಸ್ಥಾಪನೆ (Statue Installation / प्रतिमा स्थापना)" sub="Complete / पूर्ण" />
              <StatusItem title="ಸಭಾ ಭವನ (Sabha Bhavana / सभा भवन)" sub="In Progress / प्रगति पर" />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              <StatusItem title="ಗ್ರಂಥಾಲಯ (Library / पुस्तकालय)" sub="In Progress / प्रगति पर" />
              <StatusItem title="ತ್ಯಾಗಿ ನಿವಾಸ (Tyagi Nivas / त्यागी निवास)" sub="In Progress / प्रगति पर" />
            </div>
          </div>

          <div className="milestone-banner">
            <p className="milestone-banner__title">
              ಮೈಲಿಗಲ್ಲು: ಭವ್ಯ ಉದ್ಘಾಟನೆ 2027 ರ ಕೊನೆಯಲ್ಲಿ
            </p>
            <p className="bilingual-english-sub" style={{ marginBottom: 8 }}>
              Milestone: Grand Inauguration Late 2027
            </p>
            <p className="bilingual-english-sub">
              मील का पत्थर: भव्य उद्घाटन 2027 के अंत में
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
                style={{ fontWeight: 700, marginBottom: 8 }}
              >
                Inaugural Jinabimba Installation Ceremony (04-05-2026)
              </p>
              <p
                className="bilingual-english-sub"
                style={{ fontWeight: 700, marginBottom: 24 }}
              >
                उद्घाटन जिनबिंब स्थापना समारोह (04-05-2026)
              </p>

              <div className="inaugural-card__body">
                <p>
                  ಪರಮ ಪೂಜ್ಯ ಆಚಾರ್ಯ ಶ್ರೀ 108 ವಿದ್ಯಾಸಾಗರ ಮಹಾರಾಜರ ಆಶೀರ್ವಾದ
                  ಮತ್ತು ಮುನಿ ಶ್ರೀ 108 ವಿದಿತ ಸಾಗರ ಮಹಾರಾಜರ ಮಾರ್ಗದರ್ಶನದಲ್ಲಿ
                  ಜೈಪುರದಿಂದ 11 ಅಡಿ ಖಡ್ಗಾಸನ ಜಿನಬಿಂಬದ ಆಗಮನ.
                </p>
                <p className="bilingual-english-sub" style={{ marginBottom: 8 }}>
                  Arrival of the 11ft Khadgasana Jinabimba from Jaipur under the
                  divine blessings of Acharya Shri 108 Vidyasagar Maharaj and
                  the spiritual guidance of Muni Shri 108 Vidith Sagar Maharaj.
                </p>
                <p className="bilingual-english-sub">
                  आचार्य श्री 108 विद्यासागर महाराज के दिव्य आशीर्वाद और मुनि श्री 108 विदित सागर महाराज के आध्यात्मिक मार्गदर्शन में जयपुर से 11 फुट खड्गासन जिनबिंब का आगमन।
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
            <h3>ಹಣಕಾಸು ಪಾವತಿ (Financial Remittance / वित्तीय प्रेषण)</h3>
          </div>

          <div className="donate-grid">
            {/* UPI QR Card */}
            <div className="qr-card">
              <div className="qr-card__header">
                <IoQrCode style={{ color: "var(--accent-gold)", fontSize: 20 }} />
                <h4>ಯುಪಿಐ ಪಾವತಿ (UPI QR / यूपीआई क्यूआर)</h4>
              </div>
              <div className="qr-card__qr-wrapper">
                <div className="qr-card__bhim-badge">
                  <img
                    src="/images/bhim_upi.webp"
                    alt="BHIM UPI Logo"
                    className="qr-card__bhim-logo"
                    width="120"
                    height="16"
                    loading="lazy"
                  />
                </div>
                <QRCodeSVG
                  value={UPI_LINK}
                  title="UPI QR Code - SUMERU DIGAMBARA JAINA SABHA"
                  size={240}
                  level="M"
                  includeMargin={true}
                  className="qr-card__qr-image"
                />
                <p className="body-sm qr-card__scan-text">
                  ಸ್ಕ್ಯಾನ್ ಮಾಡಿ ಮತ್ತು ದಾನ ಮಾಡಿ
                  <br />
                  Scan and Donate
                  <br />
                  स्कैन करें और दान करें
                </p>
              </div>
              <div className="qr-card__apps-section">
                <p className="bank-field__label qr-card__apps-title">DONATE WITH UPI</p>
                <div className="qr-card__apps-grid">
                  <a className="upi-app-button upi-app-button--gpay" href={TEZ_LINK} aria-label="Donate with Google Pay">
                    <img src="/images/payment_system_icon/gpay.svg" alt="Google Pay" className="upi-app-button__logo-image" />
                    <span className="upi-app-button__subtitle">Google Pay</span>
                  </a>
                  <a className="upi-app-button upi-app-button--phonepe" href={PHONEPE_LINK} aria-label="Donate with PhonePe">
                    <img src="/images/payment_system_icon/phonepe.svg" alt="PhonePe" className="upi-app-button__logo-image" />
                    <span className="upi-app-button__subtitle">PhonePe</span>
                  </a>
                  <a className="upi-app-button upi-app-button--paytm" href={PAYTM_LINK} aria-label="Donate with Paytm">
                    <img src="/images/payment_system_icon/paytm.svg" alt="Paytm" className="upi-app-button__logo-image" />
                    <span className="upi-app-button__subtitle">Paytm</span>
                  </a>
                  <a className="upi-app-button upi-app-button--bhim" href={BHIM_LINK} aria-label="Donate with BHIM">
                    <img src="/images/payment_system_icon/bhim.svg" alt="BHIM" className="upi-app-button__logo-image" />
                    <span className="upi-app-button__subtitle">BHIM</span>
                  </a>
                </div>
              </div>
              <div style={{ marginTop: 8, textAlign: "left", width: "100%", display: "flex", flexDirection: "column", gap: 16 }}>
                <div>
                  <p className="bank-field__label">ಖಾತೆ ಹೆಸರು / ACCOUNT NAME / खाता नाम</p>
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
                  <p className="bank-field__label">ಯುಪಿಐ ಐಡಿ / UPI ID / यूपीआई आईडी</p>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 }}>
                    <span className="bank-field__value upi-id" style={{ fontSize: 16 }}>QR919483056445-0815@<wbr />unionbankofindia</span>
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
            </div>

            {/* Bank Card (Wire Transfer / बैंक हस्तांतरण) */}
            <div className="bank-card">
              <div className="bank-card__header">
                <IoBusiness style={{ color: "var(--accent-gold)", fontSize: 20 }} />
                <h4>ಬ್ಯಾಂಕ್ ವಿವರಗಳು (Bank Details / बैंक विवरण)</h4>
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
                  <p className="bank-field__label">ಖಾತೆ ಹೆಸರು / ACCOUNT NAME / खाता नाम</p>
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
                  <p className="bank-field__label">ಬ್ಯಾಂಕ್ / BANK / बैंक</p>
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
                  <p className="bank-field__label">ಖಾತೆ ಸಂಖ್ಯೆ / ACCOUNT NUMBER / खाता संख्या</p>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 }}>
                    <span className="bank-field__value" style={{ fontSize: 16 }}>328422010000815</span>
                    <button 
                      onClick={() => handleCopy("328422010000815", "acc")}
                      style={{ background: "none", border: "none", cursor: "pointer", color: "var(--accent-gold)", padding: 4, display: "flex", alignItems: "center", gap: 4, fontSize: 12, fontWeight: 700 }}
                    >
                      <FaCopy size={14} />
                      {copiedText === "acc" ? "Copied!" : "Copy"}
                    </button>
                  </div>
                </div>

                <div>
                  <p className="bank-field__label">ಐಎಫ್‌ಎಸ್‌ಸಿ ಕೋಡ್ / IFSC CODE / आईएफएससी कोड</p>
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
                  <p className="bank-field__label">ಶಾಖೆ ವಿವರಗಳು / BRANCH ADDRESS / शाखा पता</p>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 }}>
                    <span className="bank-field__value" style={{ fontSize: 16 }}>Adagalale-Sullalli, Sagar Taluk, Shivamogga, Karnataka, Pin: 577453, India</span>
                    <button 
                      onClick={() => handleCopy("Adagalale-Sullalli, Sagar Taluk, Shivamogga, Karnataka, Pin: 577453, India", "branch")}
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
              ಉದಾರ ದಾನಿಗಳು / Generous Donors / उदार दानदाता (&gt; 1 Lakh)
            </p>
            <div className="donor-major-grid">
              <DonorMajor nameKn="ರೇವತಿ ಜಿನದತ್ತ ಎಂ. ಡಿ., ಮಡದೂರು, ಆಡಗಳಲೆ" nameEn="Revathi Jinadatta M.D., Madadur, Adagalale" amount="₹ 5,00,000" />
              <DonorMajor nameKn="ಬಿ ಜೆ ವೀರೇಂದ್ರ ಕುಮಾರ್, ಅಡ್ವೋಕೇಟ್, ಶ್ರೀಮತಿ ಸಪ್ನಾ ಕುಮಾರ್, ಕುಮಾರಿ. ಪ್ರಾರ್ಥನಾ ಜೈನ್, ಸಿ.ಎ., ನಾಗರಭಾವಿ, ಬೆಂಗಳೂರು" nameEn="B J Veerendra Kumar, Advocate, Smt.Sapna Kumar, Ms. Prarthana Jain, C.A., Nagarbhavi, Bangalore" amount="₹ 3,70,000" />
              <DonorMajor nameKn="ತಿಮೊಥೆ ಶಾವೆ, ಪ್ಯಾರಿಸ್, ಫ್ರಾನ್ಸ್" nameEn="Timothé Chauvet, Paris, France" amount="₹ 2,20,000" link="https://timothechau.vet" />
              <DonorMajor nameKn="ಡಾ. ಆದರ್ಶ್ ಜೈನ್, ಡುಯಿಸ್ಬರ್ಗ್, ಜರ್ಮನಿ" nameEn="Dr. Adarsh Jain, Duisburg, Germany" amount="₹ 2,00,000" link="https://adarshjain.de" />
            </div>
          </div>

          {/* Minor Donors */}
          <div>
            <p className="donor-category-label">
              ದಾನಿಗಳು / Donors / दानदाता (&lt; 1 Lakh)
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
            <h3>ನಮ್ಮ ಗ್ಯಾಲರಿ (Our Gallery / हमारी गैलरी)</h3>
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
                ಇನ್‌ಸ್ಟಾಗ್ರಾಮ್‌ನಲ್ಲಿ ನಮ್ಮನ್ನು ಅನುಸರಿಸಿ / FOLLOW US ON INSTAGRAM / इंस्टाग्राम पर हमें फ़ॉलो करें
              </a>
            </div>
          </div>
        </section>

        {/* ── Committee / ಸಮಿತಿ ── */}
        <section id="committee">
          <div className="section-heading">
            <h3>ಸಮಿತಿ ಸದಸ್ಯರು (Committee Members / समिति सदस्य)</h3>
          </div>

          <div className="committee-cards-grid">
            {/* President */}
            <div className="committee-member-card">
              <div className="committee-member-photo" aria-label="President photo placeholder" />
              <div className="committee-member-details">
                <p className="label-caps" style={{ color: "var(--accent-gold)", marginBottom: 4 }}>
                  ಅಧ್ಯಕ್ಷರು / PRESIDENT / अध्यक्ष
                </p>
                <h4 className="committee-member-name">ಜಿನದತ್ತ ಎಂ.ಡಿ. ಜೈನ್</h4>
                <p className="bilingual-english-sub" style={{ marginBottom: 8 }}>Jinadatta M.D. Jain</p>
                <p className="bilingual-english-sub" style={{ marginBottom: 12 }}>जिनदत्त एम.डी. जैन</p>
                <div className="committee-member-info">
                  <div className="committee-member-info-row">
                    <IoLocationSharp size={14} style={{ flexShrink: 0, marginTop: 2 }} />
                    <span>Adagalale, Shivamogga, Karnataka</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Vice President */}
            <div className="committee-member-card">
              <div className="committee-member-photo" aria-label="Vice President photo placeholder" />
              <div className="committee-member-details">
                <p className="label-caps" style={{ color: "var(--accent-gold)", marginBottom: 4 }}>
                  ಉಪಾಧ್ಯಕ್ಷರು / VICE PRESIDENT / उपाध्यक्ष
                </p>
                <h4 className="committee-member-name">ಪುಟ್ಟಸ್ವಾಮಿ ಜೈನ್</h4>
                <p className="bilingual-english-sub" style={{ marginBottom: 8 }}>Puttaswamy Jain</p>
                <p className="bilingual-english-sub" style={{ marginBottom: 12 }}>पुट्टस्वामी जैन</p>
                <div className="committee-member-info">
                  <div className="committee-member-info-row">
                    <IoLocationSharp size={14} style={{ flexShrink: 0, marginTop: 2 }} />
                    <span>Chandolli, Shivamogga, Karnataka</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Secretary */}
            <div className="committee-member-card">
              <div className="committee-member-photo" aria-label="Secretary photo placeholder" />
              <div className="committee-member-details">
                <p className="label-caps" style={{ color: "var(--accent-gold)", marginBottom: 4 }}>
                  ಕಾರ್ಯದರ್ಶಿ / SECRETARY / सचिव
                </p>
                <h4 className="committee-member-name">ಪವನ್ ಸಿ. ಜೈನ್</h4>
                <p className="bilingual-english-sub" style={{ marginBottom: 8 }}>Pavan C. Jain</p>
                <p className="bilingual-english-sub" style={{ marginBottom: 12 }}>पवन सी. जैन</p>
                <div className="committee-member-info">
                  <div className="committee-member-info-row">
                    <IoLocationSharp size={14} style={{ flexShrink: 0, marginTop: 2 }} />
                    <span>Adagalale, Shivamogga, Karnataka</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Joint Secretary */}
            <div className="committee-member-card">
              <div className="committee-member-photo" aria-label="Joint Secretary photo placeholder" />
              <div className="committee-member-details">
                <p className="label-caps" style={{ color: "var(--accent-gold)", marginBottom: 4 }}>
                  ಸಹಾಯಕ ಕಾರ್ಯದರ್ಶಿ / JOINT SECRETARY / सहायक सचिव
                </p>
                <h4 className="committee-member-name">ಅಶೋಕ್ ಎ.ಡಿ. ಜೈನ್</h4>
                <p className="bilingual-english-sub" style={{ marginBottom: 8 }}>Ashok A.D. Jain</p>
                <p className="bilingual-english-sub" style={{ marginBottom: 12 }}>अशोक ए.डी. जैन</p>
                <div className="committee-member-info">
                  <div className="committee-member-info-row">
                    <IoLocationSharp size={14} style={{ flexShrink: 0, marginTop: 2 }} />
                    <span>Adagalale, Shivamogga, Karnataka</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Joint Secretary */}
            <div className="committee-member-card">
              <div className="committee-member-photo" aria-label="Joint Secretary photo placeholder" />
              <div className="committee-member-details">
                <p className="label-caps" style={{ color: "var(--accent-gold)", marginBottom: 4 }}>
                  ಸಹಾಯಕ ಕಾರ್ಯದರ್ಶಿ / JOINT SECRETARY / सहायक सचिव
                </p>
                <h4 className="committee-member-name">ಸುನಿಲ್ ಎ.ಸಿ. ಜೈನ್</h4>
                <p className="bilingual-english-sub" style={{ marginBottom: 8 }}>Sunil A.C. Jain</p>
                <p className="bilingual-english-sub" style={{ marginBottom: 12 }}>सुनील ए.सी. जैन</p>
                <div className="committee-member-info">
                  <div className="committee-member-info-row">
                    <IoLocationSharp size={14} style={{ flexShrink: 0, marginTop: 2 }} />
                    <span>Adagalale, Shivamogga, Karnataka</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Treasurer */}
            <div className="committee-member-card">
              <div className="committee-member-photo" aria-label="Treasurer photo placeholder" />
              <div className="committee-member-details">
                <p className="label-caps" style={{ color: "var(--accent-gold)", marginBottom: 4 }}>
                  ಖಜಾಂಚಿ / TREASURER / कोषाध्यक्ष
                </p>
                <h4 className="committee-member-name">ಪದ್ಮರಾಜ್ ಎ.ಎನ್. ಜೈನ್</h4>
                <p className="bilingual-english-sub" style={{ marginBottom: 8 }}>Padmaraj A.N. Jain</p>
                <p className="bilingual-english-sub" style={{ marginBottom: 12 }}>पद्मराज ए.एन. जैन</p>
                <div className="committee-member-info">
                  <div className="committee-member-info-row">
                    <IoLocationSharp size={14} style={{ flexShrink: 0, marginTop: 2 }} />
                    <span>Adagalale, Shivamogga, Karnataka</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Director */}
            <div className="committee-member-card">
              <div className="committee-member-photo" aria-label="Director photo placeholder" />
              <div className="committee-member-details">
                <p className="label-caps" style={{ color: "var(--accent-gold)", marginBottom: 4 }}>
                  ನಿರ್ದೇಶಕರು / DIRECTOR / निदेशक
                </p>
                <h4 className="committee-member-name">ಕೋಮರಾಜ್ ಜೈನ್</h4>
                <p className="bilingual-english-sub" style={{ marginBottom: 8 }}>Komaraj Jain</p>
                <p className="bilingual-english-sub" style={{ marginBottom: 12 }}>कोमराज जैन</p>
                <div className="committee-member-info">
                  <div className="committee-member-info-row">
                    <IoLocationSharp size={14} style={{ flexShrink: 0, marginTop: 2 }} />
                    <span>Adagalale, Shivamogga, Karnataka</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Director */}
            <div className="committee-member-card">
              <div className="committee-member-photo" aria-label="Director photo placeholder" />
              <div className="committee-member-details">
                <p className="label-caps" style={{ color: "var(--accent-gold)", marginBottom: 4 }}>
                  ನಿರ್ದೇಶಕರು / DIRECTOR / निदेशक
                </p>
                <h4 className="committee-member-name">ಪದ್ಮಯ್ಯ (ರವಿ) ಜೈನ್</h4>
                <p className="bilingual-english-sub" style={{ marginBottom: 8 }}>Padmayya (Ravi) Jain</p>
                <p className="bilingual-english-sub" style={{ marginBottom: 12 }}>पद्मय्या (रवि) जैन</p>
                <div className="committee-member-info">
                  <div className="committee-member-info-row">
                    <IoLocationSharp size={14} style={{ flexShrink: 0, marginTop: 2 }} />
                    <span>Adagalale, Shivamogga, Karnataka</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Director */}
            <div className="committee-member-card">
              <div className="committee-member-photo" aria-label="Director photo placeholder" />
              <div className="committee-member-details">
                <p className="label-caps" style={{ color: "var(--accent-gold)", marginBottom: 4 }}>
                  ನಿರ್ದೇಶಕರು / DIRECTOR / निदेशक
                </p>
                <h4 className="committee-member-name">ನೀಲಕುಮಾರ್ ಜೈನ್</h4>
                <p className="bilingual-english-sub" style={{ marginBottom: 8 }}>Neelkumar Jain</p>
                <p className="bilingual-english-sub" style={{ marginBottom: 12 }}>नीलकुमार जैन</p>
                <div className="committee-member-info">
                  <div className="committee-member-info-row">
                    <IoLocationSharp size={14} style={{ flexShrink: 0, marginTop: 2 }} />
                    <span>Adagalale, Shivamogga, Karnataka</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Director */}
            <div className="committee-member-card">
              <div className="committee-member-photo" aria-label="Director photo placeholder" />
              <div className="committee-member-details">
                <p className="label-caps" style={{ color: "var(--accent-gold)", marginBottom: 4 }}>
                  ನಿರ್ದೇಶಕರು / DIRECTOR / निदेशक
                </p>
                <h4 className="committee-member-name">ಅಶೋಕ್ ಎ.ಬಿ. ಜೈನ್</h4>
                <p className="bilingual-english-sub" style={{ marginBottom: 8 }}>Ashok A.B. Jain</p>
                <p className="bilingual-english-sub" style={{ marginBottom: 12 }}>अशोक ए.बी. जैन</p>
                <div className="committee-member-info">
                  <div className="committee-member-info-row">
                    <IoLocationSharp size={14} style={{ flexShrink: 0, marginTop: 2 }} />
                    <span>Adagalale, Shivamogga, Karnataka</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Director */}
            <div className="committee-member-card">
              <div className="committee-member-photo" aria-label="Director photo placeholder" />
              <div className="committee-member-details">
                <p className="label-caps" style={{ color: "var(--accent-gold)", marginBottom: 4 }}>
                  ನಿರ್ದೇಶಕರು / DIRECTOR / निदेशक
                </p>
                <h4 className="committee-member-name">ಅಭಿಜಿತ್ ಎ.ಪಿ. ಜೈನ್</h4>
                <p className="bilingual-english-sub" style={{ marginBottom: 8 }}>Abhijith A.P. Jain</p>
                <p className="bilingual-english-sub" style={{ marginBottom: 12 }}>अभिजित ए.पी. जैन</p>
                <div className="committee-member-info">
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
            <h3>ಸ್ಥಳ ಮತ್ತು ನಿರ್ದೇಶಾಂಕಗಳು (Visit & Location / स्थान)</h3>
          </div>

          <div className="location-grid">
            <div className="location-info">
              <div>
                <p className="location-info__address">
                  ಆಡಗಳಲೆ-ಚಂದೊಳ್ಳಿ, ಶಿವಮೊಗ್ಗ ಜಿಲ್ಲೆ, ಕರ್ನಾಟಕ
                </p>
                <p className="bilingual-english-sub" style={{ marginBottom: 8 }}>
                  Adagalale-Sullalli, Shivamogga District, Karnataka
                </p>
                <p className="bilingual-english-sub">
                  अडगळले-चंदोल्ली, शिवमोग्गा जिला, कर्नाटक
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
                  Open in Google Maps
                </span>
              </a>
            </div>
            <div className="location-map">
              <iframe
                title="Google Maps location of Sumeru Digambara Jain Sabha"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1936.013362740682!2d74.8117103!3d13.9570144!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbc7b0043fe370d%3A0x70049cc10bd865e5!2sSumeru%20Digambara%20Jain%20Sabha%2C%20Adagalale-Sullalli!5e0!3m2!1sen!2sfr!4v1781599626649!5m2!1sen!2sfr"
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
                SUMERU DIGAMBARA JAIN SABHA, Adagalale-Sullalli
              </p>
              <p className="label-caps" style={{ color: "var(--text-secondary)", letterSpacing: "0.08em", marginTop: 4 }}>
                सुमेरु दिगंबर जैन सभा, अडगळले-चंदोल्ली
              </p>
            </div>

            <div className="social-grid">
              <a href="mailto:contact@sdjsac.in" className="social-button">
                <div className="social-button__icon">
                  <IoMail />
                </div>
                <span className="social-button__label">EMAIL</span>
                <span className="social-button__value">contact@sdjsac.in</span>
              </a>

              <a href="https://tmth.fr/wasdjsac" className="social-button" target="_blank" rel="noopener noreferrer">
                <div className="social-button__icon">
                  <FaWhatsapp />
                </div>
                <span className="social-button__label">WHATSAPP</span>
                <span className="social-button__value">+91 XXXXX XXXXX</span>
              </a>

              <a href="https://www.instagram.com/sumeru_digambara_jain_sabha/" className="social-button" target="_blank" rel="noopener noreferrer">
                <div className="social-button__icon">
                  <FaInstagram />
                </div>
                <span className="social-button__label">INSTAGRAM</span>
                <span className="social-button__value">@sumeru_digambara...</span>
              </a>

              <a href="https://www.facebook.com/profile.php?id=61590645158390" className="social-button" target="_blank" rel="noopener noreferrer">
                <div className="social-button__icon">
                  <FaFacebookF />
                </div>
                <span className="social-button__label">FACEBOOK</span>
                <span className="social-button__value">Sumeru Digambara</span>
              </a>
            </div>
          </div>

          <div className="footer__copyright">
            <p>© 2026 SUMERU DIGAMBARA JAIN SABHA.</p>
            <p className="footer__copyright-en">All Rights Reserved.</p>
            <p className="footer__copyright-en"><a href="/privacy-policy" style={{ textDecoration: "underline" }}>Privacy Policy</a></p>
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
  const [firstKn, ...restKnParts] = nameKn.split(", ");
  const [firstEn, ...restEnParts] = nameEn.split(", ");
  const restKn = restKnParts.join(", ");
  const restEn = restEnParts.join(", ");

  return (
    <div className="donor-major-item">
      <div>
        <p className="donor-major-item__name">
          {link ? (
            <>
              <a href={link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline" }}>
                {firstKn}
              </a>
              {restKn ? `, ${restKn}` : ""}
            </>
          ) : (
            nameKn
          )}
        </p>
        <p className="donor-major-item__sub">
          {link ? (
            <>
              <a href={link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline" }}>
                {firstEn}
              </a>
              {restEn ? `, ${restEn}` : ""}
            </>
          ) : (
            nameEn
          )}
        </p>
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
  { nameKn: "ಚಂದ್ರಕಲಾ ವಿಮಲ್‌ಕುಮಾರ್ ಜೈನ್, ಮರಾಠಿ", nameEn: "Chandrakala Vimalkumar Jain, Marati", amount: "₹ 5,108" },
  { nameKn: "ಮಾಲತಿ ಸಂತೋಷ್ ಜೈನ್, (ಮಡದೂರು, ಆಡಗಳಲೆ) ಬೆಂಗಳೂರು", nameEn: "Malathi Santhosh Jain, (Madadur, Adagalale) Bengaluru", amount: "₹ 5,008" },
  { nameKn: "ನಾಗರತ್ನ ಧನಪಾಲ್ ಜೈನ್, ಮಡದೂರು, ಆಡಗಳಲೆ", nameEn: "Nagarathna Dhanapal Jain, Madadur, Adagalale", amount: "₹ 5,000" },
  { nameKn: "ಪದ್ಮರಾಜ್ ಎ. ಎನ್., ಆಡಗಳಲೆ", nameEn: "Padmaraj A. N., Adagalale", amount: "₹ 5,000" },
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
  { nameKn: "ಚೇತನಾ ಮಂಜಯ್ಯ ಎ. ಪಿ., ಆಡಗಳಲೆ", nameEn: "Chethana Manjayya A. P., Adagalale", amount: "₹ 3,000" },
  { nameKn: "ಪದ್ಮಲತಾ ಪ್ರಸಿದ್ಧ ಜೈನ್, (ಸಂಸೆ) ಬೆಂಗಳೂರು", nameEn: "Padmalatha Prasidda Jain, (Samse) Bengaluru", amount: "₹ 3,000" },
  { nameKn: "ವಿನುತಾ, ದಿವ್ಯಾ, ಭವ್ಯಾ ಜೈನ್, ಆಡಗಳಲೆ", nameEn: "Vinutha, Divya, Bhavya Jain, Adagalale", amount: "₹ 3,000" },
  { nameKn: "ಚೂಡರತ್ನ ಎ. ಜೆ., ಆಡಗಳಲೆ", nameEn: "Chudarathna A. J., Adagalale", amount: "₹ 2,500" },
  { nameKn: "ಸ್ಫೂರ್ತಿ, ಕೀರ್ತಿ ಜೈನ್, ಆಡಗಳಲೆ", nameEn: "Spurthi, Keerthi Jain, Adagalale", amount: "₹ 2,030" },
  { nameKn: "ಉದಂಕ, ಉಲ್ಲಾಸ್ ಜೈನ್, ಆಡಗಳಲೆ", nameEn: "Udanka, Ullas Jain, Adagalale", amount: "₹ 2,020" },
  { nameKn: "ಆರ್ವಿ, ಪ್ರೀತಮ್ ಜೈನ್, ಆಡಗಳಲೆ", nameEn: "Arvi, Preetham Jain, Adagalale", amount: "₹ 2,016" },
  { nameKn: "ಕಲಾವತಿ ಚೂಡರತ್ನ ಎ. ಎನ್., ಆಡಗಳಲೆ", nameEn: "Kalavathi Chudarathna A. N., Adagalale", amount: "₹ 2,000" },
  { nameKn: "ಸುಧಾ ಸೋಮರಾಜ್ ಜೈನ್, ಬಂಗ್ಲಿ, ಆಡಗಳಲೆ", nameEn: "Sudha Somaraj Jain, Bangli, Adagalale", amount: "₹ 2,000" },
  { nameKn: "ನಾಗಮ್ಮ ದ್ಯಾವಪ್ಪ ಜೈನ್, ಆಡಗಳಲೆ", nameEn: "Nagamma Dhyavappa Jain, Adagalale", amount: "₹ 2,000" },
  { nameKn: "ಕಿರಣ ಪುಟ್ಟಸ್ವಾಮಿ ಜೈನ್, ಚಂದೊಳ್ಳಿ", nameEn: "Kirana Puttaswami Jain, Chandolli", amount: "₹ 2,000" },
  { nameKn: "ಶಾಂತಿರಾಜ್ ಜೈನ್, ಯಲದಮಕ್ಕಿ", nameEn: "Shanthiraj Jain, Yaladamakki", amount: "₹ 2,000" },
  { nameKn: "ಅನಿತಾ ಮಹಾವೀರ್ ಜೈನ್, ಮುತ್ತತ್ತಿ", nameEn: "Aneetha Mahaveer Jain, Muttatti", amount: "₹ 1,010" },
  { nameKn: "ಶ್ರುತಾ, ಧನ್ವಿತಾ ಪಿ ಜೈನ್, (ಸಂಸೆ) ಮಂಗಳೂರು", nameEn: "Shrutha, Dhanwitha P Jain, (Samse) Mangaluru", amount: "₹ 1,010" },
  { nameKn: "ಅರ್ಚನಾ ಶಿಶುಪಾಲ್ ಜೈನ್, ಆಡಗಳಲೆ", nameEn: "Archana Shishupal Jain, Adagalale", amount: "₹ 1,008" },
  { nameKn: "ಅರ್ಪಿತಾ ಜೈನ್, ಹಳ್ಳಿ", nameEn: "Arpitha Jain, Halli", amount: "₹ 1,008" },
  { nameKn: "ಕಲ್ಪಿತ್ ಜೈನ್, (ಮಡದೂರು, ಆಡಗಳಲೆ) ಬೆಂಗಳೂರು", nameEn: "Kalpith Jain, (Madadur, Adagalale) Bengaluru", amount: "₹ 1,008" },
  { nameKn: "ಆದಿರಾಜ್ ಜೈನ್, ದೀಟೆಕೊಪ್ಪ", nameEn: "Adiraj Jain, Deetekoppa", amount: "₹ 1,008" },
  { nameKn: "ಚೈತ್ರಾ ಮಂಜಯ್ಯ ಜೈನ್, ನಲ್ಲಿಬೀಡು", nameEn: "Chaitra Manjayya Jain, Nallibidu", amount: "₹ 1,008" },
  { nameKn: "ನಾಗರತ್ನ ನೀಲಕುಮಾರ್ ಜೈನ್, ನಲ್ಲಿಬೀಡು", nameEn: "Nagarathna Neelkumar Jain, Nallibidu", amount: "₹ 1,008" },
  { nameKn: "ರಶ್ಮಿ ರವಿ ಜೈನ್, ಬಂಗ್ಲಿ, ಆಡಗಳಲೆ", nameEn: "Rashmi Ravi Jain, Bangli, Adagalale", amount: "₹ 1,008" },
  { nameKn: "ಸುಮತಿ ಪದ್ಮರಾಜ್ ಜೈನ್, ಆಡಗಳಲೆ", nameEn: "Sumathi Padmaraj Jain, Adagalale", amount: "₹ 1,000" },
  { nameKn: "ರತ್ನಮ್ಮ, ಬಂಗ್ಲಿ, ಆಡಗಳಲೆ", nameEn: "Rathnamma, Bangli, Adagalale", amount: "₹ 1,000" },
  { nameKn: "ನಿರ್ಮಲಾ ಕಾಂತರಾಜ ಜೈನ್, ಚಂದೊಳ್ಳಿ", nameEn: "Nirmala Kantharaj Jain, Chandolli", amount: "₹ 1,000" },
  { nameKn: "ದಿವ್ಯಾ ಅಶೋಕ್ ಜೈನ್, ಬಂಗ್ಲಿ, ಆಡಗಳಲೆ", nameEn: "Divya Ashok Jain, Bangli, Adagalale", amount: "₹ 1,000" },
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

