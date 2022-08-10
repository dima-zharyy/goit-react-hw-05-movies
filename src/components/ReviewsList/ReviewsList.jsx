import {
  Container,
  List,
  Item,
  Author,
  Comment,
  Date,
} from './ReviewsList.styled';

export const ReviewsList = ({ reviews }) => {
  return (
    <Container>
      <List>
        {reviews &&
          reviews.map(review => {
            return (
              <Item key={review.id}>
                <Author>
                  {review.author} <Date>{review.updated_at}</Date>
                </Author>
                <Comment>{review.content}</Comment>
              </Item>
            );
          })}
      </List>
    </Container>
  );
};
