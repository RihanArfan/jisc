export default function (input: Ref<string>) {
  return (event: ClipboardEvent) => {
    // get data
    const paste = event.clipboardData?.getData("text/plain");
    if (!paste) return;

    // remove all non-numeric characters
    const filtered = paste.replace(/\D/g, "");

    // truncate to 4 characters
    const trimmed = filtered.substring(0, 4 - input.value?.length);

    return (input.value = `${input.value}${trimmed}`);
  };
}
