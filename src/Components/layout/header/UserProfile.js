import {
  ProfileIcon,
  ProfileNameContainer,
  UserProfileContainer,
} from "./styledHeader";

export default function UserProfile({ user }) {
  const firstNameLetter = user.firstName.charAt(0).toUpperCase();
  const lastNameLetter = user.lastName.charAt(0).toUpperCase();

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <UserProfileContainer>
      <ProfileIcon>{firstNameLetter + lastNameLetter}</ProfileIcon>
      <ProfileNameContainer>
        <p>Hola,</p>
        <p>
          {capitalizeFirstLetter(user.firstName)}{" "}
          {capitalizeFirstLetter(user.lastName)}
        </p>
      </ProfileNameContainer>
    </UserProfileContainer>
  );
}
