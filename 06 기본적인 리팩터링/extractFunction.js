function printOwing(invoice) {
  let outstanding = 0;

  printBanner();

  // 미해결 채무(outstanding)를 계산한다.
  for (const o of invoice.orders) {
    outstanding += o.amount;
  }

  // 마감일(dueDate)을 기록한다.
  const today = Clock.today;
  invoice.dueDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 30
  );

  printDetails(invoice, outstanding);
}

function printDetails(incoice, outstanding) {
  console.log("고객명: ${invoice.customer}");
  console.log("채무액: ${outstanding}");
  console.log("마감일: ${invoice.dueDate.toLocaleDateString()}");
}
