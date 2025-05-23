interface SectionTitleProps {
  title: string
  description?: string
}

export function SectionTitle({ title, description }: SectionTitleProps) {
  return (
    <div className="section-title-container">
      <h2 className="section-title text-4xl md:text-5xl text-[#D4AF37]">
        <span className="gold-accent">{title}</span>
      </h2>
      {description && <p className="text-center text-gray-600 max-w-2xl mx-auto">{description}</p>}
    </div>
  )
}
