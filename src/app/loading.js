export default function Loading() {
  return (
    <div className="cg-loading-container">
      <img src="/logo.png" alt="Clarygen Logo" width="180" height="60" />
      <div className="cg-loader" aria-label="Loading" />

      <style>{`
        .cg-loading-container {
          position: fixed;
          inset: 0;
          z-index: 9999;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 18px;
          background: #ffffff;
        }
        /* HTML: <div class="cg-loader"></div> */
        .cg-loader {
          width: 15px;
          aspect-ratio: 1;
          background: #045494; /* primary dot color */
          border-radius: 50%;
          animation: cg-l6 1s infinite linear alternate;
        }
        @keyframes cg-l6 {
          0%  {box-shadow: 15px 0 #045494,-25px 0 #045494}
          50% {box-shadow: 15px 0 #045494,-15px 0 #045494}
          100%{box-shadow: 25px 0 #045494,-15px 0 #045494}
        }
      `}</style>
    </div>
  );
}
