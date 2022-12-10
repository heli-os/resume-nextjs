import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: '탈퇴 회원 거래내역 분리보관 파이프라인 설계 및 개발',
      startedAt: '2022-09',
      endedAt: '2022-12',
      where: '카카오페이 (kakaopay)',
      descriptions: [
        { content: '탈퇴 회원 거래내역 분리보관 법적 요건 분석 및 정책 수립' },
        { content: '회원 거래내역 탈퇴 이벤트 구독/적재 컨슈머 설계 및 개발' },
        {
          content:
            '다수의 분리보관 대상 테이블에 대한 카프카 기반 비동기 복제/삭제 구조 설계 및 개발',
        },
        { content: '프로젝트 수행 중 mongo-java-driver 오픈소스 기여' },
      ],
    },
    {
      title: '펌뱅킹/오픈뱅킹 연동 시스템(금융플랫폼) 운영 및 고도화',
      startedAt: '2022-05',
      // endedAt: '2022-12',
      where: '카카오페이 (kakaopay)',
      descriptions: [
        { content: '신규 제휴 은행 연동: 출금이체, 입금이체, 예금주 조회 등' },
        {
          content: '전사에 제공되는 금융플랫폼 연동 지원',
          descriptions: [
            { content: '페이봇, 자금반환중개(착오송금반환), 머니 송금/충전 등 서비스 지원' },
          ],
        },
        {
          content: '2022년 10월 15일 카카오 판교 데이터센터 셧다운 대응',
          descriptions: [
            {
              content:
                '운영 관리 도구 및 모니터링 시스템 셧다운 상황에서 직접적인 서버 헬스 체크 및 DB 커넥션 상태 점검',
            },
            { content: '담당 서비스 구성 요소 중 수동 Failover 필요 대상 식별 및 대응' },
            { content: '쿠버네티스 노드 리소스 부족에 따른 pod 리사이즈 대응' },
            { content: '외부 제휴사의 인바운드 요청 상태 점검 및 대응' },
            { content: '데이터센터 복구 후 주요 서비스 구성 요소 Replicaset 정상화 대응' },
          ],
        },
        { content: 'VAN(헥토파이낸셜, 더즌), 금융결제원(오픈뱅킹)과의 업무 협업' },
      ],
    },
    {
      title: '머니 어드민 Back-office 고도화',
      startedAt: '2022-02',
      endedAt: '2022-04',
      where: '카카오페이 (kakaopay)',
      descriptions: [
        {
          content:
            '목적: 하나로 관리하고 있는 어드민을 조직별 R&R에 맞게 분리하여 업무 효율성 향상',
        },
        {
          content:
            'Angular/React 구버전 빌드 결과물을 SpringBoot로 서빙하던 구조 재설계 및 리팩토링',
          descriptions: [{ content: 'React 17 + Express.js 서빙 구조로 변경' }],
        },
        {
          content: 'R&R이 명확하지 않아 발생했던 불필요한 커뮤니케이션 비용 절약',
        },
        {
          content:
            '전반적인 어드민 사용성 개선을 통한 개발자가 아닌 누구나 어드민 이용 가능한 시스템 확립',
        },
      ],
    },
    {
      title: '레거시 청산 및 기존 비즈니스 유지보수 (a.k.a. 머니 운영 고도화)',
      startedAt: '2022-01',
      // endedAt: '',
      where: '카카오페이 (kakaopay)',
      descriptions: [
        {
          content:
            '일시적 오픈뱅킹 사용 불가 고객의 거래를 펌뱅킹으로 처리하도록 개선하여 송금 성공률 기존 대비 10% 향상 및 그에 따른 수수료 절감',
        },
        {
          content: '2년 이상 방치된 Request/Response 로깅 로직 버그 식별 및 수정',
        },
        {
          content:
            '과도하게 설정된 MySQL DB Connection Timeout 이슈 식별 및 수정 / 기존(30s, default) -> 변경(3s)',
        },
        { content: '모니터링 누락되어 있는 일부 써킷브레이커 이슈 식별 및 수정' },
        { content: '어드민 FE, BFF AEM/APM 및 에러 로깅 적용' },
        { content: '조직내 Grafana & Kibana 운영 가이드 작성 및 세션 진행' },
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
      title: '레거시 청산 및 기존 비즈니스 유지보수',
      startedAt: '2021-06',
      endedAt: '2021-11',
      where: '핵클 (Hackle)',
      descriptions: [
        {
          content: '최근 고객 데이터 조회 기능 속도 개선',
          descriptions: [
            { content: '기존: 800ms~1200ms → 개선: 100ms~200ms' },
            {
              content:
                'ElasticSearch에서 특정 기간의 Row를 모두 조회하던 시스템을 저장 시점부터 중복 데이터는 저장하지 않게끔 개선하여 데이터 조회 속도 향상',
            },
          ],
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
      title: 'A/B 테스트 상세 분석 백엔드 개발 및 유지보수 및 운영',
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
    {
      title: '코로나19 개인 안심번호',
      startedAt: '2020-12',
      endedAt: '2021-02',
      where: '코드포코리아 (Code for Korea)',
      descriptions: [
        {
          content: '개인 안심번호 생성 시스템 설계 및 개발',
          descriptions: [
            { content: '비대칭키 암호화 알고리즘에 기반한 개인 안심번호 생성 로직 구현' },
            {
              content:
                '이를 통한 질병관리청을 제외하고는 개인 안심번호를 복호화 불가하게 구성(QR 발급사 포함)',
            },
          ],
        },
        {
          content: '실제 적용 방법 가이드 작성 & 데모 시스템 개발',
          descriptions: [
            { content: '질병관리청, QR 발급사를 위한 적용/사용 가이드 작성, 제시' },
            { content: '적용 가이드에 기반한 적용 데모 시스템(웹앱) 개발' },
          ],
        },
        {
          content: '네이버, 카카오, PASS 시스템에 도입',
          descriptions: [
            {
              content:
                '기존 수기명부에 전화번호를 작성하던 방식을 개선하기 위함인데, 이러한 개인안심번호를 어떻게 전달할지 고민',
            },
            { content: '일괄 문자 발송, 우편발송 등은 비용과 효율성 문제가 있겠다 판단' },
            {
              content:
                '기존에 사용되던 네이버, 카카오, PASS QR 체크인 페이지에 개인안심번호 영역 추가',
            },
          ],
        },
        {
          content: '코로나19 수기출입명부를 통한 개인정보 유출 사례 감소',
          descriptions: [
            { content: '코로나19 방역을 위해 수집되는 휴대전화번호 유출과 오・남용 사례 감소' },
            { content: '개인정보 유출에 대한 우려로 발생했던 허위기재 감소' },
          ],
        },
      ],
    },
    {
      title: '코로나19 공공데이터 공동대응 및 애플리케이션 개발',
      startedAt: '2020-02',
      endedAt: '2020-04',
      where: '코드포코리아 (Code for Korea)',
      descriptions: [
        {
          content: '코로나19 관련 공공데이터 현황 분석',
          descriptions: [
            {
              content:
                '시각화에 초점을 맞춘 데이터 제공으로 컴퓨터가 읽을 수 없는 데이터 제공 현황 파악',
            },
            {
              content: '공적 마스크 재고 현황의 경우 전혀 국민에게 제공되지 않고 있는 현황 파악',
            },
          ],
        },
        {
          content: '코로나19 관련 공공데이터 개방 요청',
          descriptions: [
            { content: '광화문1번가, 공공데이터포털, 정부 실무자 등을 통한 개방 제안서 전달' },
            { content: '청와대, 행정안전부, 과학기술정보통신부 주관 미팅 참석' },
          ],
        },
        {
          content: '코로나19 공적마스크 재고 API 개발 기여(with 정부/네이버/KT)',
          descriptions: [
            { content: 'API 개발 단계에서 요구사항 집계 & 전달' },
            { content: 'API 테스트 & 피드백 전달' },
          ],
        },
        {
          content: '코로나19 공적마스크 재고 현황 애플리케이션 개발',
          descriptions: [
            { content: 'API 개발 단계에서 요구사항 집계 & 전달' },
            { content: '공적마스크 재고 데이터 베타테스트 실시' },
            { content: '코로나19 공적마스크 재고 현황 API를 이용한 애플리케이션 개발 가이드 작성' },
          ],
        },
        {
          content: '코로나19 공적마스크 재고 API & 서비스 시작',
          descriptions: [
            {
              content: 'API 서비스 첫날 총 9천만회 API 호출, 시간당 최대 7백만회',
            },
          ],
        },
        {
          content: '공적 마스크 매진율 증가',
          descriptions: [
            { content: '데이터 개방 전 매진율: 67.9%' },
            { content: '데이터 개방 후 매진율: 86.4%(1주일 후)' },
          ],
        },
      ],
    },
  ],
};

export default project;
