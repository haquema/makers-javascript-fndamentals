const bankAccount = { 
  accountNumber: 98923982,
  accountSortCode: 928374,

  getBalance: () => {
    return 100;
  }
};

console.log(bankAccount.getBalance());
console.log(bankAccount.accountNumber);