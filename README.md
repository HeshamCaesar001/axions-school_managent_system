# axions School management system challange

- The challenge was to use the following repo as its boilerplate https://lnkd.in/d59uSwqS ,do not change the structure of the boilerplate, understand it and follow its structure. 
- The taske was to create a school management application that allows users to perform basic CRUD operations on three main entities: School, Classroom, and Student. The application should provide APIs that enable the management of these entities. Superadmins will have the ability to add schools, while school admins can manage classrooms and students within their respective schools.


## Installation instructions

- Clone project
- Create `.env` file for environment variables
- Add important variables before running the app:
    - `LONG_TOKEN_SECRET` : to secure the tokens
    - `SHORT_TOKEN_SECRET` : to secure the short tokens
    - `NACL_SECRET` : to secure the tokens
- Install dependencies : `npm install`
    - The app will be accessible at ``http://localhost:5111``
- Run in development mode  : `npm dev`
- for API documentation creation : `npm doc`

