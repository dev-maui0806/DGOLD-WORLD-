export default function FooterSection() {
  return (
    <>
      <style>{`
        @media (max-width: 768px) {
          .footer-mobile {
            padding-bottom: 48px !important;
            padding-top: 48px !important;
          }
          .footer-heading-mobile {
            font-size: 36px !important;
            line-height: 40px !important;
            margin-bottom: 24px !important;
          }
          .footer-social-mobile {
            gap: 16px !important;
            margin-bottom: 32px !important;
          }
          .footer-link-mobile {
            height: 48px !important;
            width: 48px !important;
          }
          .footer-link-mobile svg {
            height: 24px !important;
            width: 24px !important;
          }
          .footer-disclaimer-mobile {
            font-size: 12px !important;
            margin-bottom: 24px !important;
          }
        }
      `}</style>
      <footer
        className="footer-mobile"
        style={{
          backgroundColor: 'rgb(0, 0, 0)',
          borderColor: 'oklab(0.999994 0.0000455678 0.0000200868 / 0.1)',
          borderTop: '1px solid oklab(0.999994 0.0000455678 0.0000200868 / 0.1)',
          overflowX: 'hidden',
          overflowY: 'hidden',
          paddingBottom: '80px',
          paddingTop: '80px',
          position: 'relative',
        }}
      >
        {/* Decorative background elements */}
        <div
          style={{
            bottom: '0px',
            left: '0px',
            opacity: 0.2,
            pointerEvents: 'none',
            position: 'absolute',
            right: '0px',
            top: '0px',
          }}
        >
          {/* Gold blur circle */}
          <div
            style={{
              backgroundColor: 'rgba(255, 191, 0, 0.2)',
              borderRadius: '50%',
              filter: 'blur(100px)',
              height: '256px',
              left: '25%',
              pointerEvents: 'none',
              position: 'absolute',
              top: '25%',
              width: '256px',
            }}
          />

          {/* Orange blur circle */}
          <div
            style={{
              backgroundColor: 'oklab(0.577 0.217662 0.112464 / 0.2)',
              borderRadius: '50%',
              bottom: '25%',
              filter: 'blur(100px)',
              height: '256px',
              pointerEvents: 'none',
              position: 'absolute',
              right: '25%',
              width: '256px',
            }}
          />
        </div>

        {/* Content container */}
        <div
          style={{
            marginLeft: 'auto',
            marginRight: 'auto',
            maxWidth: '1536px',
            paddingLeft: '16px',
            paddingRight: '16px',
            position: 'relative',
            textAlign: 'center',
            width: '100%',
            zIndex: 10,
          }}
        >
          {/* Heading */}
          <h2
            className="footer-heading-mobile"
            style={{
              backgroundClip: 'text',
              backgroundImage:
                'linear-gradient(to right in oklab, rgb(255, 215, 0) 0%, rgb(255, 140, 0) 50%, rgb(255, 215, 0) 100%)',
              color: 'rgba(0, 0, 0, 0)',
              fontFamily: 'Cinzel, serif',
              fontSize: '72px',
              fontWeight: '700',
              lineHeight: '72px',
              marginBottom: '32px',
              textAlign: 'center',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            JOIN THE DYNASTY
          </h2>

          {/* Social Links */}
          <div
            className="footer-social-mobile"
            style={{
              display: 'flex',
              gap: '24px',
              justifyContent: 'center',
              marginBottom: '48px',
              textAlign: 'center',
            }}
          >
            {/* Telegram */}
            <a
              href="https://t.me/bingwusolana"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link-mobile"
              style={{
                alignItems: 'center',
                backgroundColor: 'oklab(0.999994 0.0000455678 0.0000200868 / 0.05)',
                border: '1px solid oklab(0.999994 0.0000455678 0.0000200868 / 0.1)',
                borderRadius: '50%',
                cursor: 'pointer',
                display: 'flex',
                height: '64px',
                justifyContent: 'center',
                width: '64px',
                transitionDuration: '0.3s',
                transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'oklab(0.999994 0.0000455678 0.0000200868 / 0.1)';
                e.currentTarget.style.borderColor = 'oklab(0.999994 0.0000455678 0.0000200868 / 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'oklab(0.999994 0.0000455678 0.0000200868 / 0.05)';
                e.currentTarget.style.borderColor = 'oklab(0.999994 0.0000455678 0.0000200868 / 0.1)';
              }}
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                role="img"
                viewBox="0 0 24 24"
                height="32"
                width="32"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  cursor: 'pointer',
                  fill: 'rgb(235, 232, 224)',
                  height: '32px',
                  stroke: 'rgb(235, 232, 224)',
                  strokeWidth: '0px',
                  width: '32px',
                }}
              >
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"></path>
              </svg>
            </a>

            {/* X/Twitter */}
            <a
              href="https://x.com/bingwusolana"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link-mobile"
              style={{
                alignItems: 'center',
                backgroundColor: 'oklab(0.999994 0.0000455678 0.0000200868 / 0.05)',
                border: '1px solid oklab(0.999994 0.0000455678 0.0000200868 / 0.1)',
                borderRadius: '50%',
                cursor: 'pointer',
                display: 'flex',
                height: '64px',
                justifyContent: 'center',
                width: '64px',
                transitionDuration: '0.3s',
                transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'oklab(0.999994 0.0000455678 0.0000200868 / 0.1)';
                e.currentTarget.style.borderColor = 'oklab(0.999994 0.0000455678 0.0000200868 / 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'oklab(0.999994 0.0000455678 0.0000200868 / 0.05)';
                e.currentTarget.style.borderColor = 'oklab(0.999994 0.0000455678 0.0000200868 / 0.1)';
              }}
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                role="img"
                viewBox="0 0 24 24"
                height="32"
                width="32"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  cursor: 'pointer',
                  fill: 'rgb(235, 232, 224)',
                  height: '32px',
                  stroke: 'rgb(235, 232, 224)',
                  strokeWidth: '0px',
                  width: '32px',
                }}
              >
                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"></path>
              </svg>
            </a>
          </div>

          {/* Disclaimer Text */}
          <p
            className="footer-disclaimer-mobile"
            style={{
              color: 'oklab(0.999994 0.0000455678 0.0000200868 / 0.3)',
              fontSize: '14px',
              lineHeight: '20px',
              marginBottom: '32px',
              marginLeft: 'auto',
              marginRight: 'auto',
              maxWidth: '576px',
              textAlign: 'center',
            }}
          >
            $BINGWU is a community-driven memecoin with no intrinsic value or expectation of financial return. There is
            no formal team or roadmap. The coin is for entertainment purposes only.
          </p>

          {/* Copyright */}
          <div
            style={{
              color: 'rgba(255, 191, 0, 0.5)',
              fontFamily: '"Space Mono", monospace',
              fontSize: '12px',
              letterSpacing: '1.2px',
              lineHeight: '16px',
              textAlign: 'center',
              textTransform: 'uppercase',
            }}
          >
            © 2026 Bing Wu 丙午. All Rights Reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
