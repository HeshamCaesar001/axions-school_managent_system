# 🏫 Axions School Management System Challenge

- The challenge was to use the following repo as its boilerplate: [Axions Boilerplate](https://lnkd.in/d59uSwqS). The task was to create a school management application that allows users to perform basic CRUD operations on three main entities: **School**, **Classroom**, and **Student**. The application should provide APIs that enable the management of these entities. Superadmins will have the ability to add schools, while school admins can manage classrooms and students within their respective schools.

## 🛠️ Installation Instructions

1. **Clone the project:**
    ```bash
    git clone <repository-url>
    cd <project-directory>
    ```

2. **Create a `.env` file** for environment variables.

3. **Add important variables** before running the app:
    - 🔐 `LONG_TOKEN_SECRET`: to secure the tokens
    - 🔐 `SHORT_TOKEN_SECRET`: to secure the short tokens
    - 🔒 `NACL_SECRET`: to secure the tokens

4. **Install dependencies:**
    ```bash
    npm install
    ```
    - The app will be accessible at: [http://localhost:5111](http://localhost:5111)

5. **Run in development mode:**
    ```bash
    npm dev
    ```

6. **Generate API documentation:**
    ```bash
    npm doc
    ```

---

🎉 **Good luck with your project!**
