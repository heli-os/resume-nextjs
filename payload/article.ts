import { IArticle } from '../component/article/IArticle';

const article: IArticle.Payload = {
  disable: false,

  list: [
    {
      content: '[Java & Kotlin] enum class가 완벽한 싱글톤이라 불리는 이유',
      href: 'https://dataportal.kr/54',
    },
    {
      content: 'Why DDD, Clean Architecture and Hexagonal?',
      href: 'https://dataportal.kr/74',
    },
    {
      content: 'Facebook을 다운 시킨 원인, BGP hijacking이 무엇인가?',
      href: 'https://dataportal.kr/14',
    },
    {
      content: '상황 학습을 실현할 수 있는 조직을 만들자',
      href: 'https://dataportal.kr/31',
    },
    {
      content: '좋은 동료는 어떤 동료일까? (feat. 띵스플로우)',
      href: 'https://dataportal.kr/30',
    },
  ],
};

export default article;
