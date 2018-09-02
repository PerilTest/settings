export default async () => {
  const { send } = await import("./send")
  await send("Monday")
}
