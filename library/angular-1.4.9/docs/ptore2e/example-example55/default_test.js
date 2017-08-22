describe("", function() {
  var rootEl;
  beforeEach(function() {
    rootEl = browser.rootEl;
    browser.get("build/docs/examples/example-example55/ratingList.html");
  });
  
it('should check both checkBoxes', function() {
  expect(element(by.id('checkSlave')).getAttribute('checked')).toBeFalsy();
  element(by.model('master')).click();
  expect(element(by.id('checkSlave')).getAttribute('checked')).toBeTruthy();
});
});