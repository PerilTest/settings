import { peril, danger } from "danger"
import { Issues } from "github-webhook-event-types"

export default async (issues: Issues) => {
  console.log("Doing some work")
  await peril.runTask("logger", "in 10 seconds", {})
}
