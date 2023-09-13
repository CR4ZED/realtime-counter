
# Realtime Counter

A realtime counter application made with react and socket.io


## Tech Stack

**Client:** React

**Server:** Node, Express, socket.io

The state of the count is stored in the localstorage so that when a user closes and reopens the browser the value of count is initialized to the previous state. 

Websocket is used to make realtime updates to the count value

## Run Locally

Clone the project

```bash
  git clone https://github.com/CR4ZED/realtime-counter.git
```

Go to the server directory

```bash
  cd server
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

Go to the client directory

```bash
  cd client
```

Install dependencies

```bash
  npm install
```

Start the client side

```bash
  npm run dev
```

In the browser open http://localhost:5173