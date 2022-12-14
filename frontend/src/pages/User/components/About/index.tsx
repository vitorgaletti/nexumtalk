import { ProfileLanguages } from '../../../../components/ProfileLanguages';
import { AboutContainer, AboutProfile } from './styles';
export function About() {
  return (
    <AboutContainer>
      <AboutProfile>
        <p className="about-profile__quotes">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, nam
          excepturi numquam soluta porro, labore dicta dolores assumenda nostrum
          neque perspiciatis explicabo possimus saepe facilis hic distinctio
          quasi at quibusdam?
        </p>

        <span className="about-profile__looking-for">
          Looking for:
          <p>Friends, Meeting in person, Language pratice</p>
        </span>

        <span className="about-profile__education">
          Education:
          <p>Some college</p>
        </span>

        <span className="about-profile__occupation">
          Occupation:
          <p>Developer</p>
        </span>

        <span className="about-profile__relationship-status">
          Relationship status:
          <p>In Relationship</p>
        </span>

        <span className="about-profile__join-date">
          Joined 10 years ago, profile updated 10 years ago
        </span>
      </AboutProfile>

      <hr />

      <ProfileLanguages title="Speaks" />

      <hr />
      <ProfileLanguages title="Learning" />
    </AboutContainer>
  );
}
