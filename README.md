## Homey: a platform to connect homeopaths with patients. Built with the MERN stack & Redux.

## Features

- Full featured appointments section
- Homeopath reviews and ratings
- Appointment confirmation guide carousel
- Pagination on homescreen for organizing homeopaths
- Homeopath search feature
- User profile with appointments
- Admin Homeopaths management
- Admin user management
- Admin appointments details page
- Mark appointment as completed option
- Checkout process (step by stepappointment confirmation)
- Desktop as well as mobile optimized



## Usage

### ES Modules in Node

When importing a file (not a package), be sure to add .js at the end or you will get a "module not found" error

You can also install and setup Babel if you would like

### Env Variables

Create a .env file in then root and add the following

```
NODE_ENV = development
PORT = 5000
MONGO_URI = your mongodb uri
JWT_SECRET = 'abc123'
PAYPAL_CLIENT_ID = your paypal client id (needed for functionality of the code)
```

### Install Dependencies (frontend & backend)

```
npm install
cd frontend
npm install
```

### Run

```
# Run frontend (:3000) & backend (:5000)
npm run dev

# Run backend only
npm run server
```

## Build & Deploy

```
# Create frontend prod build
cd frontend
npm run build
```

There is a Heroku postbuild script, so if you push to Heroku, no need to build manually for deployment to Heroku

### Seed Database

You can use the following commands to seed the database with some sample users and products as well as destroy all data

```
# Import data
npm run data:import

# Destroy data
npm run data:destroy
```

```

