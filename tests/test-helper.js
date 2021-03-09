import Application from 'ember-typescript-recipes/app'
import config from 'ember-typescript-recipes/config/environment'
import * as QUnit from 'qunit'
import { setApplication } from '@ember/test-helpers'
import { setup } from 'qunit-dom'
import { start } from 'ember-qunit'

setApplication(Application.create(config.APP))

setup(QUnit.assert)

start()
