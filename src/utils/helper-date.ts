import moment from "moment";
export const toShortDate = (date: Date) => {
  return (
    date.getFullYear() +
    "-" +
    (parseInt(date.getUTCMonth().toString()) + 1) +
    "-" +
    date.getUTCDate()
  );
};
export const getThisYear = () => {
  const now = new Date();
  return now.getFullYear();
};
export const utc = function (): string {
  return moment.utc().toISOString();
};

export const toUtc = function (date: string): string {
  return moment(date).utc().toISOString();
};
export const to_unix = function () {
  return moment().unix();
};
