export default function (input: Ref<string>) {
  return (event: KeyboardEvent) => {
    // allow ctrl, arrow keys, backspace, delete, tab
    if (
      event.ctrlKey ||
      event.key === "ArrowLeft" ||
      event.key === "ArrowRight" ||
      event.key === "Backspace" ||
      event.key === "Delete" ||
      event.key === "Tab"
    ) {
      return;
    }

    // if not a number, prevent
    if (isNaN(Number(event.key))) {
      return event.preventDefault();
    }

    // if longer than 4 digits, prevent UNLESS its highlighted (to allow for replacement)
    if (
      input.value?.toString().length >= 4 &&
      !window.getSelection()?.toString()
    ) {
      return event.preventDefault();
    }
  };
}
