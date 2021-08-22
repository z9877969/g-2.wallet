import s from './Section.module.css';

const Section = ({ title, children }) => {
  return (
    <section>
      <div className={s.container}>
        {title && <h2>{title}</h2>}
        {children}
      </div>
    </section>
  );
};

export default Section;
