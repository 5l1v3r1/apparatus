// adds state diagram edge types based on the source and target nodes

const printMsgTxt = require('../helpers/printMsgTxt.js')
const addEdge = require('../core/addEdge.js')

module.exports = function addStateEdge (cy, srcNode, trgNode) {
  let srcNodeId = srcNode.id
  let trgNodeId = trgNode.id
  let srcNodeCpt = srcNode.asto.concept
  let trgNodeCpt = trgNode.asto.concept

  switch (true) {
    case srcNodeCpt === 'model' && trgNodeCpt === 'model':
      addEdge(cy, srcNodeId, trgNodeId, 'description')
      break
    default:
      printMsgTxt(`${srcNodeCpt} → ${trgNodeCpt}\nnot allowed 😔`)
  }
}
