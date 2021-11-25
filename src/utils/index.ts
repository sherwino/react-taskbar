/**
 * Abstraction for localStorage that uses an in-memory fallback when localStorage throws an error.
 * Reasons for throwing an error:
 * - maximum quota is exceeded
 * - under Mobile Safari (since iOS 5) when the user enters private mode `localStorage.setItem()`
 *   will throw
 * - trying to access localStorage object when cookies are disabled in Safari throws
 *   "SecurityError: The operation is insecure."
 */
export const storage: StorageUtil = {
  get(key) {
    try {
      return parseJSON(localStorage.getItem(key));
    } catch {
      return false;
    }
  },
  set(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));

      return true;
    } catch {
      return false;
    }
  },
  remove(key) {
    localStorage.removeItem(key);
  },
};

/**
 * A wrapper for `JSON.parse()` which supports the return value of `JSON.stringify(undefined)`
 * which returns the string `"undefined"` and this method returns the value `undefined`.
 */
function parseJSON(value: any): any {
  return value === "undefined"
    ? undefined
    : // JSON.parse() doesn't accept non-string values, this is why we pass empty
      // string which will throw an error which can be handled
      JSON.parse(value);
}

/**
 * Merge current into lastKnown into, default window config
 * Essentially current config takes highest priority, default lowest
 */
export const mergeConfigFn: MergeUtil = (defaultCfg, lastKnownCfg, currentCfg) => {
const mergedConfig = {...defaultCfg, ...lastKnownCfg, ...currentCfg}

  return mergedConfig;

}