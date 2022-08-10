import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
`;

export const Poster = styled.img`
  max-width: 300px;
  height: auto;
  object-fit: cover;

  border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.28), 0px 2px 1px -1px rgba(0, 0, 0, 0.24);
`;

export const Wrapper = styled.div`
  max-width: 800px;
  margin-left: 20px;
  padding: 16px;
`;

export const Title = styled.h1`
  margin-bottom: 10px;
`;

export const Text = styled.p`
  margin-bottom: 30px;
`;

export const Subtitle = styled.h2`
  margin-bottom: 10px;
`;
