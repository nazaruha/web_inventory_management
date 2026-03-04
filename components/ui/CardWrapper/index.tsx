import { FC, PropsWithChildren } from 'react'
import Header, { HeaderProps } from '../Header'

type CardWrapperProps = PropsWithChildren<HeaderProps>

export const CardWrapper: FC<CardWrapperProps> = ({
  children,
  title,
  description,
  titleClassName,
}) => {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
      <Header
        title={title}
        description={description}
        titleClassName={titleClassName}
      />
      {children}
    </div>
  )
}
