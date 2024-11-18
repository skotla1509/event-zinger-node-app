# Event Zinger

Event Zinger is a dynamic and user-friendly ticketing platform inspired by **Ticketmaster**. It leverages Ticketmaster's API to list a wide variety of events and provide detailed information about them. Whether you're browsing as a guest or logged in as a user, manager, or administrator, Event Zinger offers a seamless and engaging experience for managing and purchasing event tickets.

---

## Features Overview

Event Zinger provides a rich set of features to cater to various user roles, ensuring a seamless experience for everyone:

1. **Guest Mode**:
   - Browse events by category (Concerts, Sports, Arts & Theatre, and Family) without registration.
   - Search for events using a keyword-based search bar.
   - View detailed event pages with descriptions, dates, locations, and related activity.

2. **Registered User Mode**:
   - Create an account or log in to personalize the platform experience.
   - Mark events as "interested" to save them for later viewing.
   - Buy tickets directly through Ticketmaster’s integration.
   - View profile information, including past purchases, comments, and interests.
   - Edit profile to update personal details.

3. **Manager Mode**:
   - Manage listed events, including creating and adding tickets for the events.
   - Track ticket sales and monitor event engagement statistics.

4. **Admin Mode**:
   - Oversee all platform users and events, with the ability to remove or modify entries.
   - Access detailed analytics and insights about the platform's performance (future scope).
   - Maintain platform security by managing user access and identifying inappropriate behavior (future scope).

---

## Screens Showcase

### 1. Home Page

**Route**: `/`  
The **Home Page** offers a welcoming introduction and showcases categories such as:
- **Concerts**
- **Sports**
- **Arts & Theatre**
- **Family**

**Guest Mode:** ![image](https://github.com/user-attachments/assets/2f6c0189-2e95-41d8-903f-775fa1fad08b)
**User Mode:** ![image](https://github.com/user-attachments/assets/8b2342ca-41bf-47ce-a788-fb1603ab4250)

---

### 2. Search Page

**Route**: `/search`  
The **Search Page** enables guests to:
- Search for events using the search bar.
- View event listings with:
  - Event names
  - Dates
  - Locations
  - A **Details** button to learn more about each event.

![image](https://github.com/user-attachments/assets/35b4ad31-6a25-47bd-a355-73ec47b98ca9)

---

### 3. Event Details Page

**Route**: `/details/:eventId`  
Clicking on an event directs guests to the **Event Details Page**, which includes:
- Event image and description.
- Detailed venue and date information.
- **Recent Activity**: Displays ticket sales and interactions related to the event.
- **People Interested**: Shows users who have expressed interest in the event.
- **Comments Section**: Allows guests to view comments posted by registered users, building a sense of community.

**Guest Mode:** ![image](https://github.com/user-attachments/assets/02a4cfa6-17d2-4ed7-a9e3-b81ab4d1449a)
**User Mode** ![image](https://github.com/user-attachments/assets/3ac806ea-2ce2-43a6-b9de-e9d7aa6a80c3)

---

### 4. Authentication Screens

**Login Page**  
  
**Route**: `/login`  

The **Login Page** allows users to:
- Enter their credentials (username and password).
- Recover access using the **Forgot Password** option.
- Navigate to the registration page if they’re new.
![image](https://github.com/user-attachments/assets/349ab3bd-fc67-4130-871f-0f8bd0cb84ca)

**Register Page**  

**Route**: `/register`  

The **Register Page** provides:
- A user-friendly form to create an account.
- Fields for entering personal details like name, gender, address, and more.
- A seamless transition to Login page.

![image](https://github.com/user-attachments/assets/aeba6426-3e3c-4c06-911d-7c3f8fa14739)

---

### 5. Profile Page

**Route**: `/profile` or `/profile/:userId`  

After logging in, users can access their **Profile Page**, which includes:
- **Recent Activity**: A history of ticket purchases and event interactions.
- **Events Interested**: A list of events the user has marked as "interested."
- **Comments Section**: Displays comments the user has made on events.
- **Edit Profile**: Allows users to update their personal details.

![image](https://github.com/user-attachments/assets/a3e46e95-9b48-4da0-a546-cafdebbdecff)
![image](https://github.com/user-attachments/assets/7fcab552-9415-4e9c-af63-0ff4d257c9a9)


---

### 6. Admin User

**Route**: `/users` 

Admins can:
- View and manage all registered users.
- Access platform-wide features.
- Delete inappropriate or inactive users.

![image](https://github.com/user-attachments/assets/2bc8d24f-839d-4139-8d14-871eb55ea699)





