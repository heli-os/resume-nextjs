import { IPresentation } from '../component/presentation/IPresentation';

const presentation: IPresentation.Payload = {
  disable: false,

  list: [
    {
      title: 'C.O.D.E Conference 2022 Speaker',
      subTitle:
        'Session A. 디지털 플랫폼 정부, 시빅해킹과 함께하다 | Digital Platform Government & Civic Hacking',
      at: '2022-07',
      descriptions: [
        {
          content: 'Codecon2022:',
          postHref: 'https://codecon2022.notion.site',
        },
      ],
    },
    {
      title: 'Happy Civic Hacking with CODE4KOREA Speaker',
      subTitle: '공적마스크 정책 수립, 데이터 개방 API 논의, 서비스 개발 참여 사례 소개',
      at: '2022-06',
      descriptions: [
        {
          content: '행사 신청 페이지:',
          postHref: 'https://onoffmix.com/event/256507',
        },
      ],
    },
    {
      title: 'The 2nd AYARF Keynote Speaker',
      subTitle:
        '국경을 넘어 펼쳐지는 사회 문제를 해결하려는 청년 연구활동가 대상 대한민국 정부혁신 사례 소개 및 질의응답 진행',
      at: '2020-08',
      descriptions: [
        {
          content: '유튜브:',
          postHref: 'https://www.youtube.com/watch?v=OiFS4azd9m8&t=6695s',
        },
      ],
    },
  ],
};

export default presentation;
