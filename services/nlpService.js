const language = require("@google-cloud/language");

async function analyzeText(text) {
  try {
    const client = new language.LanguageServiceClient();
    const document = { content: text, type: "PLAIN_TEXT" };
    const [result] = await client.analyzeSentiment({ document });

    return {
      sentiment: result.documentSentiment.score,
      redFlags: []
    };
  } catch (err) {
    return {
      sentiment: 0.1,
      redFlags: ["mock-check"]
    };
  }
}

module.exports = analyzeText;
