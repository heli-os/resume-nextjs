import favicon from '../asset/favicon.ico';
import previewImage from '../asset/profile.jpg';
import { IGlobal } from '../component/common/IGlobal';
import { homepage } from '../package.json';

const title = 'Resume: Taeyang Jin';
const description = 'This is Back-end Software Engineer Taeyang&#x27;s Resume. Thank you';

export const _global: IGlobal.Payload = {
  favicon,
  headTitle: title,
  seo: {
    title,
    description,
    openGraph: {
      title,
      // eslint-disable-next-line @typescript-eslint/camelcase
      site_name: title,
      description,
      url: homepage,
      images: [
        {
          url: previewImage,
          width: 800,
          height: 600,
          alt: 'OpenGraph Image Sample.png',
        },
      ],
      type: 'profile',
      profile: {
        firstName: 'Taeyang',
        lastName: 'Jin',
        username: 'Heli',
        gender: 'male',
      },
    },
  },
};
