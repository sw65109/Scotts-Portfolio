import { SKILLS } from "@/utils/constants"
import "@/components/TechStack.css";

const TechStack = () => (
  <section id="languages">
    <div className="container">
      <div className="row">
        <h2 className="section__title">
          This is my <span className="blue">technology stack</span>
        </h2>

        <div className="language__list">
          {SKILLS.map((skill) => (
            <article className="language" key={skill.label}>
              <figure className="language__img--wrapper">
                <img
                  src={skill.icon}
                  alt={`${skill.label} logo`}
                  className="language__img"
                  loading="lazy"
                />
              </figure>
              <span className="language__name">{skill.label}</span>
            </article>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default TechStack;
