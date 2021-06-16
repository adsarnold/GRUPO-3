/**
 * role: essa propriedade tende a definir qual o "papel" desse usuário dentro do sistema;
 * admin: tem acesso total ao sistema;
 * manager: tem acesso limitado, podendo apenas visualizar as informações;
 */
 const users = [
  {
    login: "admin",
    role: ["admin", "manager"],
    password: "admin123",
  },
  {
    login: "manager",
    role: ["manager"],
    password: "manager123",
  },
];

/**
 * Nesse caso estamos trafegando password de uma forma não criptografada, ou seja, uma forma não segura;
 * O correto, é que todas as senhas sejam armazenadas de forma criptografada, para que a senha não fique exposta.
 */
function authenticateUser(login, password) {
  const user = users.find(function (user) {
    return user.login === login && user.password === password;
  });

  return user;
}

module.exports = {
  authenticateUser: authenticateUser,
};