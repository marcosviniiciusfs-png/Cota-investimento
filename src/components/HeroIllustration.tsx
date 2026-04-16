const HeroIllustration = () => {
  return (
    <svg
      viewBox="0 0 600 400"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
    >
      <defs>
        <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#a8d8ff" />
          <stop offset="100%" stopColor="#e7f3ff" />
        </linearGradient>
        <linearGradient id="houseWall" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#e8e8e8" />
        </linearGradient>
        <linearGradient id="roofGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#c0392b" />
          <stop offset="100%" stopColor="#962d22" />
        </linearGradient>
        <linearGradient id="carBody" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#000073" />
          <stop offset="100%" stopColor="#00005a" />
        </linearGradient>
        <linearGradient id="carWindow" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#87ceeb" />
          <stop offset="100%" stopColor="#5fb3d4" />
        </linearGradient>
        <linearGradient id="excYellow" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#f9ca24" />
          <stop offset="100%" stopColor="#d4a017" />
        </linearGradient>
        <linearGradient id="groundGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#7dcea0" />
          <stop offset="100%" stopColor="#52be80" />
        </linearGradient>
        <filter id="shadow" x="-5%" y="-5%" width="115%" height="115%">
          <feDropShadow dx="2" dy="3" stdDeviation="3" floodOpacity="0.15" />
        </filter>
      </defs>

      {/* Fundo - Céu */}
      <rect width="600" height="400" rx="20" fill="url(#skyGrad)" />

      {/* Nuvens */}
      <g opacity="0.8">
        <ellipse cx="100" cy="60" rx="40" ry="18" fill="white" />
        <ellipse cx="130" cy="55" rx="30" ry="15" fill="white" />
        <ellipse cx="70" cy="58" rx="25" ry="12" fill="white" />
      </g>
      <g opacity="0.6">
        <ellipse cx="420" cy="45" rx="35" ry="15" fill="white" />
        <ellipse cx="450" cy="40" rx="25" ry="12" fill="white" />
        <ellipse cx="395" cy="43" rx="20" ry="10" fill="white" />
      </g>
      <g opacity="0.5">
        <ellipse cx="300" cy="80" rx="28" ry="12" fill="white" />
        <ellipse cx="325" cy="76" rx="20" ry="10" fill="white" />
      </g>

      {/* Sol */}
      <circle cx="520" cy="70" r="30" fill="#f9ca24" opacity="0.9" />
      <circle cx="520" cy="70" r="25" fill="#ffeaa7" />

      {/* Chão */}
      <rect x="0" y="300" width="600" height="100" rx="0" fill="url(#groundGrad)" />
      <ellipse cx="300" cy="300" rx="320" ry="15" fill="#7dcea0" />

      {/* ===== CASA ===== */}
      <g filter="url(#shadow)" transform="translate(30, 100)">
        {/* Parede */}
        <rect x="20" y="80" width="160" height="120" rx="3" fill="url(#houseWall)" stroke="#d5d5d5" strokeWidth="1" />
        {/* Telhado */}
        <polygon points="0,80 100,15 200,80" fill="url(#roofGrad)" />
        <polygon points="5,80 100,20 195,80" fill="none" stroke="#8b1a1a" strokeWidth="1" opacity="0.3" />
        {/* Porta */}
        <rect x="75" y="140" width="40" height="60" rx="3" fill="#5d4037" />
        <circle cx="108" cy="172" r="3" fill="#f9ca24" />
        {/* Janela esquerda */}
        <rect x="30" y="100" width="35" height="30" rx="2" fill="url(#carWindow)" />
        <line x1="47.5" y1="100" x2="47.5" y2="130" stroke="white" strokeWidth="1.5" />
        <line x1="30" y1="115" x2="65" y2="115" stroke="white" strokeWidth="1.5" />
        {/* Janela direita */}
        <rect x="135" y="100" width="35" height="30" rx="2" fill="url(#carWindow)" />
        <line x1="152.5" y1="100" x2="152.5" y2="130" stroke="white" strokeWidth="1.5" />
        <line x1="135" y1="115" x2="170" y2="115" stroke="white" strokeWidth="1.5" />
        {/* Chaminé */}
        <rect x="140" y="28" width="20" height="40" fill="#962d22" />
        <rect x="136" y="25" width="28" height="8" rx="2" fill="#7b2018" />
        {/* Fumaça */}
        <g opacity="0.4">
          <circle cx="150" cy="18" r="5" fill="#bbb" />
          <circle cx="155" cy="10" r="4" fill="#bbb" />
          <circle cx="148" cy="3" r="3" fill="#bbb" />
        </g>
      </g>

      {/* ===== CARRO ===== */}
      <g filter="url(#shadow)" transform="translate(240, 210)">
        {/* Corpo inferior */}
        <rect x="0" y="40" width="140" height="45" rx="8" fill="url(#carBody)" />
        {/* Corpo superior (cabine) */}
        <path d="M25,40 L40,10 L100,10 L120,40 Z" fill="url(#carBody)" />
        {/* Para-brisa */}
        <path d="M42,38 L54,14 L72,14 L72,38 Z" fill="url(#carWindow)" opacity="0.9" />
        {/* Janela traseira */}
        <path d="M76,38 L76,14 L96,14 L114,38 Z" fill="url(#carWindow)" opacity="0.9" />
        {/* Faróis */}
        <rect x="132" y="50" width="12" height="10" rx="3" fill="#f9ca24" />
        <rect x="-4" y="50" width="10" height="10" rx="3" fill="#e74c3c" />
        {/* Para-choque */}
        <rect x="-5" y="72" width="150" height="6" rx="3" fill="#444" />
        {/* Rodas */}
        <circle cx="35" cy="82" r="16" fill="#333" />
        <circle cx="35" cy="82" r="10" fill="#666" />
        <circle cx="35" cy="82" r="4" fill="#999" />
        <circle cx="105" cy="82" r="16" fill="#333" />
        <circle cx="105" cy="82" r="10" fill="#666" />
        <circle cx="105" cy="82" r="4" fill="#999" />
        {/* Detalhe lateral */}
        <line x1="5" y1="60" x2="130" y2="60" stroke="#ffffff" strokeWidth="0.5" opacity="0.3" />
      </g>

      {/* ===== RETRO ESCAVADEIRA ===== */}
      <g filter="url(#shadow)" transform="translate(420, 170)">
        {/* Corpo principal */}
        <rect x="10" y="55" width="90" height="50" rx="6" fill="url(#excYellow)" />
        {/* Cabine */}
        <rect x="50" y="25" width="48" height="35" rx="5" fill="url(#excYellow)" />
        <rect x="55" y="30" width="30" height="22" rx="3" fill="#87ceeb" opacity="0.8" />
        {/* Motor (traseira) */}
        <rect x="0" y="45" width="55" height="60" rx="4" fill="#333" />
        <rect x="5" y="50" width="45" height="15" rx="2" fill="#444" />
        {/* Escavadeira (braço) */}
        <g>
          {/* Braço principal */}
          <rect x="-5" y="15" width="8" height="50" rx="2" fill="#e67e22" transform="rotate(-20, -5, 15)" />
          {/* Antebraco */}
          <rect x="-35" y="25" width="40" height="7" rx="2" fill="#d35400" transform="rotate(10, -35, 25)" />
          {/* Concha */}
          <path d="M-45,30 L-60,18 L-65,35 L-50,38 L-45,30 Z" fill="#555" stroke="#444" strokeWidth="1" />
          <line x1="-63" y1="26" x2="-65" y2="35" stroke="#444" strokeWidth="2" />
          <line x1="-60" y1="18" x2="-63" y2="26" stroke="#444" strokeWidth="2" />
        </g>
        {/* Cilindro hidráulico */}
        <rect x="5" y="40" width="4" height="30" rx="1" fill="#bbb" transform="rotate(-15, 5, 40)" />
        {/* Escada/degrau */}
        <rect x="48" y="90" width="15" height="4" rx="1" fill="#555" />
        {/* Rodas - esteiras */}
        <rect x="-5" y="98" width="110" height="18" rx="9" fill="#333" />
        <rect x="0" y="101" width="100" height="12" rx="6" fill="#444" />
        {/* Detalhes das esteiras */}
        {Array.from({ length: 10 }).map((_, i) => (
          <line key={i} x1={5 + i * 10} y1="101" x2={5 + i * 10} y2="113" stroke="#555" strokeWidth="1.5" />
        ))}
        {/* Rodas internas */}
        <circle cx="10" cy="107" r="7" fill="#555" />
        <circle cx="45" cy="107" r="7" fill="#555" />
        <circle cx="90" cy="107" r="7" fill="#555" />
        {/* Pá carregadeira (frente) */}
        <rect x="85" y="65" width="30" height="6" rx="2" fill="#e67e22" />
        <path d="M115,60 L125,60 L125,82 L110,85 L110,68 Z" fill="#d35400" />
        {/* Luz de aviso */}
        <circle cx="92" cy="25" r="4" fill="#e74c3c" />
        <circle cx="92" cy="25" r="2.5" fill="#ff6b6b" />
        {/* Escapamento */}
        <rect x="2" y="35" width="6" height="12" rx="2" fill="#666" />
      </g>

      {/* Grama / detalhes do chão */}
      <g opacity="0.6">
        <line x1="50" y1="300" x2="48" y2="290" stroke="#27ae60" strokeWidth="2" />
        <line x1="55" y1="300" x2="57" y2="288" stroke="#27ae60" strokeWidth="2" />
        <line x1="200" y1="300" x2="198" y2="291" stroke="#27ae60" strokeWidth="2" />
        <line x1="380" y1="300" x2="382" y2="292" stroke="#27ae60" strokeWidth="2" />
        <line x1="500" y1="300" x2="498" y2="290" stroke="#27ae60" strokeWidth="2" />
        <line x1="560" y1="300" x2="562" y2="293" stroke="#27ae60" strokeWidth="2" />
      </g>

      {/* Flores decorativas */}
      <g opacity="0.7">
        <circle cx="180" cy="295" r="3" fill="#e74c3c" />
        <circle cx="350" cy="298" r="2.5" fill="#f39c12" />
        <circle cx="480" cy="296" r="3" fill="#9b59b6" />
      </g>
    </svg>
  );
};

export default HeroIllustration;
