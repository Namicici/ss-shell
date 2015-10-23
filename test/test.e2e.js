describe('SimpleTest', function() {

  it('A small Angular Test', function() {
    browser().navigateTo('/');
    input('yourName').enter('A Pirate!');
    expect(element('p').text()).toEqual('Hello A Pirate!!');
  });
});
