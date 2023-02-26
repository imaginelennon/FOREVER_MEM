import { Configuration, OpenAIApi } from "openai";

//key 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
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  if (!configuration.apiKey) {
    res.status(500).json({
      error: {
        message: "OpenAI API key not configured, please follow instructions in README.md",
      }
    });
    return;
  }

  const animal = req.body.animal || '';
  const Question = req.body.Question || '';
  //console.log(animal);
  //console.log(animal.trim().length);
  //console.log(Question);
  if (animal.trim().length === 0) {
    res.status(400).json({
      error: {
        message: "Please enter a valid Character",
      }
    });
    return;
  }
  if (Question.trim().length === 0) {
    res.status(400).json({
      error: {
        message: "Please enter a valid Question",
      }
    });
    return;
  }

  try {
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: generatePrompt(animal, Question),
      temperature: 0.2,
    });
    
    res.status(200).json({ result: completion.data.choices[0].text });
    
    
  } catch(error) {
    // Consider adjusting the error handling logic for your use case
    if (error.response) {
      console.error(error.response.status, error.response.data);
      res.status(error.response.status).json(error.response.data);
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
      res.status(500).json({
        error: {
          message: 'An error occurred during your request.',
        }
      });
    }
  
  }
  
}

function generatePrompt(animal, Question) {
  const HPcharacter =
    animal[0].toUpperCase() + animal.slice(1).toLowerCase();
  const question = Question;
  return `As ${HPcharacter} how would you answer ${question}` 
  
}

