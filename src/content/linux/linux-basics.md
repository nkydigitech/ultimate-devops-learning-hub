---
title: "Linux Basics"
description: "Your first steps inside the Linux operating system."
order: 3
---

# Linux Basics

Welcome to your first real Linux lesson.

From this point forward you'll begin working inside a Linux terminal just like professional DevOps Engineers, Cloud Engineers and Site Reliability Engineers.

Don't worry if everything feels new.

Every expert once typed their very first Linux command.

---

## 🎯 Learning Objectives

By the end of this lesson you will be able to:

- Understand what the Linux Terminal is
- Navigate directories
- Display your current location
- Create folders
- Create files
- Remove files safely
- Understand relative and absolute paths

---

# What is the Terminal?

Unlike Windows where many tasks are completed by clicking icons, Linux administrators spend much of their day inside the terminal.

The terminal allows you to communicate directly with the operating system.

Instead of clicking buttons, you type commands.

Example:

```text
Open Folder
↓

Terminal Command

cd Documents
```

Learning the terminal is the single most important Linux skill.

---

# Your First Commands

## Display Current Directory

```bash
pwd
```

Output:

```text
/home/student
```

**pwd** stands for:

**Print Working Directory**

It tells you exactly where you are.

---

## List Files

```bash
ls
```

Example output:

```text
Documents
Downloads
Desktop
Pictures
```

To see more information:

```bash
ls -l
```

To include hidden files:

```bash
ls -la
```

---

## Change Directory

Move into a folder.

```bash
cd Documents
```

Go back one folder:

```bash
cd ..
```

Return to your home directory:

```bash
cd
```

---

## Create a Folder

```bash
mkdir linux-practice
```

Verify it exists.

```bash
ls
```

You should see:

```text
linux-practice
```

---

## Enter the Folder

```bash
cd linux-practice
```

Check where you are:

```bash
pwd
```

Example:

```text
/home/student/linux-practice
```

---

## Create a File

```bash
touch notes.txt
```

Verify:

```bash
ls
```

Output:

```text
notes.txt
```

---

## Remove a File

```bash
rm notes.txt
```

Verify:

```bash
ls
```

Nothing should appear.

---

## Remove a Folder

First leave it.

```bash
cd ..
```

Now remove it.

```bash
rmdir linux-practice
```

---

# Relative vs Absolute Paths

## Relative Path

Starts from your current location.

Example:

```bash
cd Documents
```

## Absolute Path

Starts from the root directory.

Example:

```bash
cd /home/student/Documents
```

Professional Linux engineers use both every day.

---

# Real DevOps Example

Imagine you log into an AWS EC2 server.

The first thing most engineers type is:

```bash
pwd
```

Then:

```bash
ls -la
```

Finally:

```bash
cd /var/log
```

These three commands alone are used thousands of times throughout a DevOps career.

---

# 🧪 Hands-on Lab

Complete the following tasks.

Create a folder named:

```text
practice
```

Inside it create:

```text
day1.txt
```

Navigate into the folder.

Display your location.

List all files.

Delete the file.

Delete the folder.

---

# ✅ Expected Commands

```bash
mkdir practice

cd practice

touch day1.txt

pwd

ls

rm day1.txt

cd ..

rmdir practice
```

---

# 💡 DevOps Tip

Don't try to memorize commands.

Use them repeatedly.

Within a week your fingers will remember them automatically.

---

# ⚠ Common Beginner Mistakes

Using spaces incorrectly.

Example:

Incorrect

```bash
cdDocuments
```

Correct

```bash
cd Documents
```

Linux commands are case-sensitive.

These are different:

```text
Documents

documents

DOCUMENTS
```

---

# Quick Quiz

## Question 1

Which command shows your current location?

- ls
- pwd
- cd

✅ Answer:

pwd

---

## Question 2

Which command creates a directory?

- mkdir
- touch
- pwd

✅ Answer:

mkdir

---

## Question 3

Which command lists files?

- ls
- rm
- pwd

✅ Answer:

ls

---

# Congratulations!

You have officially started using Linux from the command line.

These commands are the foundation of everything you'll do in DevOps.

In the next lesson you'll explore the Linux filesystem and understand how Linux organizes everything into directories.