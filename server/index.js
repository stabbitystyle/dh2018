const express = require('express');
const app = express();

app.get('/text', (req,res) => {
  res.send({this: "Hello"});
});

// const fs = require('fs');
// // Imports the Google Cloud client libraries
// const vision = require('@google-cloud/vision').v1p3beta1;
// // Imports the Google Cloud client library
// const textToSpeech = require('@google-cloud/text-to-speech');

// app.get('/text/:image', (req, res) => {
//   const client = new vision.ImageAnnotatorClient();

//   const uri = `./${req.params.image}`;
//   const request = {
//     image: {
//       content: fs.readFileSync(uri),
//     },
//     feature: {
//       languageHints: ['en-t-i0-handwrit'],
//     },
//   };

//   client
//     .documentTextDetection(request)
//     .then(results => {
//       const fullTextAnnotation = results[0].fullTextAnnotation;
//       const textAnnotations = results[0].textAnnotations;
//       const textToRead = fullTextAnnotation.text;
//       res.send({ text : textToRead });
//       // console.log(`Annotations: ${JSON.stringify(textAnnotations,null,4)}`)
//     })
//     .catch(err => {
//       console.error('ERROR:', err);
//     });
// });

// app.get('/voice/:text', (req, res) => {
//  const textToRead = req.params.text;
 
//   // Creates a client
//  const speechClient = new textToSpeech.TextToSpeechClient();

//  // The text to synthesize
//  const text = textToRead;

//  // Construct the request
//  const speechRequest = {
//    input: {text: text},
//    // Select the language and SSML Voice Gender (optional)
//    voice: {languageCode: 'en-US', ssmlGender: 'NEUTRAL'},
//    // Select the type of audio encoding
//    audioConfig: {audioEncoding: 'MP3'},
//  };

//  // Performs the Text-to-Speech request
//  speechClient.synthesizeSpeech(speechRequest, (err, response) => {
//    if (err) {
//      console.error('ERROR:', err);
//      return;
//    }

//    const audio = response.audioContent;

//    res.send({ audio });
//  });
// });

// app.get('/hello', (req, res) => {
//   console.log("hello");
//   res.send({ this: "hi"});
// });

// console.log("listen")
app.listen(5000);
