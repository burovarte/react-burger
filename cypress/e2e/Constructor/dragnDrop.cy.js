describe('Проверка оформления заказа и drad and drop', function () {
    beforeEach(function () {
        cy.intercept('GET', 'api/ingredients', { fixture: 'ingredients.json' });
        cy.intercept('POST', 'api/orders', { fixture: 'order.json' });
        cy.intercept('POST', 'api/auth/login', { fixture: 'login.json' });
        cy.viewport(1300, 800);
        cy.goToDeployedSite();
    });

    it('Перетаскивание булки', function () {
        cy.log('Перетаскиваем булку в конструктор');
        cy.get('[class^=burger-constructor]')
            .contains('Краторная булка')
            .should('not.exist');
        cy.get('[class^=item_main_]').first().trigger('dragstart');
        cy.get('[class^=burger-constructor_items_mainAndSauce_]').trigger('drop');
        cy.get('[class^=burger-constructor]')
            .contains('Краторная булка')
            .should('exist');

        cy.log('Оформление заказа неавторизованным пользователем');
        cy.get('button').contains('Оформить заказ').click();
        cy.get('[class^=input__icon]').first().click();

        cy.log('Авторизация в системе');
        cy.get('form input[type=email]').type('123abcd@gmail.com');
        cy.get('form input[type=password]').type('123abcd');
        cy.contains('Войти').click();
        cy.contains('Вход').should('not.exist');
        cy.log('Оформлление заказа');
        cy.get('button').contains('Оформить заказ').click();
        cy.get('[class^=modal_mom_]').should('exist');
        cy.contains('6491').should('exist');
        cy.contains('Ваш заказ начали готовить').should('exist');

        cy.log('Закрытие модального окна');
        cy.get('[class^=modal_close_]').first().as('close');
        cy.get('@close').click();
        cy.get('[class^=modal_mom_]').should('not.exist');

        cy.log('Проверка на пустой конструктор');
        cy.get('[class^=burger-constructor]')
            .contains('Краторная булка')
            .should('not.exist');
    });
});