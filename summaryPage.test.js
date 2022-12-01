import { Selector } from 'testcafe';

fixture ('Summary Page')
  .page ('http://localhost:8080');

test('should show summary page with all answers', async t => {
  await t
    .click(Selector('#app').find('[data-testid="operator-button"]').nth(0))
    .click(Selector('[data-testid="exam-button"]'))
    .expect(Selector('.question').visible).ok()
    .click(Selector('#exam').find('.answer-button').nth(0))
    .click(Selector('.next-button'))
    .click(Selector('#exam').find('.answer-button').nth(1))
    .click(Selector('.next-button'))
      .click(Selector('#exam').find('.answer-button').nth(2))
      .click(Selector('.next-button'))
        .click(Selector('#exam').find('.answer-button').nth(2))
        .click(Selector('.next-button'))
          .click(Selector('#exam').find('.answer-button').nth(0))
          .click(Selector('.next-button'))
            .click(Selector('#exam').find('.answer-button').nth(1))
            .click(Selector('.next-button'))
              .click(Selector('#exam').find('.answer-button').nth(1))
              .click(Selector('.next-button'))
                .click(Selector('#exam').find('.answer-button').nth(2))
                .click(Selector('.next-button'))
                  .click(Selector('#exam').find('.answer-button').nth(0))
                  .click(Selector('.next-button'))
                    .click(Selector('#exam').find('.answer-button').nth(1))
                    .click(Selector('.next-button'))
                      .click(Selector('#exam').find('.answer-button').nth(2))
                      .click(Selector('.next-button'))
                        .click(Selector('#exam').find('.answer-button').nth(0))
                        .click(Selector('.next-button'))
                          .click(Selector('#exam').find('.answer-button').nth(0))
                          .click(Selector('.next-button'))
                            .click(Selector('#exam').find('.answer-button').nth(2))
                            .click(Selector('.next-button'))
                              .click(Selector('#exam').find('.answer-button').nth(0))
                              .click(Selector('.next-button'))

});
