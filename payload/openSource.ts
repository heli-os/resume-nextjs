import { IOpenSource } from '../component/openSource/IOpenSource';

const openSource: IOpenSource.Payload = {
  disable: false,
  list: [
    {
      title: 'mongo-java-driver',
      descriptions: [
        {
          content: '(PR) mongodb/mongo-java-driver#996',
          href: 'https://github.com/mongodb/mongo-java-driver/pull/996',
          descriptions: [
            { content: 'fix minor typos in java comments(javadoc) and all that minor typos' },
          ],
        },
        {
          content: '(PR) mongodb/mongo-java-driver#997',
          href: 'https://github.com/mongodb/mongo-java-driver/pull/997',
          descriptions: [{ content: 'fix typo in abstract method name in ServerMonitorListener' }],
        },
        {
          content: '(ISSUE) mongodb/mongo-java-driver#4719',
          href: 'https://jira.mongodb.org/browse/JAVA-4719',
          descriptions: [
            { content: 'inquire is it bug that the maintenance timer logic for sdam' },
          ],
        },
        {
          content: '(PR) mongodb/mongo-java-driver#999',
          href: 'https://github.com/mongodb/mongo-java-driver/pull/999',
          descriptions: [
            { content: 'change the log message from INFO to DEBUG' },
            {
              content:
                "Justification: it's the only remaining connection-related log message that is logged at INFO (e.g. the connection-closed message is logged at DEBUG)",
            },
          ],
        },
        {
          content: 'Github Stars: ',
          postImage:
            'https://img.shields.io/github/stars/mongodb/mongo-java-driver.svg?style=popout',
        },
      ],
    },
    {
      title: 'ksp',
      descriptions: [
        {
          content: '(PR) google/ksp#1088',
          href: 'https://github.com/google/ksp/pull/1088',
          descriptions: [
            { content: "lift return out of 'if'" },
            { content: 'change the modifiers to private from public' },
          ],
        },
        {
          content: 'Github Stars: ',
          postImage: 'https://img.shields.io/github/stars/google/ksp.svg?style=popout',
        },
      ],
    },
    {
      title: 'kotlin-jdsl',
      descriptions: [
        {
          content: '(PR) line/kotlin-jdsl#68',
          href: 'https://github.com/line/kotlin-jdsl/pull/68',
          descriptions: [
            { content: 'change example code to not use platform type' },
            { content: 'correct typo in some files' },
            { content: 'modify to unify code style' },
          ],
        },
        {
          content: 'Github Stars: ',
          postImage: 'https://img.shields.io/github/stars/line/kotlin-jdsl.svg?style=popout',
        },
      ],
    },
    {
      title: 'Exposed',
      descriptions: [
        {
          content: '(PR) JetBrains/Exposed#1582',
          href: 'https://github.com/JetBrains/Exposed/pull/1582',
          descriptions: [
            { content: 'change some codes to not use platform type' },
            { content: "change 'when' expression style" },
          ],
        },
        {
          content: 'Github Stars: ',
          postImage: 'https://img.shields.io/github/stars/JetBrains/Exposed.svg?style=popout',
        },
      ],
    },
    {
      title: 'postman',
      descriptions: [
        {
          content: '(ISSUE) postmanlabs/postman-app-support#10221',
          href: 'https://github.com/postmanlabs/postman-app-support/issues/10221',
          descriptions: [
            { content: 'asked if Postman sends SYN to check that IPv6 is available' },
            {
              content: 'and posted about the process. (KR)',
              postHref: 'https://dataportal.kr/2',
            },
          ],
        },
        {
          content: 'Github Stars: ',
          postImage:
            'https://img.shields.io/github/stars/postmanlabs/postman-app-support.svg?style=popout',
        },
      ],
    },
    {
      title: 'Developer Community',
      descriptions: [
        {
          content: '기술 경험 공유 네트워크 "위클리 아카데미" 개설 / 운영',
        },
        {
          content: '카프카 한국 사용자 모임(Kafka KRU)',
        },
      ],
    },
  ],
};

export default openSource;
