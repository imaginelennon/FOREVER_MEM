
fetch("https://api.elevenlabs.io/v1/text-to-speech/21m00Tcm4TlvDq8ikWAM", {
  method: "POST",
  headers: {
    "accept": "audio/mpeg",
    "xi-api-key": "37eae678e45f3059253f19abfdc1b013",
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    text: "string",
    voice_settings: {
      stability: 0,
      similarity_boost: 0
    }
  })
})
.then(response => response.blob())
.then(console.log('success'))
.then(blob => {
  // Do something with the audio file
})
.catch(error => {
  // Handle the error
})