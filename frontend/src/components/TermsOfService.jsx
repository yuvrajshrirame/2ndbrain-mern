import React from 'react';
import { Link } from 'react-router-dom';

const LAST_UPDATED = 'November 5, 2025';
const APP_NAME = '2ndBrain';
const CONTACT_EMAIL = 'mail.yuvrajshrirame@gmail.com';
const GITHUB_URL = 'https://github.com/yuvrajshrirame/2ndbrain-mern';

function LegalNav() {
  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        padding: '1.25rem 4rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 100,
        background: 'rgba(2, 2, 3, 0.75)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.07)',
        boxSizing: 'border-box',
      }}
    >
      <Link
        to="/"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          textDecoration: 'none',
        }}
      >
        <img src="/puzzle.png" alt="logo" style={{ width: '18px', height: '18px', opacity: 0.9 }} />
        <span
          style={{
            fontWeight: 800,
            color: '#fff',
            fontSize: '0.95rem',
            letterSpacing: '2px',
            fontFamily: "'Inter', system-ui, sans-serif",
          }}
        >
          2NDBRAIN
        </span>
      </Link>
      <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
        <Link
          to="/privacy"
          style={{
            color: '#888',
            textDecoration: 'none',
            fontFamily: 'var(--font-sans)',
            fontSize: '0.7rem',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            transition: 'color 0.2s',
          }}
          onMouseEnter={(e) => (e.target.style.color = '#fff')}
          onMouseLeave={(e) => (e.target.style.color = '#888')}
        >
          Privacy
        </Link>
        <Link
          to="/"
          style={{
            background: 'transparent',
            color: '#fff',
            border: '1px solid rgba(255,255,255,0.2)',
            padding: '0.5rem 1.5rem',
            borderRadius: '4px',
            fontFamily: 'var(--font-sans)',
            fontSize: '0.7rem',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            cursor: 'pointer',
            textDecoration: 'none',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'var(--accent)';
            e.currentTarget.style.color = '#000';
            e.currentTarget.style.borderColor = 'var(--accent)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.color = '#fff';
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
          }}
        >
          ← Back to App
        </Link>
      </div>
    </nav>
  );
}

function Section({ title, tag, children }) {
  return (
    <section style={{ marginBottom: '3.5rem' }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'baseline',
          gap: '1rem',
          marginBottom: '1.25rem',
          paddingBottom: '0.75rem',
          borderBottom: '1px solid #1a1a1a',
        }}
      >
        {tag && (
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.65rem',
              color: 'var(--accent)',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              flexShrink: 0,
            }}
          >
            {tag}
          </span>
        )}
        <h2
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '1.6rem',
            fontWeight: 300,
            color: '#fff',
            margin: 0,
            lineHeight: 1.3,
          }}
        >
          {title}
        </h2>
      </div>
      <div
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '0.95rem',
          lineHeight: 1.85,
          color: '#888',
        }}
      >
        {children}
      </div>
    </section>
  );
}

function P({ children, style }) {
  return <p style={{ margin: '0 0 1rem 0', ...style }}>{children}</p>;
}

function Ul({ children }) {
  return (
    <ul
      style={{
        margin: '0.5rem 0 1rem 0',
        paddingLeft: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.4rem',
      }}
    >
      {children}
    </ul>
  );
}

function Li({ children }) {
  return (
    <li style={{ color: '#888', lineHeight: 1.7 }}>
      {children}
    </li>
  );
}

function Highlight({ children }) {
  return <span style={{ color: '#ccc' }}>{children}</span>;
}

