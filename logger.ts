console.log("Hi!")

import { peril } from "danger"
import { IncomingWebhook } from "@slack/client"

/**
 * A task that accepts Slack incoming webhook data
 * and sends a message into the Artsy Dev chat room.
 *
 * The full API docs for the syntax of the expected data
 * can be found: https://slackapi.github.io/node-slack-sdk/reference/IncomingWebhook
 * 
 * Usage in a Dangerfile:
 * 

    peril.runTask("slack-dev-channel", "in 5 minutes", message)
 */

export default (data: any) => {
    const message = {
      unfurl_links: false,
      attachments: [
        {
          color: "good",
          title: `Ping: ${data}`,
        },
      ],
    }

    const url = peril.env.SLACK_RFC_WEBHOOK_URL || ""
    const webhook = new IncomingWebhook(url)
    webhook.send(data)
}
