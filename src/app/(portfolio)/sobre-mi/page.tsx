import { SubTitle, Title } from "@/components";

export default function SobreMiPage() {
    return (
      <div className="flex">
        <div className="w-1/2">
          <Title 
            title="Andrés Felipe Prada Borja"
            className="font-bold text-3xl"
          />
          <div className="font-light mt-10">Desarrollador frontend apasionado con más de
          <span className="font-semibold"> 2 años de experiencia</span> en la creación de experiencias web excepcionales. He trabajado en la multinacional Globant durante más de un año, donde he aprendido y perfeccionado mis habilidades en tecnologías modernas.
          <p className="mt-4"><span className="font-semibold">Estoy especializado en el desarrollo con React y Next.js</span>, tengo un sólido dominio de JavaScript y TypeScript. Mi enfoque en la tecnología se complementa con mi experiencia en UX/UI, utilizando herramientas como Figma para diseñar interfaces intuitivas y atractivas.</p> 
          <p className="mt-4">Además de mis habilidades técnicas, valoro enormemente las habilidades blandas que me permiten comunicarme efectivamente, trabajar en equipo y resolver problemas de manera creativa. Soy una persona comprometida con el aprendizaje continuo y siempre estoy en busca de nuevas formas de mejorar tanto mis habilidades técnicas como mis capacidades interpersonales.</p> 
          <p className="mt-8">Estoy entusiasmado por la oportunidad de aplicar mi experiencia y pasión en proyectos desafiantes y contribuir al éxito de futuros desarrollos.</p></div>
        </div>
        <div className="flex justify-center w-1/2">
          <h1>Foto</h1>
        </div>
      </div>
    );
  }