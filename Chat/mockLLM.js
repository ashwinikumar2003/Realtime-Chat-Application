export async function mockLLMResponse(prompt) {
  return new Promise((resolve) => {
    const timeout = Math.random() * (10000 - 5000) + 5000; // Random delay between 5 to 10 seconds
    setTimeout(() => {
      const mockResponse = `This is a mock response from the LLM based on the input: "${prompt}"`;
      resolve(mockResponse);
    }, timeout);
  });
}