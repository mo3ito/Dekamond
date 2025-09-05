export function isValidIranMobile(value: string) {
    const regex = /^(09\d{9}|\+989\d{9}|00989\d{9})$/;
    return regex.test(value);
  }
  