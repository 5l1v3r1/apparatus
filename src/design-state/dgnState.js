'use strict'

// design-state main module

// require design-state modules
const dgnStateModelValidation = require('./dgnStateModelValidation.js')
const dgnStateOverview = require('./dgnStateOverview.js')
const addDgnStateComponent = require('./addDgnStateComponent.js')
const addDgnStateEdge = require('./addDgnStateEdge.js')

// require global modules
const totalNodes = require('../core/totalNodes.js')

// add desing node
const addNode = (cy, nodeCounter) => {
  const addNode = document.getElementById('add-component-id')
  addNode.addEventListener('click', e => {
    nodeCounter += 1
    addDgnStateComponent(cy, e.target.textContent, nodeCounter)
    cy.nodes().addClass('label-nodes')
    totalNodes(cy) // global module
  })
}

// add dgn-state edges
const addEdge = (cy, srcNode, trgNode, srcNodeCpt, trgNodeCpt) => {
  const buttonAddEdge = document.getElementById('add-edge')
  buttonAddEdge.addEventListener('click', () => {
    addDgnStateEdge(cy, srcNode.out, trgNode.out)
    cy.edges().addClass('label-edges')
  })
}

// validate model
const validate = cy => {
  const buttonModelValidate = document.getElementById('model-validate-button')
  buttonModelValidate.addEventListener('click', () => {
    dgnStateModelValidation(cy)
  })
}

// model overview
const overview = cy => {
  const buttonOverview = document.getElementById('overview-button')
  buttonOverview.addEventListener('click', () => {
    dgnStateOverview(cy)
  })
}

module.exports = {
  addNode: addNode,
  addEdge: addEdge,
  validate: validate,
  overview: overview
}
