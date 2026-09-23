export const profile = {
  first: "Fiban",
  last: "Mubarak",
  location: "Bangalore, India",
  email: "fbnmubarak@gmail.com",
  phone: "+91 81369 48837",
  linkedin: "https://www.linkedin.com/in/fibanmubarak",
  github: "https://github.com/fibannn",
  intro:
    "Quantitative researcher and data analyst based in Bangalore. I build trading strategy backtesters, test them for overfitting, and validate the market data behind them. I also design web and mobile interfaces.",
};

export const projects = [
  {
    id: "ema-stack",
    title: "Multi-timeframe trend system",
    scope: "ETH-USD · Python, Numba, Optuna",
    headline: "~1000× faster",
    summary:
      "A five-timeframe EMA trend-alignment strategy, ported out of TradingView Pine Script into Python so it could be tested properly. The original took seconds per 18-month run; with the hot loop compiled through Numba JIT it settles around two milliseconds, which changes what kinds of questions you can afford to ask.",
    detail:
      "Parameter search runs on Optuna's TPE sampler across an eleven-dimensional space: EMA lengths, timeframe stack, entry confirmation, wick tolerance, take-profit and stop distances. Final candidates get re-checked with exhaustive grid search rather than trusted from the Bayesian run alone.",
    stats: [
      { label: "Backtests run", value: "30,000+" },
      { label: "Search dimensions", value: "11" },
      { label: "Single-run time", value: "~2 ms" },
    ],
    tags: ["Python", "Numba", "Optuna", "Pandas", "NumPy"],
  },
  {
    id: "robustness",
    title: "Robustness and overfit testing",
    scope: "Validation tooling",
    headline: "18/18 profitable months",
    summary:
      "The most useful thing this work produced was a rejection. One configuration looked flawless across six months (zero losing months) and fell apart on the full eighteen, losing in eight of them. Catching that meant building tools whose job is to disagree with the optimiser.",
    detail:
      "A calendar-time train/test split reports metrics for every parameter combination in the grid, not just the winner. A sensitivity sweep walks EMA length, wick ratio and bounce multiplier through their neighbourhoods to see whether performance sits on a plateau or a spike. A regime split scores trending, ranging and high-volatility periods separately. The replacement configuration was profitable in all eighteen months.",
    stats: [
      { label: "Validation period", value: "18 months" },
      { label: "Losing months, rejected config", value: "8" },
      { label: "Losing months, final config", value: "0" },
    ],
    tags: ["Walk-forward", "Sensitivity analysis", "Regime analysis"],
  },
  {
    id: "risk-filters",
    title: "Risk-filter research",
    scope: "Entry and exit gating",
    headline: "+45% net, −27% drawdown",
    summary:
      "Ten-plus candidate filters tested against the base strategy: ATR volatility gating, ADX trend strength, volume confirmation, consecutive-loss circuit breakers, trend persistence, cross-asset confirmation. Two survived.",
    detail:
      "Volatility filtering and close-versus-wick stop confirmation together lifted net profit from 7,420 to 12,792 points and cut maximum drawdown from 286.5 to 208 points. The other eight were removed. A filter that improves the headline number without improving the shape of the equity curve is usually just curve-fitting with extra steps.",
    stats: [
      { label: "Filters tested", value: "10+" },
      { label: "Net profit", value: "7,420 → 12,792 pts" },
      { label: "Max drawdown", value: "286.5 → 208 pts" },
    ],
    tags: ["ATR", "ADX", "Risk management", "Position sizing"],
  },
  {
    id: "momentum",
    title: "Momentum and volume strategy",
    scope: "Independent second strategy",
    headline: "No trend stack",
    summary:
      "Built deliberately without the EMA machinery, so its results would not be correlated with the first system. Entries come from rate-of-change and RSI momentum with volume-spike confirmation; the stop moves to breakeven once the trade opens up.",
    detail:
      "Small fixed take-profit, maximum hold measured in bars, and a grid search sweeping the take-profit, breakeven trigger and hold limit together. Same Numba-accelerated core as the trend system so the two can be compared on equal footing.",
    stats: [
      { label: "Signal inputs", value: "ROC, RSI, volume" },
      { label: "Stop behaviour", value: "Breakeven on open profit" },
    ],
    tags: ["Momentum", "Volume", "Grid search"],
  },
  {
    id: "data",
    title: "Market data pipeline",
    scope: "ETH and XAU/Gold",
    headline: "1.3M+ bars validated",
    summary:
      "Minute-level OHLCV across two assets and eighteen months, with automated integrity checks for gaps, duplicates and impossible bars. Every strategy result above rests on this, which is why it gets its own attention.",
    detail:
      "Broker feeds arrive in different shapes and different clocks. The gold data is semicolon-delimited on a fixed GMT+2 broker time, converted to IST. A cross-timezone alignment bug was quietly shifting bars between timeframes until it was found and fixed. Backtest fills are reconciled trade-by-trade against live TradingView and OANDA execution data.",
    stats: [
      { label: "Bars processed", value: "1,300,000+" },
      { label: "Assets", value: "ETH-USD, XAU-USD" },
      { label: "Span", value: "18–30 months" },
    ],
    tags: ["Pandas", "Data integrity", "Reconciliation"],
  },
  {
    id: "design",
    title: "Product and interface design",
    scope: "Tutedude · Jun 2025 – Jan 2026",
    headline: "Web and mobile",
    summary:
      "UX/UI internship designing web and mobile interfaces in Figma, working from user flows through to delivered screens.",
    detail:
      "Alongside this, a product research simulation with Lloyds Banking Group mapping user journeys and internal workflows to find where they break down. The habit transfers: a strategy and an interface both fail at the joints, and both reward someone willing to go look.",
    stats: [
      { label: "Tools", value: "Figma" },
      { label: "Surfaces", value: "Web, mobile" },
    ],
    tags: ["Figma", "User flows", "Journey mapping"],
  },
  {
    id: "earlier",
    title: "Earlier builds",
    scope: "Python, NLP",
    headline: "Sentiment and chat",
    summary:
      "A Twitter sentiment analysis pipeline, and an AI-assisted chatbot giving basic first-aid guidance.",
    detail:
      "Both predate the trading work and are where the Python habits came from: collecting messy input, cleaning it, and getting something useful out the other end.",
    stats: [{ label: "Domain", value: "NLP, classification" }],
    tags: ["Python", "NLP"],
  },
];

