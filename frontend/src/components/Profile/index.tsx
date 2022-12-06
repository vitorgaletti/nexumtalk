import * as Progress from '@radix-ui/react-progress';
import { getCode } from 'country-list';
import { languageNameMap } from 'language-name-map';
import avatarImg from '../../assets/img/avatar.jpg';
import bannerImg from '../../assets/img/banner.jpg';

import {
  BannerProfile,
  HeaderProfile,
  InformationProfile,
  LanguagesSpeaks,
  LanguagesSpeaksContent,
  LanguagesSpeaksItem,
  LocationProfile,
  PhotoProfile,
  PhotosGallery,
  ProfileContainer,
  ProfileContent,
  StatusProfile
} from './styles';

export function Profile() {
  const codeCountry = getCode('Brazil');
  const languages = Object.entries(languageNameMap).map(
    language => language[0]
  );

  const languagesCode = languages.filter(language => language === 'pt');

  return (
    <ProfileContainer>
      <HeaderProfile>
        <BannerProfile>
          <img src={bannerImg} alt="Banner" />
        </BannerProfile>
        <PhotoProfile>
          <img src={avatarImg} alt="Photo Profile" />
        </PhotoProfile>
      </HeaderProfile>

      <ProfileContent>
        <InformationProfile>
          <StatusProfile>
            <span></span>
            <h4>Vitor</h4>
          </StatusProfile>
          <p>vitor97, 25 y.o. </p>
          <LocationProfile>
            <span>Rio de Janeiro, Brazil</span>
            <img
              src={`https://www.countryflagicons.com/FLAT/24/${codeCountry}.png`}
              alt="Brazil"
              className="flag"
            />
          </LocationProfile>
        </InformationProfile>

        <hr />
        <PhotosGallery>
          <div className="photos-gallery__header">
            <h2>Photos Gallery</h2>
            <span>See all</span>
          </div>
          <div className="photos-gallery__images">
            <img src={avatarImg} alt="Photo Profile" />
            <img src={avatarImg} alt="Photo Profile" />
            <img src={avatarImg} alt="Photo Profile" />
          </div>
        </PhotosGallery>

        <hr />

        <LanguagesSpeaks>
          <div className="languages-speaks__header">
            <h2>Languages Speaks</h2>
          </div>
          <LanguagesSpeaksContent>
            <LanguagesSpeaksItem>
              <img
                src={'https://unpkg.com/language-icons/icons/pt.svg'}
                alt="Portuguese"
              />
              <div className="languages-speaks-item__idiom">
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
            </LanguagesSpeaksItem>
            <LanguagesSpeaksItem>
              <img
                src={'https://unpkg.com/language-icons/icons/en.svg'}
                alt="Portuguese"
              />
              <div className="languages-speaks-item__idiom">
                <p>English</p>
                <Progress.Root className="ProgressRoot" value={50}>
                  <Progress.Indicator
                    className="ProgressIndicator"
                    style={{
                      transform: `translateX(-${100 - 50}%)`
                    }}
                  />
                </Progress.Root>
              </div>
            </LanguagesSpeaksItem>
            <LanguagesSpeaksItem>
              <img
                src={'https://unpkg.com/language-icons/icons/es.svg'}
                alt="Portuguese"
              />
              <div className="languages-speaks-item__idiom">
                <p>Spanish</p>
                <Progress.Root className="ProgressRoot" value={10}>
                  <Progress.Indicator
                    className="ProgressIndicator"
                    style={{
                      transform: `translateX(-${100 - 10}%)`
                    }}
                  />
                </Progress.Root>
              </div>
            </LanguagesSpeaksItem>
          </LanguagesSpeaksContent>
        </LanguagesSpeaks>
      </ProfileContent>
    </ProfileContainer>
  );
}
