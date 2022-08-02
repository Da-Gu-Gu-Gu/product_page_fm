import ImageGallery from 'react-image-gallery';
import imageone from '../images/image-product-1.jpg'
import imagetwo from '../images/image-product-2.jpg'
import imagethree from '../images/image-product-3.jpg'
import imagefour from '../images/image-product-4.jpg'
import onethumb from '../images/image-product-1-thumbnail.jpg'
import twothumb from '../images/image-product-2-thumbnail.jpg'
import threethumb from '../images/image-product-3-thumbnail.jpg'
import fourthumb from '../images/image-product-4-thumbnail.jpg'


const images = [
  {
    original: imageone,
    thumbnail: onethumb,
  },
  {
    original:imagetwo,
    thumbnail: twothumb,
  },
  {
    original: imagethree,
    thumbnail: threethumb,
  },
  {
    original: imagefour,
    thumbnail: fourthumb,
  },
];

export default function ImageSlide(){
   
    return <ImageGallery 
    autoPlay={true}
    showPlayButton={false}        showBullets={false}
    items={images} />;
  
}