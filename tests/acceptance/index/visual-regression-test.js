import { visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import takeSnapshot from 'ijlee2.github.io/tests/helpers/percy';
import resetViewport from 'ijlee2.github.io/tests/helpers/reset-viewport';
import { module, test } from 'qunit';

module('Acceptance | index', function(hooks) {
  setupApplicationTest(hooks);
  resetViewport(hooks);


  test('@w1 @h1 Visual snapshot', async function(assert) {
    await visit('/');

    assert.dom('h1').hasText('Hello world!');
    assert.dom('p').hasText('How are you?');

    await takeSnapshot(assert);
  });


  test('@w2 @h1 Visual snapshot', async function(assert) {
    await visit('/');

    assert.dom('h1').hasText('Hello world!');
    assert.dom('p').hasText('How are you?');

    await takeSnapshot(assert);
  });


  test('@w3 @h1 Visual snapshot', async function(assert) {
    await visit('/');

    assert.dom('h1').hasText('Hello world!');
    assert.dom('p').hasText('How are you?');

    await takeSnapshot(assert);
  });


  test('@w1 @h2 Visual snapshot', async function(assert) {
    await visit('/');

    assert.dom('h1').hasText('Hello world!');
    assert.dom('p').hasText('How are you?');

    await takeSnapshot(assert);
  });


  test('@w2 @h2 Visual snapshot', async function(assert) {
    await visit('/');

    assert.dom('h1').hasText('Hello world!');
    assert.dom('p').hasText('How are you?');

    await takeSnapshot(assert);
  });


  test('@w3 @h2 Visual snapshot', async function(assert) {
    await visit('/');

    assert.dom('h1').hasText('Hello world!');
    assert.dom('p').hasText('How are you?');

    await takeSnapshot(assert);
  });


  test('@w1 @h3 Visual snapshot', async function(assert) {
    await visit('/');

    assert.dom('h1').hasText('Hello world!');
    assert.dom('p').hasText('How are you?');

    await takeSnapshot(assert);
  });


  test('@w2 @h3 Visual snapshot', async function(assert) {
    await visit('/');

    assert.dom('h1').hasText('Hello world!');
    assert.dom('p').hasText('How are you?');

    await takeSnapshot(assert);
  });


  test('@w3 @h3 Visual snapshot', async function(assert) {
    await visit('/');

    assert.dom('h1').hasText('Hello world!');
    assert.dom('p').hasText('How are you?');

    await takeSnapshot(assert);
  });
});