# Trade Calc

A minimalist Full-Stack cryptocurrency position and averaging calculator built to streamline trading strategies.

## Features

- **Position & DCA Calculation:** Instant computation of asset amounts, entry points, and averaging logic.
- **Take-Profit & Fee Tracking:** Automatic target price calculation factoring in exchange fees (0.1%).
- **Data Persistence:** Automated saving of trading strategies to a remote database via custom backend.
- **Strategy Management:** Seamlessly fetch, display, and delete saved trading strategies in real-time.
- **Strict Validations:** Bulletproof form handlers ensuring zero mathematical edge-case errors.

## Tech Stack

- **Frontend:** React, TypeScript, Tailwind CSS, Vite
- **Backend & DB:** Node.js, Express.js, PostgreSQL / Supabase