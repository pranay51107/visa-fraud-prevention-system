const vision = require("@google-cloud/vision");

async function extractText(filePath) {
  try {
    const client = new vision.ImageAnnotatorClient();
    const [result] = await client.textDetection(filePath);
    return result.textAnnotations?.[0]?.description || "";
  } catch (err) {
    // fallback for demo
    return "MOCK TEXT: VISA DOCUMENT";
  }
}

module.exports = extractText;
