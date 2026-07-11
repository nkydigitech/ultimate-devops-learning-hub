---
title: "Linux Permissions"
description: "Learn how Linux controls access to files and directories."
order: 5
---

# Linux Permissions

One of the biggest reasons Linux is trusted to run servers around the world is its powerful permission system.

Permissions determine:

- Who can read a file
- Who can modify it
- Who can execute it

Without permissions, every user could change or delete important system files.

---

# 🎯 Learning Objectives

By the end of this lesson you will:

- Understand users and groups
- Read Linux permissions
- Change permissions
- Change ownership
- Understand why permissions matter in DevOps

---

# Viewing Permissions

Run:

```bash
ls -l
```

Example:

```text
-rw-r--r-- 1 student student 1250 Jul 11 notes.txt
```

At first this looks confusing.

Let's break it down.

```
-rw-r--r--
```

This tells Linux who can access the file.

---

# Permission Layout

```
-rw-r--r--

Owner   Group   Others
 rw-     r--      r--
```

Each section has three permissions.

```
r = Read

w = Write

x = Execute
```

---

# Meaning of Each Permission

## Read (r)

Allows you to open and view a file.

---

## Write (w)

Allows you to edit or delete a file.

---

## Execute (x)

Allows Linux to run a file as a program or script.

---

# Changing Permissions

Use:

```bash
chmod
```

Example:

```bash
chmod +x deploy.sh
```

Now the script becomes executable.

Run:

```bash
ls -l
```

You'll notice:

```text
-rwxr-xr-x
```

The **x** has appeared.

---

# Removing Execute Permission

```bash
chmod -x deploy.sh
```

---

# Numeric Permissions

Linux also supports numbers.

```
Read = 4

Write = 2

Execute = 1
```

Examples:

```
7 = rwx

6 = rw-

5 = r-x

4 = r--
```

One of the most common commands is:

```bash
chmod 755 deploy.sh
```

Meaning:

Owner:

```
rwx
```

Group:

```
r-x
```

Others:

```
r-x
```

---

# Changing Ownership

View ownership:

```bash
ls -l
```

Example:

```text
student student notes.txt
```

First name:

Owner

Second name:

Group

To change ownership:

```bash
sudo chown ubuntu deploy.sh
```

---

# Real DevOps Example

Imagine a deployment script.

```
deploy.sh
```

If it isn't executable:

```bash
./deploy.sh
```

Produces:

```text
Permission denied
```

Solution:

```bash
chmod +x deploy.sh
```

Now it works.

This is something DevOps engineers do regularly.

---

# 🧪 Hands-on Lab

Create a file.

```bash
touch test.sh
```

Check permissions.

```bash
ls -l
```

Make it executable.

```bash
chmod +x test.sh
```

Check permissions again.

```bash
ls -l
```

Notice how the permission string changes.

---

# Expected Commands

```bash
touch test.sh

ls -l

chmod +x test.sh

ls -l
```

---

# 💡 DevOps Tip

Always follow the principle of least privilege.

Give users only the permissions they actually need.

This improves security and reduces mistakes.

---

# ⚠ Common Beginner Mistakes

### Mistake 1

Using:

```bash
chmod 777
```

on everything.

This gives everyone full control.

Avoid doing this unless you fully understand the security implications.

---

### Mistake 2

Forgetting to make scripts executable.

If you see:

```text
Permission denied
```

Check whether the file has execute permission.

---

# Quick Quiz

## Question 1

Which command changes permissions?

- chown
- chmod
- pwd

✅ Answer:

chmod

---

## Question 2

Which permission allows a file to run?

- r

- w

- x

✅ Answer:

x

---

## Question 3

What does:

```text
755
```

mean?

Owner:

```
rwx
```

Group:

```
r-x
```

Others:

```
r-x
```

---

# Congratulations!

You now understand one of Linux's most important security features.

Every DevOps engineer works with file permissions almost daily.

Next, you'll learn Bash and start writing your first shell scripts.