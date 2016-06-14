import routes from '../../src/v2/shared/routes';

describe('Routes', () => {

  it('renders valid route', () => {
    const uri = routes('fees', 'collection', { baseUrl: 'https://api.leisurelink.com', apiKey: '123456', pmcId: '123' });
    expect(uri).to.equal('https://api.leisurelink.com/hub/v2/pmcs/123/fees?apiKey=123456');
  });

  it('renders valid route', () => {
    const uri = routes('fees', 'id', { baseUrl: 'https://api.leisurelink.com', apiKey: '123456', pmcId: '123', feeId: '456' });
    expect(uri).to.equal('https://api.leisurelink.com/hub/v2/pmcs/123/fees/456?apiKey=123456');
  });
  
});
