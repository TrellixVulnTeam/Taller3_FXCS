var assert = require('assert');
describe('los estudiantes login', function() {
    it('should visit los estudiantes and failed at log in', function () {
        browser.url('https://losestudiantes.co');
        browser.click('button=Cerrar');
        browser.waitForVisible('button=Ingresar', 5000);
        browser.click('button=Ingresar');

        var cajaLogIn = browser.element('.cajaLogIn');
        var mailInput = cajaLogIn.element('input[name="correo"]');

        mailInput.click();
        mailInput.keys('wrongemail@example.com');

        var passwordInput = cajaLogIn.element('input[name="password"]');

        passwordInput.click();
        passwordInput.keys('1234');

        cajaLogIn.element('button=Ingresar').click()
        browser.waitForVisible('.aviso.alert.alert-danger', 5000);

        var alertText = browser.element('.aviso.alert.alert-danger').getText();
        expect(alertText).toBe('Upss! El correo y la contraseña que ingresaste no figuran en la base de datos. Intenta de nuevo por favor.');
    });

    it('Create an existing account', function (){
        browser.url('https://losestudiantes.co');
        browser.waitForVisible('button=Ingresar', 5000);
        browser.click('button=Ingresar');

        cajaSignUp = browser.element('.cajaSignUp');

        nombre = cajaSignUp.element('input[name="nombre"]');
        nombre.click();
        nombre.keys("David");

        apellido = cajaSignUp.element('input[name="apellido"]');
        apellido.click();
        apellido.keys("Paniagua");

        correo = cajaSignUp.element('input[name="correo"]');
        correo.click();
        correo.keys("davidernestopaniagua@gmail.com");

        universidad = cajaSignUp.element('select[name="idUniversidad"]');
        universidad.selectByValue('universidad-nacional');

        departamento = cajaSignUp.element('select[name="idDepartamento"]');
        departamento.selectByValue('103');

        clave = cajaSignUp.element('input[name="password"]');
        clave.click();
        clave.keys("miso2017");

        departamento = cajaSignUp.element('[type="checkbox"]');
        departamento.click();

        browser.click('button=Registrarse');
    });

    it('Login succefull', function() {
        var correo = "davidernestopaniagua@gmail.com"
        var clave = "miso2017"
        browser.url('https://losestudiantes.co');
        browser.waitForVisible('button=Ingresar', 5000);
        browser.click('button=Ingresar');

        var cajaLogIn = browser.element('.cajaLogIn');
        var mailInput = cajaLogIn.element('input[name="correo"]');

        mailInput.click();
        mailInput.keys(correo);

        var passwordInput = cajaLogIn.element('input[name="password"]');
        passwordInput.click();
        passwordInput.keys(clave);        
        cajaLogIn.element('button=Ingresar').click();
        
    });  

});