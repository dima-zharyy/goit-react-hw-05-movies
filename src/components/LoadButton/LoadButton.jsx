import { Button } from './LoadButton.styled';

export const LoadButton = ({ onClick }) => {
  return (
    <Button onClick={onClick} type="button">
      Load more
    </Button>
  );
};
