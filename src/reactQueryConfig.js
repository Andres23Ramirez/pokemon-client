/**
 * These are applied globally to all API calls. You may override these settings
 * for a query please do so with your `useQuery` hook.
 *
 * For more info on and config provider, settings, and how to overwrite per
 * query or mutation:
 * https://react-query.tanstack.com
 */
const reactQueryConfig = {
  // globally related
  refetchAllOnWindowFocus: false, // true

  // useQuery related
  staleTime: 5 * 60 * 1000, // Query remains active for 5 minutes
  retry: false, // 3

  /**
   * The following are explicitly listed to remain predictable and to highlight
   * them given their importance in the behavior of react-query. They may be
   * overwritten on a case by case basis if necessary.
   *
   * [They are unchanged from current defaults.]
   */
  // globally related
  throwOnError: false, // overwrite for mutation call if you want to catch & handle
  suspense: false,
  useErrorBoundary: false,

  // useQuery related
  cacheTime: 5 * 60 * 1000,
  refetchInterval: false,
  refetchOnMount: false,

  /**
   * By default react-query uses deep equal check - if performance takes a hit
   * later we can use `isDataEqual` to get specific to handle comparisons
   * intelligently.
   *
   *   isDataEqual: (previous, next) => true, // or false
   */
}

export default reactQueryConfig
