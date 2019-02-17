import { danger, message } from "danger"
import { IncomingWebhook } from "@slack/client"

export default async (things: any) => {
  console.log(danger)
  console.log(things)
  console.log(IncomingWebhook)
}

console.log("Go")
message("Hi!")
