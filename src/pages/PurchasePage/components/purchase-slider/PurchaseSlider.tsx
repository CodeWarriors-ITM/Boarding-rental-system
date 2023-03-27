import 'react-image-gallery/styles/css/image-gallery.css'
import ImageGallery from 'react-image-gallery';

const images = [
    {
        original: 'https://i.ikman-st.com/luxury-boarding-places-for-gentlemen-for-rent-gampaha/c865383f-2586-448b-b094-2f234333f8bf/620/466/fitted.jpg',
        thumbnail: 'https://i.ikman-st.com/luxury-boarding-places-for-gentlemen-for-rent-gampaha/c865383f-2586-448b-b094-2f234333f8bf/620/466/fitted.jpg',
    },
    {
        original: 'https://i.ikman-st.com/luxury-boarding-places-for-gentlemen-for-rent-gampaha/5a7ea21b-c9e5-487e-9693-6bc51cc121fe/620/466/fitted.jpg',
        thumbnail: 'https://i.ikman-st.com/luxury-boarding-places-for-gentlemen-for-rent-gampaha/5a7ea21b-c9e5-487e-9693-6bc51cc121fe/620/466/fitted.jpg',
    },
    {
        original: 'https://i.ikman-st.com/boarding-house-for-girls-for-rent-colombo-2/5a7736b4-8739-4010-a84b-4cf34729ccdc/620/466/fitted.jpg',
        thumbnail: 'https://i.ikman-st.com/boarding-house-for-girls-for-rent-colombo-2/5a7736b4-8739-4010-a84b-4cf34729ccdc/620/466/fitted.jpg',
    },
    {
        original: 'https://i.ikman-st.com/boarding-house-for-girls-for-rent-colombo-2/2078c87b-2891-4853-8f96-e3765bb84210/620/466/fitted.jpg',
        thumbnail: 'https://i.ikman-st.com/boarding-house-for-girls-for-rent-colombo-2/2078c87b-2891-4853-8f96-e3765bb84210/620/466/fitted.jpg',
    },
    {
        original: 'https://i.ikman-st.com/boarding-house-in-thalangama-koswatta-for-rent-colombo/0d908d02-2625-47e7-a296-2a85ff59d95b/620/466/fitted.jpg/',
        thumbnail: 'https://i.ikman-st.com/boarding-house-in-thalangama-koswatta-for-rent-colombo/0d908d02-2625-47e7-a296-2a85ff59d95b/620/466/fitted.jpg',
    }
];

const PurchaseSlider = () => {
    return (
        <ImageGallery showPlayButton={false} showNav={false} lazyLoad={true} items={images}/>
       
    ) }
    {/*the images uploaded by the boarding owners can view one by one by the students  */}


export default PurchaseSlider;