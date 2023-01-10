import { SectionTitle, Block } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <Block>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </Block>
  );
};

export default Section;