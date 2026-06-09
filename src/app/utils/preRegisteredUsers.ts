export const preRegisteredUsers = [
  {
    userId: "HD978789",
    name: "Premium User",
    email: "premium@hydrosmart.com",
    password: "123456",
    tier: "premium",
    lifestyle: "active",
    activityLevel: "high",
    dailyGoal: 3000,
    currentIntake: 1500,
    streak: 15,
    selectedMode: "gym",
    availableModes: ["standard", "gym", "work", "sleep", "travel", "outdoor"],
    orders: [
      {
        orderId: "ORD1735000000001",
        orderDate: "2026-06-01T10:00:00.000Z",
        plan: "premium",
        quantity: 1,
        total: 99,
        bottleSpecs: {
          size: "1000ml",
          material: "Stainless Steel",
          color: "#3B82F6",
          engraving: "Premium User"
        },
        status: "delivered"
      }
    ],
    bottles: [
      {
        bottleId: "BTL001",
        name: "Bottle 1",
        specs: {
          size: "1000ml",
          material: "Stainless Steel",
          color: "#3B82F6",
          engraving: "Premium User"
        },
        currentIntake: 1500,
        dailyGoal: 3000
      }
    ],
    bottleCustomization: {
      size: "1000ml",
      material: "Stainless Steel",
      color: "#3B82F6",
      engraving: "Premium User"
    }
  },
  {
    userId: "HD510748",
    name: "Default User",
    email: "default@hydrosmart.com",
    password: "123456",
    tier: "default",
    lifestyle: "moderate",
    activityLevel: "medium",
    dailyGoal: 2500,
    currentIntake: 800,
    streak: 5,
    selectedMode: "standard",
    availableModes: ["standard"],
    orders: [
      {
        orderId: "ORD1735000000002",
        orderDate: "2026-06-02T14:00:00.000Z",
        plan: "default",
        quantity: 1,
        total: 49,
        color: "black",
        bottleSpecs: {
          size: "750ml",
          material: "BPA-Free Plastic",
          color: "black"
        },
        status: "delivered"
      }
    ],
    bottles: [
      {
        bottleId: "BTL001",
        name: "Bottle 1",
        specs: {
          size: "750ml",
          material: "BPA-Free Plastic",
          color: "black"
        },
        currentIntake: 800,
        dailyGoal: 2500
      }
    ],
    bottleCustomization: null
  }
];

export function initializePreRegisteredUsers() {
  const existingUsers = localStorage.getItem('preRegisteredUsers');
  if (!existingUsers) {
    localStorage.setItem('preRegisteredUsers', JSON.stringify(preRegisteredUsers));
  }
}

export function getPreRegisteredUser(userId: string, password: string) {
  const users = JSON.parse(localStorage.getItem('preRegisteredUsers') || '[]');
  return users.find((user: any) =>
    user.userId === userId && user.password === password
  );
}

export function updatePreRegisteredUser(userId: string, updates: any) {
  const users = JSON.parse(localStorage.getItem('preRegisteredUsers') || '[]');
  const updatedUsers = users.map((user: any) =>
    user.userId === userId ? { ...user, ...updates } : user
  );
  localStorage.setItem('preRegisteredUsers', JSON.stringify(updatedUsers));
}
