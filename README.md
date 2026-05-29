# Abaarso School Management System (School-MS)

A premium, highly interactive, and visually stunning School Management System built specifically for **Abaarso School** using a high-fidelity **Futuristic Glassmorphism** design theme. The entire codebase is split into modular files for clean maintenance.

---

## 🎨 Futuristic Glassmorphism Visual Theme
* **Animated Space Gradients**: The background transitions smoothly through a shifting deep space color spectrum.
* **Frosted Glass Cards**: Backdrop-blur filters (`blur(20px)`) combined with subtle inner gold borders and cyan dropshadow glows create a clean translucent panels overlay.
* **Canvas Particles**: A lightweight drifting stars canvas renders smooth micro-particles floating across the screen interface.
* **Bilingual Localization**: Instant interface translation between English and Somali for all pages, placeholders, and notices.

---

## 🔒 Session Auth Login Gate
* **Security Guard Overlay**: Restricts system entry until authentication is verified.
* **Demo Credentials**:
  * **Email**: `admin@abaarso.edu`
  * **Password**: `admin123`
* **Session Persistence**: Saves authorization state using `sessionStorage` and triggers fluid exit transitions on logout.

---

## 📊 Chart.js Dashboard Analytics
* **Performance Line Chart**: Graphs historical monthly GPA trends with glowing cyan gradients and transparent grids.
* **Exam Passing Donut Chart**: Automatically counts dynamic Passed/Failed/Pending ratios based on the live results ledger.
* **Destruction Lifecycles**: Cleans up previous charts dynamically to prevent canvas hovering memory errors.

---

## 📂 File Architecture
```
├── index.html   # High-fidelity dashboard wrappers, routing screens, and modals
├── styles.css   # Cosmic custom scrollbars, keyframe shifts, and glass attributes
└── app.js       # Authorization, canvas stars, Chart.js metrics, and CRUD engines
```

---

## 🚀 Key Modules
1. **Dashboard**: Interactive counter badges, quick actions, mini calendar, and recent notice feeds.
2. **Students Registry**: Paginated search ledger with complete enrollment CRUD controllers.
3. **Teachers Directory**: Custom cards showcasing qualifications, experience badges, and subjects.
4. **Classes Overview**: Rooms configuration and expanded student enrollment roster tables.
5. **Timetable Grid**: Interactive weekly calendar grid supporting modular period assignments.
6. **Exams Schedules**: Subject date-time scheduling logs and entries.
7. **Results Ledger**: Grade calculating scoring records and CSV data export systems.
8. **Fees Ledger**: Real-time accounts balances (Collected, Pending, Overdue metrics) and transaction logging.
9. **Announcements Feed**: Dynamic notice board timeline with thumbtack pinning and categories.
10. **System Settings**: Application profile customizers, accents picker, and sync switcher modes.
