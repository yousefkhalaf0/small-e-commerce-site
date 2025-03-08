# Angular Products App

This is a small Angular application developed as part of an Angular course at ITI. The app demonstrates key Angular concepts such as routing, guards, template-driven forms, reactive forms, and component-based architecture. It also integrates Bootstrap for styling and FontAwesome for icons. The product data is fetched from a local JSON file.

## Features

- **Product Listing**: Displays a list of products fetched from a JSON file.
- **Product Details**: Shows detailed information about a selected product.
- **User Authentication**: Includes login and registration forms (template-driven and reactive forms).
- **Shopping Cart**: Allows authenticated users to view their cart (protected by an auth guard).
- **404 Page**: Handles unknown routes with a custom "Not Found" page.
- **Responsive Design**: Built using Bootstrap for a responsive and modern UI.
- **Icons**: Utilizes FontAwesome for icons.
- **JSON Data**: Product data is loaded from a local JSON file.

## Technologies Used

- **Angular**: Frontend framework.
- **Bootstrap**: CSS framework for styling.
- **FontAwesome**: Icon library.
- **Angular Router**: For navigation and routing.
- **Angular Forms**: For template-driven and reactive forms.
- **Angular Guards**: For route protection (auth guard).
- **JSON**: Local JSON file for product data.

## Project Structure

```
src/
├── app/
│   ├── products-app/
│   │   ├── auth/
│   │   │   ├── login/
│   │   │   └── register/
│   │   ├── cart/
│   │   ├── navbar/
│   │   ├── not-found-page/
│   │   ├── product-details/
│   │   └── products-list/
│   ├── guards/
│   │   └── auth.guard.ts
│   ├── app.component.ts
│   ├── app.component.html
│   ├── app.component.css
│   ├── app.routes.ts
│   ├── app.config.ts
│   └── main.ts
├── assets/
│   └── data/
│       └── products.json  // JSON file containing product data
├── styles.css
└── index.html
```

## Setup Instructions

### Prerequisites

- Node.js (v16 or higher)
- Angular CLI (v15 or higher)
- Bootstrap and FontAwesome (already included in the project)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/angular-products-app.git
   ```
2. Navigate to the project directory:
   ```bash
   cd angular-products-app
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

1. Start the development server:
   ```bash
   ng serve
   ```
2. Open your browser and navigate to `http://localhost:4200`.

### Building the Application

To build the project for production, run:
```bash
ng build --configuration production
```

## Key Learnings

- **Routing**: Implemented Angular Router for navigation between components.
- **Guards**: Used an auth guard to protect the cart route.
- **Forms**: Created both template-driven and reactive forms for user authentication.
- **Styling**: Integrated Bootstrap and FontAwesome for a polished UI.
- **Component Architecture**: Organized the app into reusable and modular components.
- **JSON Data**: Loaded and displayed product data from a local JSON file.

## JSON Data Example

The `products.json` file (located in `src/app/assets/`) contains the product data in the following format:

```json
[
  {
    "id": 1,
    "name": "Product 1",
    "price": 19.99,
    "description": "This is a description for Product 1.",
    "image": "assets/images/product1.jpg"
  },
  {
    "id": 2,
    "name": "Product 2",
    "price": 29.99,
    "description": "This is a description for Product 2.",
    "image": "assets/images/product2.jpg"
  }
]
```

## Future Improvements

- Implement a backend API for product data and user authentication.
- Add functionality to add/remove products from the cart.
- Enhance the UI with animations and transitions.
- Write unit and integration tests.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