export const practice = [
  {
    title: "Quantitative research",
    body: "Strategy design, backtesting infrastructure, parameter optimisation, and the validation work that decides whether a result is real. Comfortable writing the fast path myself rather than waiting on a library.",
    tools: ["Python", "NumPy", "Pandas", "Numba", "Optuna"],
  },
  {
    title: "Data analysis",
    body: "Cleaning and validating large time-series datasets, building the checks that catch silent corruption, and reporting findings in a form someone can act on.",
    tools: ["SQL", "Excel", "Tableau", "Power BI", "Jupyter"],
  },
  {
    title: "Product design",
    body: "Interface design for web and mobile, grounded in user flows and journey mapping rather than screens invented in isolation.",
    tools: ["Figma", "Prototyping", "User research"],
  },
];

export const background = [
  {
    period: "2025 – 2026",
    title: "UX/UI Design Intern, Tutedude",
    note: "Web and mobile interface design in Figma.",
  },
  {
    period: "2020 – 2024",
    title: "B.Tech, Computer Science & Engineering",
    note: "Royal College of Engineering & Technology, Akkikkavu.",
  },
  {
    period: "2018 – 2020",
    title: "Senior Secondary, Computer Science",
    note: "PKMMHSS, Edarikode.",
  },
];

export const credentials = [
  "Google Data Analytics Certificate",
  "Data Analytics Job Simulation: Deloitte",
  "Product Simulation Training: Lloyds Banking Group",
];
