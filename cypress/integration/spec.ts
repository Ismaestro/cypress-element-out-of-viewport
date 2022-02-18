describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.window().then((win: any) => {
      const outOfViewportElements = win.getElementsOutOfViewport();
      assert.equal(outOfViewportElements.length, 0);
    })
  })
})
