import type { NextApiRequest, NextApiResponse } from "next";
import path from "path";
const { dockStart } = require("@nlpjs/basic");
const fs = require("fs");

type Data = {
  name: string;
};

let nlp = null;

// Import the model
(async () => {
  const dock = await dockStart({ use: ["Basic"] });
  nlp = dock.get("nlp");
  // Train the model => do it only once
  // await nlp.addCorpus("./lib/ressources/corpus-en.json");
  // nlp.addLanguage("en");

  // await nlp.train();
  const modelPath = path.join(process.cwd(), "lib", "ressources", "model.nlp");
  const data = fs.readFileSync(modelPath, "utf8");
  nlp.import(data);
})();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Any>
) {
  const {
    query: { id, name },
    method,
  } = req;
  switch (method) {
    case "POST":
      //Parse the request
      const { destination, author, message } = req.body;

      //Parsing => if the message contains "NETFLIX" or "netflix" or "Netflix" => send a link to the Netflix website
      var regExNetflixOneWay = /.*netflix.*password*./i;
      var regExNetflixOtherWay = /.*password.*netflix*./i;
      var regExPassword = /.*password*./i;
      var regExHint = /(.*(hint|help|git).*)+/i;
      var regExDisney = /.*disneyland.*/i;
      var answer: String = "";

      //check if conditions for the netflix flag are met
      if (
        (regExNetflixOneWay.test(message) ||
          regExNetflixOtherWay.test(message)) && //contains password and netflix ?
        destination == 3 && //for alexia form kevin or lea
        (author == 1 || author == 2) &&
        message.length < 50 //but not too long
      ) {
        answer = "Here is my password : j@dOreN3tfl1x. Enjoy !";

        //answer a troll message if the message contains "password"
      } else if (regExPassword.test(message) && message.length < 50) {
        answer = "Troll message";

        //hint messages asked to Alexis
      } else if (
        message.length < 50 &&
        author == 3 &&
        destination == 4 &&
        regExHint.test(message)
      ) {
        answer =
          "Here is a little hint : " +
          "Hackbook uses NextAuth to perform an effective authentication. " +
          "It allow us to use some JWEs ;)" +
          "You should have a look to the following link : https://github.com/nextauthjs/next-auth/blob/59817126818760f9b4c29ee52c7f0b4a439f0bda/packages/core/src/jwt.ts#L63";

        //if Alexis ask for the disney picture, the end challenge message appear
      } else if (
        message.length < 50 &&
        author == 4 &&
        destination == 3 &&
        regExDisney.test(message)
      ) {
        answer = "End challenge message";

        //make NLP pasing else
      } else if (message.length < 50) {
        const reponse = await nlp.process("en", message);
        if (reponse.answer == undefined) {
          answer = "I don't understand";
        } else {
          answer = reponse.answer;
        }

        //if the message is too long
      } else {
        answer = "Wow don't spam please !";
      }

      //Reply to the request
      res.status(200).json({
        destination: author,
        author: destination,
        message: answer,
        date: new Date(),
      });
      break;

    //Other HTTP method
    default:
      res.setHeader("Allow", ["GET", "PUT"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
