# Firebase Realtime Database Rules Fix

## Problem
Your database shows `null` - data is not being stored because security rules are blocking writes.

## Solution

### Step 1: Go to Firebase Console
1. Open: https://console.firebase.google.com
2. Select your project: **hellbound-mc**
3. Click on **Realtime Database** in the left sidebar

### Step 2: Go to Rules Tab
1. Click the **Rules** tab at the top
2. Replace all rules with the following:

```json
{
  "rules": {
    "contacts": {
      ".read": true,
      ".write": true,
      "$uid": {
        ".validate": "newData.hasChildren(['name', 'email', 'message', 'timestamp'])",
        "name": {
          ".validate": "newData.isString() && newData.val().length > 0"
        },
        "email": {
          ".validate": "newData.isString() && newData.val().length > 0"
        },
        "message": {
          ".validate": "newData.isString() && newData.val().length > 0"
        },
        "timestamp": {
          ".validate": "newData.isString()"
        }
      }
    }
  }
}
```

### Step 3: Publish Rules
1. Click **Publish** button
2. Confirm the popup

### Step 4: Test
1. Go back to your contact.html page
2. Fill out the form and submit
3. Check your database - data should now appear!

## Alternative: Permissive Rules (For Testing Only)
If you want to quickly test without validation:

```json
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
```

**Warning**: This allows anyone to read/write any data. Use only for development/testing.

## Detailed Steps with Screenshots

### Finding the Rules Tab:
1. Go to Firebase Console
2. Select "hellbound-mc" project
3. Click "Realtime Database"
4. You'll see tabs: **Data | Rules | Backups | Usage | Extensions**
5. Click **Rules**
6. The rules editor will open
7. Clear existing content and paste the JSON above
8. Click **Publish**

---

After publishing the rules, refresh your contact page and try submitting the form again. The data should now save to your Realtime Database!
