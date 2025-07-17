const promptsByCategory = {
  image: [
    "A futuristic cityscape at sunset with flying cars",
    "A surreal portrait of a woman made of flowers",
    "A majestic dragon soaring over mountains",
    "A cozy cabin in a snowy forest under northern lights"
  ],
  video: [
    "A time-lapse of a blooming flower in a magical garden",
    "A slow-motion capture of waves crashing on a beach",
    "A drone shot flying through a dense jungle canopy",
    "An animated short of a robot exploring a futuristic city"
  ],
  text: [
    "Write a heartfelt letter to your future self",
    "Describe a day in the life of a time traveler",
    "Create a poem about the changing seasons",
    "Draft a social media post promoting environmental awareness"
  ],
  audio: [
    "A podcast episode discussing the future of AI",
    "An audio story about a mysterious island adventure",
    "A guided meditation for relaxation and focus",
    "An interview with a renowned artist about creativity"
  ]
};

exports.generatePrompt = (req, res) => {
  const category = req.query.category || 'image';
  const prompts = promptsByCategory[category.toLowerCase()] || promptsByCategory['image'];
  res.json({ prompts });
};
