import useReveal from '../hooks/useReveal'

export default function Reveal({ children, className = '' }) {
  const { ref, visible } = useReveal()

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out motion-reduce:transition-none ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
      } ${className}`}
    >
      {children}
    </div>
  )
}
