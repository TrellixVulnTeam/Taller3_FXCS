// ***************************************DESARROLLO DEL TALLER 2 **********************************
// En este documento encontramos el desarrollo del taller 2 correspondiente a las pruebas en Cypress
// Se factorizó la fución más común: Login para reducir un poco la redundancia
// Las pruebas contempladas son:
//  *'Visits los estudiantes and fails at login': Login fallido
//  *'Create an account': Crear una nueva cuenta (maneja un correo aleatorio para procurar ser exitosa siempre)
//  *'Login succefull': Login exitoso
//  *'Create an existing account': Intentar crear una cuenta que exista previamente
//  *'Find a Proffessor': Buscar un profesor
//  *'Navigate to Proffessor page' Ir a la página de un profesor
//  *'Filter by subject at proffessor page' Filtrar materias en la página de un profesor
//
describe('Los estudiantes login', function() {

    function login(correo, clave)
    {
        //
        // Login general para las pruebas que requieran autenticación
        //
        cy.visit('https://losestudiantes.co')
        cy.contains('Cerrar').click()
        cy.contains('Ingresar').click()
        cy.get('.cajaLogIn').find('input[name="correo"]').click().type(correo)
        cy.get('.cajaLogIn').find('input[name="password"]').click().type(clave)
        cy.get('.cajaLogIn').contains('Ingresar').click()
    } 

    function loginSucceful () {
        //
        // para factorizar correo y clave y autenticar directamente
        //
        var correo = "davidernestopaniagua@gmail.com"
        var clave = "miso2017"
        login (correo, clave)
    }

    it('Visits los estudiantes and fails at login', function() {
        var correo = "wrongemail@example.com"
        var clave = "1234"
        login (correo, clave)
        cy.contains('El correo y la contraseña que ingresaste no figuran en la base de datos. Intenta de nuevo por favor.')        
    })

    it('Create an account', function() {
        var correo = "David" + Math.round(Math.random()*1e+6) + "@gmail.com"
        console.log(correo)
        cy.log(correo)
        cy.visit('https://losestudiantes.co')
        cy.contains('Cerrar').click()
        cy.contains('Ingresar').click()
        cy.get('.cajaSignUp').find('input[name="nombre"]').click().type("David")
        cy.get('.cajaSignUp').find('input[name="apellido"]').click().type("Paniagua")
        cy.get('.cajaSignUp').find('input[name="correo"]').click().type(correo)
        cy.get('.cajaSignUp').find('select[name="idUniversidad"]').select('universidad-nacional')
        cy.get('.cajaSignUp').find('select[name="idDepartamento"]').select('103')
        cy.get('.cajaSignUp').find('input[name="password"]').click().type("miso2017")     
        cy.get('.cajaSignUp').find('[type="checkbox"]').check()                 
        cy.get('.cajaSignUp').contains('Registrarse').click()
        cy.contains('Registro exitoso!')        
    }) 
    
    it('Login succefull', function() {
        loginSucceful ()
        cy.get('#cuenta').should('be.visible')
    })

    it('Create an existing account', function() {
        var correo = 'davidernestopaniagua@gmail.com'
        cy.visit('https://losestudiantes.co')
        cy.contains('Cerrar').click()
        cy.contains('Ingresar').click()
        cy.get('.cajaSignUp').find('input[name="nombre"]').click().type("David")
        cy.get('.cajaSignUp').find('input[name="apellido"]').click().type("Paniagua")
        cy.get('.cajaSignUp').find('input[name="correo"]').click().type(correo)
        cy.get('.cajaSignUp').find('select[name="idUniversidad"]').select('universidad-nacional')
        cy.get('.cajaSignUp').find('select[name="idDepartamento"]').select('103')
        cy.get('.cajaSignUp').find('input[name="password"]').click().type("miso2017")     
        cy.get('.cajaSignUp').find('[type="checkbox"]').check()                 
        cy.get('.cajaSignUp').contains('Registrarse').click()
        cy.contains("Error: Ya existe un usuario registrado con el correo '" + correo + "'")        
    })       

    it('Find a Proffessor', function() {
         cy.visit('https://losestudiantes.co')
         cy.contains('Cerrar').click()
         cy.get('.Select-input').find('input').type("Rubby",{force:true})
         cy.get('.Select-menu-outer').contains('Rubby').click()
         cy.get('.infoProfesor').find('h1').should('contain', 'Rubby Casallas Gutierrez')
    }) 

    it('Navigate to Proffessor page', function() {
        cy.visit('https://losestudiantes.co')
        cy.contains('Cerrar').click()         
        cy.contains('Alfabético').click()
        cy.contains('Dario Correal').click()
        cy.get('.infoProfesor').find('h1').should('contain', 'Dario Correal')        
    }) 

    it('Filter by subject at proffessor page', function() {
        cy.visit('https://losestudiantes.co')
        cy.contains('Cerrar').click()         
        cy.get('#sample_select').select('universidad-de-los-andes,ingenieria-mecanica')
        cy.contains('Alfabético').click()
        cy.contains('Laura Suarez').click() 
        cy.get('.infoProfesor').find('h1').should('contain', 'Laura Suarez')        
    }) 
}) 