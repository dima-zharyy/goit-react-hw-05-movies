import { List, Profile, Name, Character, Item } from './CastList.styled';

export const CastList = ({ castInfo }) => {
  const imgUrl = `https://image.tmdb.org/t/p/w500/`;
  const imgPlaceholder = `https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg`;

  return (
    <List>
      {castInfo &&
        castInfo.map(({ id, profile_path, name, character }) => {
          return (
            <Item key={id}>
              {profile_path ? (
                <Profile src={`${imgUrl}/${profile_path}`} alt={`${name}`} />
              ) : (
                <Profile src={`${imgPlaceholder}`} alt="no image available" />
              )}
              <div>
                <Name>{name}</Name>
                <Character>{`Character: ${character}`}</Character>
              </div>
            </Item>
          );
        })}
    </List>
  );
};
