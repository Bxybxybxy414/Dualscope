export default async function handler(request, response) {
  if (request.method !== "POST") {
    response.status(405).json({ error: "Method not allowed" });
    return;
  }

  const { messages } = request.body || {};
  if (!Array.isArray(messages)) {
    response.status(400).json({ error: "messages must be an array" });
    return;
  }

  if (!process.env.OPENAI_API_KEY) {
    response.status(500).json({ error: "Missing OPENAI_API_KEY" });
    return;
  }

  if (!process.env.OPENAI_MODEL) {
    response.status(500).json({ error: "Missing OPENAI_MODEL" });
    return;
  }

  const upstream = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: process.env.OPENAI_MODEL,
      input: messages,
    }),
  });

  const data = await upstream.json();
  response.status(upstream.status).json(data);
}
