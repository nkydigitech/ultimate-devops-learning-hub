---
title: "Linux Filesystem"
description: "Learn how Linux organizes files and directories."
order: 4
---

# Linux Filesystem

One of the biggest differences between Windows and Linux is how files are organized.

In Windows, you are familiar with drives like:

```text
C:\
D:\
E:\
```

Linux works differently.

Everything begins from a single directory called the **root directory**.

```
/
```

Think of it as the top of a giant tree.

Every folder and every file grows from this single location.

---

# 🎯 Learning Objectives

By the end of this lesson you will:

- Understand the Linux filesystem hierarchy
- Know the purpose of the most important directories
- Navigate between directories
- Inspect files and folders
- Find where configuration files are stored

---

# The Linux Directory Tree

```
/
├── bin
├── boot
├── dev
├── etc
├── home
├── lib
├── media
├── mnt
├── opt
├── proc
├── root
├── run
├── sbin
├── srv
├── sys
├── tmp
├── usr
└── var
```

Every Linux computer follows this structure.

Whether you're using Ubuntu, Debian, CentOS, Fedora, or Amazon Linux, these directories will look familiar.

---

# Important Directories

## /

The root directory.

Everything begins here.

---

## /home

Contains personal user folders.

Example:

```text
/home/john
/home/alice
/home/student
```

This is where you'll spend most of your time.

---

## /etc

Stores configuration files.

Examples:

```text
/etc/passwd
/etc/hostname
/etc/hosts
```

DevOps engineers work in this directory almost every day.

---

## /var

Stores changing data.

Examples:

- Logs
- Cache
- Mail
- Databases

One important folder is:

```text
/var/log
```

System logs are stored here.

---

## /tmp

Temporary files.

Linux may automatically clean this directory.

Never store important files here.

---

## /usr

Contains installed software and applications.

Think of it as the operating system's program library.

---

## /bin

Contains essential Linux commands.

Commands like:

```text
ls
cp
mv
cat
pwd
```

live here.

---

## /root

This is the home directory for the **root user**.

Do not confuse it with:

```
/
```

They are different.

---

# Viewing Your Current Location

```bash
pwd
```

Example:

```text
/home/student
```

---

# Listing Files

```bash
ls
```

Detailed listing:

```bash
ls -l
```

Show hidden files:

```bash
ls -la
```

---

# Moving Around

Go to your home directory:

```bash
cd
```

Go to the root directory:

```bash
cd /
```

Go to the log directory:

```bash
cd /var/log
```

Return home:

```bash
cd
```

---

# Viewing Folder Contents

Display everything inside `/etc`:

```bash
ls /etc
```

View logs:

```bash
ls /var/log
```

View your home folder:

```bash
ls ~
```

---

# Real DevOps Example

Imagine a web server has stopped working.

A DevOps engineer often starts by checking the log files:

```bash
cd /var/log

ls

cat syslog
```

Many production problems are diagnosed by reading logs.

---

# 🧪 Hands-on Lab

Complete the following tasks.

1. Display your current directory.

2. Go to the root directory.

3. List its contents.

4. Return to your home directory.

5. Display the contents of `/etc`.

6. Display the contents of `/var/log`.

---

# Expected Commands

```bash
pwd

cd /

ls

cd

ls /etc

ls /var/log
```

---

# 💡 DevOps Tip

You do not need to memorize every directory.

Instead, remember the purpose of the important ones:

| Directory | Purpose |
|-----------|---------|
| /home | User files |
| /etc | Configuration |
| /var | Logs and changing data |
| /tmp | Temporary files |
| /usr | Installed software |
| /bin | Essential commands |

---

# ⚠ Common Beginner Mistakes

### Mistake 1

Thinking `/root` is the same as `/`.

It is not.

`/` is the top of the filesystem.

`/root` is the home directory of the root user.

---

### Mistake 2

Deleting files inside system directories.

Never remove files from directories like:

```text
/etc
/bin
/usr
```

unless you understand exactly what they do.

---

# Quick Quiz

## Question 1

Which directory stores configuration files?

- /home
- /etc
- /tmp

✅ Answer:

/etc

---

## Question 2

Which directory usually stores system logs?

- /bin
- /var/log
- /home

✅ Answer:

/var/log

---

## Question 3

Which directory contains user home folders?

- /usr
- /home
- /boot

✅ Answer:

/home

---

# Congratulations!

You now understand the basic structure of the Linux filesystem.

This knowledge is essential for troubleshooting servers, configuring applications, and working with cloud infrastructure.

In the next lesson, you'll learn how Linux permissions protect files and why they are one of the most important security features in the operating system.