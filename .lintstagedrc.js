module.exports = {
  "*.{js,jsx,ts,tsx}": ["pnpm run lint:fix"],
  "*.{json,md,mdx,html,css,yml,yaml}": ["pnpm run lint:format"],
};
