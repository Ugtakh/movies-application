require("dotenv").config();

export const postWebHook = (req: any, res: any) => {
  console.log("POSTWEBHOOK");
  const body = req.body;

  if (body.object === "page") {
    body.entry.forEach((entry: any) => {
      const webHook_event = entry.messaging[0];
      console.log("Event: ", webHook_event);
    });

    return res.status(200).send("EVENT_RECEIVED");
  } else {
    res.status(404).send("Not Found");
  }
};

export const getWebHook = (req: any, res: any) => {
  console.log("GETWEBHOOK");
  const VERIFY_TOKEN = process.env.MY_VERIFY_TOKEN;

  const mode = req.query["hub.mode"];
  const token = req.query["hub.verify_token"];
  const challenge = req.query["hub.challenge "];

  if (mode && token) {
    if (mode === "subscribe" && token === VERIFY_TOKEN) {
      console.log("WEBHOOK_VERIFYIED");
      res.status(200).send(challenge);
    }
  }
};
