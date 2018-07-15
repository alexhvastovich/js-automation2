//C:\Users\Alex\AppData\Local\Cypress\Cache\3.0.2

//js cypress
describe("open email", () => {
    before( () => {
        cy.server();
        cy.route('GET','**/ad');
    });
    it("gmail log in", () => {
        cy.visit('https://mail.ru/');
        cy.get('input[name="login"]').type("testcypress");
        cy.get('.mailbox__input_password').type("newday333");
        cy.get('form#auth').contains('Войти').click();
        cy.contains('Написать письмо').click();
        cy.get('[data-label="compose_to"] textarea[tabindex="4"]').type("testcypress@mail.ru");
        cy.get('input[name="Subject"]').type("Вам письмо",{force: true})
        cy.contains('Отправить').click();
        cy.get('#MailRuConfirm').contains('Продолжить').click({force: true});
    });
});
