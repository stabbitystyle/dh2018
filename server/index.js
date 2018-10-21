const express = require('express');
const app = express();

const fs = require('fs');
// Imports the Google Cloud client libraries
const vision = require('@google-cloud/vision').v1p3beta1;
// Imports the Google Cloud client library
const textToSpeech = require('@google-cloud/text-to-speech');

app.get('/text/:image', (req, res) => {
  const client = new vision.ImageAnnotatorClient();

  const uri = `./${req.params.image}`;
  const request = {
    image: {
      content: fs.readFileSync(uri),
    },
    feature: {
      languageHints: ['en-t-i0-handwrit'],
    },
  };

  client
    .documentTextDetection(request)
    .then(results => {
      const fullTextAnnotation = results[0].fullTextAnnotation;
      const textAnnotations = results[0].textAnnotations;
      console.log(`Full text: ${fullTextAnnotation.text}`);
      const textToRead = fullTextAnnotation.text;
      res.send({ textToRead });
      // console.log(`Annotations: ${JSON.stringify(textAnnotations,null,4)}`)
    })
    .catch(err => {
      console.error('ERROR:', err);
    });
});

app.get('/voice/:text', (req, res) => {
 const textToRead = req.params.text;
 
  // Creates a client
 const speechClient = new textToSpeech.TextToSpeechClient();

 // The text to synthesize
 const text = textToRead;

 // Construct the request
 const speechRequest = {
   input: {text: text},
   // Select the language and SSML Voice Gender (optional)
   voice: {languageCode: 'en-US', ssmlGender: 'NEUTRAL'},
   // Select the type of audio encoding
   audioConfig: {audioEncoding: 'MP3'},
 };

 // Performs the Text-to-Speech request
 speechClient.synthesizeSpeech(speechRequest, (err, response) => {
   if (err) {
     console.error('ERROR:', err);
     return;
   }

    // Write the binary audio content to a local file
  fs.writeFile('output.mp3', response.audioContent, 'binary', err => {
    if (err) {
      console.error('ERROR:', err);
      return;
    }
  });

   res.send({ log: "file was written to an mp3" });
 });
});

app.listen(5000);