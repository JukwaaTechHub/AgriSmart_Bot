function detect(text) {
  const swahiliKeywords = ["dudu", "majani", "nyanya", "mahindi", "kudhibiti"];
  const lowered = text.toLowerCase();
  const swCount = swahiliKeywords.reduce((acc, kw) => (lowered.includes(kw) ? acc + 1 : acc), 0);
  return swCount > 0 ? "sw" : "en";
}

module.exports = { detect };
