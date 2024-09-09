import { titleFont } from "@/config/font";


interface Props {
  title: string;
  subtitle?: string;
  className?: string;
}



export const Title = ({ title, subtitle, className }: Props) => {
  return (
      <div className={`mt-3  ${className}`}>
        <h1 className={`${titleFont.className} antialiased `}>
          {title}
        </h1>

        {
          subtitle && (
            <h3 className="font-light mb-5 text-justify">{subtitle}</h3>
          )
        }
      </div>
  )
}