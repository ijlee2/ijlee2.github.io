import Application from 'ijlee2.github.io/app';
import config from 'ijlee2.github.io/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
