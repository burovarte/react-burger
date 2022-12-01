describe('Открытие модального окна', function () {
    beforeEach(function () {
        cy.intercept('GET', 'api/ingredients', { fixture: 'ingredients.json' });
        cy.viewport(1300, 800);
        cy.goToDeployedSite();
    });

    it('Открытие окна с описанием', function () {
        cy.contains('Краторная булка').click();
        cy.get('[class^=modal_mom_]').should('exist');
        cy.contains('Детали ингредиента');
        cy.contains('Краторная булка N-200i');
        cy.contains('Калории');
        cy.contains('420');
        cy.contains('80');
        cy.contains('24');
        cy.contains('53');
    });

    it('Закрытие окна', function () {
        cy.contains('Краторная булка').click();
        cy.get('[class^=modal_close_]').first().as('close');
        cy.get('@close').click();
        cy.get('[class^=modal_mom_]').should('not.exist');
    });
});