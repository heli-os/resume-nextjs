import { ISkill } from '../component/skill/ISkill';

const backend: ISkill.Skill = {
  category: 'Back-end',
  items: [
    {
      title: 'Kotlin',
      level: 3,
    },
    {
      title: 'Java',
      level: 3,
    },
    {
      title: 'SpringBoot',
      level: 3,
    },
    {
      title: 'Node.js',
      level: 2,
    },
  ],
};

const database: ISkill.Skill = {
  category: 'Database',
  items: [
    {
      title: 'MySQL',
      level: 3,
    },
    {
      title: 'Redis',
      level: 2,
    },
    {
      title: 'MongoDB',
      level: 2,
    },
  ],
};

const infrastructure: ISkill.Skill = {
  category: 'Infrastructure',
  items: [
    {
      title: 'Kafka',
      level: 3,
    },
    {
      title: 'AWS EC2',
      level: 2,
    },
    {
      title: 'AWS RDS',
      level: 2,
    },
    {
      title: 'AWS S3',
      level: 2,
    },
    {
      title: 'AWS OpenSearch',
      level: 1,
    },
  ],
};

const frontend: ISkill.Skill = {
  category: 'Front-end',
  items: [
    {
      title: 'React',
      level: 2,
    },
    {
      title: 'JavaScript',
      level: 2,
    },
    {
      title: 'HTML/CSS',
      level: 2,
    },
    {
      title: 'Next.js',
      level: 1,
    },
  ],
};

const etc: ISkill.Skill = {
  category: 'Etc',
  items: [
    {
      title: 'CentOS',
    },
    {
      title: 'Jira',
    },
    {
      title: 'Confluence',
    },
    {
      title: 'Slack',
    },
    {
      title: 'Notion',
    },
    {
      title: 'Git',
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [backend, database, infrastructure, frontend, etc],
  tooltip: '1: 기초 수준\n2: 취미 개발 수준\n3: Production 개발 가능 수준',
};

export default skill;
