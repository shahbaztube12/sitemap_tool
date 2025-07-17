const plans = [
  {
    id: 1,
    name: 'Basic Plan',
    price: '$9.99/month',
    features: ['100 URL redirects', 'Basic support', 'Monthly reports'],
  },
  {
    id: 2,
    name: 'Pro Plan',
    price: '$29.99/month',
    features: ['1000 URL redirects', 'Priority support', 'Weekly reports', 'Custom domains'],
  },
  {
    id: 3,
    name: 'Enterprise Plan',
    price: 'Contact us',
    features: ['Unlimited URL redirects', 'Dedicated support', 'Daily reports', 'Custom SLAs'],
  },
];

exports.redirectUrls = (req, res) => {
  const { urls } = req.body;
  if (!urls || !Array.isArray(urls)) {
    return res.status(400).json({ error: 'urls must be an array' });
  }
  const result = urls.map(url => ({
    originalUrl: url,
    redirectedUrl: url + '?redirected=true'
  }));
  res.json({ result });
};

exports.getPlans = (req, res) => {
  res.json(plans);
};

exports.getPlanById = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const plan = plans.find(p => p.id === id);
  if (!plan) {
    return res.status(404).json({ error: 'Plan not found' });
  }
  res.json(plan);
};
