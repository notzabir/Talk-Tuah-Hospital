import { NextResponse } from 'next/server';

// Simple delay function
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get('file');
    const url = formData.get('url');
    
    let content;
    if (file instanceof File) {
      const text = await file.text();
      content = text;
    } else if (url) {
      const pageResponse = await fetch(url.toString());
      content = await pageResponse.text();
    } else {
      throw new Error('No file or URL provided');
    }

    // Try up to 3 times with exponential backoff
    for (let attempt = 0; attempt < 3; attempt++) {
      try {
        const response = await fetch("https://api.openai.com/v1/chat/completions", {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [
              {
                role: "system",
                content: "Extract the following details from the webpage content: Name, Age, Gender, Race, Cause of death, Date of injury resulting in death, Location of injury, Location of death and a brief summary of the event",
              },
              {
                role: "user",
                content: `Content: ${content}`,
              },
            ],
            max_tokens: 500,
            temperature: 0.5,
          }),
        });

        if (response.ok) {
          const data = await response.json();
          return NextResponse.json({ extractedData: data.choices[0].message.content });
        }

        if (response.status === 429) { // Too Many Requests
          await delay(Math.pow(2, attempt) * 1000); // Wait 1s, 2s, 4s
          continue;
        }

        throw new Error(`OpenAI API error: ${response.statusText}`);
      } catch (err) {
        if (attempt === 2) throw err; // Rethrow on last attempt
      }
    }

    throw new Error('Failed after 3 attempts');
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'An error occurred' },
      { status: 500 }
    );
  }
} 