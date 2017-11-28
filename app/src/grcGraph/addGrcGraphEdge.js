// adds state diagram edge types based on the source and target nodes

const printMessageText = require('../helpers/printMessageText.js')
const addEdge = require('../core/addEdge.js')

module.exports = function addComponent (cy, srcNode, trgNode) {
  let srcNodeId = srcNode.id
  let trgNodeId = trgNode.id
  let srcNodeCpt = srcNode.asto.concept
  let trgNodeCpt = trgNode.asto.concept

  switch (true) {
    case srcNodeCpt === 'node' && trgNodeCpt === 'node':
      addEdge(cy, srcNodeId, trgNodeId, 'description')
      break
    default:
      printMessageText(`${srcNodeCpt} → ${trgNodeCpt}\nnot allowed 😔`)
  }
}
