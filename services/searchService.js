async function verifyConsultant(name) {
  return {
    consultant: name || "Unknown",
    trusted: true,
    source: "Google Custom Search (demo)"
  };
}

module.exports = verifyConsultant;
