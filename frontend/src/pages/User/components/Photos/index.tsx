import { MdOutlineAddPhotoAlternate } from 'react-icons/md';
import photoProfile from '../../../../assets/img/avatar.jpg';
import { PhotosContainer, PhotosGallery } from './styles';
export function Photos() {
  return (
    <PhotosContainer>
      <button>
        <MdOutlineAddPhotoAlternate />
        Add photo
      </button>

      <PhotosGallery>
        <img src={photoProfile} alt="Photo" />
        <img src={photoProfile} alt="Photo" />
        <img src={photoProfile} alt="Photo" />
        <img src={photoProfile} alt="Photo" />
        <img src={photoProfile} alt="Photo" />
        <img src={photoProfile} alt="Photo" />
      </PhotosGallery>
    </PhotosContainer>
  );
}
