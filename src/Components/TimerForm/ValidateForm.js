export default function ValidateInfo(values) {
  let errors = {}

  if (!values.item) {
    errors.item = "Item name required"
  }

  // if (typeof values.hours !== "number") {
  //   errors.hours = "Not a number"
  // }

  // if (typeof values.minutes !== "number") {
  //   errors.minutes = "Not a number"
  // }

  // if (typeof values.seconds !== "number") {
  //   errors.seconds = "Not a number"
  // }

  return errors;
};
