// PM2 process file for the optional progress-tracking API (FastAPI + SQLite).
// Run from the repository root:  pm2 start ecosystem.config.js
// Override locations with env vars: MUHENDISAL_VENV (virtualenv dir), MUHENDISAL_LOG_DIR.
const path = require("path");

const root = __dirname;
const venv = process.env.MUHENDISAL_VENV || path.join(root, "venv");
const logDir = process.env.MUHENDISAL_LOG_DIR || path.join(root, "logs");

module.exports = {
  apps: [
    {
      name: "muhendisal-api",
      script: path.join(venv, "bin", "uvicorn"),
      args: "backend.main:app --host 127.0.0.1 --port 9100",
      cwd: root,
      interpreter: "none",
      autorestart: true,
      watch: false,
      max_memory_restart: "300M",
      env: {
        PYTHONUNBUFFERED: "1"
      },
      out_file: path.join(logDir, "muhendisal-api.log"),
      error_file: path.join(logDir, "muhendisal-api-err.log"),
      merge_logs: true,
      time: true
    }
  ]
};
