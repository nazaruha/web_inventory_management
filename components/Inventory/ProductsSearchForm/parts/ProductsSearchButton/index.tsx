import { useFormStatus } from 'react-dom'

export default function ProductsSearchButton() {
  const status = useFormStatus()

  return (
    <button
      type="submit"
      className="rounded-lg bg-purple-600 px-6 py-2 text-white hover:bg-purple-700"
    >
      {status.pending ? 'Searching...' : 'Search'}
    </button>
  )
}
