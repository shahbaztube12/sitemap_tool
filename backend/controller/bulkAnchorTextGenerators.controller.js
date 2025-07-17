const plansData = [
  {
    id: 1,
    name: "Basic Plan",
    price: "$9.99/month",
    features: [
      "100 URL redirections",
      "Basic analytics",
      "Email support"
    ]
  },
  {
    id: 2,
    name: "Pro Plan",
    price: "$29.99/month",
    features: [
      "1000 URL redirections",
      "Advanced analytics",
      "Priority email support",
      "Custom domain"
    ]
  },
  {
    id: 3,
    name: "Enterprise Plan",
    price: "Contact us",
    features: [
      "Unlimited URL redirections",
      "Dedicated account manager",
      "Phone & email support",
      "Custom integrations"
    ]
  }
];

exports.getPlans = (req, res) => {
  res.json(plansData);
};

exports.getPlanById = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const plan = plansData.find(p => p.id === id);
  if (!plan) {
    return res.status(404).json({ error: "Plan not found" });
  }
  res.json(plan);
};

exports.generateAnchorTexts = (req, res) => {
  const { keywords } = req.body;
  if (!keywords || !Array.isArray(keywords)) {
    return res.status(400).json({ error: 'keywords must be an array' });
  }

  // Improved anchor text generation logic
  // For each keyword, generate variations with common anchor text patterns
  const result = keywords.flatMap(keyword => {
    const trimmed = keyword.trim();
    if (!trimmed) return [];

    return [
      trimmed,
      `Buy ${trimmed}`,
      `Best ${trimmed}`,
      `Cheap ${trimmed}`,
      `Top ${trimmed}`,
      `Buy ${trimmed} Online`,
      `Best ${trimmed} Deals`,
      `Cheap ${trimmed} Prices`,
      `Top ${trimmed} Reviews`,
      `Learn about ${trimmed}`,
      `Guide to ${trimmed}`,
      `About ${trimmed}`,
      `More on ${trimmed}`,
      `Info on ${trimmed}`,
      `Details of ${trimmed}`
    ];
  });

  res.json({ result });
};
