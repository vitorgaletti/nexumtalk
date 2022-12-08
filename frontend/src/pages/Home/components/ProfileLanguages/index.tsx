import * as Progress from '@radix-ui/react-progress';
import {
  ProfileLanguagesContainer,
  ProfileLanguagesContent,
  ProfileLanguagesItem
} from './styles';

interface ProfileLanguagesProps {
  title: string;
}

export function ProfileLanguages({ title }: ProfileLanguagesProps) {
  return (
    <ProfileLanguagesContainer>
      <div className="profile-languages__header">
        <h2>{title}</h2>
      </div>
      <ProfileLanguagesContent>
        <ProfileLanguagesItem>
          <img
            src={'https://unpkg.com/language-icons/icons/pt.svg'}
            alt="Portuguese"
          />
          <div className="profile-languages__item-language">
            <p>Portuguese</p>
            <Progress.Root className="ProgressRoot" value={100}>
              <Progress.Indicator
                className="ProgressIndicator"
                style={{
                  transform: `translateX(-${100 - 100}%)`
                }}
              />
            </Progress.Root>
          </div>
        </ProfileLanguagesItem>

        <ProfileLanguagesItem>
          <img
            src={'https://unpkg.com/language-icons/icons/pt.svg'}
            alt="Portuguese"
          />
          <div className="profile-languages__item-language">
            <p>Portuguese</p>
            <Progress.Root className="ProgressRoot" value={100}>
              <Progress.Indicator
                className="ProgressIndicator"
                style={{
                  transform: `translateX(-${100 - 100}%)`
                }}
              />
            </Progress.Root>
          </div>
        </ProfileLanguagesItem>

        <ProfileLanguagesItem>
          <img
            src={'https://unpkg.com/language-icons/icons/pt.svg'}
            alt="Portuguese"
          />
          <div className="profile-languages__item-language">
            <p>Portuguese</p>
            <Progress.Root className="ProgressRoot" value={100}>
              <Progress.Indicator
                className="ProgressIndicator"
                style={{
                  transform: `translateX(-${100 - 100}%)`
                }}
              />
            </Progress.Root>
          </div>
        </ProfileLanguagesItem>
      </ProfileLanguagesContent>
    </ProfileLanguagesContainer>
  );
}
