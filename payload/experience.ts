import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      title: '카카오페이 (kakaopay)',
      position: '머니클랜 금융코어플랫폼 서버 개발자',
      startedAt: '2022-01',
      descriptions: [
        '탈퇴 회원 거래내역 분리보관 파이프라인 설계 및 개발',
        '펌뱅킹, 오픈뱅킹 운영 및 연동 시스템(금융플랫폼) 고도화',
        '머니 어드민 Back-office 고도화',
        '머니 운영 고도화',
        '사용자 Needs 에 맞는 사용성 개선과 신규 비즈니스 로직 구현',
        '레거시 청산 및 기존 비즈니스 유지보수',
      ],
      skillKeywords: [
        'Java',
        'Kotlin',
        'SpringBoot',
        'JPA',
        'QueryDsl',
        'Reactive Feign Client',
        'MySQL',
        'MongoDB',
        'Kafka',
      ],
    },
    {
      title: '핵클 (Hackle)',
      position: 'Software Engineer(Back-end)',
      startedAt: '2021-06',
      endedAt: '2021-11',
      descriptions: [
        'A/B 테스트 플랫폼 백엔드 개발',
        '세그먼트 분석(지역, 플랫폼 별 분석 등)을 위한 데이터 모델링 및 API 개발',
        '예비 엔터프라이즈 고객사를 실제 고객사로 전환시켜 기존 대비 엔터프라이즈 고객사의 숫자 100% 증가',
        'Stripe, TossPayments 연동 결제 시스템의 BFF(Backend For Front) 서버 개발',
        '최근 고객 데이터 조회 기능 속도 개선 / 800ms~1200ms -> 100ms~200ms',
        '고객사 Needs 에 맞는 사용성 개선과 신규 비즈니스 로직 구현',
        '레거시 청산 및 기존 비즈니스 유지보수',
        '내부 플랫폼 및 시스템 안정성 관련 기능 개발',
      ],
      skillKeywords: [
        'Kotlin',
        'SpringBoot',
        'JPA',
        'QueryDsl',
        'Reactive Feign Client',
        'MySQL',
        'AWS',
      ],
    },
  ],
};

export default experience;
