What has been implemented

I have developed a functional Product Listing Page that allows users to browse and filter products dynamically. The implementation includes:
 - Product list page that is showing specific category products.

 - A responsive product grid that adapts to different screen sizes.

 - A dynamic filtering for categories such as Colors and Sizes or Ascending/Descending sorting.

 - A clean, user-friendly interface based on the provided design specifications.

Which technologies were used

The project was built using a modern frontend stack to ensure performance and scalability:

 - React 19: Used for building the component-based user interface and managing component state.

 - React Router 7: Implemented to handle navigation within the application.

 - Bootstrap 5: Utilized for the core layout, grid system, and responsive design elements.

 - Vite: Used as the build tool and development server for fast HMR (Hot Module Replacement).

 - ESLint: Integrated to maintain code quality and follow best practices.

How the solution was achieved

The solution was structured by breaking the UI into reusable React components (e.g., Filter, ProductTile, Sorting). I used React's hooks to save and manipulate data. By using Object.values(filters).every(...) logic, I ensured that the product list only filters when specific criteria are selected. For the layout, I used Bootstrap’s container-row-column architecture and flexbox to ensure the sidebar and product grid aligned correctly across desktop and mobile views.

Any challenges encountered during development

One of the primary challenges was managing the Bootstrap grid hierarchy. While Bootstrap provides a powerful layout system, nesting rows and columns to achieve a specific sidebar-to-content ratio required careful management of padding and "gutters."