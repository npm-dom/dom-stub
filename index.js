module.exports = domStub

// create a dom stub
// domStub() -> DOMElement
function domStub () {
  return {
    nodeType: 1337,
    nodeName: 'stub el'
  }
}
