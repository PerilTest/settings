import { peril } from "danger"
import { IncomingWebhook } from "@slack/client"

export const send = async (message: string) => {
  const data = {
    unfurl_links: false,
    attachments: [
      {
        color: "good",
        title: message,
      },
    ],
  }

  const url = peril.env.SLACK_RFC_WEBHOOK_URL || ""
  const webhook = new IncomingWebhook(url)
  await webhook.send(data)
}