export default function TermsOfService() {
  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#020203',
        color: '#fff',
        fontFamily: 'var(--font-sans)',
      }}
    >
      <LegalNav />

      {/* Hero */}
      <header
        style={{
          paddingTop: '10rem',
          paddingBottom: '4rem',
          paddingLeft: '10vw',
          paddingRight: '10vw',
          borderBottom: '1px solid #111',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Ambient glow */}
        <div
          style={{
            position: 'absolute',
            top: '-20%',
            right: '-10%',
            width: '500px',
            height: '500px',
            background: 'radial-gradient(circle, rgba(207,168,97,0.06) 0%, transparent 65%)',
            pointerEvents: 'none',
          }}
        />
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.65rem',
            color: 'var(--accent)',
            letterSpacing: '3px',
            textTransform: 'uppercase',
            display: 'block',
            marginBottom: '1rem',
          }}
        >
          Legal // Terms
        </span>
        <h1
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: 300,
            margin: '0 0 1.5rem 0',
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
          }}
        >
          Terms of <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>Service</em>
        </h1>
        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '1rem',
            color: '#888',
            maxWidth: '580px',
            lineHeight: 1.7,
            margin: 0,
          }}
        >
          By using {APP_NAME}, you agree to these terms. Please read them carefully. They are
          written in plain language and reflect the application's actual capabilities and
          limitations.
        </p>
        <div
          style={{
            marginTop: '2rem',
            display: 'flex',
            gap: '2rem',
            flexWrap: 'wrap',
          }}
        >
          <div>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.65rem',
                color: '#555',
                letterSpacing: '1px',
                textTransform: 'uppercase',
                display: 'block',
                marginBottom: '4px',
              }}
            >
              Last Updated
            </span>
            <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', color: '#ccc' }}>
              {LAST_UPDATED}
            </span>
          </div>
          <div>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.65rem',
                color: '#555',
                letterSpacing: '1px',
                textTransform: 'uppercase',
                display: 'block',
                marginBottom: '4px',
              }}
            >
              Applies To
            </span>
            <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', color: '#ccc' }}>
              2ndbrain-mern web application
            </span>
          </div>
        </div>
      </header>

      {/* Body */}
      <main
        style={{
          maxWidth: '780px',
          margin: '0 auto',
          padding: '5rem 2rem 8rem 2rem',
        }}
      >
        {/* 1 */}
        <Section tag="01" title="Acceptance of Terms">
          <P>
            By accessing or using {APP_NAME} (the "Service"), you agree to be bound by these
            Terms of Service. If you do not agree, do not use the Service.
          </P>
          <P>
            {APP_NAME} is an open-source personal knowledge-management application. It is
            provided as-is, free of charge, for personal use. These terms govern your use of the
            hosted web application.
          </P>
        </Section>

        {/* 2 */}
        <Section tag="02" title="Account Responsibilities">
          <P>
            Access to {APP_NAME} requires signing in with a Google account. By connecting your
            Google account, you:
          </P>
          <Ul>
            <Li>Confirm that you are authorized to use that Google account</Li>
            <Li>Are responsible for all activity that occurs under your account</Li>
            <Li>
              Agree not to share your authentication session or allow others to access the Service
              through your account
            </Li>
          </Ul>
          <P>
            If you believe your account has been compromised, sign out immediately and revoke
            access via your Google account's security settings.
          </P>
        </Section>

        {/* 3 */}
        <Section tag="03" title="Acceptable Use">
          <P>You may use {APP_NAME} to:</P>
          <Ul>
            <Li>Create, organize, and link personal notes and ideas</Li>
            <Li>Use the AI writing assistant for personal productivity purposes</Li>
            <Li>Explore and visualize connections between your own notes</Li>
          </Ul>

          <P><Highlight>Prohibited Uses</Highlight></P>
          <P>You may not use {APP_NAME} to:</P>
          <Ul>
            <Li>Store, transmit, or process any unlawful, harmful, or abusive content</Li>
            <Li>
              Attempt to reverse-engineer, exploit, or disrupt the application's backend systems
            </Li>
            <Li>
              Use the AI features to generate content that violates{' '}
              <a
                href="https://ai.google.dev/gemini-api/terms"
                target="_blank"
                rel="noreferrer"
                style={{ color: 'var(--accent)', textDecoration: 'none' }}
              >
                Google's Generative AI usage policies
              </a>
            </Li>
            <Li>Circumvent or bypass any authentication or authorization mechanisms</Li>
            <Li>
              Conduct automated scraping, flooding, or denial-of-service attacks against the
              Service
            </Li>
            <Li>Store credentials, passwords, payment information, or sensitive personal data belonging to others</Li>
          </Ul>
        </Section>

        {/* 4 */}
        <Section tag="04" title="User-Generated Content and Ownership">
          <P>
            All notes, folders, links, and other content you create within {APP_NAME}{' '}
            ("User Content") remain your property. We do not claim any ownership over your
            content.
          </P>
          <P>
            By using the Service, you grant us a limited, non-exclusive license to store and
            process your content solely for the purpose of delivering the Service to you (e.g.,
            saving it to the database and returning it to your browser).
          </P>
          <P>
            You are solely responsible for the legality, accuracy, and appropriateness of all
            content you create. We reserve the right to remove content or terminate accounts that
            violate these terms.
          </P>
        </Section>

        {/* 5 */}
        <Section tag="05" title="Intellectual Property">
          <P>
            The {APP_NAME} application, including its source code, design system, and
            documentation, is released under an open-source license and is available at{' '}
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              style={{ color: 'var(--accent)', textDecoration: 'none' }}
            >
              {GITHUB_URL}
            </a>
            .
          </P>
          <P>
            Third-party libraries used in this project (BlockNote, Framer Motion, Socket.io,
            Mongoose, etc.) are subject to their respective open-source licenses. The Google
            Gemini API and Google OAuth are trademarks and services of Google LLC.
          </P>
          <P>
            Nothing in these terms transfers ownership of the {APP_NAME} codebase or any
            third-party intellectual property to you, nor does it transfer ownership of your
            content to us.
          </P>
        </Section>

        {/* 6 */}
        <Section tag="06" title="Service Availability and Modifications">
          <P>
            {APP_NAME} is a personal project and is provided on a best-effort basis. We do not
            guarantee:
          </P>
          <Ul>
            <Li>Continuous or uninterrupted availability of the Service</Li>
            <Li>Preservation of all stored data in the event of infrastructure failure</Li>
            <Li>That the Service will remain available indefinitely</Li>
          </Ul>
          <P>
            We reserve the right to modify, suspend, or discontinue the Service at any time, with
            or without notice. We may also update these Terms of Service; continued use of the
            Service after changes constitutes acceptance of the updated terms.
          </P>
          <P>
            We recommend keeping important notes backed up externally, as we do not guarantee data
            recovery in the event of data loss.
          </P>
        </Section>

        {/* 7 */}
        <Section tag="07" title="Account Suspension and Termination">
          <P>
            We reserve the right to suspend or terminate your access to the Service at our
            discretion if we determine, in good faith, that you have violated these terms.
          </P>
          <P>
            You may terminate your account at any time by requesting data deletion as described in
            the Privacy Policy.
          </P>
        </Section>

        {/* 8 */}
        <Section tag="08" title="Limitation of Liability">
          <P>
            To the fullest extent permitted by applicable law, {APP_NAME} and its creators shall
            not be liable for any:
          </P>
          <Ul>
            <Li>Loss of data, notes, or content stored in the Service</Li>
            <Li>Direct, indirect, incidental, or consequential damages arising from use of the Service</Li>
            <Li>Unauthorized access to your data</Li>
            <Li>Interruption, suspension, or termination of the Service</Li>
            <Li>Output produced by the AI writing assistant</Li>
          </Ul>
          <P>
            Your use of {APP_NAME} is entirely at your own risk. This limitation applies
            regardless of the form of action and even if we have been advised of the possibility
            of such damages.
          </P>
        </Section>

        {/* 9 */}
        <Section tag="09" title="Disclaimer of Warranties">
          <P>
            The Service is provided <Highlight>"as is"</Highlight> and{' '}
            <Highlight>"as available"</Highlight>, without warranties of any kind, either express
            or implied. We specifically disclaim any implied warranties of merchantability,
            fitness for a particular purpose, and non-infringement.
          </P>
          <P>
            We do not warrant that the Service is error-free, that defects will be corrected, or
            that the Service or its servers are free of viruses or other harmful components.
          </P>
          <P>
            AI-generated content produced by the Neural Copilot feature may be inaccurate,
            incomplete, or inappropriate. You are responsible for reviewing and verifying any
            AI-generated content before relying on it.
          </P>
        </Section>

        {/* 10 */}
        <Section tag="10" title="Governing Law and Contact">
          <P>
            These Terms of Service are governed by the laws of India, without regard to conflict
            of law provisions.
          </P>
          <P>
            For any questions, concerns, or legal notices regarding these terms, please contact:
          </P>
          <div
            style={{
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid #1a1a1a',
              borderLeft: '3px solid var(--accent)',
              padding: '1.5rem',
              borderRadius: '4px',
              marginTop: '0.5rem',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                color: '#888',
                lineHeight: 2,
              }}
            >
              <div>
                <span style={{ color: '#555' }}>PROJECT //</span>{' '}
                <span style={{ color: '#ccc' }}>{APP_NAME} (MERN Edition)</span>
              </div>
              <div>
                <span style={{ color: '#555' }}>MAINTAINER //</span>{' '}
                <span style={{ color: '#ccc' }}>Yuvraj Shrirame</span>
              </div>
              <div>
                <span style={{ color: '#555' }}>EMAIL //</span>{' '}
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  style={{ color: 'var(--accent)', textDecoration: 'none' }}
                >
                  {CONTACT_EMAIL}
                </a>
              </div>
              <div>
                <span style={{ color: '#555' }}>REPOSITORY //</span>{' '}
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: 'var(--accent)', textDecoration: 'none' }}
                >
                  {GITHUB_URL}
                </a>
              </div>
            </div>
          </div>
        </Section>
      </main>

      {/* Footer */}
      <footer
        style={{
          background: '#000',
          borderTop: '1px solid #1a1a1a',
          color: '#444',
          textAlign: 'center',
          padding: '2rem',
        }}
      >
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.6rem',
            letterSpacing: '2px',
            lineHeight: '2',
          }}
        >
          <span>© 2025 2NDBRAIN // MADE WITH ❤️ BY YUVRAJ SHRIRAME</span>
          <br />
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '0.5rem' }}>
            <Link
              to="/privacy"
              style={{ color: '#444', textDecoration: 'none' }}
              onMouseEnter={(e) => (e.target.style.color = '#fff')}
              onMouseLeave={(e) => (e.target.style.color = '#444')}
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              style={{ color: 'var(--accent)', textDecoration: 'none' }}
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
