import '@/components/TechStack.css'

const TECH_STACK = [
    {
        name: 'HTML',
        icon: 'https://cdn.iconscout.com/icon/free/png-512/free-html5-40-1175193.png',
      },
      {
        name: 'CSS',
        icon: 'https://cdn.iconscout.com/icon/free/png-256/css-131-722685.png',
      },
      {
        name: 'JavaScript',
        icon: 'https://cdn.iconscout.com/icon/free/png-256/javascript-1-225993.png',
      },
      {
        name: 'TypeScript',
        icon: 'https://cdn.iconscout.com/icon/free/png-256/typescript-3521774-2945272.png',
      },
      {
        name: 'React',
        icon: 'https://cdn.iconscout.com/icon/free/png-256/react-3-1175109.png',
      },
      {
        name: 'Firebase',
        icon: 'https://cdn.iconscout.com/icon/free/png-512/free-firebase-3521427-2944871.png',
      },
      {
        name: 'Vite',
        icon: 'https://cdn.simpleicons.org/vite',
    }  
] as const;

type TechStack = (typeof TECH_STACK)[number];

const TechStackSection = () => (
  <section id="languages">
    <div className="container">
      <div className="row">
        <h2 className="section__title">
          This is my <span className="blue">technology stack</span>
        </h2>

        <div className="language__list">
          {TECH_STACK.map((language: TechStack) => (
            <article className="language" key={language.name}>
              <figure className="language__img--wrapper">
                <img
                  src={language.icon}
                  alt={`${language.name} logo`}
                  className="language__img"
                  loading="lazy"
                />
              </figure>
              <span className="language__name">{language.name}</span>
            </article>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default TechStackSection;