import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import {
  faGithub,
  faFacebook,
  faYoutube,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import image from '../asset/profile.jpg';
import { IProfile } from '../component/profile/IProfile';

const profile: IProfile.Payload = {
  disable: false,

  // image: 'https://resume.yowu.dev/static/image/profile_2019.png',
  image,
  name: {
    title: '진태양',
    small: '(Heli)',
  },
  contact: [
    {
      title: 'sun@dataportal.kr',
      link: 'mailto:sun@dataportal.kr',
      icon: faEnvelope,
    },
    {
      title: 'Please contact me by email',
      icon: faPhone,
      badge: true,
    },
    {
      title: 'Linkedin',
      link: 'https://www.linkedin.com/in/taeyang-jin',
      icon: faLinkedin,
    },
    {
      title: 'Github',
      link: 'https://github.com/heli-os',
      icon: faGithub,
    },
    {
      title: 'Facebook',
      link: 'https://www.facebook.com/jin.ssssun',
      icon: faFacebook,
    },
    {
      title: 'Twitter',
      link: 'https://twitter.com/jinssssun',
      icon: faTwitter,
    },
    {
      title: 'YouTube',
      link: 'https://www.youtube.com/channel/UCRv6OC1-ePkqm8MLAeyL1hg',
      // icon: faRss,
      icon: faYoutube,
    },
  ],
  notice: {
    title: '휴대전화나 페이스북 메시지 아닌 이메일로 연락 부탁드립니다.',
    icon: faBell,
  },
};

export default profile;
