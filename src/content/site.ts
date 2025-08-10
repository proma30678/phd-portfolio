export const profile = {
    nameEn: "Ying Kung",
    title: "Ph.D. Applicant from National Taiwan University",
    affiliation: "IAM",           // 顯示在副標
    email: "evan08292001@gmail.com",
    topics: "Lithium-ion battery, Lithium plating, Machine Learning",
    blurbEn:
      "I am an M.S. graduate from the Institute of Applied Mechanics, National Taiwan University, specializing in <strong> lithium-ion battery diagnostics</strong> and <strong>modeling</strong>. Skilled in EIS/P2D modeling, Transformer-based machine learning, and impedance analysis, I developed a rapid parameter estimation framework and a pseudo-P curve method to predict lithium plating onset, enabling plating-free fast charging with <strong> >99% efficiency</strong>.",
    blurbZh: "",
    cv: "/files/CV.pdf",
    avatar: "/images/me.jpg",
    interests: ["Li-ion Battery", "electric vehicles", "artificial intelligence in robotics"],
  };
  
  export const publications = [
    {
      title: "Predicting the onset of lithium plating...",
      authors: "Ying Kung*, ...",
      venue: "Under Review at Energy Storage Materials",
      highlight: "<strong>Voltage-based diagnostic framework</strong> for detecting <strong>lithium plating onset</strong> without reference electrodes or destructive tests. Introduces the <strong>pseudo-P curve</strong>, constructed from the derivative of charging overpotential with respect to lithium inventory.Uses only <strong>full-cell voltage</strong> and <strong>capacity data</strong> to pinpoint plating onset time under various C-rates. Validated across different cycling datasets, achieving plating detection accuracy within 3% capacity error. Enables plating-free fast-charging protocols with <strong>>99% </strong>Coulombic efficiency by adjusting cutoff SOC in real time. Applicable to commercial cells and compatible with embedded BMS for on-board implementation.",
      image: "/images/thesis-a.jpg", // 放在 public/images
      pdf: "/files/paper.pdf" // 放在 public/files/paper
    }
    ,
  ];
  
  export const projects = [
    {
      title: "Frequency-specific modeling for battery parameter identification under battery aging",
      image: "/images/project-a.jpg", // 放到 public/images
      bullets: [
        "Estimating key electrochemical parameters from partial EIS spectra.",
        "Two-stage Sobol sensitivity filtering to select band-specific parameters.",
        "Transformer-based regression reconstructs full spectrum with <2% error in 0.3 s."
      ],
      tags: ["ML", "Python", "PyTorch", "COMSOL","EIS", "electrochemical parameters"],
      link: "#", // 有論文/簡報/Repo就填，不然留 "#"
    },
    // 之後可再加更多專案…
  ];
  
  export const timeline = [
    {
      time: "2023–2025",
      label:
        "M.S., Institute of Applied Mechanics, National Taiwan University",
    },
    {
      time: "2019–2023",
      label:
        "B.S., Department of Civil Engineering, National Yang Ming Chiao Tung University",
    },
  ];
  
  export const skills = [
    "Battery Modeling: EIS, P2D, plating diagnostics",
    "ML/AI: Python, PyTorch, Transformer",
    "Tools: COMSOL, MATLAB, Git",
  ];

  