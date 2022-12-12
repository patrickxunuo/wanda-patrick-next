import moment from "moment";

export function calcualteDiffInDaydayDiff(a: Date, b: Date) {
  if (!a || !b) return 0;
  const momentA = moment(a);
  const momentB = moment(b);

  return momentA.diff(momentB, "days");
}
