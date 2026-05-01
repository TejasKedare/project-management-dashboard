# 🚀 Project Management Dashboard (Mini Jira) — Checklist

---

## ✅ PHASE 0 — Project Setup (Foundation)

* [✓] Initialize project with Vite + React + TypeScript
* [✓] Clean default boilerplate (App.css, logos, etc.)
* [✓] Create folder structure (app, features, shared, etc.)
* [✓] Setup path alias (@) in tsconfig + vite config
* [✓] Enable strict TypeScript settings
* [✓] Create basic Git repo + initial commit

---

## ✅ PHASE 1 — App Architecture (CORE)

* [✓] Create App folder (src/app)
* [✓] Move App.tsx into app/
* [✓] Setup Routing (react-router)
* [✓] Create Layout (Sidebar + Header)
* [✓] Setup Redux Toolkit store
* [ ] Setup TanStack Query client
* [ ] Create AppProviders (Redux + Query + Router)
* [ ] Wrap app with providers in main.tsx
---

## ✅ PHASE 2 — UI Foundation

* [ ] Create shared UI components (Button, Input, Modal)
* [ ] Setup global styling (Tailwind / CSS setup)
* [ ] Implement dark/light theme toggle
* [ ] Create reusable layout components
* [ ] Add loading spinners

---

## ✅ PHASE 3 — Authentication

* [ ] Create auth feature folder
* [ ] Create login/signup UI
* [ ] Setup React Hook Form
* [ ] Add Zod validation schemas
* [ ] Integrate API (mock or real)
* [ ] Store auth state (Redux or Context)
* [ ] Implement protected routes

---

## ✅ PHASE 4 — Projects Feature

* [ ] Create projects feature folder
* [ ] Project list UI
* [ ] Create project form (RHF + Zod)
* [ ] API integration (TanStack Query)
* [ ] Add loading/error states
* [ ] Add search/filter functionality

---

## ✅ PHASE 5 — Tasks (KANBAN CORE)

* [ ] Create tasks feature folder
* [ ] Task card component
* [ ] Task list grouped by status
* [ ] Implement drag & drop (dnd-kit)
* [ ] Create task (form + validation)
* [ ] Edit/Delete task
* [ ] Add labels, priority, assignee

---

## ✅ PHASE 6 — State Management

* [ ] Setup Redux slices per feature
* [ ] Normalize state structure
* [ ] Use selectors for derived state
* [ ] Integrate Redux with UI
* [ ] Use TanStack Query for server state
* [ ] Separate client state vs server state

---

## ✅ PHASE 7 — API Layer

* [ ] Setup Axios instance (baseURL, interceptors)
* [ ] Create API layer per feature
* [ ] Handle auth tokens in interceptors
* [ ] Global error handling

---

## ✅ PHASE 8 — Performance Optimization

* [ ] Use React.memo where needed
* [ ] Use useMemo / useCallback properly
* [ ] Avoid unnecessary re-renders
* [ ] Lazy load routes (React.lazy)
* [ ] Code splitting

---

## ✅ PHASE 9 — UX Enhancements

* [ ] Add toast notifications (success/error)
* [ ] Implement optimistic UI updates
* [ ] Add skeleton loaders
* [ ] Add empty states
* [ ] Make UI responsive

---

## ✅ PHASE 10 — Testing (Optional)

* [ ] Setup Jest + React Testing Library
* [ ] Test components
* [ ] Test hooks
* [ ] Test API logic

---

## ✅ PHASE 11 — Production Readiness

* [ ] Setup environment variables (.env)
* [ ] Optimize build
* [ ] Remove console.logs
* [ ] Add error boundaries
* [ ] Basic SEO (if needed)

---

## ✅ PHASE 12 — Deployment

* [ ] Deploy on Vercel / Netlify
* [ ] Verify production build
* [ ] Setup custom domain (optional)

---

# 🧠 Notes

* Complete phases in order (don’t skip architecture)
* Commit after each major task
* Focus on clean code and structure 
* Treat this like a production project, not a demo

---
