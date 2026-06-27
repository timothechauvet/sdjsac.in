import { FaWhatsapp, FaInstagram, FaFacebookF } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

export const metadata = {
  title: "Privacy Policy | SUMERU DIGAMBARA JAIN SABHA",
  description: "Privacy policy for sdjsac.in.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <nav className="nav" id="top">
        <a className="nav__brand" href="/" aria-label="Back to home">
          <span className="nav__brand-kn">ಸುಮೇರು ದಿಗಂಬರ ಜೈನ ಸಭಾ</span>
          <span className="nav__brand-en">SUMERU DIGAMBARA JAIN SABHA</span>
        </a>

        <div className="nav__links"></div>

        <a className="btn-outline nav__back-home" href="/">
          <span className="nav__cta-line">ಮುಖಪುಟಕ್ಕೆ ಹಿಂತಿರುಗಿ</span>
          <span className="nav__cta-line">BACK TO HOME</span>
          <span className="nav__cta-line">मुखपृष्ठ पर वापस जाएँ</span>
        </a>
      </nav>

      <main className="main container">
        <header className="hero-section">
          <div className="hero-content">
            <a className="hero-title-row" href="/" aria-label="Back to home">
              <img
                src="/favicon-96x96.png"
                alt="Sumeru Digambara Jain Sabha favicon"
                className="hero-favicon"
                width="96"
                height="96"
              />
              <div className="hero-title-copy">
                <h1 className="headline-lg-mobile hero-title-main" style={{ marginBottom: 4 }}>
                  ಗೌಪ್ಯತಾ ನೀತಿ
                </h1>
                <p className="bilingual-english-sub" style={{ marginBottom: 8 }}>
                  PRIVACY POLICY
                </p>
                <p className="bilingual-english-sub" style={{ marginBottom: 24 }}>
                  गोपनीयता नीति
                </p>
              </div>
            </a>

            <div className="gold-border-box" id="policy">
              <p className="bilingual-english-sub" style={{ marginBottom: 12 }}>
                This website does not store personal data about visitors. We do not use cookies. We do not run analytics, advertising trackers, or third-party data collection scripts. Contact point for privacy matters and Data Protection Officer contact: Timothé Chauvet at contact@sdjsac.in.
              </p>
              <p className="bilingual-english-sub" style={{ marginBottom: 12 }}>
                ಈ ವೆಬ್‌ಸೈಟ್ ಭೇಟಿ ನೀಡುವವರ ವೈಯಕ್ತಿಕ ಮಾಹಿತಿಯನ್ನು ಸಂಗ್ರಹಿಸುವುದಿಲ್ಲ. ನಾವು ಕುಕೀಸ್ ಬಳಸುವುದಿಲ್ಲ. ನಾವು ವಿಶ್ಲೇಷಣೆ, ಜಾಹೀರಾತು ಟ್ರ್ಯಾಕರ್‌ಗಳು ಅಥವಾ ತೃತೀಯ ಪಕ್ಷದ ಡೇಟಾ ಸಂಗ್ರಹಣಾ ಸ್ಕ್ರಿಪ್ಟ್‌ಗಳನ್ನು ಬಳಸುವುದಿಲ್ಲ. ಗೌಪ್ಯತೆ ಮತ್ತು ಡೇಟಾ ರಕ್ಷಣೆ ಸಂಬಂಧಿತ ಸಂಪರ್ಕಕ್ಕಾಗಿ: Timothé Chauvet, contact@sdjsac.in.
              </p>
              <p className="bilingual-english-sub" style={{ marginBottom: 12 }}>
                यह वेबसाइट आगंतुकों का व्यक्तिगत डेटा संग्रहित नहीं करती। हम कुकीज़ का उपयोग नहीं करते। हम एनालिटिक्स, विज्ञापन ट्रैकर या तृतीय-पक्ष डेटा संग्रह स्क्रिप्ट का उपयोग नहीं करते। गोपनीयता एवं डेटा सुरक्षा विषयों के लिए संपर्क: Timothé Chauvet, contact@sdjsac.in.
              </p>
              <p className="bilingual-english-sub">
                No personal data storage. No cookies. No analytics trackers.
              </p>
            </div>
          </div>
        </header>
      </main>

      <footer className="footer" id="contact">
        <div className="footer__inner">
          <div style={{ flex: 1 }}>
            <div className="footer__brand">
              <h2>ಸುಮೇರು ದಿಗಂಬರ ಜೈನ ಸಭಾ</h2>
              <p className="label-caps" style={{ color: "var(--text-secondary)", letterSpacing: "0.1em" }}>
                SUMERU DIGAMBARA JAIN SABHA, Adagalale-Chandolli
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

              <a href="https://wa.me/919449793112" className="social-button" target="_blank" rel="noopener noreferrer">
                <div className="social-button__icon">
                  <FaWhatsapp />
                </div>
                <span className="social-button__label">WHATSAPP</span>
                <span className="social-button__value">+91 944 9793 112</span>
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
