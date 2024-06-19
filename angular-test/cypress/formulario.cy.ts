import { FormularioComponent } from "../src/app/formulario/formulario/formulario.component"

describe('formulario.cy.ts', () => {
  it('Test 1', () => {
    expect(true).to.equal(true)
  })
})

describe('My First Test', () => {
  it('finds the content "formulario works!"', () => {
    cy.mount(FormularioComponent)
    cy.contains('formulario works!')
  })
})