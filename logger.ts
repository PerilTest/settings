console.log("Hi!")

import { peril } from "danger"
import { IncomingWebhook } from "@slack/client"

export default (data: any) => {
    const message = {
      unfurl_links: false,
      attachments: [
        {
          color: "good",
          title: `Ping: \`${JSON.stringify(data)}\``,
        },
      ],
    }

    const url = peril.env.SLACK_RFC_WEBHOOK_URL || ""
    const webhook = new IncomingWebhook(url)
    webhook.send(message)
}
