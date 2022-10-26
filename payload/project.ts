import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: '탈퇴 회원 거래내역 분리보관 파이프라인 설계 및 개발',
      startedAt: '2022-01',
      // endedAt: '',
      where: '카카오페이 (kakaopay)',
      descriptions: [
        // { content: '' },
      ],
    },
    {
      title: '펌뱅킹, 오픈뱅킹 연동 고도화',
      startedAt: '2022-01',
      // endedAt: '',
      where: '카카오페이 (kakaopay)',
      descriptions: [
        // { content: '' },
      ],
    },
    {
      title: '머니 어드민 Back-office 고도화',
      startedAt: '2022-01',
      // endedAt: '',
      where: '카카오페이 (kakaopay)',
      descriptions: [
        // { content: '' },
      ],
    },
    {
      title: '머니 운영 고도화',
      startedAt: '2022-01',
      // endedAt: '',
      where: '카카오페이 (kakaopay)',
      descriptions: [
        // { content: '' },
      ],
    },
    {
      title: '내부 플랫폼 및 시스템 안정성 관련 기능 개발',
      startedAt: '2021-10',
      endedAt: '2021-11',
      where: '핵클 (Hackle)',
      descriptions: [
        { content: '비정상 트래픽 자동 감지 & 트래픽 차단 시스템 개발' },
        { content: '고객 가입 시 웰컴 이메일 발송 기능 개발' },
        { content: '고객 원장 데이터 추출 기능 개발' },
        { content: '이메일 발송을 위한 내부 Sdk 개발' },
      ],
    },
    {
      title: '최근 고객 데이터 조회 기능 속도 개선',
      startedAt: '2021-10',
      endedAt: '2021-10',
      where: '핵클 (Hackle)',
      descriptions: [
        { content: '기존: 800ms~1200ms → 개선: 100ms~200ms' },
        {
          content:
            'ElasticSearch에서 특정 기간의 Row를 모두 조회하던 시스템을 저장 시점부터 중복 데이터는 저장하지 않게끔 개선하여 데이터 조회 속도 향상',
        },
      ],
    },
    {
      title: '결제 및 구독 백엔드 BFF 서버 개발',
      startedAt: '2021-09',
      endedAt: '2021-09',
      where: '핵클 (Hackle)',
      descriptions: [
        { content: 'Stripe, TossPayments 연동 결제 시스템의 BFF(Backend For Front) 서버 개발' },
        {
          content:
            '결제 요청, 카드 등록, 결제 이력 조회, 구독 정보 조회 등 결제 및 구독 관련 기능 서빙',
        },
      ],
    },
    {
      title: 'A/B 테스트 상세 분석 백엔드 개발 및 유지보수 / 운영',
      startedAt: '2021-06',
      endedAt: '2021-09',
      where: '핵클 (Hackle)',
      descriptions: [
        { content: '프로젝트의 Owner를 맡아 고객의 Pain Point 분석 및 AC 정의' },
        { content: '세그먼트 분석(지역, 플랫폼 별 분석 등)을 위한 데이터 모델링 및 API 개발' },
        {
          content:
            '예비 엔터프라이즈 고객사를 실제 고객사로 전환시켜 기존 대비 엔터프라이즈 고객사의 숫자 100% 증가',
        },
      ],
    },
  ],
};

export default project;
