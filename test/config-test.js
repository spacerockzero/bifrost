var assert = require("chai").assert,
    expect = require("chai").expect,
    fs = require('fs'),
    path = require('path');
    
describe('default config is set up', function(){
  
  before(function(){
    this.config = require('../gulpfile/config')();
  })
  
  it('Should return a default config', function(){
    assert.isObject(this.config);
  })
  
})