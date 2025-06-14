import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 60px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.bg};
`;

const Title = styled.h2`
  font-size: 52px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  text-align: center;
  margin-bottom: 40px;
  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 24px;
  max-width: 1100px;
  width: 100%;
`;

const Card = styled.div`
  background: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.text_secondary};
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.2);
  }
`;

const Emoji = styled.div`
  font-size: 36px;
  margin-bottom: 12px;
`;

const Heading = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 16px;
  line-height: 1.6;
`;

const Achievements = () => {
  return (
    <Container id="Achievements">
      <Title>Achievements</Title>
      <CardGrid>

        <Card>
          <Emoji>💻</Emoji>
          <Heading>Solved 500+ DSA Problems</Heading>
          <Description>
            I have solved more than 500 Data Structures and Algorithms (DSA) problems on platforms like LeetCode, GeeksforGeeks, and CodeStudio. This journey has strengthened my understanding of arrays, strings, trees, graphs, dynamic programming, and system design. It reflects my consistent practice, curiosity, and eagerness to learn and improve in problem-solving.
          </Description>
        </Card>

        <Card>
          <Emoji>🎓</Emoji>
          <Heading>Qualified GATE 2025 (ECE)</Heading>
          <Description>
            I successfully qualified GATE 2025 in the Electronics and Communication Engineering (ECE) stream with an All India Rank (AIR) under 8.5k in the General category. This reflects my deep understanding of core ECE subjects, engineering mathematics, and technical concepts. It showcases my dedication to academics and my ability to solve complex technical problems under exam pressure.
          </Description>
        </Card>

        <Card>
          <Emoji>🏆</Emoji>
          <Heading>6th Rank in Code-Loop at En-yugma</Heading>
          <Description>
            Secured 6th position out of over 500 participants in the Code-Loop coding competition conducted during En-yugma. This achievement highlights my strong problem-solving abilities, logical thinking, and deep knowledge of data structures and algorithms using C++. It also demonstrates my ability to perform under pressure in a competitive environment.
          </Description>
        </Card>

        <Card>
          <Emoji>📊</Emoji>
          <Heading>95+ Percentile in JEE Main</Heading>
          <Description>
            Scored above the 95th percentile in JEE Main, ranking among the top 5% of over 1.2 million students across India. This result shows my strong foundation in physics, chemistry, and mathematics, and my ability to perform well in national-level competitive exams that test speed, accuracy, and conceptual clarity.
          </Description>
        </Card>

      </CardGrid>
    </Container>
  );
};

export default Achievements;
