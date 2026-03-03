export function getPageUrl(
  page: number,
  searchParams: Record<string, string>,
  baseUrl: string,
) {
  const params = new URLSearchParams({ ...searchParams, page: String(page) })

  return `${baseUrl}?${params.toString()}`
}
