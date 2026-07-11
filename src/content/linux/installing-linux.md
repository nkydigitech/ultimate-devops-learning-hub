---
title: "Installing Linux"
description: "Install Linux using WSL, VirtualBox, or VMware and prepare your environment for hands-on DevOps labs."
order: 3
---

# Installing Linux

Congratulations!

You have completed the introductory lessons and are now ready to install Linux.

From this point forward, almost every lesson in this course will include practical exercises.

You'll be working in a real Linux environment just like professional DevOps Engineers.

---

# Learning Objectives

By the end of this lesson you will:

- Understand different ways to install Linux
- Choose the best installation method
- Install Ubuntu Linux
- Open your first Linux terminal
- Verify that Linux is working correctly
- Prepare for all future labs

---

# Which Installation Method Should You Choose?

There are three popular ways to run Linux.

## Option 1 — Windows Subsystem for Linux (WSL)

Best for:

- Windows 11 users
- Windows 10 users
- Beginners
- Developers
- DevOps Engineers

### Advantages

- Fast
- Easy to install
- Uses very little memory
- No virtual machine required
- Works directly inside Windows

Recommended:

⭐⭐⭐⭐⭐

---

## Option 2 — VirtualBox

Best for:

- Learning Linux
- Practicing system administration
- Creating multiple virtual machines

Advantages:

- Completely free
- Safe environment
- Easy snapshots
- Full Linux desktop

Recommended:

⭐⭐⭐⭐⭐

---

## Option 3 — VMware Workstation

Best for:

- Advanced users
- Enterprise environments
- Higher performance virtual machines

Recommended:

⭐⭐⭐⭐

---

# Which Linux Distribution Should You Install?

Throughout this course we will use:

# Ubuntu 24.04 LTS

Why Ubuntu?

- Beginner friendly
- Excellent documentation
- Large community
- Used in cloud environments
- Perfect for DevOps learning

---

# Hardware Requirements

Minimum

- 8 GB RAM
- Dual Core CPU
- 40 GB Free Storage

Recommended

- 16 GB RAM
- Quad Core CPU
- SSD Storage
- Stable Internet Connection

---

# Installing Ubuntu with WSL (Recommended)

## Step 1

Open PowerShell as Administrator.

Search for:

PowerShell

Right-click

Run as Administrator

---

## Step 2

Run:

```powershell
wsl --install
```

Windows will automatically:

- Enable WSL
- Download Ubuntu
- Configure Linux
- Restart your PC if necessary

---

## Step 3

Restart your computer.

---

## Step 4

Open Ubuntu.

Windows will ask you to create:

Username

Password

Choose something you will remember.

Example:

Username:

```
student
```

Password:

```
********
```

---

## Step 5

Linux is now installed.

---

# Installing Ubuntu Using VirtualBox

## Step 1

Download VirtualBox

https://www.virtualbox.org

---

## Step 2

Download Ubuntu ISO

https://ubuntu.com/download/desktop

Choose:

Ubuntu 24.04 LTS

---

## Step 3

Create a New Virtual Machine

Suggested settings:

Name:

Ubuntu DevOps Lab

Memory:

4096 MB or more

Processors:

2 or more

Disk:

30 GB dynamically allocated

---

## Step 4

Attach the Ubuntu ISO.

Start the virtual machine.

---

## Step 5

Follow the Ubuntu installer.

Select:

- Install Ubuntu
- Normal Installation
- Erase Virtual Disk (only inside VirtualBox)
- Continue

Wait for installation to complete.

---

# First Login

After installation you should see the Ubuntu desktop.

Open:

Terminal

You are now ready to use Linux.

---

# Verify Your Installation

Run:

```bash
whoami
```

Example:

```text
student
```

---

Run:

```bash
pwd
```

Example:

```text
/home/student
```

---

Run:

```bash
uname -a
```

Example:

```text
Linux ubuntu 6.x.x ...
```

---

Run:

```bash
ls
```

If Linux responds, your installation is working correctly.

---

# LAB 1 — Verify Your Linux Installation

Now it's time for your first real lab.

Run these commands:

```bash
whoami
```

```bash
pwd
```

```bash
date
```

```bash
uname -a
```

```bash
ls
```

---

# Screenshot Challenge 📸

Take screenshots of:

- Ubuntu Desktop (or WSL terminal)
- Terminal window
- Output of:

```bash
whoami
```

```bash
pwd
```

```bash
uname -a
```

Save these screenshots.

Later, we'll use them in the course and on the website to show real examples instead of stock images.

---

# Troubleshooting

## "wsl is not recognized"

Ensure you are using:

PowerShell as Administrator.

Update Windows if necessary.

---

## Ubuntu does not open

Restart Windows.

Run:

```powershell
wsl --update
```

---

## Command not found

Check your spelling.

Linux commands are case-sensitive.

---

# Knowledge Check

## Question 1

Which installation method is recommended for most Windows users?

- VMware
- WSL
- Dual Boot
- Raspberry Pi

Answer:

**WSL**

---

## Question 2

Which Linux distribution are we using?

- Debian
- Fedora
- Ubuntu 24.04 LTS
- Arch Linux

Answer:

**Ubuntu 24.04 LTS**

---

# Summary

In this lesson you learned:

- Different Linux installation methods
- Why Ubuntu is recommended
- How to install Linux
- How to verify your installation
- Your first practical Linux lab

Excellent work!

Your Linux environment is now ready for the rest of this course.

---

# Next Lesson

➡ Linux Filesystem