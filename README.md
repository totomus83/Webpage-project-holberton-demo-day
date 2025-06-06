Architecture of the project:
my-app/
│
├── client/                      # React Frontend
│   ├── public/
│   └── src/
│       ├── assets/
│       ├── components/
│       ├── pages/
│       ├── services/
│       ├── utils/
│       ├── App.jsx
│       ├── index.js
│       └── config.js
│
├── server/                      # Node.js Backend
│   ├── controllers/           # Request logic
│   │   ├── NewsletterController.js
│   │   └── HealthController.js
│   │
│   ├── services/              # External API & business logic
│   │   ├── CaptchaService.js
│   │   └── EmailService.js
│   │
│   ├── routes/                # Express routers
│   │   ├── newsletter.js
│   │   ├── security.js
│   │   └── health.js
│   │
│   ├── models/                # SQL models & queries
│   │   └── NewsletterModel.js
│   │
│   ├── config/                # Config files
│   │   ├── db.js              # DB connection logic
│   │   ├── sendgrid.js
│   │   └── recaptcha.js
│   │
│   ├── migrations/            # SQL schema migrations (if using Knex/Sequelize)
│   │   └── 001_create_newsletter_table.sql
│   │
│   ├── middleware/            # Middleware (e.g., validation)
│   │   └── validateEmail.js
│   │
│   ├── app.js                 # Express app setup
│   └── server.js              # Entry point
│
├── db/                         # Optional for raw SQL files or seeders
│   └── seed.sql
│
├── .env                        # Contains DB_URL, API keys, etc.
├── .gitignore
├── package.json
└── README.md
