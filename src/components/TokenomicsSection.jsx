import { useState } from 'react';
import { useInViewAnimation } from '../hooks/useInViewAnimation';

export default function TokenomicsSection() {
  const [copied, setCopied] = useState(false);
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const [communityCode, setCommunityCode] = useState('');
  const { ref, isInView } = useInViewAnimation();
  const contractAddress = 'DMYNp65mub3i7LRpBdB66CgBAceLcQnv4gsWeCi6pump';
  const features = ['Fair Launch', 'No Presale', 'LP Burned', 'Mint Revoked'];

  const copyToClipboard = () => {
    navigator.clipboard.writeText(communityCode || contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <style>{`
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .tokenomics-animated {
          animation: fadeInLeft 0.8s ease-out forwards;
        }
      `}</style>
      <section
        ref={ref}
        className={`${isInView ? 'tokenomics-animated' : ''}`}
        style={{
          backgroundColor: 'rgb(12, 12, 12)',
          borderTop: '1px solid oklab(0.999994 0.0000455678 0.0000200868 / 0.05)',
          paddingTop: 'clamp(64px, 10vw, 80px)',
          paddingBottom: 'clamp(64px, 10vw, 80px)',
        }}
      >
        <div className="max-w-6xl mx-auto px-4 w-full">
          {/* Header */}
          <div
            style={{
              marginBottom: 'clamp(48px, 10vw, 64px)',
              maxWidth: '768px',
              marginLeft: 'auto',
              marginRight: 'auto',
              textAlign: 'center',
            }}
          >
            <h2
              style={{
                fontFamily: 'Cinzel, serif',
                fontSize: 'clamp(28px, 6vw, 48px)',
                fontWeight: '700',
                lineHeight: 'clamp(32px, 7vw, 48px)',
                marginBottom: '16px',
                color: 'rgb(255, 255, 255)',
              }}
            >
              PRIVATE PRESALE ACCESS
            </h2>
            <p
              style={{
                color: 'rgb(163, 158, 143)',
                textAlign: 'center',
                fontSize: 'clamp(14px, 4vw, 16px)',
              }}
            >
             Enter your community code to unlock presale details
            </p>
          </div>

          {/* Main Card */}
          <div
            style={{
              backdropFilter: 'blur(8px)',
              backgroundColor: 'oklab(0 0 0 / 0.5)',
              border: '1px solid rgba(255, 191, 0, 0.2)',
              borderRadius: '12px',
              boxShadow: 'rgba(255, 215, 0, 0.1) 0px 0px 20px 0px, rgba(255, 69, 0, 0.05) 0px 0px 20px 0px inset',
              marginLeft: 'auto',
              marginRight: 'auto',
              maxWidth: '896px',
              padding: 'clamp(24px, 6vw, 32px)',
            }}
          >
            {/* Token Details Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: 'clamp(20px, 6vw, 32px)',
                marginBottom: 'clamp(20px, 6vw, 32px)',
              }}
            >
              {/* Token Name */}
              <div>
                {/* <label
                  style={{
                    color: 'rgb(163, 158, 143)',
                    fontFamily: '"Space Mono", monospace',
                    fontSize: 'clamp(11px, 2.5vw, 14px)',
                    lineHeight: '20px',
                    marginBottom: '8px',
                    display: 'block',
                    textTransform: 'uppercase',
                  }}
                >
                  Token Name
                </label> */}
                <div
                  style={{
                    color: 'rgb(255, 255, 255)',
                    fontSize: 'clamp(18px, 4vw, 24px)',
                    fontWeight: '700',
                    lineHeight: 'clamp(24px, 5vw, 32px)',
                  }}
                >
                 Community Code 
                </div>
              </div>

            </div>

            {/* Code Input Field */}
            <div style={{ marginBottom: 'clamp(20px, 6vw, 32px)' }}>
              <label
                style={{
                  color: 'rgb(163, 158, 143)',
                  fontFamily: '"Space Mono", monospace',
                  fontSize: 'clamp(11px, 2.5vw, 14px)',
                  lineHeight: '20px',
                  marginBottom: '8px',
                  display: 'block',
                  textTransform: 'uppercase',
                }}
              >
                Input code
              </label>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <input
                  type="text"
                  value={communityCode}
                  onChange={(e) => setCommunityCode(e.target.value)}
                  placeholder={contractAddress}
                  style={{
                    backgroundColor: 'oklab(0 0 0 / 0.5)',
                    border: '1px solid oklab(0.999994 0.0000455678 0.0000200868 / 0.1)',
                    borderRadius: '8px',
                    color: 'rgb(255, 255, 255)',
                    flex: '1',
                    minWidth: '200px',
                    fontFamily: '"Space Mono", monospace',
                    fontSize: 'clamp(11px, 2.5vw, 14px)',
                    padding: 'clamp(12px, 3vw, 16px)',
                    outline: 'none',
                    transition: 'all 0.15s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'rgba(255, 191, 0, 0.3)';
                    e.target.style.boxShadow = 'rgba(255, 191, 0, 0.1) 0px 0px 12px 0px';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'oklab(0.999994 0.0000455678 0.0000200868 / 0.1)';
                    e.target.style.boxShadow = 'none';
                  }}
                />
                <button
                  onClick={copyToClipboard}
                  style={{
                    appearance: 'button',
                    backgroundColor: 'oklab(0.999994 0.0000455678 0.0000200868 / 0.1)',
                    border: 'none',
                    borderRadius: '8px',
                    color: 'rgb(255, 255, 255)',
                    cursor: 'pointer',
                    padding: 'clamp(12px, 3vw, 16px) clamp(16px, 4vw, 24px)',
                    transition: 'background-color 0.15s cubic-bezier(0.4, 0, 0.2, 1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                  onMouseEnter={(e) => (e.target.style.backgroundColor = 'oklab(0.999994 0.0000455678 0.0000200868 / 0.15)')}
                  onMouseLeave={(e) => (e.target.style.backgroundColor = 'oklab(0.999994 0.0000455678 0.0000200868 / 0.1)')}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                    <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                  </svg>
                </button>
              </div>
            </div>

            {/* Status Badges */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                gap: 'clamp(12px, 3vw, 16px)',
                textAlign: 'center',
              }}
            >
                <a
              href="https://pump.fun/coin/DMYNp65mub3i7LRpBdB66CgBAceLcQnv4gsWeCi6pump"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-4 sm:px-6 py-3 sm:py-4 font-bold text-black rounded transition-all duration-150 whitespace-nowrap text-sm sm:text-base"
              style={{
                backgroundImage: 'linear-gradient(to right, rgb(255, 191, 0) 0%, oklch(0.666 0.179 58.318) 100%)',
                boxShadow: isButtonHovered
                  ? 'rgba(255, 215, 0, 0.6) 0px 0px 30px 0px, rgba(255, 215, 0, 0.4) 0px 0px 20px 0px'
                  : 'rgba(255, 215, 0, 0.4) 0px 0px 20px 0px',
                filter: isButtonHovered ? 'brightness(1.15)' : 'brightness(1)',
              }}
              onMouseEnter={() => setIsButtonHovered(true)}
              onMouseLeave={() => setIsButtonHovered(false)}
            >
              UNLOCK PRESALE
            </a>

            </div>
          </div>

          {/* Risk Disclaimer */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: 'clamp(24px, 6vw, 32px)',
            }}
          >
            <div
              style={{
                alignItems: 'center',
                border: '1px solid oklab(0.769 0.0640531 0.176752 / 0.2)',
                borderRadius: '999px',
                color: 'oklab(0.769 0.0640531 0.176752 / 0.7)',
                display: 'flex',
                fontFamily: '"Space Mono", monospace',
                fontSize: 'clamp(10px, 2.5vw, 12px)',
                gap: '8px',
                lineHeight: '16px',
                padding: 'clamp(6px, 2vw, 8px) clamp(12px, 3vw, 16px)',
              }}
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                style={{
                  color: 'oklab(0.769 0.0640531 0.176752 / 0.7)',
                  flexShrink: 0,
                }}
              >
                <path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4"></path>
              </svg>
              RISK DISCLAIMER: THIS IS A MEMECOIN. TRADE RESPONSIBLY.
            </div>
          </div>

          {/* Token Lock Card */}
          <div
            style={{
              marginLeft: 'auto',
              marginRight: 'auto',
              marginTop: 'clamp(32px, 8vw, 40px)',
              maxWidth: '896px',
            }}
          >
            <a
              href="https://app.streamflow.finance/contract/solana/mainnet/J4YFWG4xHHQoqb4vXs822mJb7uUrX7K8fWhabtoFtezY?new"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: 'oklab(0.999994 0.0000455678 0.0000200868 / 0.05)',
                border: '1px solid oklab(0.999994 0.0000455678 0.0000200868 / 0.1)',
                borderRadius: '12px',
                boxShadow: 'rgba(255, 215, 0, 0.1) 0px 0px 20px 0px, rgba(255, 69, 0, 0.05) 0px 0px 20px 0px inset',
                cursor: 'pointer',
                padding: 'clamp(16px, 5vw, 24px)',
                transition: 'background-color 0.15s cubic-bezier(0.4, 0, 0.2, 1)',
                display: 'block',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'oklab(0.999994 0.0000455678 0.0000200868 / 0.08)')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'oklab(0.999994 0.0000455678 0.0000200868 / 0.05)')}
            >
              <div
                style={{
                  alignItems: 'center',
                  display: 'grid',
                  gridTemplateColumns: 'auto 1fr auto',
                  gap: 'clamp(16px, 5vw, 24px)',
                  gridAutoFlow: 'dense',
                }}
              >
                {/* Lock Icon */}
                <div
                  style={{
                    alignItems: 'center',
                    backgroundColor: 'rgba(255, 191, 0, 0.1)',
                    border: '1px solid rgba(255, 191, 0, 0.2)',
                    borderRadius: '12px',
                    display: 'flex',
                    height: 'clamp(40px, 10vw, 44px)',
                    width: 'clamp(40px, 10vw, 44px)',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <img
                    alt="Token lock"
                    src="https://bingwucoin.xyz/assets/lock-gold-DzjQaxWP.png"
                    style={{
                      height: 'clamp(20px, 5vw, 24px)',
                      width: 'clamp(20px, 5vw, 24px)',
                    }}
                  />
                </div>

                {/* Text Content */}
                <div>
                  <div
                    style={{
                      color: 'rgb(255, 255, 255)',
                      fontFamily: 'Cinzel, serif',
                      fontSize: 'clamp(16px, 4vw, 24px)',
                      fontWeight: '700',
                      lineHeight: 'clamp(24px, 5vw, 32px)',
                    }}
                  >
                    40,000,000 tokens locked
                  </div>
                  <div
                    style={{
                      color: 'rgb(163, 158, 143)',
                      marginTop: '8px',
                      fontSize: 'clamp(13px, 3vw, 15px)',
                    }}
                  >
                    Locked on Streamflow. Click to view the lock contract.
                  </div>
                </div>

                {/* View Button */}
                <div
                  style={{
                    color: 'rgb(255, 191, 0)',
                    fontFamily: '"Space Mono", monospace',
                    fontSize: 'clamp(11px, 2.5vw, 14px)',
                    letterSpacing: '1.4px',
                    lineHeight: '20px',
                    textTransform: 'uppercase',
                    flexShrink: 0,
                    whiteSpace: 'nowrap',
                  }}
                >
                  View
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
