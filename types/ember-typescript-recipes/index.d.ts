import Ember from 'ember'

declare global {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  interface Array<T> extends Ember.ArrayPrototypeExtensions<T> {}
  // interface Function extends Ember.FunctionPrototypeExtensions {}
}

export {}
