import type { ProjectProps } from '../components/Project'
import DetranExamDemo from '../../../public/detra-exam-demo.png'

const techs = {
  TypeScript: 'https://typescriptlang.org',
  'Tailwind CSS': 'https://tailwindcss.com',
  NextJS: 'https://nextjs.org',
  Swift: 'https://swift.org',
  Postgres: 'https://postgresql.org',
  Fastify: 'https://fastify.io',
  Unity: 'https://unity.com',
  'C#': 'https://learn.microsoft.com/pt-br/dotnet/csharp',
} satisfies Record<string, `https://${string}`>

const generateTechs = (
  ..._techs: (keyof typeof techs)[]
): ProjectProps['techs'] =>
  _techs.map<{ name: string; uri: string }>((name) => ({
    name,
    uri: techs[name],
  }))

export const projects: ProjectProps[] = [
  {
    name: 'Detran exame',
    description:
      'Descrição do projeto em poucas linhas, porque isso é um lorem ipsum, então serve pra isso, né?',
    githubUrl: 'https://github.com/lucioroadtoglory/detran-exam',
    deployUrl: 'https://detran-exam.vercel.app',
    image: DetranExamDemo,
    techs: generateTechs('Tailwind CSS', 'NextJS', 'TypeScript'),
  },
  {
    name: 'Mini Math',
    description:
      'Descrição do projeto em poucas linhas, porque isso é um lorem ipsum, então serve pra isso, né?',
    githubUrl: 'https://github.com/lucioroadtoglory/minimath',
    deployUrl: 'https://github.com/lucioroadtoglory/minimath',
    image: {
      src: 'https://github.com/lucioroadtoglory/minimath/raw/main/logo.png',
      width: 200,
      height: 200,
    },
    techs: generateTechs('C#', 'Unity'),
  },
]
