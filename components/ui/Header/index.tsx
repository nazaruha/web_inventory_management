import classNames from 'classnames'

export interface HeaderProps {
  title: string
  description?: string
  titleClassName?: string
}

export default function Header({
  title,
  description,
  titleClassName,
}: HeaderProps) {
  return (
    <div className="mb-6 flex flex-col gap-2">
      <h1
        className={classNames(
          'text-2xl font-semibold text-gray-900',
          titleClassName,
        )}
      >
        {title}
      </h1>
      {description && <p className="text-sm text-gray-500">{description}</p>}
    </div>
  )
}
