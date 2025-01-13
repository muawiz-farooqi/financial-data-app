# Financial Data App

## Prerequisites

* Node.js (version 14.0 or later)
* Financial Modeling Prep API key. You can obtain one from [Financial Modeling Prep](https://financialmodelingprep.com/developer/docs/)

## Running the Project Locally

To run this project locally, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/muawiz-farooqi/financial-data-app
   cd financial-data-app
   ```

2. Install the dependencies:
   ```
   npm install
   ```

3. Create a `.env.local` file in the root directory of the project and add your Financial Modeling Prep API key:
   ```
   NEXT_PUBLIC_FDA_API_KEY=<your_api_key>
   ```
   Replace `your_api_key` with your actual API key.

4. Start the development server:
   ```
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:3000` to view the app.

## Deployed App

You can view the deployed version of this app at [here](https://financial-data-app-g1wa.vercel.app/)

<!-- 
## Additional Information

- This project uses Next.js and React for the frontend.
- Styling is implemented with Tailwind CSS.
- The app fetches data from the Financial Modeling Prep API.
- Users can filter data by date range, revenue, and net income.
- The table can be sorted by clicking on column headers.
-->

## License

[MIT](https://choosealicense.com/licenses/mit/)