/* eslint-disable no-useless-escape */
export function validateEmail(email: string) {
  const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return re.test(email);
}
