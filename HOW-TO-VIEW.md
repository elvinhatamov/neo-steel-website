# How to View the NEO STEEL Website

This guide provides step-by-step instructions for viewing the NEO STEEL LTD website on your local machine.

## 📋 Prerequisites

Before you begin, make sure you have **Node.js** installed on your computer:

1. Check if Node.js is installed:
```bash
node --version
```

2. If you see a version number (v16.0.0 or higher), you're good to go!

3. If not, download and install Node.js from [nodejs.org](https://nodejs.org/) (use the LTS version)

## 🚀 Quick Start - 3 Simple Steps

### Step 1: Install Dependencies

Open your terminal/command prompt in the project directory and run:

```bash
npm install
```

This will download all the required packages. It only takes about 10-15 seconds!

**Expected Output:**
```
added 163 packages, and audited 163 packages in 4s
34 packages are looking for funding
found 0 vulnerabilities
```

### Step 2: Start the Development Server

Once the installation is complete, start the website:

```bash
npm run dev
```

**Expected Output:**
```
VITE v7.3.1  ready in 179 ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
```

### Step 3: Open in Browser

Open your web browser and go to:

**http://localhost:5173/**

🎉 **That's it!** The website is now running on your computer!

![Website Running Locally](https://github.com/user-attachments/assets/9ba844f1-7b90-41d5-b43f-c0ce8e981b01)

## 🔄 Making Changes

The great thing about the development server is that it **automatically reloads** when you make changes:

1. Edit any file in the `src/` folder
2. Save the file
3. Your browser will automatically refresh with the changes!

No need to restart the server.

## 🛑 Stopping the Server

To stop the development server, press:

- **Windows/Linux**: `Ctrl + C`
- **Mac**: `Cmd + C`

in the terminal where the server is running.

## 🌐 Viewing on Other Devices (Same Network)

Want to see the website on your phone or tablet?

1. Start the server with network access:
```bash
npm run dev -- --host
```

2. Look for the "Network" URL in the output (e.g., `http://192.168.1.5:5173/`)

3. Open that URL on any device connected to the same WiFi network

## 📦 Production Build

To create a production-ready version of the website:

```bash
npm run build
```

This creates an optimized `dist/` folder with all files ready to deploy.

To preview the production build locally:

```bash
npm run preview
```

## 🆘 Troubleshooting

### Port Already in Use

If you see "Port 5173 is already in use", either:
- Close the other application using that port
- Vite will automatically use the next available port (check the terminal output)

### Installation Errors

If `npm install` fails:

```bash
# Clear npm cache
npm cache clean --force

# Remove and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Module Not Found Errors

Make sure you're in the correct directory:
```bash
pwd  # Should show .../neo-steel-website
ls   # Should show package.json, src/, etc.
```

### Browser Shows Blank Page

1. Check the terminal for any errors
2. Try refreshing the browser (F5 or Cmd+R)
3. Clear browser cache and reload

## 💡 Pro Tips

1. **Keep the terminal open** while viewing the website - it shows helpful error messages
2. **Use browser developer tools** (F12) to inspect elements and see console messages
3. **The website is fully responsive** - try resizing your browser window!

## 🚀 Ready to Deploy?

Once you're happy with the website, check out the deployment options in the main [README.md](./README.md#-deployment) for:
- Netlify (easiest)
- Vercel
- GitHub Pages
- Any static hosting service

## 📞 Need Help?

If you run into any issues:
1. Check the main [README.md](./README.md) for more details
2. Look at the terminal output for error messages
3. Make sure you're using Node.js v16 or higher

---

**Enjoy exploring the NEO STEEL LTD website!** 🏗️✨
