---
title: "Bash and Shell Scripting"
description: "Learn the Bash shell, write your first scripts, and automate repetitive tasks."
order: 6
---

# Bash and Shell Scripting

Imagine repeating the same ten commands every morning.

Now imagine typing just **one command** and letting the computer do all the work.

That's exactly what Bash is for.

Bash is the default shell on many Linux systems and one of the most important tools every DevOps Engineer must master.

---

# 🎯 Learning Objectives

By the end of this lesson you will:

- Understand what Bash is
- Execute commands in the shell
- Use variables
- Display text
- Create your first shell script
- Make scripts executable
- Run Bash scripts

---

# What is Bash?

Bash stands for:

**Bourne Again SHell**

A shell is a program that allows you to communicate with Linux.

Instead of clicking buttons, you type commands.

```
You
 ↓
Bash
 ↓
Linux Kernel
 ↓
Computer
```

Almost every DevOps automation begins with Bash.

---

# Your First Bash Command

Print text on the screen:

```bash
echo "Hello Linux!"
```

Output:

```text
Hello Linux!
```

The `echo` command simply prints whatever you give it.

---

# Variables

Variables store information.

Create one:

```bash
name="John"
```

Display it:

```bash
echo $name
```

Output:

```text
John
```

Notice the `$`.

It tells Bash to use the value stored in the variable.

---

# Environment Variables

Linux already has many built-in variables.

See your home directory:

```bash
echo $HOME
```

Example:

```text
/home/student
```

See your current user:

```bash
echo $USER
```

Example:

```text
student
```

---

# Creating Your First Script

Create a file:

```bash
touch hello.sh
```

Open it with Nano:

```bash
nano hello.sh
```

Add:

```bash
#!/bin/bash

echo "Welcome to DevOps!"
```

Save the file.

Exit Nano.

---

# Make the Script Executable

```bash
chmod +x hello.sh
```

Run it:

```bash
./hello.sh
```

Output:

```text
Welcome to DevOps!
```

Congratulations!

You have written your first Bash program.

---

# Reading User Input

Create:

```bash
nano user.sh
```

Add:

```bash
#!/bin/bash

echo "What is your name?"

read username

echo "Welcome $username!"
```

Save.

Make executable:

```bash
chmod +x user.sh
```

Run:

```bash
./user.sh
```

Example:

```text
What is your name?

John

Welcome John!
```

---

# Comments

Anything after `#` is ignored.

Example:

```bash
# This is a comment

echo "Linux"
```

Comments explain your code.

Professional engineers use them regularly.

---

# Real DevOps Example

Imagine deploying an application.

Instead of typing:

```bash
git pull

docker build -t app .

docker compose up -d
```

every day,

create:

```bash
deploy.sh
```

Then execute:

```bash
./deploy.sh
```

Automation saves time and reduces mistakes.

---

# 🧪 Hands-on Lab

Create a script named:

```text
welcome.sh
```

The script should:

- Print your name
- Print today's date
- Print your home directory

Hint:

```bash
echo

date

echo $HOME
```

---

# Expected Script

```bash
#!/bin/bash

echo "My name is John"

date

echo $HOME
```

---

# 💡 DevOps Tip

Whenever you find yourself repeating commands, ask:

> "Can I automate this with Bash?"

Very often, the answer is yes.

---

# ⚠ Common Beginner Mistakes

### Mistake 1

Forgetting the executable permission.

If you see:

```text
Permission denied
```

run:

```bash
chmod +x filename.sh
```

---

### Mistake 2

Forgetting the shebang.

Every Bash script should begin with:

```bash
#!/bin/bash
```

This tells Linux how to execute the file.

---

# Quick Quiz

## Question 1

Which command prints text?

- ls
- echo
- pwd

✅ Answer:

echo

---

## Question 2

Which command changes permissions?

- chmod
- touch
- mkdir

✅ Answer:

chmod

---

## Question 3

How do you execute a script named:

```text
backup.sh
```

✅ Answer:

```bash
./backup.sh
```

---

# 🚀 Mini Challenge

Create a script called:

```text
system-info.sh
```

It should display:

- Current user
- Current directory
- Today's date
- Home directory

Try to build it yourself before looking up the answer.

---

# Congratulations!

You have taken your first step into Linux automation.

Every modern DevOps pipeline relies on scripts to automate deployments, backups, monitoring, and system administration.

In the next lesson, you'll learn Linux Networking, where you'll discover how servers communicate, inspect network interfaces, test connectivity, and troubleshoot common networking issues.