# Reginald Williams | CS 499 Computer Science ePortfolio

## Professional Abstract

This repository hosts the GitHub Pages ePortfolio for Reginald Williams’s CS 499 Computer Science capstone. The portfolio presents a cumulative enhancement of **StockPro**, an Android inventory management application originally developed for CS 360: Mobile Architecture and Programming. StockPro was selected because it demonstrates practical mobile application behavior across authentication, inventory management, local SQLite persistence, RecyclerView presentation, input validation, notification behavior, and user-centered decision support.

The ePortfolio documents the progression of StockPro from an initial mobile inventory application into a more complete capstone artifact across the three required computer science categories: **software design and engineering**, **algorithms and data structures**, and **databases**. The software design enhancement refactors the application into a cleaner architecture with separated models, repositories, validation logic, and notification responsibilities. The algorithms and data structures enhancement adds search, filtering, sorting, and low-stock priority scoring to improve inventory decision-making. The database enhancement expands the SQLite schema, improves query design, adds migration planning, and strengthens credential handling through password hashing.

Together, these enhancements demonstrate growth in modular software design, algorithmic problem solving, data management, technical communication, and security-aware development. The portfolio also includes the original artifact, enhanced artifacts, milestone narratives, code review materials, professional self-assessment, and supporting deliverables required for the CS 499 final project.

## Live Portfolio

- GitHub Pages site: https://jayycode.github.io/Deployment-portfolio/
- Code review video: https://youtu.be/X7DWghwCRyA

## Capstone Artifact

**StockPro** is a mobile inventory management application built with Android Studio, Java, XML layouts, and SQLite. The application supports account creation, login, inventory creation, item updates, deletion, RecyclerView display, and low-stock notification behavior.

## Enhancement Categories

### Software Design and Engineering

The software design enhancement improves the structure and maintainability of StockPro by separating concerns across focused classes. The enhanced version uses a standalone item model, reusable input validation, repository classes for authentication and inventory access, and a notification helper for low-inventory alerts.

### Algorithms and Data Structures

The algorithms enhancement adds a more purposeful inventory-processing pipeline. Instead of only displaying records in database order, the enhanced app supports searching, filtering, sorting, and low-stock priority scoring so users can identify important inventory records more quickly.

### Databases

The database enhancement improves StockPro’s SQLite layer by expanding the item schema, adding focused query methods, replacing destructive upgrade behavior with migration-aware logic, and improving credential handling through password hashing.

## Repository Contents

- `src/` — React/Vite source for the GitHub Pages portfolio
- `public/assets/` — downloadable CS 499 artifacts, narratives, diffs, and supporting files
- `.github/workflows/` — GitHub Actions deployment workflow
- `README.md` — professional abstract and repository overview

## Program Outcomes Represented

This ePortfolio is organized around the five CS 499 Computer Science program outcomes: collaborative decision-making, professional communication, algorithmic design, well-founded computing practices, and security-minded software development.
