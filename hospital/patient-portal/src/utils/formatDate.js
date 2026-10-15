export function formatDate(value, options = { dateStyle: 'medium' }) {
  return new Intl.DateTimeFormat(undefined, options).format(new Date(value))
}
