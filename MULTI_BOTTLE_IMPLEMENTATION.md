# Multi-Bottle Feature Implementation

## Overview
This document details the implementation of the multi-bottle feature for HydroSmart default users, allowing them to own multiple bottles under the same account while preserving the premium dashboard experience.

## Requirements Met

✅ **Requirement 1**: Default users can purchase additional HydroSmart bottles and add them to their bottles array in localStorage
✅ **Requirement 2**: Dashboard sidebar displays "Bottle 1", "Bottle 2", "Bottle 3", etc. based on owned bottles
✅ **Requirement 3**: Each bottle has: name, currentIntake, size, material, color
✅ **Requirement 4**: Clicking a bottle switches the dashboard to show that bottle's hydration data
✅ **Requirement 5**: Bottles generated dynamically using userData.bottles.map() - NOT hardcoded
✅ **Requirement 6**: Premium users do NOT use multi-bottle feature and continue using Premium Dashboard
✅ **Requirement 7**: OrderConfirmation/Login logic adds new bottles to currentUser.bottles array
✅ **Requirement 8**: All existing features preserved (hydration tracker, LED reminders, GPS location, order history, premium features)

## Files Modified

### 1. **SignUp.tsx** - Initialize Bottles Array on Account Creation

**Location**: [src/app/pages/SignUp.tsx](src/app/pages/SignUp.tsx#L37-L75)

**Changes**: Modified `handleCompleteOnboarding()` function to create a bottles array when user signs up with a purchase order.

```typescript
// Bottle structure created from order data:
const newBottle = {
  bottleId: `BTL${Math.floor(100000 + Math.random() * 900000)}`,
  name: `Bottle ${bottles.length + 1}`,
  specs: {
    size: "750ml", // for default orders
    material: "BPA-Free Plastic", // for default orders
    color: orderInfo.color
  },
  currentIntake: 0,
  dailyGoal: calculatedGoal
};
```

**Key Features**:
- Creates bottle with unique bottleId
- Extracts specs from completed order (plan-specific)
- Initializes currentIntake to 0
- Sets dailyGoal based on activity level

---

### 2. **Login.tsx** - Add Bottles on Existing Account

**Location**: [src/app/pages/Login.tsx](src/app/pages/Login.tsx)

**Changes**: Modified both pre-registered user and standard user login flows to add new bottles to existing accounts.

**For Pre-Registered Users** (Lines ~47-69):
```typescript
// Only add bottles for default users (tier !== 'premium')
if (preRegisteredUser.tier !== 'premium') {
  const newBottle = {
    bottleId: `BTL${Math.floor(100000 + Math.random() * 900000)}`,
    name: `Bottle ${updatedBottles.length + 1}`,
    specs: orderInfo.plan === "default" ? {...} : {...},
    currentIntake: 0,
    dailyGoal: preRegisteredUser.dailyGoal
  };
  updatedBottles.push(newBottle);
}
```

**For Standard Users** (Lines ~106-128):
- Same logic applied for users created through signup

**Key Features**:
- Only adds bottles for default users (premium exclusion)
- Handles both default and premium order types
- Updates localStorage immediately after adding bottle
- Removes completedOrder from localStorage after processing

---

### 3. **Dashboard.tsx** - Multi-Bottle UI Management

**Location**: [src/app/pages/Dashboard.tsx](src/app/pages/Dashboard.tsx)

#### Change 1: Conditional Sidebar Header (Lines ~178-181)
```typescript
{sidebarOpen && !isPremium && <h2 className="font-bold text-gray-900">My Bottles</h2>}
{sidebarOpen && isPremium && <h2 className="font-bold text-gray-900">Settings</h2>}
```

#### Change 2: Bottles List - Default Users Only (Lines ~183-220)
```typescript
{!isPremium && (
  <>
    {/* Dynamically render bottles */}
    {userData.bottles?.map((bottle: any, index: number) => (
      <button
        key={index}
        onClick={() => handleBottleSwitch(index)}
        className={...}
      >
        {sidebarOpen ? (
          <>
            <div className="flex items-center gap-2 mb-1">
              <Droplet className="w-4 h-4" />
              <span className="font-semibold text-sm"> Bottle {index + 1}</span>
            </div>
            <p className="text-xs opacity-80">{bottle.specs.size} • {bottle.specs.material}</p>
          </>
        ) : (
          <Droplet className="w-5 h-5 mx-auto" />
        )}
      </button>
    ))}
    
    {/* Buy Another Bottle Button - Default Users Only */}
    {sidebarOpen && (
      <Button
        onClick={handleBuyAnotherBottle}
        variant="outline"
        className="w-full border-2 border-cyan-600 text-cyan-600 hover:bg-cyan-50"
      >
        <ShoppingCart className="w-4 h-4 mr-2" />
        Buy Another Bottle
      </Button>
    )}
  </>
)}
```

**Key Features**:
- Bottles dynamically generated from `userData.bottles.map()`
- Bottle switching implemented via `handleBottleSwitch(index)`
- Shows bottle specs (size, material) in sidebar
- "Buy Another Bottle" button only for default users
- Premium users see "Settings" header instead of "My Bottles"

---

## Data Structure

### Bottle Object Structure
```typescript
{
  bottleId: string;        // Unique identifier (e.g., BTL123456)
  name: string;            // "Bottle 1", "Bottle 2", etc.
  specs: {
    size: string;          // "750ml" or "1000ml"
    material: string;      // "BPA-Free Plastic" or "Stainless Steel"
    color: string;         // Hex color or color name
    engraving?: string;    // Optional for premium bottles
  };
  currentIntake: number;   // Current hydration intake in ml
  dailyGoal: number;       // Daily hydration goal in ml
}
```

### User Bottles Array
```typescript
userData.bottles: Bottle[];  // Array of bottle objects
```

---

## User Flows

### Default User - Purchasing Second Bottle

1. **User on Dashboard** → Clicks "Buy Another Bottle"
2. **OrderDefault Page** → Selects color and quantity
3. **Checkout Page** → Enters shipping and payment info
4. **OrderConfirmation Page** → Confirms order (stored in localStorage)
5. **Redirect to Login/Signup**
6. **Login/Signup** → Creates account OR logs in
7. **During login**, new bottle is added to `userData.bottles`:
   - Generates unique bottleId
   - Names it "Bottle 2" (based on existing count)
   - Extracts specs from order
   - Sets currentIntake to 0
   - Uses user's dailyGoal
8. **Dashboard Reloads** → Shows both Bottle 1 and Bottle 2

### Premium User Experience

1. **Premium user visits Dashboard** → Sees "Settings" header (not "My Bottles")
2. **Sidebar shows only Hydration Modes** (Standard, Gym, Work, Sleep, Travel, Outdoor)
3. **No "Buy Another Bottle" button**
4. **No bottle switching interface**
5. **Can only have single bottle** (premium bottle from premium plan)
6. **Premium features preserved**: Biometric Security, Friend Leaderboard, Weekly Insights, LED reminders

---

## Existing Features Preserved

✅ **Hydration Tracker**
- Daily progress bar (updated for selected bottle)
- +250ml, +500ml, +750ml buttons
- Daily goal display

✅ **LED Reminders**
- Auto-reminds every 2 hours
- "I Drank Water" button in notification
- Test LED functionality

✅ **Bottle Location (GPS)**
- Shows last location ("Last seen: Home Office")
- Updates timestamp

✅ **Order History**
- Recent order displayed on sidebar
- Shows order date and delivery status
- Maintains complete order records

✅ **Premium Features**
- 6 Hydration Modes with custom goals
- Biometric Security panel
- Friend Leaderboard
- Weekly Insights

---

## Edge Cases Handled

1. **New user without purchase**: bottles array is empty, falls back to `currentIntake` at user level
2. **Premium user with purchase**: Bottle NOT added to bottles array (only added for default tier)
3. **Switching bottles**: `currentBottleIndex` state updates hydration data correctly
4. **Empty bottles array**: Dashboard shows "Upgrade to Premium" instead of bottle list
5. **Sidebar collapsed**: Shows only icons for each bottle

---

## Testing Checklist

- [x] Default user can view Bottle 1 in sidebar
- [x] Default user can click "Buy Another Bottle"
- [x] Premium user does NOT see bottles in sidebar
- [x] Premium user sees "Settings" header
- [x] Premium user does NOT see "Buy Another Bottle" button
- [x] Bottle switching updates hydration data correctly
- [x] All premium features remain visible and functional
- [x] LED reminders work for all bottles
- [x] Order history is preserved
- [x] New bottles get unique bottleIds
- [x] Bottle names increment correctly (Bottle 1, Bottle 2, etc.)

---

## Notes

- Bottles are stored in `userData.bottles` in localStorage
- Premium users cannot access multi-bottle feature (enforced in code)
- Bottle data persists across sessions via localStorage
- Each bottle maintains independent hydration intake tracking
- Sidebar toggles (collapse/expand) work seamlessly with bottles list
