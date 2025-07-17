exports.getToolsList = (req, res) => {
  // Return a list or info about free tools
  res.json({
    tools: [
      "Bulk URL Redirection Tool",
      "Google Index Checker",
      "YouTube Transcript Tool",
      "Bulk Anchor Text Generators",
      "YouTube Tag Generator",
      "WhatsApp Chat Link",
      "Comma Separator Tool",
      "YouTube Video Tags Extractor",
      "URL Domain Extractor",
      "Backlink Generator Tool",
      "Image Compressor",
      "About Us Page Generator",
      "Mobile-Friendly Tester Tool",
      "Canonical Tag Generator",
      "Free SEO Audit"
    ]
  });
};
