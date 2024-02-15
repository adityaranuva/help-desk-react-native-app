const mockTickets = [
  { id: 1, name: 'John Doe', status: 'new', description: 'Issue with account login.' },
  { id: 2, name: 'Steve Smith', status: 'in progress', description: 'Issue with data load.' },
  { id: 3, name: 'Sam Td', status: 'resolved', description: 'Unable to sort the list.' },
  { id: 4, name: 'Mike S', status: 'in progress', description: 'Missing rows.' },
  { id: 9, name: 'Lily Evans', status: 'new', description: 'Request for account deletion.' },
  { id: 10, name: 'James Potter', status: 'resolved', description: 'Inquiry about service availability.' },
  { id: 11, name: 'Sirius Black', status: 'in progress', description: 'Report of a security breach.' },
  { id: 12, name: 'Alice Longbottom', status: 'new', description: 'Feedback on user interface.' },
  { id: 13, name: 'Frank Longbottom', status: 'resolved', description: 'Compliment on customer service.' },
  { id: 14, name: 'Remus Lupin', status: 'in progress', description: 'Issue with mobile app crashing.' },
  { id: 15, name: 'Peter Pettigrew', status: 'new', description: 'Difficulty accessing account settings.' },
];


export const getTickets = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockTickets), 500);
  });
};

export const submitTicket = (ticketData) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Ticket submitted:', ticketData);
      resolve('Ticket submitted successfully');
    }, 2000);
  });
};

export const updateTicket = (id, newStatus) => {
  return new Promise((resolve, reject) => {
    const index = mockTickets.findIndex(ticket => ticket.id === id);
    if (index !== -1) {
      mockTickets[index].status = newStatus;
      resolve(mockTickets[index]);
      console.log('mockIndexUpdted', JSON.stringify(mockTickets))
    } else {
      reject(new Error("Ticket not found"));
    }
  });
};