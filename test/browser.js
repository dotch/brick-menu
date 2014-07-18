/* jshint expr: true */
/* global chai, before, describe, it */

var expect = chai.expect;

var ready;
before(function (done) {
  ready = done;
});

window.addEventListener('WebComponentsReady', function() {

  // Add the HTMLImport for the custom element.
  document.head.innerHTML += '<link rel="import" id="el" href="/base/src/brick-menu.html">';

  document.querySelector('#el').addEventListener('load', function() {

    // Create the custom element.
    var customElement = document.createElement('brick-menu');
    // customElement.setAttribute('attribute-value', attrbute);

    // Add the custom element to the page.
    // This will trigger the element's attachedCallback function.
    document.body.appendChild(customElement);

    ready();

  });
});

describe("the brick-menu", function(){

  it("should be attached to the DOM", function(){
    expect(document.querySelector("brick-menu")).not.to.be.null;
  });

});
