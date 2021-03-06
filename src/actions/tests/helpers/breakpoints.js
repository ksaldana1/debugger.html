export function mockPendingBreakpoint(overrides = {}) {
  const { sourceUrl, line, column, condition, disabled } = overrides;
  return {
    location: {
      sourceUrl: sourceUrl || "http://localhost:8000/examples/bar.js",
      line: line || 5,
      column: column || undefined
    },
    generatedLocation: {
      sourceUrl: sourceUrl || "http://localhost:8000/examples/bar.js",
      line: line || 5,
      column: column || undefined
    },
    condition: condition || null,
    disabled: disabled || false
  };
}

export function generateBreakpoint(filename) {
  return {
    location: {
      sourceUrl: `http://localhost:8000/examples/${filename}`,
      sourceId: filename,
      line: 5
    },
    condition: null,
    disabled: false
  };
}
