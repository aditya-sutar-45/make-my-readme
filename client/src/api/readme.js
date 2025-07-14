const BASE_URL = import.meta.env.VITE_BASE_URL;

export const generateReadme = async (userPrompt, onChunk) => {
  const resposne = await fetch(`${BASE_URL}/generate-readme`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userPrompt }),
  });

  if (!resposne.ok) {
    throw new Error("Failed to generate README");
  }

  const reader = resposne.body.getReader();
  const decoder = new TextDecoder("utf-8");
  let done = false;

  while (!done) {
    const { value, done: doneReading } = await reader.read();
    done = doneReading;
    const chunkValue = decoder.decode(value, { stream: true });
    onChunk(chunkValue);
  }
};

export const enhanceReadme = async (userPrompt, readmeMarkdown, onChunk) => {
  const resposne = await fetch(`${BASE_URL}/enhance-readme`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userPrompt, readmeMarkdown }),
  });

  if (!resposne.ok) {
    throw new Error("Failed to generate README");
  }

  const reader = resposne.body.getReader();
  const decoder = new TextDecoder("utf-8");
  let done = false;

  while (!done) {
    const { value, done: doneReading } = await reader.read();
    done = doneReading;
    const chunkValue = decoder.decode(value, { stream: true });
    onChunk(chunkValue);
  }
};
