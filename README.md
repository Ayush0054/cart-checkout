# Checkout Experience Project

## Overview

This project focuses on building a responsive and user-friendly checkout experience using NextJS, Zustand for state management, and incorporating a White Labeling feature. The checkout process consists of three main steps: Checkout Page, Payment Options Page, and Order Confirmation Page.

### Tech Stack

- **NextJS (ReactJS):** Used for building a dynamic and efficient frontend.
- **Zustand:** Employed for state management within the application.

### Must-Haves

#### Design and Functionality

- **Checkout Page:**

  - Fetches data from the provided API and displays cart items, order summary, and a call-to-action button.
  - Handles scenarios where the API might return an empty product list.
  - Implements local API caching when necessary.

- **Payment Options Page:**

  - Fetches payment methods from the order-details API.
  - Design visually engaging page allowing users to choose a preferred payment method.
  - Implements form validation for payment information.

- **Order Confirmation Page:**
  - Displays order details, selected payment method, and a status message indicating transaction success, failure, or pending.
  - Randomizes the order status for demonstration purposes.

#### Visual Design

- Ensures a visually appealing design aligned with modern UI/UX principles.
- Implements a White Labeling feature allowing for dynamic changes in the application's theme based on brand identity.

#### Responsiveness and User Experience

- Guarantees the application is responsive and works well on various screen sizes.
- Implements smooth transitions and animations for a dynamic user experience.
- Ensures an intuitive and easy-to-navigate flow from checkout to payment selection and confirmation.

### Challenges Faced

1. **Caching Implementation:**
   Implementing local API caching posed a challenge, especially handling scenarios where cached data needed to be used while fetching fresh data in the background.

2. **White Labeling Feature:**
   Integrating the White Labeling feature required careful consideration of the dynamic theming and styling changes, ensuring a seamless transition between different brand identities.

3. **Randomized Order Status:**
   Simulating a randomized order status for the Order Confirmation Page involved creating a robust mechanism to mimic various transaction outcomes.

### Design Choices

- **Zustand for State Management:**
  Zustand was chosen for its simplicity and flexibility in managing state within the application. Its lightweight nature made it a suitable choice for a smaller project like this.

- **NextJS for Dynamic Rendering:**
  NextJS was selected to leverage its server-side rendering capabilities, ensuring efficient and dynamic content delivery during the checkout process.

---

## Getting Started

To run the project locally, follow these steps:

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Run the development server with `npm run dev`.

Feel free to explore the codebase, and contributions are always welcome!
