# Timeseries Booking App Development

## Overview
We’re building a booking app for Harvard University that allows users to reserve facilities (like classrooms, restaurants, and sports areas) on an hourly basis. The app includes:
1. User registration and login.
2. Facility management.
3. Booking functionality, with potential enhancements.

## Development Steps

### 1. Initial Setup
- **Install Dependencies**: Set up an Express server with MySQL for the database.
  ```bash
  npm init -y
  npm install express mysql2 dotenv
  ```
- **Project Structure**: Organize files as follows:
  ```
  /project-root
  ├── app.js
  ├── config/
  │   └── db.js
  ├── controllers/
  ├── models/
  ├── routes/
  ├── .env
  └── package.json
  ```
- **Database Connection**: Configure MySQL database in `config/db.js`.

### 2. User Management
1. **User Model**:
   - Created a model for interacting with the `users` table.
2. **User Controller**:
   - Defined methods for registration and login.
3. **User Routes**:
   - Set up routes for `/register` and `/login`.
4. **Integration**:
   - Connected user routes in `app.js`.

#### Status: ✅ Completed
Tested successfully by registering a user.

### 3. Facility Management
1. **Facility Model**:
   - Created CRUD operations to manage facilities in `models/Facility.js`.
2. **Facility Controller**:
   - Defined endpoints to create, update, and retrieve facilities.
3. **Facility Routes**:
   - Set up endpoints under `/api/facilities`.
4. **Integration**:
   - Connected facility routes in `app.js`.

#### Status: ✅ Completed
Tested successfully by creating, updating, and retrieving facility data.

### 4. Booking Functionality
1. **Booking Model**:
   - Created CRUD methods to manage bookings in `models/Booking.js`.
2. **Booking Controller**:
   - Added endpoints to create a booking and retrieve bookings by facility or user.
3. **Booking Routes**:
   - Set up endpoints under `/api/bookings`.
4. **Integration**:
   - Connected booking routes in `app.js`.

#### Status: ✅ Completed
Tested successfully by creating and retrieving a booking. Confirmed that the data is returned correctly.

---

## Next Steps

### 5. Conflict Checks
Implement checks to prevent double-booking of facilities by:
1. Modifying the `createBooking` method in `Booking` model to check for overlapping times.
2. Returning an error if a booking conflicts with an existing one.

### 6. User-friendly Error Handling
Enhance error messages and responses for a better user experience.

### 7. Additional Features
1. **Cancellation**:
   - Allow users to cancel their bookings by updating a `status` field.
2. **Booking Statuses**:
   - Implement statuses like "confirmed," "pending," and "canceled" for more flexibility.
3. **Report Generation**:
   - Develop reports that summarize bookings over selected timeframes or by specific facilities/users.

