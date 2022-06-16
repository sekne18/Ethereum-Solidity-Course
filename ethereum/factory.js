import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xC557C8dc79D7989fd4a26D2EeC12F85329C40856'
);

export default instance;
