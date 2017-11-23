// shows info of node in the div 'info-for-nodes'

const printMessageText = require('./printMessageText.js')

module.exports = function nodeInfo (node) {
  let nodeInfo = ''
  const nodeData = node.data().asto
  Object.keys(nodeData).map(i => {
    // adds the keys of the object to the string
    if (nodeData.hasOwnProperty(i) === true) {
      nodeInfo += `• ${i}: `
    }
    // adds the values of the object to the string
    nodeInfo += `${nodeData[i]}\n`
  })
  printMessageText(nodeInfo)
}
