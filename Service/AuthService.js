const users = [
  { id: 1, username: 'user1', password: 'pass1', role: 'user' },
  { id: 2, username: 'user2', password: 'pass2', role: 'user' },
];

const admins = [
  { id: 1, username: 'admin1', password: 'adminpass1', role: 'admin' },
  { id: 2, username: 'admin2', password: 'adminpass2', role: 'admin' },
    { id: 2, username: 'ad1', password: 'p1', role: 'admin' },

];

export const login = (username, password) => {
  const combinedUsers = [...users, ...admins];

  const user = combinedUsers.find(u => u.username === username && u.password === password);
  return new Promise((resolve, reject) => {
    if (user) {
      setTimeout(() =>resolve(user.role), 1000);
    } else {
      reject(new Error("Invalid credentials"));
    }
  });
};