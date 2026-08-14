# Genetic Test Report System with AI Eye Cancer Prediction

![Status](https://img.shields.io/badge/Status-Active-brightgreen)
![Version](https://img.shields.io/badge/Version-1.0.0-blue)
![License](https://img.shields.io/badge/License-MIT-green)
![Node.js](https://img.shields.io/badge/Node.js-18%2B-brightgreen)
![Python](https://img.shields.io/badge/Python-3.9%2B-blue)
![React](https://img.shields.io/badge/React-18%2B-61DAFB?logo=react)

---

##  Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [ML Model Details](#ml-model-details)
- [Project Structure](#project-structure)
- [Database Schema](#database-schema)
- [Deployment](#deployment)
- [Testing](#testing)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)
- [Authors](#authors)

---

##  Overview

**Genetic Test Report System** is an enterprise-grade platform for managing genetic test reports with integrated AI-powered **Eye Cancer prediction**. The system combines a modern MERN stack frontend with a Python/Flask microservices backend for ML predictions, providing healthcare professionals and diagnostic labs with accurate, interpretable cancer risk assessments based on genetic markers.

### Key Capabilities
-  Genetic test data management and visualization
-  AI-powered Eye Cancer risk prediction (Random Forest ML model)
-  JWT-based authentication and role-based access control
-  Advanced filtering, sorting, and analytics dashboard
-  Cloud-ready microservices architecture
-  Responsive, mobile-friendly interface

---

##  Features

### Core Features
- **Secure Doctor/Hospital Registration & Authentication**
  - JWT token-based authentication
  - Secure password hashing (bcrypt)
  - Email verification & password reset

- **Genetic Test Management**
  - Create, read, update, and delete test reports
  - Support for genetic markers and lab parameters
  - Timestamp tracking and audit logs
  - File attachments (lab reports, images)

- **AI Prediction Engine**
  - Real-time Eye Cancer risk prediction
  - Confidence score and risk classification
  - Feature importance analysis
  - Historical prediction tracking

- **Doctor Profile Management**
  - Avatar upload with multer integration
  - Professional profile customization
  - License and certification tracking
  - Patient association

- **Dashboard & Analytics**
  - Patient demographics overview
  - Prediction trend analysis
  - Risk distribution charts
  - Report export functionality

- **Security & Compliance**
  - HIPAA-compliant data handling
  - Rate limiting on sensitive endpoints
  - Input validation and sanitization
  - Comprehensive error logging

---

##  Tech Stack

### Frontend
```
React 18+
Redux Toolkit (State Management)
Tailwind CSS / Custom Dark Navy/Cyan Theme
Axios (HTTP Client)
React Router (Routing)
Chart.js / Recharts (Visualizations)
Multer (File Upload)

```

### Backend (Node.js)
```
Express.js
MongoDB + Mongoose ODM
JWT (jsonwebtoken)
Bcrypt (Password Hashing)
Axios (API Communication)
Multer (File Upload)
Express Rate Limiter

```

### ML Microservice (Python)
```
Python 3.9+
Flask (REST API Framework)
Scikit-learn (Random Forest Model)
Pandas (Data Processing)
NumPy (Numerical Computation)
Joblib (Model Serialization)

```

### DevOps & Deployment
```
Docker & Docker Compose
GitHub Actions (CI/CD)
AWS EC2 / Vercel
MongoDB Atlas
nginx (Reverse Proxy)

```

---

##  Architecture

### System Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                     React Frontend (Vercel)                     │
│  (Doctor Dashboard, Patient List, Report Form, Analytics)       │
└──────────────────────────┬──────────────────────────────────────┘
                           │ HTTPS/API Calls
                           ↓
┌─────────────────────────────────────────────────────────────────┐
│                   API Gateway (nginx)                           │
│              Port 5000 (Load Balancer) (Feature Plane)                         │
└──────────────────────────┬──────────────────────────────────────┘
                           │
          ┌────────────────┼────────────────┐
          ↓                ↓                ↓
    ┌──────────────┐ ┌──────────────┐ ┌──────────────────────┐
    │   Node.js    │ │   Node.js    │ │  Flask Microservice  │
    │   Express    │ │   Express    │ │  (ML Prediction)     │
    │  (Auth SVC)  │ │ (Report SVC) │ │   Port 5000          │
    │  Port 3000   │ │  Port 3000   │ │                      │
    └──────┬───────┘ └──────┬───────┘ └──────┬───────────────┘
           │                │                │
           └────────────────┼────────────────┘
                            │
                   ┌────────↓────────┐
                   │  MongoDB Atlas  │
                   │  (Data Store)   │
                   └─────────────────┘
```

### Microservices Communication
```
Frontend → Node.js API (JWT Auth, CRUD)
         ↓
Frontend → Flask Service (AI Predictions)
         ↓
Both → MongoDB (Data Persistence)
```

---

##  Prerequisites

### System Requirements
- **Node.js**: v18.0 or higher
- **Python**: 3.9 or higher
- **MongoDB**: 5.0+ (Atlas or Local)
- **npm** or **yarn**: Latesdt version
- **Git**: 2.25+
- **Docker** (optional, for containerization)

### Environment & Accounts
- MongoDB Atlas account (or local MongoDB instance)
- GitHub account (for version control)
- Vercel account (for frontend deployment)
- AWS/GCP account (for backend deployment, optional)

---

##  Installation

### 1. Clone Repository

```bash
git clone https://github.com/qwopiye/genetic-test-report.git
cd genetic-test-report
```

### 2. Backend Setup (Node.js Express)

```bash
# Navigate to server directory
cd server

# Install dependencies
npm install

# Create .env file
cat > .env << 'EOF'
PORT=3000
NODE_ENV=development
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/genetic-test-db
JWT_SECRET=your_jwt_secret_key_here
JWT_EXPIRY=7d
BCRYPT_ROUNDS=10
FLASK_SERVICE_URL=http://localhost:3000
RATE_LIMIT_WINDOW=15
RATE_LIMIT_MAX=100
EMAIL_SERVICE=gmail
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
EOF

# Start server
npm run dev
# Server runs on http://localhost:3000
```

### 3. ML Microservice Setup (Flask Python)

```bash
# Navigate to ML directory
cd ../ml-service

# Create virtual environment
python3 -m venv predict
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Create .env file
cat > .env << 'EOF'
FLASK_ENV=development
FLASK_PORT=5000
MODEL_PATH=./models/eye_cancer_rf_model.pkl
SCALER_PATH=./models/feature_scaler.pkl
LOG_LEVEL=INFO
EOF

# Start Flask service
python app.py
# Service runs on http://localhost:5000
```

### 4. Frontend Setup (React)

```bash
# Navigate to client directory
cd ../client

# Install dependencies
npm install

# Create .env file
cat > .env << 'EOF'
REACT_APP_API_URL=http://localhost:5173/api
REACT_APP_ML_SERVICE_URL=http://localhost:5173/api
REACT_APP_VERSION=1.0.0
EOF

# Start development server
npm run dev
# Frontend runs on http://localhost:5173
```

### 5. Docker Setup (Optional)

```bash
cd genetic-test-report

# Build and run all services
docker-compose up --build

# Services will start on:
# - Frontend: http://localhost5173:
# - Backend: http://localhost:3000
# - Flask ML: http://localhost:5000
```

---

## ⚙️ Configuration

### Environment Variables Reference

#### Backend (.env)
| Variable | Type | Default | Description |
|----------|------|---------|-------------|
| `PORT` | number | 3000 | Express server port |
| `MONGODB_URI` | string | - | MongoDB connection string |
| `JWT_SECRET` | string | - | Secret key for JWT signing |
| `JWT_EXPIRY` | string | 7d | Token expiration time |
| `BCRYPT_ROUNDS` | number | 10 | Password hashing rounds |
| `FLASK_SERVICE_URL` | string | http://localhost:3000 | ML service endpoint |
| `RATE_LIMIT_WINDOW` | number | 5 | Rate limit window (minutes) |
| `RATE_LIMIT_MAX` | number | 100 | Max requests per window |

#### Flask ML Service (.env)
| Variable | Type | Default | Description |
|----------|------|---------|-------------|
| `FLASK_ENV` | string | development | Environment mode |
| `FLASK_PORT` | number | 5000 | Flask server port |
| `MODEL_PATH` | string | ./models/model.pkl | Path to trained model |
| `SCALER_PATH` | string | ./models/scaler.pkl | Path to feature scaler |
| `LOG_LEVEL` | string | INFO | Logging level |

---

##  Usage

### Doctor Authentication

```bash
# Register new doctor
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Dr. Ahmed Khan",
    "email": "ahmed@hospital.com",
    "password": "SecurePass123",
    "licenseNumber": "MED-BD-2024-001",
    "specialization": "Ophthalmology"
  }'

# Login
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "ahmed@hospital.com",
    "password": "SecurePass123"
  }'
# Returns: { token: "eyJhbGc..." }
```

### Create Genetic Test Report

```bash
curl -X POST http://localhost:3000/api/reports \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -d '{
    "patientName": "Md. Rayhan Ahmed",
    "patientAge": 45,
    "geneticMarkers": {
      "PTEN": "mutated",
      "TP53": "wild_type",
      "BRCA1": "wild_type"
    },
    "labParameters": {
      "hemoglobin": 14.5,
      "whiteBloodCells": 7200,
      "platelets": 250000
    }
  }'
```

### Get AI Prediction

```bash
curl -X POST http://localhost:5000/api/predict/eye-cancer \
  -H "Content-Type: application/json" \
  -d '{
    "genetic_markers": ["PTEN_mutated", "TP53_wt"],
    "age": 45,
    "family_history": true,
    "environmental_exposure": false
  }'

# Response:
# {
#   "prediction": "high_risk",
#   "confidence": 0.87,
#   "risk_score": 0.856,
#   "feature_importance": {
#     "PTEN_mutation": 0.31,
#     "age": 0.25,
#     "family_history": 0.22
#   }
# }
```

---

##  API Documentation

### Authentication Endpoints

#### POST `/api/auth/register`
Register new doctor account
- **Request Body**: `{ name, email, password, licenseNumber, specialization }`
- **Response**: `{ message, userId, token }`

#### POST `/api/auth/login`
Doctor login
- **Request Body**: `{ email, password }`
- **Response**: `{ token, doctor: { id, name, email } }`

#### GET `/api/auth/me`
Get current doctor info (Protected)
- **Headers**: `Authorization: Bearer TOKEN`
- **Response**: `{ id, name, email, avatar, licenseNumber }`

### Report Management

#### POST `/api/reports`
Create new test report (Protected)
- **Request Body**: `{ patientName, patientAge, geneticMarkers, labParameters }`
- **Response**: `{ reportId, createdAt, status }`

#### GET `/api/reports`
Fetch all reports (Protected)
- **Query Params**: `?page=1&limit=10&sort=-createdAt`
- **Response**: `{ reports: [...], total, page, pages }`

#### GET `/api/reports/:id`
Get single report (Protected)
- **Response**: Report object with all fields

#### PUT `/api/reports/:id`
Update report (Protected)
- **Response**: Updated report object

#### DELETE `/api/reports/:id`
Delete report (Protected)
- **Response**: `{ message: "Report deleted" }`

### Prediction Endpoint

#### POST `/api/predict/eye-cancer`
Get cancer risk prediction (Flask)
- **Request Body**: Genetic markers and lab parameters
- **Response**: Prediction with confidence and risk score

---

##  ML Model Details

### Eye Cancer Prediction Model

**Model Type**: Random Forest Classifier  
**Training Dataset**: 5,000 synthetic genetic test records  
**Features**: 28 genetic markers + 8 lab parameters + demographic data  
**Accuracy**: 89.2% | Precision: 0.87 | Recall: 0.91 | F1-Score: 0.89

### Feature Set
```
Genetic Markers (Binary encoded):
- PTEN mutation status
- TP53 mutation status
- BRCA1/2 mutations
- RB1 mutations
- ... (25 more markers)

Lab Parameters (Continuous):
- Hemoglobin level
- White blood cell count
- Platelet count
- ... (5 more)

Demographics:
- Age
- Family history
- Environmental exposure
```

### Model Serialization
```
Model saved as: ml-service/models/eye_cancer_rf_model.pkl
Scaler saved as: ml-service/models/feature_scaler.pkl
Encoding saved as: ml-service/models/feature_encoder.pkl
```

### Training Pipeline
```python
# Preprocessing
data → scaling → encoding → train/test split (70/30)

# Training
RandomForest(n_estimators=200, max_depth=15, random_state=42)

# Evaluation
Cross-validation (5-fold) → Hyperparameter tuning → Final validation
```

---

##  Project Structure

```
genetic-test-report/
├── client/                          # React Frontend
│   ├── src/
│   │   ├── components/
│   │   │   ├── Dashboard.jsx
│   │   │   ├── ReportForm.jsx
│   │   │   ├── ReportList.jsx
│   │   │   ├── Profile.jsx
│   │   │   └── PredictionResult.jsx
│   │   ├── pages/
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── Home.jsx
│   │   │   └── NotFound.jsx
│   │   ├── hooks/
│   │   │   ├── useAuth.js
│   │   │   └── useFetch.js
│   │   ├── context/
│   │   │   └── AuthContext.js
│   │   ├── styles/
│   │   │   └── tailwind.css
│   │   ├── utils/
│   │   │   ├── api.js
│   │   │   └── validators.js
│   │   └── App.jsx
│   ├── public/
│   ├── .env.example
│   ├── package.json
│   └── README.md
│
├── server/                          # Node.js Express Backend
│   ├── src/
│   │   ├── controllers/
│   │   │   ├── authController.js
│   │   │   ├── reportController.js
│   │   │   └── doctorController.js
│   │   ├── models/
│   │   │   ├── Doctor.js
│   │   │   ├── Report.js
│   │   │   ├── Patient.js
│   │   │   └── Prediction.js
│   │   ├── routes/
│   │   │   ├── authRoutes.js
│   │   │   ├── reportRoutes.js
│   │   │   └── doctorRoutes.js
│   │   ├── middleware/
│   │   │   ├── auth.js
│   │   │   ├── errorHandler.js
│   │   │   └── rateLimit.js
│   │   ├── utils/
│   │   │   ├── validators.js
│   │   │   ├── logger.js
│   │   │   └── constants.js
│   │   ├── config/
│   │   │   └── database.js
│   │   └── app.js
│   ├── uploads/                     # Multer uploads
│   ├── logs/                        # Error logs
│   ├── .env.example
│   ├── package.json
│   ├── Dockerfile
│   └── README.md
│
├── ml-service/                      # Python Flask ML Microservice
│   ├── app.py                       # Flask app entry point
│   ├── models/
│   │   ├── eye_cancer_rf_model.pkl
│   │   ├── feature_scaler.pkl
│   │   └── feature_encoder.pkl
│   ├── routes/
│   │   ├── predict.py
│   │   └── health.py
│   ├── utils/
│   │   ├── preprocessing.py
│   │   ├── model_loader.py
│   │   └── logger.py
│   ├── training/
│   │   ├── train_model.py
│   │   ├── dataset_generator.py
│   │   └── evaluation.py
│   ├── requirements.txt
│   ├── .env.example
│   ├── Dockerfile
│   └── README.md
│
├── docker-compose.yml
├── .github/
│   └── workflows/
│       ├── backend-ci.yml
│       ├── ml-service-ci.yml
│       └── frontend-deploy.yml
│
├── .gitignore
├── LICENSE
└── README.md (this file)
```

---

##  Database Schema

### Doctor Model
```javascript
{
  _id: ObjectId,
  name: String,
  email: String (unique),
  password: String (hashed),
  licenseNumber: String,
  specialization: String,
  avatar: String (file path),
  hospitalName: String,
  phoneNumber: String,
  bio: String,
  createdAt: Timestamp,
  updatedAt: Timestamp,
  isVerified: Boolean,
  lastLogin: Timestamp
}
```

### Report Model
```javascript
{
  _id: ObjectId,
  doctorId: ObjectId (ref: Doctor),
  patientName: String,
  patientAge: Number,
  patientId: String (unique patient identifier),
  geneticMarkers: {
    PTEN: String,
    TP53: String,
    BRCA1: String,
    // ... 25 more markers
  },
  labParameters: {
    hemoglobin: Number,
    whiteBloodCells: Number,
    platelets: Number,
    // ... 5 more
  },
  notes: String,
  attachments: [String] (file paths),
  status: String (enum: 'draft', 'submitted', 'analyzed'),
  createdAt: Timestamp,
  updatedAt: Timestamp
}
```

### Prediction Model
```javascript
{
  _id: ObjectId,
  reportId: ObjectId (ref: Report),
  predictedAt: Timestamp,
  prediction: String (enum: 'low_risk', 'medium_risk', 'high_risk'),
  confidenceScore: Number (0-1),
  riskScore: Number (0-1),
  featureImportance: Object,
  modelVersion: String,
  processingTime: Number (milliseconds)
}
```

---

##  Deployment

### Option 1: Docker Compose (Local/VPS)

```bash
# Build all services
docker-compose build

# Start all services
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down
```

### Option 2: Vercel (Frontend) + AWS/Railway (Backend)

#### Frontend Deployment (Vercel)
```bash
# Install Vercel CLI
npm i -g vercel

# Login and deploy
vercel login
cd client
vercel

# Set environment variables in Vercel dashboard
REACT_APP_API_URL=https://api.yourdomain.com
```

#### Backend Deployment (Railway/AWS EC2)

**Railway:**
```bash
# Connect GitHub repo
# Railway auto-deploys on git push
# Add environment variables in Railway dashboard
```

**AWS EC2:**
```bash
# SSH into EC2 instance
ssh -i key.pem ubuntu@your-ec2-ip

# Clone repo and setup
git clone https://github.com/qwopiye/genetic-test-report.git
cd genetic-test-report/server
npm install
pm2 start app.js --name "genetic-api"

# Setup nginx reverse proxy
sudo nano /etc/nginx/sites-available/default
# Configure nginx to forward traffic to localhost:5000
```

### Option 3: Kubernetes (Production Scale(optional))

```bash
# Deploy to K8s cluster
kubectl apply -f k8s/namespace.yaml
kubectl apply -f k8s/deployment.yaml
kubectl apply -f k8s/service.yaml
kubectl apply -f k8s/ingress.yaml

# Monitor
kubectl get pods -n genetic-test
kubectl logs deployment/api-server -n genetic-test
```

---

##  Testing

### Backend Tests

```bash
cd server

# Install testing dependencies
npm install --save-dev jest supertest

# Run tests
npm test

# Coverage report
npm run test:coverage
```

### Sample Test File

```javascript
// server/src/tests/auth.test.js
describe('Authentication', () => {
  test('Should register new doctor', async () => {
    const res = await request(app).post('/api/auth/register')
      .send({
        name: 'Dr. Test',
        email: 'test@example.com',
        password: 'Test123'
      });
    
    expect(res.statusCode).toBe(201);
    expect(res.body.token).toBeDefined();
  });
});
```

### Frontend Tests

```bash
cd client

# Run React component tests
npm test

# E2E tests
npm run test:e2e
```

### ML Model Tests

```bash
cd ml-service

# Unit tests
pytest tests/

# Integration tests
pytest tests/ -v --cov=app
```

---

##  Troubleshooting

### Common Issues & Solutions

**Issue**: MongoDB connection refused
```bash
# Solution: Verify MongoDB is running
# Local: mongod --dbpath /data/db
# Atlas: Check connection string and IP whitelist
```

**Issue**: CORS errors on frontend
```bash
# Solution: Add CORS headers in backend (Express)
const cors = require('cors');
app.use(cors({ origin: process.env.FRONTEND_URL }));
```

**Issue**: Flask service not responding
```bash
# Solution: Check Flask port and restart
lsof -i :5001  # Check if port is in use
kill -9 <PID>   # Kill existing process
python app.py   # Restart Flask
```

**Issue**: JWT token expired
```bash
# Solution: Refresh token or re-login
# Frontend should automatically refresh using refresh tokens
```

**Issue**: Model prediction takes too long
```bash
# Solution: Optimize feature preprocessing
# Consider model quantization or GPU acceleration
# Check logs: tail -f ml-service/logs/app.log
```

---

##  Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

### Code Style Guidelines
- Use ESLint for JavaScript
- Follow PEP 8 for Python
- Write descriptive commit messages
- Add comments for complex logic
- Include unit tests for new features

---

##  License

This project is licensed under the **MIT License** - see [LICENSE](LICENSE) file for details.

---

## 👨 Authors

**Sohanur Rahman**
- GitHub: [@qwopiye](https://github.com/qwopiye)
- Email: sohanur@example.com
- Backend Development & ML Integration

**Contributors**
- [Add team members here]

---

##  Acknowledgments

- MongoDB for database management
- Scikit-learn for ML framework
- React community for frontend tools
- Express.js community for backend framework
- Varendra University for academic guidance

---

##  Support & Contact

- **Issues**: GitHub Issues
- **Email**: sohanurrohomansohans@gmail.com
- **Documentation**: [Full Docs](docs/)
- **Discord Community**: [Join Server](https://discord.gg/example)

---

##  Roadmap

- [ ] Mobile app (React Native)
- [ ] Enhanced UI with 3D visualizations
- [ ] Multi-language support
- [ ] Advanced analytics dashboard
- [ ] Integration with lab management systems
- [ ] HIPAA certification
- [ ] API rate limiting & premium tiers

---

**Last Updated**: August 2026  
**Maintained By**: Sohanur Rahman (qwopiye)
