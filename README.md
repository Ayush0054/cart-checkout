# Checkout Experience Project

### Tech Stack

- **NextJS :**
- **Zustand:**
- **NextUI :**

#### Design and Functionality

- **Checkout Page:**

  - Fetches data from the provided API and displays cart items, order summary, and a call-to-action button.

- **Payment Options Page:**

  - Fetches payment methods from the order-details API.
  - Design visually engaging page allowing users to choose a preferred payment method.
  - Implements form validation for payment information.

- **Order Confirmation Page:**
  - Displays order details, selected payment method, and a status message indicating transaction success, failure, or pending.

### Challenges Faced

1. **State Managment**

### Design Choices

- **theme**
  Purple ,
  White with purple tint
- **Typography**
  Gray ,
  purple ,
  font semibold,normal
- **Component used**
  Nextui card ,
  Nextui shadowScroll ,
  Nextui Input ,
  Nextui Button

**Button**

- ![Alt text](<screenshots/Screenshot from 2023-12-21 18-55-33.png>)
- ![Alt text](<screenshots/Screenshot from 2023-12-21 18-56-02.png>)

---

## Project Folder Structure

- **project**
  - _app_
    - Checkout
      - Page.tsx
    - Payement
      - Page.tsx
    - Confirmation
      - Page.tsx
    - Components
      - Navbar
      - Breadcrumbs
      - checkout-page
        - components
      - payment-page
        - components
    - Store
      - Zustand store

---

## Screenshots

![Alt text](<screenshots/Screenshot from 2023-12-21 23-11-41.png>)
![Alt text](<screenshots/Screenshot from 2023-12-21 23-11-51.png>)
![Alt text](<screenshots/Screenshot from 2023-12-21 23-11-55.png>)
![Alt text](<screenshots/Screenshot from 2023-12-21 23-12-08.png>)
![Alt text](<screenshots/Screenshot from 2023-12-21 23-12-39.png>)

---

## Getting Started

To run the project locally, follow these steps:

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Run the development server with `npm run dev`.
