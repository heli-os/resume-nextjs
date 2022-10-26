import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: ['TBU'],
  sign: 'Taeyang Jin',
  latestUpdated: lastestUpdatedAt,
  // latestUpdated: '2022-10-27',
};

export default introduce;
