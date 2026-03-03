import CancelButton from './parts/CancelButton'
import SubmitButton from './parts/SubmitButton'

export default function ActionButtons() {
  return (
    <div className="flex gap-5">
      <SubmitButton />
      <CancelButton />
    </div>
  )
}
