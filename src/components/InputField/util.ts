/**
 * A utility function to conditionally combine class names.
 * @param {...(string | false | null | undefined | Record<string, boolean>)} args - Class names or objects with conditional classes.
 * @returns {string} - A single string of combined class names.
 */
export function cx(
  ...args: (string | false | null | undefined | Record<string, boolean>)[]
): string {
  return args
    .flat() // Flatten any nested arrays
    .filter(Boolean) // Remove falsy values
    .map((item) => {
      if (typeof item === 'string') return item;
      if (typeof item === 'object') {
        return Object.entries(item as object)
          .filter(([, value]) => value)
          .map(([key]) => key)
          .join(' ');
      }
      return '';
    })
    .join(' ');
}
