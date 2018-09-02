import { peril, danger } from "danger"
import { Issues } from "github-webhook-event-types"

import { IncomingWebhook } from "@slack/client"

export default async (issues: Issues) => {
  
  await peril.runTask("logger", "in 1 minutes", { time: 1 })
  await peril.runTask("logger", "in 5 minutes", { time: 5 })
  await peril.runTask("logger", "in 10 minutes", { time: 10 })
  await peril.runTask("logger", "in 20 minutes", { time: 20 })
  
  console.log("Hi!")
  const message = {
    unfurl_links: false,
    attachments: [
      {
        color: "good",
        title: "Triggered a bunch of loggers",
      },
    ],
  }

  const url = peril.env.SLACK_RFC_WEBHOOK_URL || ""
  const webhook = new IncomingWebhook(url)
  await webhook.send(message)

  console.log("Triggering the logger")
  
}
