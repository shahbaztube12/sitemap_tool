const sharp = require('sharp');
const path = require('path');
const fs = require('fs');
const os = require('os');

exports.compressImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No image file uploaded' });
    }

    const inputPath = req.file.path;
    const outputFilename = 'compressed-' + req.file.filename;
    const outputPath = path.join(os.tmpdir(), outputFilename);

    // Compress image using sharp
    await sharp(inputPath)
      .resize({ width: 800 }) // Resize width to 800px, maintain aspect ratio
      .jpeg({ quality: 70 }) // Compress JPEG quality to 70%
      .toFile(outputPath);

    // Read compressed image file and convert to base64
    const compressedImageBuffer = fs.readFileSync(outputPath);
    const compressedImageBase64 = compressedImageBuffer.toString('base64');

    // Clean up uploaded and compressed files
    fs.unlinkSync(inputPath);
    fs.unlinkSync(outputPath);

    res.json({
      compressedImageUrl: `data:image/jpeg;base64,${compressedImageBase64}`
    });
  } catch (error) {
    console.error('Error compressing image:', error);
    res.status(500).json({ error: 'Failed to compress image' });
  }
};
