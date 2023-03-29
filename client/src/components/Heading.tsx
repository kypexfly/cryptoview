interface Props {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  children: React.ReactNode
  className?: string
}

const Heading = ({ as: Element = 'h1', children, className }: Props) => {
  return (
    <Element className={`mb-6 border-b border-[#3e3e3e] pb-3 text-2xl font-bold ${className}`}>
      {children}
    </Element>
  )
}

export default Heading
