import React from 'react';
import { Link } from 'react-router-dom';

const LAST_UPDATED = 'November 5, 2025';
const APP_NAME = '2ndBrain';
const CONTACT_EMAIL = 'yuvrajshrirame5@gmail.com';
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
          to="/terms"
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
          Terms
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

export default function PrivacyPolicy() {
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
            left: '-10%',
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
          Legal // Privacy
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
          Privacy <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>Policy</em>
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
          This policy describes what information {APP_NAME} collects, how it is used, and
          the rights you have over your data. It is written in plain language based on the
          application's actual implementation.
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
        <Section tag="01" title="Information We Collect">
          <P>
            {APP_NAME} collects only the data necessary to provide its core service: a personal
            knowledge-graph workspace. We do not sell data or build advertising profiles.
          </P>

          <P><Highlight>Account Information</Highlight></P>
          <P>
            When you sign in with Google, we receive and store the following from your Google
            account via the Google OAuth 2.0 API:
          </P>
          <Ul>
            <Li>Your email address</Li>
            <Li>Your display name</Li>
          </Ul>
          <P>
            No passwords are created or stored by {APP_NAME}. Authentication is handled
            entirely through Google's OAuth flow.
          </P>

          <P><Highlight>User-Created Content</Highlight></P>
          <P>
            All notes, node titles, folder names, and links you create within the application are
            stored in our database on your behalf. This content is owned by you and is associated
            with your user account.
          </P>

          <P><Highlight>Technical Data</Highlight></P>
          <P>
            We do not collect browser fingerprints, IP addresses, usage analytics, or telemetry
            data. Standard web server logs (which may contain IP addresses) may be generated by
            the hosting infrastructure but are not actively used or retained by this application.
          </P>
        </Section>

        {/* 2 */}
        <Section tag="02" title="Authentication">
          <P>
            {APP_NAME} uses Google Sign-In (Google OAuth 2.0) as its sole authentication method.
          </P>
          <Ul>
            <Li>
              When you sign in, your browser sends a Google access token to our backend server.
            </Li>
            <Li>
              Our server validates this token against Google's API to confirm your identity and
              retrieve your email and display name.
            </Li>
            <Li>
              We then issue a JSON Web Token (JWT), which is stored in your browser's{' '}
              <code
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.85em',
                  background: 'rgba(255,255,255,0.05)',
                  padding: '1px 5px',
                  borderRadius: '3px',
                  color: '#ccc',
                }}
              >
                localStorage
              </code>
              . This JWT is sent with each request to authenticate you.
            </Li>
            <Li>JWTs expire after 30 days, after which you will need to sign in again.</Li>
            <Li>
              We do not store your Google access token or refresh token beyond the initial
              validation request.
            </Li>
          </Ul>
        </Section>

        {/* 3 */}
        <Section tag="03" title="How We Use Your Information">
          <P>The data we collect is used exclusively to provide the {APP_NAME} service:</P>
          <Ul>
            <Li>To create and manage your user account</Li>
            <Li>To store, retrieve, and synchronize your notes, folders, and graph links</Li>
            <Li>To associate your content with your account so it persists across sessions</Li>
            <Li>To relay your note content to the Google Gemini API when you use the Neural Copilot AI feature</Li>
          </Ul>
          <P>
            We do not use your data for marketing, advertising, profiling, or any purpose outside
            of delivering the application's described functionality.
          </P>
        </Section>

        {/* 4 */}
        <Section tag="04" title="AI Features and Data Processing">
          <P>
            {APP_NAME} includes an AI writing assistant ("Neural Copilot") powered by the Google
            Gemini API.
          </P>
          <Ul>
            <Li>
              When you invoke the Neural Copilot, the full text content of your current note and
              your prompt are sent to our backend server, which forwards them to the Gemini API.
            </Li>
            <Li>
              The Gemini API key is stored on our server; it is not exposed to your browser.
            </Li>
            <Li>
              Your note content transmitted during an AI request is subject to{' '}
              <a
                href="https://ai.google.dev/gemini-api/terms"
                target="_blank"
                rel="noreferrer"
                style={{ color: 'var(--accent)', textDecoration: 'none' }}
              >
                Google's Generative AI Terms of Service
              </a>{' '}
              and{' '}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noreferrer"
                style={{ color: 'var(--accent)', textDecoration: 'none' }}
              >
                Google's Privacy Policy
              </a>
              .
            </Li>
            <Li>
              We do not log, store, or analyze the content of AI queries beyond what is
              transiently needed to process and return a response.
            </Li>
          </Ul>
        </Section>

        {/* 5 */}
        <Section tag="05" title="Data Storage and Security">
          <P>
            Your data (account information and all note content) is stored in a MongoDB database.
            All communication between your browser, our server, and the database is transmitted
            over HTTPS/TLS.
          </P>
          <P>
            While we take standard precautions to protect stored data, {APP_NAME} is an
            open-source personal project. We do not make enterprise-grade security guarantees.
            You should not store sensitive personal information, credentials, or confidential
            business data in {APP_NAME}.
          </P>
          <P><Highlight>Data Retention</Highlight></P>
          <P>
            Your account and all associated content (notes, folders, links) are retained for as
            long as your account exists. You can request deletion at any time (see Section 08).
          </P>
        </Section>

        {/* 6 */}
        <Section tag="06" title="Third-Party Services">
          <P>
            {APP_NAME} integrates with the following third-party services. Each governs its own
            use of data as described in its respective policies:
          </P>
          <Ul>
            <Li>
              <Highlight>Google OAuth 2.0</Highlight> — Authentication. Your sign-in is handled
              by Google.{' '}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noreferrer"
                style={{ color: 'var(--accent)', textDecoration: 'none' }}
              >
                Google Privacy Policy
              </a>
            </Li>
            <Li>
              <Highlight>Google Gemini API</Highlight> — AI content generation when you use the
              Neural Copilot feature.{' '}
              <a
                href="https://ai.google.dev/gemini-api/terms"
                target="_blank"
                rel="noreferrer"
                style={{ color: 'var(--accent)', textDecoration: 'none' }}
              >
                Gemini API Terms
              </a>
            </Li>
          </Ul>
          <P>
            We have no relationship with any other third-party data processors. We do not embed
            analytics services, advertising networks, or social media trackers.
          </P>
        </Section>

        {/* 7 */}
        <Section tag="07" title="Cookies and Local Storage">
          <P>
            {APP_NAME} does not use cookies for tracking or advertising.
          </P>
          <P>
            Your authentication JWT is stored in your browser's{' '}
            <code
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.85em',
                background: 'rgba(255,255,255,0.05)',
                padding: '1px 5px',
                borderRadius: '3px',
                color: '#ccc',
              }}
            >
              localStorage
            </code>
            . This is a browser mechanism, not a server-side cookie, and is only accessible
            within the same origin. It is used solely to keep you signed in between sessions.
            Clearing your browser's local storage will sign you out.
          </P>
        </Section>

        {/* 8 */}
        <Section tag="08" title="Your Rights and Data Deletion">
          <P>You have the following rights regarding your data:</P>
          <Ul>
            <Li>
              <Highlight>Access:</Highlight> Your notes, folders, and links are visible and
              accessible to you within the application at all times.
            </Li>
            <Li>
              <Highlight>Deletion:</Highlight> You can delete any individual note, folder, or
              link directly within the application. To request full account and data deletion,
              contact us at the email address below.
            </Li>
            <Li>
              <Highlight>Sign Out:</Highlight> You can sign out at any time from within the
              application, which removes the authentication token from your browser.
            </Li>
          </Ul>
          <P>
            To request complete deletion of your account and all associated data, email us at{' '}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              style={{ color: 'var(--accent)', textDecoration: 'none' }}
            >
              {CONTACT_EMAIL}
            </a>{' '}
            with the subject line <em>"Data Deletion Request"</em>.
          </P>
        </Section>

        {/* 9 */}
        <Section tag="09" title="Policy Updates">
          <P>
            This Privacy Policy may be updated from time to time. The "Last Updated" date at the
            top of this page reflects the most recent revision. Continued use of the application
            after a policy update constitutes acceptance of the revised terms.
          </P>
          <P>
            For questions about this policy or your data, contact:{' '}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              style={{ color: 'var(--accent)', textDecoration: 'none' }}
            >
              {CONTACT_EMAIL}
            </a>
          </P>
          <P>
            The source code of this application is publicly available at{' '}
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
              style={{ color: 'var(--accent)', textDecoration: 'none' }}
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              style={{ color: '#444', textDecoration: 'none' }}
              onMouseEnter={(e) => (e.target.style.color = '#fff')}
              onMouseLeave={(e) => (e.target.style.color = '#444')}
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
