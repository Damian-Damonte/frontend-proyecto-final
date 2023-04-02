import {
  ProfileIcon,
  ProfileNameContainer,
  UserProfileContainer,
} from "./styledHeader";

export default function UserProfile({ user }) {
  const firstNameLetter = user.firstName.charAt(0).toUpperCase();
  const lastNameLetter = user.lastName.charAt(0).toUpperCase();

  return (
    <UserProfileContainer>
      <ProfileIcon>{firstNameLetter + lastNameLetter}</ProfileIcon>
      <ProfileNameContainer>
        <p>Hola,</p>
        <p>
          {user.firstName} {user.lastName}
        </p>
      </ProfileNameContainer>
    </UserProfileContainer>
  );
}
