import { Selector } from 'testcafe';

fixture ('Practice Page')
  .page ('https://devexpress.github.io/testcafe/example/');

  const developerInput = Selector('#developer-name');
  const firstCheckbox = Selector('#remote-testing');
  const secondCheckbox = Selector('#reusing-js-code');

  const selectID = Selector('#preferred-interface');

test('input multiple variable names', async t => {
  await t
    .typeText(developerInput, 'Mauro van Veldhuisen')
    .expect(developerInput.value).contains('Mauro van Veldhuisen')

    //selecteer de text Mauro
    .selectText(developerInput)
    
    //override Mauro
    .typeText(developerInput, 'Diederik')
    .expect(developerInput.value).contains('Diederik')
    
    .pressKey('ctrl+a')
    .typeText(developerInput, 'Jan Peter Balkenende')
    .expect(developerInput.value).contains('Jan Peter Balkenende')

    .selectText(developerInput)
    .typeText(developerInput, 'ruben    ()()()<>?<>?<?><":L{PO{P')
    .expect(developerInput.value).contains('ruben    ()()()<>?<>?<?><":L{PO{P')

    .selectText(developerInput)
    .typeText(developerInput, '203945877#@*(&@$)(@*#&')
    .expect(developerInput.value).contains('203945877#@*(&@$)(@*#&')

    .selectText(developerInput)
    .typeText(developerInput, 'abcdefghijklmnopqrstuvwxyz')
    .expect(developerInput.value).contains('abcdefghijklmnopqrstuvwxyz')
  });

test('check all checkboxes', async t => {
  await t
    .click(firstCheckbox)
    .expect(firstCheckbox.checked).ok()
    .click(secondCheckbox)
    .click(firstCheckbox)
    .expect(firstCheckbox.checked).notOk()
    .expect(Selector('#continuous-integration-embedding').checked).notOk()
    .expect(secondCheckbox.checked).ok()
})
//optionID, withText Function???
test.only('click through all options in the drop-down menu', async t => {
 await t
  .click(selectID)
  .click(selectID.find('option').withText('API'))
  //.debug()
  .click(selectID)
  .click(selectID.find('option').withText('Both'))
  .expect(selectID.value).contains('Both');
})

test('primary operating system options', async t => {
  await t
  .click(Selector('#windows'))
  .click(Selector('#macos'))
  .click(Selector('#linux'))
  .expect(Selector('#linux').checked).ok();
})

test('i have tried Testcafe', async t => {
  await t
  .expect(Selector('#slider').checked).notOk()
  .expect(Selector('#comments').visible).notOk()
  .click(Selector('#tried-test-cafe'))
  .expect(Selector('#comments').visible).ok();
})
