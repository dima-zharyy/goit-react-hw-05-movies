import { List, Text, Item } from './GenresList.styled';

export const GenresList = ({ genres }) => {
  return (
    <List>
      {genres &&
        genres.map(({ id, name }) => {
          return (
            <Item key={id}>
              <Text>{name}</Text>
            </Item>
          );
        })}
    </List>
  );
};
