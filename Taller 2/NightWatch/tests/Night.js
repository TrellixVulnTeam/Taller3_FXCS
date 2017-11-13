module.exports = { // adapted from: https://git.io/vodU0
  'Los estudiantes login falied': function(browser) {
    browser
      .url('https://losestudiantes.co/')
      .click('.botonCerrar')
      .waitForElementVisible('.botonIngresar', 4000)
      .click('.botonIngresar')
      .setValue('.cajaLogIn input[name="correo"]', 'wrongemail@example.com')
      .setValue('.cajaLogIn input[name="password"]', '1234')
      .click('.cajaLogIn .logInButton')
      .waitForElementVisible('.aviso.alert.alert-danger', 4000)
      .assert.containsText('.aviso.alert.alert-danger', 'El correo y la contraseña que ingresaste no figuran')
      .end();
  },
  
  'Find a Proffessor': function(browser) {
    browser
      .url('https://losestudiantes.co/')
      .click('.botonCerrar')
      .waitForElementVisible("input", 4000)
      .setValue("input", "Rubby")
      .pause(4000)
      .waitForElementVisible(".Select-menu-outer", 4000)
      .click('.Select-menu-outer')
      .pause(4000)
      .assert.containsText('.nombreProfesor', 'Rubby Casallas')
      .end();
  },
 
  'Navigate to Proffessor page': function(browser) {
    browser
      .url('https://losestudiantes.co/')
      .click('.botonCerrar')
      .waitForElementVisible("#sample_select", 4000)
      .setValue("select", "universidad-de-los-andes,ingenieria-mecanica")      
      .end();
  }
};