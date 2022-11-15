import { IEducation } from '../component/education/IEducation';

const education: IEducation.Payload = {
  disable: false,

  list: [
    {
      title: 'Korea National Open University',
      subTitle: 'Computer Science Bachelor',
      startedAt: '2022-09',
      // endedAt: '2010-02',
    },
    {
      title: 'Yeungnam University College',
      subTitle: 'Computer Science Associate (GPA: 4.5/4.5)',
      startedAt: '2019-03',
      endedAt: '2022-02',
    },
  ],
};

export default education;
